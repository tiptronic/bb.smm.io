

const createStore = Framework7.createStore;
const osmData = new OSMData();
const BBTRACKS = {
    7072: {
        id: 16165831,
        ref: '7072',
        overpassQuery: `[out:json][timeout:25];wr["ref"="7072"]["route"="bus"](53.064842,10.544642,53.098869,10.610089);(._;>;);out;`,
    },
    7073: {
        id: 16864019,
        ref: '7073',
        overpassQuery: `[out:json][timeout:25];wr["ref"="7073"]["route"="bus"](53.048,10.67,53.08,10.50);(._;>;);out;`,
    }
};
const SETTINGS = {
    STORAGEKEY: 'BBSETTINGS_001'
};

const storageKey = (key) => {
    return `${SETTINGS.STORAGEKEY}/${key}`;
};

const getFromLocalStorage = (key, defaultValue) => {
    const data = localStorage[ storageKey(key) ];
    return data ? JSON.parse(data) : defaultValue;
};

const getFromLocalStorageOrSave = (key, defaultValue) => {
    const lsKey = storageKey(key);
    let storageItem = localStorage[ lsKey ];
    if(!storageItem) {
        localStorage[ lsKey ] = JSON.stringify(defaultValue);
        return defaultValue;
    }
    return storageItem ? JSON.parse(storageItem) : defaultValue;
};

const store = createStore({
    osmData,
    state: {
        osmData,
        currentLocation: null,
        routes: getFromLocalStorageOrSave('routes', [ 7072, 7073 ]),
        tracks: getFromLocalStorageOrSave('tracks', BBTRACKS),
        theme: localStorage.theme || 'dark',
        products: [
            {
                id: '1',
                title: 'Apple iPhone 8',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
            },
            {
                id: '2',
                title: 'Apple iPhone 8 Plus',
                description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
            },
            {
                id: '3',
                title: 'Apple iPhone X',
                description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
            },
        ],
        stops: [],
        stops2: [
            {
                "type": "node",
                "id": 11068258650,
                "lat": 53.079504,
                "lon": 10.578344,
                "tags": {
                    "bus": "yes",
                    "name": "Rathausstraße",
                    "public_transport": "stop_position",
                    "route_ref": "7072;7073"
                }
            },
            {
                "type": "node",
                "id": 11449821021,
                "lat": 53.0730178,
                "lon": 10.5831496,
                "tags": {
                    "bus": "yes",
                    "name": "Friedhof",
                    "public_transport": "stop_position",
                    "ref": "7073",
                    "route_ref": "7073"
                }
            },
            {
                "type": "node",
                "id": 11449821025,
                "lat": 53.0608687,
                "lon": 10.5845002,
                "tags": {
                    "bus": "yes",
                    "name": "Klein Bünstorf",
                    "public_transport": "stop_position",
                    "ref": "7073",
                    "route_ref": "7073"
                }
            },
            {
                "type": "node",
                "id": 9084817925,
                "lat": 53.0581139,
                "lon": 10.5870199,
                "tags": {
                    "bus": "yes",
                    "departures_board": "yes",
                    "email": "kundenservice.nord@db-bus.com",
                    "name": "Klein Bünstorf Siedlung",
                    "operator": "Regionalbus Braunschweig GmbH",
                    "public_transport": "stop_position",
                    "route_ref": "7077;7087;7073",
                    "shelter": "no",
                    "website": "https://www.dbregiobus-nord.de/"
                }
            },
            {
                "type": "node",
                "id": 1828811949,
                "lat": 53.0464832,
                "lon": 10.6028344,
                "tags": {
                    "bus": "yes",
                    "name": "Jastorf, Schützenstraße",
                    "public_transport": "stop_position",
                    "route_ref": "7073"
                }
            },
            {
                "type": "node",
                "id": 1836716994,
                "lat": 53.055055,
                "lon": 10.6154208,
                "tags": {
                    "bus": "yes",
                    "name": "Klein Hesebeck",
                    "public_transport": "stop_position",
                    "route_ref": "7073"
                }
            },
            {
                "type": "node",
                "id": 387708447,
                "lat": 53.0704407,
                "lon": 10.6260283,
                "tags": {
                    "bus": "yes",
                    "name": "Groß Hesebeck, Siedlung K41",
                    "public_transport": "stop_position",
                    "route_ref": "7073"
                }
            },
            {
                "type": "node",
                "id": 1708562251,
                "lat": 53.0685135,
                "lon": 10.6406878,
                "tags": {
                    "bus": "yes",
                    "name": "Röbbel",
                    "public_transport": "stop_position",
                    "route_ref": "7073"
                }
            },
            {
                "type": "node",
                "id": 5710615683,
                "lat": 53.0809257,
                "lon": 10.6410957,
                "tags": {
                    "bus": "yes",
                    "name": "Gollern, Ortsmitte",
                    "public_transport": "stop_position",
                    "route_ref": "7073"
                }
            },
            {
                "type": "node",
                "id": 11452105161,
                "lat": 53.086662,
                "lon": 10.6035938,
                "tags": {
                    "bus": "yes",
                    "name": "Herz-Klinik",
                    "public_transport": "stop_position",
                    "ref": "7073"
                }
            },
            {
                "type": "node",
                "id": 11449821023,
                "lat": 53.0808722,
                "lon": 10.5908708,
                "tags": {
                    "bus": "yes",
                    "name": "Römstedter Straße",
                    "public_transport": "stop_position",
                    "ref": "7073",
                    "route_ref": "7073"
                }
            },
            {
                "type": "node",
                "id": 11068258650,
                "lat": 53.079504,
                "lon": 10.578344,
                "tags": {
                    "bus": "yes",
                    "name": "Rathausstraße",
                    "public_transport": "stop_position",
                    "route_ref": "7072;7073"
                }
            },
            {
                "type": "node",
                "id": 11452993199,
                "lat": 53.0793229,
                "lon": 10.5449705,
                "tags": {
                    "bus": "yes",
                    "name": "Schweizerhof",
                    "public_transport": "stop_position",
                    "ref": "7073",
                    "route_ref": "7073"
                }
            },
            {
                "type": "node",
                "id": 9212918218,
                "lat": 53.0811842,
                "lon": 10.5145584,
                "tags": {
                    "bus": "yes",
                    "name": "Seedorf, Ort",
                    "public_transport": "stop_position",
                    "route_ref": "7073"
                }
            },
            {
                "type": "node",
                "id": 11452993199,
                "lat": 53.0793229,
                "lon": 10.5449705,
                "tags": {
                    "bus": "yes",
                    "name": "Schweizerhof",
                    "public_transport": "stop_position",
                    "ref": "7073",
                    "route_ref": "7073"
                }
            },
            {
                "type": "node",
                "id": 8513141951,
                "lat": 53.0738239,
                "lon": 10.5584474,
                "tags": {
                    "bus": "yes",
                    "name": "Sasendorf",
                    "public_transport": "stop_position",
                    "route_ref": "7071;7073"
                }
            },
            {
                "type": "node",
                "id": 11449821021,
                "lat": 53.0730178,
                "lon": 10.5831496,
                "tags": {
                    "bus": "yes",
                    "name": "Friedhof",
                    "public_transport": "stop_position",
                    "ref": "7073",
                    "route_ref": "7073"
                }
            },
            {
                "type": "node",
                "id": 11068258650,
                "lat": 53.079504,
                "lon": 10.578344,
                "tags": {
                    "bus": "yes",
                    "name": "Rathausstraße",
                    "public_transport": "stop_position",
                    "route_ref": "7072;7073"
                }
            }
        ]
    },
    getters: {
        products({ state }) {
            return state.products;
        },
        stops({ state }) {
            return state.stops;
        }
    },
    actions: {
        addProduct({ state }, product) {
            state.products = [ ...state.products, product ];
        },
        setLocation({ state }, location) {
            osmData.setLocation(location);
            state.currentLocation = location; // {lat,lon}
            state.stops = [ ...state.stops ];
            console.log('setLocation', location, 'stops', state.stops);
        }
    },
});

osmData.loadData().then(data => {
    console.log('data', data);
    store.state.stops = osmData.stops;
});