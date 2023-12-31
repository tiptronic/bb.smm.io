var $ = Dom7;


var app = new Framework7({
    name: 'Bürgerbus Bad Bevensen', // App name
    theme: 'ios', // Automatic theme detection
    xhrCache: false,

    el: '#app', // App root element

    // App store
    store: store,
    // App routes
    routes: routes,
    // Register service worker
    // serviceWorker: {
    //     path: '/service-worker.js',
    // },
    // App root data
    andy: {
        // for demo purposes only
        age: 28,
        foo: 'bar',
        baz: {
            firstName: 'Andy',
            lastName: 'Smith',
        },
    },
});
// Login Screen Demo
$('#my-login-screen .login-button').on('click', function() {
    var username = $('#my-login-screen [name="username"]').val();
    var password = $('#my-login-screen [name="password"]').val();

    // Close login screen
    app.loginScreen.close('#my-login-screen');

    // Alert username and password
    app.dialog.alert('Username: ' + username + '<br/>Password: ' + password);
});



// const josmMap = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
//     maxZoom: 20,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// });
// - Thunderforest Fahrradkarte
// cycleMap = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=<dein Schlüssel>',
//     {attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> Contributors &copy; <a href="https://thunderforest.com/">Thunderforest</a>"' }),

// - ÖPNV-Karte
const opnv = new L.tileLayer('http://tile.memomaps.de/tilegen/{z}/{x}/{y}.png', {
    minZoom: 3,
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="http://memomaps.de/">ÖPNV Karte</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
});

// OSM Mapnik
const osmMap = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

const defaultMap = osmMap;
const apiToken = 'pk.eyJ1IjoidGlwdHJvbmljIiwiYSI6ImNsamZvNWsyeTAyYzEzYm42M2kzb2xuNWgifQ._qJ0ZfLoaFY16tkn5YZeiw';
const fontawesomeToken = 'fd25864f74';

// var mainView = app.views.create('.view-main');

DEFAULTS = {
    lat: 53.0805, // 53.0805
    lng: 10.5800,
    zoom: 14
};
var map = L.map('map', { layers: [ defaultMap ] }).setView([ DEFAULTS.lat, DEFAULTS.lng ], DEFAULTS.zoom);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
// }).addTo(map);

// var marker = L.marker([ 53.0805, 10.5800 ])
//     .addTo(map)
//     .bindPopup('Your Leaflet.js code is ok')
//     .openPopup();

app.initLocation = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        const crd = pos.coords;

        console.log('Aktuelle Position:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`Genauigkeit ca. ${crd.accuracy} Meter.`);
        console.log('STORE:', store);
        store.dispatch('setLocation', { lat: crd.latitude, lon: crd.longitude });
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    if("permissions" in navigator) {
        navigator.permissions.query({
            name: "geolocation"
        }).then((result) => {
            if(result.state === "granted") {
                console.log("granted");
            } else if(result.state === "denied") {
                console.log("denial");
            } else {
                navigator.geolocation.getCurrentPosition(success, error, options);
            }
        });
    }

    // navigator.geolocation.getCurrentPosition(success, error, options);
    // console.log('test', navigator.geolocation);
};
console.log('app', app);