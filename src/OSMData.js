const opQuery = `[out:json][timeout:25];area["name"="Bad Bevensen"]->.searchArea;wr["ref"="7072"]["route"="bus"](area.searchArea)`;
const QUERIES = {
    bb7072: `[out:json][timeout:25];wr["ref"="7072"]["route"="bus"](53.064842,10.544642,53.098869,10.610089)`
};
const BBHALTESTELLEN2 = './haltestellen3a.json';

/**
 * 
 * [out:json][timeout:25];
 * wr["ref"="7072"]["route"="bus"](53.064842,10.544642,53.098869,10.610089);
 * (._;>;);
 * out;
 */

class OSMData {
    constructor (osmdata) {
        this.osmdata = osmdata || overpassData;
        this.stopsObj = {};
        // this.loadDataOP(QUERIES.bb7072);
        this.processData(overpassData);
    }

    processData(data) {
        console.log('bus stops:', this.getBusStops());
        console.log('bus stop names:', this.getBusStopNames());
        this.stops = this.getStops();
        this.platforms = this.getPlatforms();

        this.stopsArr = this.toObject(this.stops);
        console.log('stops:', this.stops, this.stopsArr);
        console.log('platforms:', this.getPlatforms());
        readJson(`${BBHALTESTELLEN2}?${Date.now()}`, (inHaltestellen) => {
            this.haltestellen = JSON.parse(inHaltestellen);
            console.log('haltestellen', this.haltestellen);
            console.log('platforms', this.platforms.length);

            this.platforms.map(s => {
                // console.log(s.tags.name);
                const h = this.haltestellen.find(h => s.tags.name == h.name);
                if(!h) {
                    console.log('not found', s.tags.name);
                } else {
                    h.osmid = s.id;
                    h.lat = s.lat;
                    h.lng = s.lon;

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

    get toGeoJSON() {
        return osmtogeojson(this.osmdata);
    }

    toObject(arr) {

        return arr.map(o => {
            this.stopsObj[ o.tags?.name ] = o;
            return { [ o.tags?.name ]: o };
        });
    }


    requestDataFromOverpass = async (overpassQuery) => {
        const url = `https://overpass-api.de/api/interpreter?data=${overpassQuery};(._;>;);out;`;
        const response = await fetch(url);
        const data = await response.json();
        console.log('data', data);
        return data;
    };

    requestDataFromOSMForTrack = async (trackId = 16165831) => {
        return fetch(`https://api.openstreetmap.org/api/0.6/relation/${trackId}/full.json`)
            .then(r => r.json())
            .catch(console.error)
            .then(jsn => {
                return jsn;
            });
    };


    async loadData(trackId = 16165831, type = 'track') {
        console.time('load data');
        this.osmdata = await this.requestDataFromOSMForTrack(trackId);  // 160ms ++
        console.timeLog('load data');
        this.geoJson = this.toGeoJSON;
        console.log(this.geoJson);
        console.timeEnd('load data');
    }

    async loadDataOP(overpassQuery = QUERIES.bb7072) {
        console.time('load data');
        this.osmdata = await this.requestDataFromOverpass(overpassQuery); // 860ms ++
        console.timeLog('load data', this.osmdata);
        this.geoJson = this.toGeoJSON;
        console.timeEnd('load data');
        return this.osmdata;
    }

    getBusStops() {
        const bus_stops = this.osmdata.elements.filter(o => o.tags?.highway == 'bus_stop');
        return bus_stops.map(o => ({ [ o.tags?.name ]: o }));
    }

    getBusStopNames() {
        const bus_stops = this.osmdata.elements.filter(o => o.tags?.highway == 'bus_stop');
        return bus_stops.map(o => o.tags?.name);
    }

    getStops(trackId = 16165831, type = 'stop') {
        const e = this.osmdata.elements;
        return e.find(o => o.type == 'relation' && o.id === trackId)
            .members.filter(o => o.role == type)
            .map(i =>
                e.find(f => f.id === i.ref));
    }

    getPlatforms(trackId = 16165831) {
        return this.getStops(trackId, 'platform');
    }

    getStopsData() {
        return this.getStops().map(s => ({ name: s.tags.name, lat: s.lat, lon: s.lon, id: s.id }));
    }

    getPlatformsData() {
        return this.getPlatforms().map(s => ({ name: s.tags.name, lat: s.lat, lon: s.lon, id: s.id }));
    }
}

(function(window) {

    const getProp = (jsn, str, defaultValue = {}, sep = '.') => {
        const arr = str.split(sep);
        return arr.reduce((obj, key) => (obj && obj.hasOwnProperty(key) ? obj[ key ] : defaultValue), jsn);
    };
    
    function collectionToCSV(keys = []) {
        return (collection = []) => {
            const headers = keys.map(key => `"${key}"`).join(',');
            // const extractKeyValues = record => keys.map(key => `"${record[ key ]}"`).join(',');
            const extractKeyValues = record => keys.map(key => `"${getProp(record,key,'')}"`).join(',');

            return collection.reduce((csv, record) => {
                return (`${csv}\n${extractKeyValues(record)}`).trim();
            }, headers);
        };
    }

    function emitData(data) {
        console.log("----- DATA -----");
        console.log(data);
        return data;
    }

    function json2csv(jsn) {
        const exportFields = [ 'id', 'lat', 'lon', 'tags.name'];
        const csvdings = collectionToCSV(exportFields)(jsn);
        //   fetch('https://picsum.photos/v2/list')
        //   .then(response => response.json())
        //   .then(emitData)
        //   .then(collectionToCSV(exportFields))
        //   .then(console.log, console.error);
        console.log('csvdings', csvdings);
    }

    console.log("LOADED json2csv...");
    window.json2csv = json2csv;
})(window);
