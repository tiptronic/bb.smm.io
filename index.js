
// https://blog.astrid-guenther.de/routing-und-geocoding-leaflet/
// https://marburg-biedenkopf-mobil.de/toolbox/
// https://wiki.openstreetmap.org/wiki/Proposal:Refined_Public_Transport
//  https://www.liedman.net/leaflet-control-geocoder/docs/
// https://github.com/perliedman/leaflet-routing-machine

const USECLICK = false;
const BBTRACKFILE = 'bb3.geojson';
const BBHALTESTELLEN = 'haltestellen3.json';
const SHOWMAP = true;
// const today = new Date(); d. setHours(0,0,0,0);

// const svg = `<svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1"
//     xmlns="http://www.w3.org/2000/svg">
//     <g id="Zeichen_224" fill-rule="nonzero">
//         <circle id="Oval" fill="#F0CA00" cx="50" cy="50" r="50"></circle>
//         <circle id="Oval" fill="#008754" cx="50" cy="50" r="47.2972973"></circle>
//         <circle id="Oval" fill="#F0CA00" cx="50" cy="50" r="33.7837838"></circle>
//         <polygon id="Path" fill="#008754" points="60.1351351 45.9459459 39.8648649 45.9459459 39.8648649 24.3243243 31.7567568 24.3243243 31.7567568 75.6756757 39.8648649 75.6756757 39.8648649 52.7027027 60.1351351 52.7027027 60.1351351 75.6756757 68.2432432 75.6756757 68.2432432 24.3243243 60.1351351 24.3243243"></polygon>
//     </g>
// </svg>`;

const svgWest = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
    <g fill="none" fill-rule="nonzero">
        <circle cx="50" cy="50" r="50" fill="#F05FC4"/>
        <circle cx="50" cy="50" r="47.297" fill="#AB448C"/>
        <circle cx="50" cy="50" r="33.784" fill="#FFF"/>
        <path fill="#AB448C" d="M34.561 76h6.109l9.264-34.896h.132L59.297 76h6.142l12.086-48.41h-7.736l-7.637 34.398h-.132L52.656 27.59h-5.312l-9.397 34.398h-.133L30.211 27.59h-7.736z"/>
    </g>
</svg>`;

const svgOst = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
<g fill="none" fill-rule="nonzero">
    <circle cx="50" cy="50" r="50" fill="#F05FC4"/>
    <circle cx="50" cy="50" r="47.297" fill="#AB448C"/>
    <circle cx="50" cy="50" r="33.784" fill="#FFF"/>
    <path fill="#AB448C" d="M31.701 50.371c0 5.86.176 9.82.528 11.883.187 1.101.421 2.016.703 2.742.304.703.644 1.442 1.02 2.215 1.241 2.367 3.234 4.453 5.976 6.258 2.695 1.875 6.058 2.86 10.09 2.953 4.078-.094 7.476-1.078 10.195-2.953 2.695-1.805 4.64-3.89 5.836-6.258.867-1.242 1.465-2.895 1.793-4.957.304-2.063.457-6.024.457-11.883 0-5.953-.153-9.937-.457-11.953-.328-2.016-.926-3.645-1.793-4.887-1.195-2.367-3.14-4.476-5.836-6.328-2.719-1.875-6.117-2.836-10.195-2.883-4.032.047-7.395 1.008-10.09 2.883-2.742 1.852-4.735 3.961-5.977 6.328-.773 1.242-1.347 2.871-1.722 4.887-.352 2.016-.528 6-.528 11.953Zm7.805 0c0-5.039.187-8.473.562-10.3.328-1.735.996-3.153 2.004-4.255.82-1.054 1.899-1.933 3.235-2.636 1.312-.68 2.882-1.043 4.71-1.09 1.852.047 3.458.41 4.817 1.09 1.289.703 2.32 1.582 3.094 2.636 1.008 1.102 1.699 2.52 2.074 4.254.352 1.828.527 5.262.527 10.301 0 5.04-.175 8.45-.527 10.23-.375 1.782-1.066 3.223-2.074 4.325-.774 1.054-1.805 1.91-3.094 2.566-1.36.774-2.965 1.16-4.816 1.16-1.829 0-3.399-.386-4.711-1.16-1.336-.656-2.414-1.512-3.235-2.566-1.008-1.102-1.676-2.543-2.004-4.324-.375-1.782-.562-5.192-.562-10.23Z"/>
</g>
</svg>`;

const svgAll = `<svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <g id="Zeichen_224" fill-rule="nonzero">
        <circle id="Oval" fill="#F05FC4" cx="50" cy="50" r="50"></circle>
        <circle id="Oval" fill="#AB448C" cx="50" cy="50" r="47.2972973"></circle>
        <circle id="Oval" fill="#FFFFFF" cx="50" cy="50" r="33.7837838"></circle>
        <polygon id="Path" fill="#AB448C" points="60.1351351 45.9459459 39.8648649 45.9459459 39.8648649 24.3243243 31.7567568 24.3243243 31.7567568 75.6756757 39.8648649 75.6756757 39.8648649 52.7027027 60.1351351 52.7027027 60.1351351 75.6756757 68.2432432 75.6756757 68.2432432 24.3243243 60.1351351 24.3243243"></polygon>
    </g>
</svg>`;


var iconUrl = 'data:image/svg+xml;base64,' + btoa(svgAll);
const iconUrl_west = 'data:image/svg+xml;base64,' + btoa(svgWest);
const iconUrl_ost = 'data:image/svg+xml;base64,' + btoa(svgOst);

const tosvg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100"><defs><circle id="a" cx="40" cy="40" r="33.784"/></defs><circle cx="50" cy="50" r="50" fill="#F05FC4"/><circle cx="50" cy="50" r="47.297" fill="#AB448C"/><g transform="translate(10 10)"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><use xlink:href="#a" fill="#F0CA00"/><g mask="url(#b)"><path d="M0 60h20v20H0z"/><path fill="#FFF" d="M20 60h20v20H20z"/><path d="M40 60h20v20H40z"/><path fill="#FFF" d="M60 60h20v20H60zM0 40h20v20H0z"/><path d="M20 40h20v20H20z"/><path fill="#FFF" d="M40 40h20v20H40z"/><path d="M60 40h20v20H60zM0 20h20v20H0z"/><path fill="#FFF" d="M20 20h20v20H20z"/><path d="M40 20h20v20H40z"/><path fill="#FFF" d="M60 20h20v20H60zM0 0h20v20H0z"/><path d="M20 0h20v20H20z"/><path fill="#FFF" d="M40 0h20v20H40z"/><path d="M60 0h20v20H60z"/></g></g></svg>';
var toIconUrl = 'data:image/svg+xml;base64,' + btoa(tosvg);

const fromIcon = L.icon({
    iconUrl: iconUrl,
    iconSize: [ 40, 40 ]
});

const toIcon = L.icon({
    iconUrl: toIconUrl,
    iconSize: [ 30, 30 ]
});

const toIcon30 = L.icon({
    iconUrl: iconUrl_west,
    iconSize: [ 30, 30 ]
});

const ostIcon = L.icon({
    iconUrl: iconUrl_ost,
    iconSize: [ 30, 30 ]
});
// const toIcon = L.icon({
//     iconUrl: iconUrl,
//     shadowUrl: iconUrl,
//     iconSize: [ 100, 100 ],
//     iconAnchor: [ 50, 50 ],
//     popupAnchor: [ 0, 0 ]
// });

const markerTypes = {
    'via': {

    },
    'from': {

    },
    'to': {

    }
};

const routeLookup = {
    70722000: {
        name: '7072 West',
        departure_times: [ '9:08', '10:08', '11:08', '12:08', '15:08', '16:08', '17:08' ],
        times: []
    },
    70721000: {
        name: '7072 Ost',
        departure_times: [ '8:35', '9:35', '10:35', '11:35', '14:35', '15:35', '16:35' ],
        times: []
    },
    0: {
        name: 'Geodaten noch nicht angepasst'
    }
};

const toDate = ([ h, m ]) => {
    const d = new Date();
    d.setHours(h);
    d.setMinutes(m);
    d.setSeconds(0);
    return d;
    return d.getTime();
};

function dateDiff(date1, date2) {
    let diff = date2.getTime() - date1.getTime();
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return { hours, minutes };
}

function msDiff(ms1, ms2) {
    let diff = ms2 - ms1;
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return { hours, minutes };
}

const toDateMs = ([ h, m ]) => {
    const d = new Date();
    d.setHours(h);
    d.setMinutes(m);
    d.setSeconds(0);
    return d.getTime();
};

//   window.dataDiff = dateDiff;

Object.values(routeLookup).forEach(element => {
    console.log(element);
    const now = Date.now();
    if(element.departure_times) {
        // element.times = element.departure_times.map(Number); //.map(toDate);
        // element.times = element.departure_times.map(d => d.split(":").map(Number)).map(toDate);
        element.times = element.departure_times.map(d => d.split(":").map(Number)).map(toDateMs);
        const tomorrow = element.times.map(t => t + 24*60*60*1000);
        element.times = element.times.concat(element.times, tomorrow);
        element.nextStartMs = element.times.find(t => t > now);
        element.nextStart = new Date(element.nextStartMs).toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'});
    }
});

window.routeLookup = routeLookup;


class Routes {
    routes = [];
    constructor () {
    }
    addRoute(route) {
        this.routes.push(route);
    }
    removeRoute(route) {
        this.routes.splice(this.routes.indexOf(route), 1);
    }
    getRouteByName(name) {
        return this.routes.find(route => route.name === name);
    }
    getRouteById(id) {
        return this.routes.find(route => route.id === id);
    }
}

class Route {
    constructor (route) {
        this.name = route.name;
        this.departure_times = route.departure_times;
        this.times = route.times;
    }
}

if(SHOWMAP) {
    function readJson(file, callback, async = true) {
        var req = new XMLHttpRequest();
        req.onerror = function(e) {
            // Utils.log(`[Utils][readJson] Error while trying to read  ${file}`, e);
        };
        req.overrideMimeType('application/json');
        req.open('GET', file, async);
        req.onreadystatechange = function() {
            if(req.readyState === 4) {
                // && req.status == "200") {
                if(callback) callback(req.responseText);
            }
        };
        req.send(null);
    };

    const lat = 53.0805;
    const lng = 10.5700;


    // OSM Mapnik
    const osmMap = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    // - Thunderforest Fahrradkarte
    // cycleMap = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=<dein Schlüssel>',
    //     {attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> Contributors &copy; <a href="https://thunderforest.com/">Thunderforest</a>"' }),

    // - ÖPNV-Karte
    const opnv = new L.tileLayer('http://tile.memomaps.de/tilegen/{z}/{x}/{y}.png', {
        minZoom: 3,
        maxZoom: 20,
        attribution: 'Map data &copy; <a href="http://memomaps.de/">ÖPNV Karte</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    });

    const defaultMap = osmMap;
    const apiToken = 'pk.eyJ1IjoidGlwdHJvbmljIiwiYSI6ImNsamZvNWsyeTAyYzEzYm42M2kzb2xuNWgifQ._qJ0ZfLoaFY16tkn5YZeiw';
    const fontawesomeToken = 'fd25864f74';

    // Kartenobjekt mit Kartenmittelpunkt. Hier 52.44338, 13.33057
    // OSM Straßenansicht ist Standardansicht

    // var landkarte = L.map('landkarte', {layers: [osmMap] }) // Nur ein Layer angeben!
    //     .setView([52.4433752, 13.3301968], 13);

    var map = L.map('map', { layers: [ defaultMap ] }).setView([ lat, lng ], 16);

    var busIcon = L.icon({
        iconUrl: 'busicon.png',
        shadowUrl: 'marker-shadow.png',

        iconSize: [ 25, 41 ], // size of the icon
        shadowSize: [ 41, 41 ], // size of the shadow
        iconAnchor: [ 22, 94 ], // point of the icon which will correspond to marker's location
        // shadowAnchor: [ 4, 62 ],  // the same for the shadow
        popupAnchor: [ -3, -76 ] // point from which the popup should open relative to the iconAnchor
    });



    var theMarker = {};

    if(USECLICK) {
        map.on('click', function(e) {
            const clat = e.latlng.lat;
            const clon = e.latlng.lng;

            console.log("You clicked the map at LAT: " + clat + " and LONG: " + clon);
            //Clear existing marker, 

            if(theMarker != undefined) {
                map.removeLayer(theMarker);
            };

            //Add a marker to show where you clicked.
            // L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
            theMarker = L.marker([ clat, clon ], { icon: busIcon }).addTo(map);
        });
    }

    // Basislayer für die Layerkontrolle

    var baseLayers = {
        "Straßenkarte": osmMap,
        // "Fahrrad": cycleMap,
        "ÖPNV": opnv
    };

    // Umschalter für die unterschiedlichen Kartenlayer

    L.control.layers(baseLayers).addTo(map);

    let haltestellen = [];
    let stops = [];
    window.haltestellen = haltestellen;
    readJson(`${BBHALTESTELLEN}?${Date.now()}`, (inHaltestellen) => {
        // console.log(data);
        haltestellen = JSON.parse(inHaltestellen);
        console.log('haltestellen', haltestellen);

        readJson(`${BBTRACKFILE}?Date.now()`, (data) => {
            var geojson = JSON.parse(data);
            // console.log(geojson);
            // L.geoJSON(geojson).addTo(map).
            var layerGroup = L.geoJSON(geojson, {
                onEachFeature: function(feature, layer) {
                    if(feature.geometry.coordinates.length === 2) {
                        let routes, prevStop, nextStop, temp;
                        const loc = findLocation(feature.geometry.coordinates[ 1 ], feature.geometry.coordinates[ 0 ], haltestellen);
                        // console.log('LOC', feature.properties, loc, feature.geometry.coordinates[ 1 ], feature.geometry.coordinates[ 0 ]);
                        if(loc.location?.hasOwnProperty('routes')) {
                            // console.log(feature.properties.name, feature.geometry.coordinates.length);
                            stops.push(loc);
                            routes = loc.location.routes;
                            routes = loc.location.routes.map((route) => {
                                const currentLocationId = loc.location.id;
                                nextStop = haltestellen.find(h => h.routes.some(p => p.prev_id == currentLocationId && p.route_id == route.route_id));
                                // prevStop = haltestellen.find(h => h.routes.prev_id == route.id); 
                                prevStop = haltestellen.find(h => h.id == route.prev_id);

                                route.nextStop = nextStop;
                                route.prevStop = prevStop;
                                route.namexx = feature.properties.name;
                                route.typexx = feature.properties.type;
                                route.sinceStart = findPrevious(currentLocationId, route.route_id);

                                const routeInfo = routeLookup[ route.route_id.toString() ];
                                route.nextStartXX = '';
                                if(routeInfo && feature.properties.type !=='to') {
                                    if(feature.properties.type === 'from') {
                                        route.nextStartXX = `<div>Nächste Abfahrt:</div><h1> ${routeInfo.nextStart}</h1>`;
                                    } else {
                                        route.nextStartXX = `<div>Nächste Abfahrt:<div><h1>${new Date(routeInfo.nextStartMs+route.sinceStart).toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'})}</h1>`;
                                    }
                                }
                                const s = routeInfo?.name || 'nix';
                                return `<h3>${s}</h3>${route.nextStartXX}<p><div>voriger Halt: ${prevStop?.name || ''}</div><div>nächster Halt: ${nextStop?.name || ''}</div></p>`;
                            }).join('');

                            // layer.bindPopup('<h2>' + loc.location.name + '</h2>' + routes.toString() + '<p>name: ' + feature.properties.name + '</p><p>type: ' + feature.properties.type + '</p>');
                            layer.bindPopup('<h2>' + loc.location.name + '</h2>' + routes.toString());
                            // bindPopup can also be used as a function which returns an HTML element sor string.

                        }
                        // console.log('LOC', feature.properties, loc, routes, temp, { prevStop, nextStop });
                        // feature.properties.name = loc.name;
                    } else {
                        layer.bindPopup('<h2>' + feature.properties.name + '</h2><p>name: ' + feature.properties.type + '</p>');

                    }
                },
                pointToLayer: function(feature, latlng) {
                    switch(feature.properties.type) { 
                        case 'to':
                            return L.marker(latlng, {
                                icon: toIcon,
                                title: feature.properties.name,
                                riseOnHover: false
                            });
                            break;
                        case 'from':
                            return L.marker(latlng, {
                                icon: fromIcon,
                                title: feature.properties.name,
                                riseOnHover: true
                            });
                            break;
                        default:
                            return L.marker(latlng, {
                                icon: toIcon30,
                                title: feature.properties.name,
                                riseOnHover: true
                            });
                    }
                },
            }).addTo(map);
            console.log(layerGroup);
            console.log(stops);

            // const totalTimeSinceStart = (s) => {
            //     const startId = 32;
            //     // const routeId = 70722000;
            //     let totalTime = 0;
            //     let prev = s.prevStop;
            //     let cnt = 20;
            //     while(prev && prev.id !== startId && (cnt-- > 0)) {
            //         prev = s.prevStop;

            //     }
            //     return totalTime;
            // };

            // stops.forEach((s) => {
            //     const prev = s => h.routes.some(p => p.route_id == 70722000);


            // });


            const makeMarker = ({ lat, lng }) => {
                const m = L.marker([ lat, lng ], { icon: ostIcon });
                m.addTo(map);
                // console.log('Marker', m);

            };
            const features = haltestellen.filter(h => h.routes.some(p => p.route_id == 70721000));
            features.map(makeMarker);
            // const features = haltestellen.filter(h =>const features = haltestellen.filter(h => h.route_id == 70721000).map(makeMarker);
            // console.log('features', features);


        });

    });




    // var geojsonFeature = {
    //     "type": "Feature",
    //     "properties": {
    //         "name": "from",
    //         "type": "from",
    //         "amenity": "Baseball Stadium",
    //         "popupContent": "This is where the Rockies play!"
    //     },
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [
    //             10.578343,
    //             53.079616
    //         ]
    //     }
    // };

    // L.geoJSON(geojsonFeature).addTo(map);


    // var geojsonFeatures = [
    //     {
    //         "type": "Feature",
    //         "properties": {
    //             "name": "from",
    //             "type": "from",
    //             "amenity": "Baseball Stadium",
    //             "popupContent": "This is where the Rockies play!"
    //         },
    //         "geometry": {
    //             "type": "Point",
    //             "coordinates": [
    //                 10.578343,
    //                 53.079616
    //             ]
    //         }
    //     },
    //     {
    //         "type": "Feature",
    //         "properties": {
    //             "name": "via1",
    //             "type": "via"
    //         },
    //         "geometry": {
    //             "type": "Point",
    //             "coordinates": [
    //                 10.578343,
    //                 53.079616
    //             ]
    //         }
    //     },
    //     {
    //         "type": "Feature",
    //         "properties": {
    //             "name": "via2",
    //             "type": "via"
    //         },
    //         "geometry": {
    //             "type": "Point",
    //             "coordinates": [
    //                 10.56912660598755,
    //                 53.08093103740037
    //             ]
    //         }
    //     },
    // ];

    // L.geoJSON(geojsonFeatures).addTo(map);

    // Routenkontroller für die Eingabe von Start- und Endpunkt
    // hier: Startpunkt wird nicht gesetzt, muss vom Anwender eingegeben werden,
    // Endpunkt ist Energie-Museum Berlin.
    // Linieneigenschaften für die Routenlinie samt Alternativrouten.
    // Karte wird auf die gesamte wird auf gesamte Länge der Route gezoomt.
    // Mapbox wir als Router festgelegt (Key erforderlich),
    // Routerprofil: Standard ist das Routen für Autos unter Berücksichtigung der Verkehrssituation (Stauvermeidung),
    // Sprache der Navigationsanweisungen ist Deutsch,

    /*
     
    var routingcontrol = L.Routing.control(
        {
                waypoints: [L.latLng(), L.latLng(lat, lng)],
            lineOptions: {
                styles: [
            {color: 'red', opacity: 1, weight: 5 },
            {color: 'green', opacity: 1, weight: 5 },
            {color: 'blue', opacity: 1, weight: 5 }
            ]
            },
            fitSelectedRoutes: 'true',
            router: L.Routing.mapbox(apiToken,
            {
                profile: 'mapbox/driving-traffic', language: 'de', alternatives: 'true'
                }),
            geocoder: L.Control.Geocoder.nominatim({})
        }
            ).addTo(map);
     
            // Schaltknöpfe für das Auslösen von Routing-Aktionen 
            // Nach jedem Klick auf die unterschiedlichen Knöpfe wir ein entsprechendes Ereignis ausgelöst.
            // Das Verfahren zum Suchen des Wegs zwischen Start- und Endpunkt wird im Profil des
            // Routenkontrollers geändert. Anschließend wird der Routen-Suchalgorithmus neu angestoßen.
     
            L.easyButton('fa-walking', function() {
                routingcontrol.getRouter().options.profile = 'mapbox/walking';
            routingcontrol.route();
    }).addTo(map);
     
            L.easyButton('fa-bicycle', function() {
                routingcontrol.getRouter().options.profile = 'mapbox/cycling';
            routingcontrol.route();
    }).addTo(map);
     
            L.easyButton('fa-car', function() {
                routingcontrol.getRouter().options.profile = 'mapbox/driving-traffic';
            routingcontrol.route();
    }).addTo(map);
     
            */


    // MQTT - our sample broker is running on localhost:9001
    const MQTTBROKERURL = 'ws://foxwerk.synology.me:9001';
    // we subscribe to all topics starting with 'mqtt/' (could be anything)
    const MQTTSUBSCRIPTION = 'owntracks/user/iphone13';
    class SampleAction {
        constructor () {
            this.mqttClient = null;
            this.init();
        }

        init() {
            const options = {
                reconnectPeriod: 1000 * 60, // every minute
                // clean: false,
                clientId: 'synology-client-' + parseInt(Math.random() * 100, 10)
            };
            this.mqttClient = mqtt.connect(MQTTBROKERURL, options);
            this.mqttClient.subscribe(MQTTSUBSCRIPTION);
            // this.statusTextArr.push('Connection::', MQTTBROKERURL, 'Subscription:', MQTTSUBSCRIPTION);
            console.trace('Connection::', MQTTBROKERURL, 'Subscription:', MQTTSUBSCRIPTION, 'clientId:', options.clientId);

            this.mqttClient.on("message", (topic, payload) => {
                // console.log('rcvd', [topic, payload].join(": "));
                console.log('rcvd', topic, payload);
                const message = payload.toString();

                try {
                    const obj = JSON.parse(message);
                    console.log(obj);
                    if(topic === 'owntracks/user/iphone13') {
                        if(obj.lat != undefined && obj.lon != undefined) {
                            // const theMarker = L.marker([obj.latitude, obj.longitude]).addTo(map);
                            // theMarker.bindPopup(obj.name).openPopup();
                            if(theMarker != undefined) {
                                map.removeLayer(theMarker);
                            };

                            //Add a marker to show where you clicked.
                            theMarker = L.marker([ obj.lat, obj.lon ], { icon: busIcon }).addTo(map);
                        }


                    }
                } catch(e) {
                    console.log(e);
                    console.log(message);

                }
            });

            // this.mqttClient.publish("mqtt/demo", "Hello Plugin!");
            // for(let i = 0;i < 20;i++) {
            //     if(i % 2 === 0) {
            //         this.mqttClient.publish("mqtt/a", randomDate());
            //     } else {
            //         this.mqttClient.publish("mqtt/b", new Date().toLocaleTimeString());
            //     }
            // };
        }
    };

    /* owntracks
            const owntracks_position_default = {
                    "_type": "location",
                "acc": 6,
                "alt": 37,
                "batt": 69,
                "bs": 1,
                "BSSID": "c:72:74:8b:26:38",
                "conn": "w",
                "created_at": 1689534185,
                "lat": 53.080514,
                "lon": 10.570026,
                "m": 0,
                "p": 100.972,
                "SSID": "Bunda",
                "t": "u",
                "tid": "iX",
                "tst": 1689534182,
                "vac": 14
            };
                */

    const action = new SampleAction();
    window.action = action;


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


    function findLocation(lat, lng, locationsArray) {
        // Get your current location
        let distance, name, location;
        // const lat = 53.0804514193377;
        // const lng = 10.570478439331056;
        // navigator.geolocation.getCurrentPosition(function(position) {
        //     var lat = position.coords.latitude;
        //     var lng = position.coords.longitude;

        // Loop through the selected code's locations
        for(let i = 0;i < locationsArray.length;i++) {
            const locLat = locationsArray[ i ].lat;
            const locLng = locationsArray[ i ].lng;

            // Calculate the distance between the current location and the location in the selected code
            const haversine_distance = haversineDistance(lat, lng, locLat, locLng);

            // If this is the closest location, store its information
            if(haversine_distance < distance || distance === undefined) {
                distance = haversine_distance;
                name = locationsArray[ i ].name;
                location = locationsArray[ i ];
            }
        }

        // Display the closest location's name
        return ({ name, distance, location });
        // });
    }
}

let haltestellen = [];
let stops = [];
window.haltestellen = haltestellen;
readJson(`${BBHALTESTELLEN}?${Date.now()}`, (inHaltestellen) => {
    // console.log(data);
    haltestellen = JSON.parse(inHaltestellen);
    console.log('haltestellen', haltestellen);
});
function findPrevious(id, routeId) {
    const startId = 32;
    let cur = haltestellen.find(h => h.id === id && h.routes.find(p => p.route_id == routeId));
    if(!cur) return 0;
    let currentStop = cur.routes.find(p => p.route_id == routeId);
    let totalTime = currentStop.departure_offset;

    let cnt = 20;

    while(currentStop.prev_id && (cnt-- > 0)) {
        cur = haltestellen.find(h => h.id === currentStop.prev_id);
        currentStop = cur.routes.find(p => p.route_id == routeId);
        totalTime += currentStop.departure_offset;
        // console.log('cur', cur.name, totalTime);

        if(cur.id === startId) {
            // console.log("Start");
            break;
        }
    }
    return totalTime * 60;
}

