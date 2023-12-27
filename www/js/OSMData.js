const opQuery = `[out:json][timeout:25];area["name"="Bad Bevensen"]->.searchArea;wr["ref"="7072"]["route"="bus"](area.searchArea)`;
const QUERIES = {
    bb7072: `[out:json][timeout:25];wr["ref"="7072"]["route"="bus"](53.064842,10.544642,53.098869,10.610089)`,
    bb7073: `[out:json][timeout:25];wr["ref"="7073"]["route"="bus"](53.048,10.67,53.08,10.50)`,
};

const TRACKS = {
    7072: {
        id: 16165831,
        overpassQuery: `[out:json][timeout:25];wr["ref"="7072"]["route"="bus"](53.064842,10.544642,53.098869,10.610089);(._;>;);out;`,
    },
    7073: {
        id: 16864019,
        overpassQuery: `[out:json][timeout:25];wr["ref"="7073"]["route"="bus"](53.048,10.67,53.08,10.50);(._;>;);out;`,
    }
};

// [bbox:south,west,north,east]

// data=[out:json][timeout:25];wr[%22ref%22=%227073%22][%22route%22=%22bus%22](53.088842,10.508642,53.040000,10.670000);(._;%3E;);out;
// https://www.latlong.net/c/?lat=53.064842&long=10.544642


const BBHALTESTELLEN2 = './haltestellen3b.json';
// 16864019 Buslinie 7073   Marktroute 16864019
// 16165831 Buslinie 7072
/**
 * 
 * [out:json][timeout:25];
 * wr["ref"="7072"]["route"="bus"](53.064842,10.544642,53.098869,10.610089);
 * (._;>;);
 * out;
 */

function haversineDistance(lat1, lon1, lat2, lon2) {
    var R = 6371000; // Radius of the earth in meters
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in meters
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

class OSMData {

    useOverpass = true;
    #stops = [];
    #platforms = [];
    #position = null;
    constructor (osmdata) {
        this.osmdata = osmdata;
        this.stopsObj = {};
        this.track = TRACKS[ 7073 ];
        this.trackId = this.track.id;
        if(this.useOverpass) {
            this.overpassQuery = this.track.overpassQuery;
        }
        // this.loadData().then(data => {
        //     this.processData(data);
        // });
    }

    setLocation(position) { //{lat, lon}
        this.#position = position;
        console.log('position:', position);
        this.getDistanceBetweenStops();
        this.getDistanceToMe();
        return this;
    }

    processData(data) {
        console.log('bus stops:', this.getBusStops());
        console.log('bus stop names:', this.getBusStopNames());

        // main query:
        this.#stops = this.getRelationOfType('stop');
        this.#platforms = this.getRelationOfType('platform');

        // this.platforms = this.getPlatforms();
        this.stopsArr = this.toObject(this.#stops);
        this.platformsArr = this.toObject(this.#platforms);


        console.log('stops:', this.stops, this.stopsArr);
        console.log('platforms:', this.platforms, this.platformsArr);

        return;

        // console.log('platforms:', this.getPlatforms());
        readJson(`${BBHALTESTELLEN2}?${Date.now()}`, (inHaltestellen) => {

            this.haltestellen = JSON.parse(inHaltestellen);

            console.log('haltestellen', this.haltestellen);
            console.log('platforms', this.platforms.length);

            this.platforms.map((s, i) => {
                // console.log(s.tags.name);
                const h = this.haltestellen.find(h => s.tags.name == h.name);
                // const g = this.haltestellen.find(h => h.osmid == s.id);

                // if(!g) {

                //     console.log('OSM id not found', i, s.tags.name, s.tags.direction);
                // }

                if(!h) {

                    console.log('not found', i, s.tags.name, s.tags.direction);

                } else {

                    h.osmid = s.id;
                    h.lat = s.lat;
                    h.lng = s.lon;

                    if(h.routes) {

                        console.log('routes found', i, s.tags.name, s.tags.direction, h.routes);

                    }

                    if(h.direction) {
                        const routing = h.direction[ s.tags.direction ] || {};
                        routing.osmid = s.id;
                        routing.lat = s.lat;
                        routing.lng = s.lon;
                        routing.previd = this.platforms[ i - 1 ].id;
                        routing.prevname = this.platforms[ i - 1 ].tags.name;
                        routing.direction = s.tags.direction;
                        s.routing = routing;
                    }
                }

                return h;

            });

            // this.haltestellen.map(h => {
            //     const f = this.stops.find(s => s.tags.name.startsWith(h.name));
            //     if(!f) {
            //         console.log('not found', h.name);
            //     }
            //     return f;
            // });

        });
    }

    get elements() {
        return this.osmdata.elements;
    }

    get stops() {
        return this.getRelationOfType('stop');
    }

    get bus_stops() {
        return this.elements.filter(o => o.tags?.highway == 'bus_stop');
    }

    get platforms() {
        return this.elements.filter(o => o.tags?.public_transport == 'platform');
    }

    getGeoJSON() {
        return this.toGeoJSON;
    }

    get toGeoJSON() {
        return osmtogeojson(this.osmdata);
    }

    toObject(arr) {
        return arr.map(o => {
            this.stopsObj[ o.tags?.name ] = o;
            return { [ o.tags?.name ]: o };
        });
    }

    async requestData(url) {
        return fetch(url)
            .then(r => r.json())
            .catch(console.error)
            .then(jsn => {
                return jsn;
            });
    };


    async loadData(inUseOverpass) {
        const useOverpass = inUseOverpass || this.useOverpass;
        let url;
        if(useOverpass) {
            url = `https://overpass-api.de/api/interpreter?data=${this.overpassQuery}`;
        } else {
            url = `https://api.openstreetmap.org/api/0.6/relation/${this.trackId}/full.json`;
        }
        this.osmdata = await this.requestData(url);
        this.geoJson = this.toGeoJSON;
        return this.osmdata;
    }

    getBusStops() {
        const bus_stops = this.elements.filter(o => o.tags?.highway == 'bus_stop');
        return bus_stops.map(o => ({ [ o.tags?.name ]: o }));
    }

    getBusStopNames() {
        const bus_stops = this.elements.filter(o => o.tags?.highway == 'bus_stop');
        return bus_stops.map(o => o.tags?.name);
    }

    getRelationOfType(type = 'stop') {
        return this.getRelationWithIdAndType(this.trackId, type);
    }

    getRelationWithIdAndType(trackId, type = 'stop') {
        const e = this.elements;
        return e.find(o => o.type == 'relation' && o.id === trackId)
            .members.filter(o => o.role == type)
            .map(i => e.find(f => f.id === i.ref));
    }

    getStops() {
        return this.getRelationOfType('stop');
    }

    getPlatforms() {
        return this.getRelationOfType('platform');
    }

    getStopsData() {
        return this.getStops().map(s => ({ name: s.tags.name, lat: s.lat, lon: s.lon, id: s.id }));
    }

    getPlatformsData() {
        return this.getPlatforms().map(s => ({ name: s.tags.name, lat: s.lat, lon: s.lon, id: s.id }));
    }

    getDistanceBetweenStops() {
        const stops = this.getStops();
        const distances = [];
        for(let i = 0; i < stops.length - 1; i++) {
            const s1 = stops[ i ];
            const s2 = stops[ i + 1 ];
            const distance = haversineDistance(s1.lat, s1.lon, s2.lat, s2.lon);
            stops[ i ].distance = distance;
            distances.push(distance);
        }
        return distances;
    }

    getDistanceToMe() {
        const stops = this.getStops();
        const distances = [];
        for(let i = 0; i < stops.length; i++) {
            const s1 = stops[ i ];
            const distance = haversineDistance(this.#position.lat, this.#position.lon, s1.lat, s1.lon);
            stops[ i ].distanceToCurrent = distance.toFixed(1);
            distances.push(distance);
        }
        return distances;
    
    }
}

/*
   async loadData(useOverpass = false) {
        console.time('load data for track:', this.trackId);
        if(useOverpass) {
            this.osmdata = await this.requestDataFromOverpass(this.overpassQuery); // 860ms ++
        } else {
            this.osmdata = await this.requestDataFromOSMForTrack(this.trackId);  // 160ms ++
        }
        console.timeLog('load data');
        this.geoJson = this.toGeoJSON;
        console.log(this.geoJson);
        console.timeEnd('load data');
        return this.osmdata;
    }

    
    // requestDataFromOverpass = async () => {
    //     // const url = `https://overpass-api.de/api/interpreter?data=${this.overpassQuery};(._;>;);out;`;
    //     const url = `https://overpass-api.de/api/interpreter?data=${this.overpassQuery}`;
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log('data', data);
    //     return data;
    // };

    // requestDataFromOSMForTrack = async () => {
    //     return fetch(`https://api.openstreetmap.org/api/0.6/relation/${this.trackId}/full.json`)
    //         .then(r => r.json())
    //         .catch(console.error)
    //         .then(jsn => {
    //             return jsn;
    //         });
    // };
    */