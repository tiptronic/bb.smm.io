let osmdata;

function runTest() {
    const c = new OSMData();
    return c;
}

window.runTest = runTest;
var o = runTest();

// const tmp = `[out:json][timeout:25];area["name"="Bad Bevensen"]->.searchArea;wr["ref"="7072"]["route"="bus"](area.searchArea);(._;>;);out meta;`;

// const requestDataFromOverpass = async (inData) => {
//     // const url = `https://overpass-api.de/api/interpreter?data=[out:json];way(bbox:${bbox});(._;>;);out;`;
//     const url = `https://overpass-api.de/api/interpreter?data=${inData}`;
//     console.log(url);
//     const response = await fetch(url, {
//         responseformat: "geojson",
//         verbosity: "geom"
//     });

//     const data = await response.json();
//     return data;
// };

// const requestDataFromOSMForTrack = async (trackId = 16165831) => {
//     return fetch(`https://api.openstreetmap.org/api/0.6/relation/${trackId}/full.json`)
//         .then(r => r.json())
//         .catch(console.log)
//         .then(jsn => {
//             console.log(jsn);
//             return jsn;
//         });
// };


// async function loadData() {
//     console.time('load data');
//     osmdata = await requestDataFromOSMForTrack(16165831);  // 160ms ++
//     // osmdata = await requestDataFromOverpass(tmp); // 860ms ++
//     console.timeLog('load data');
//     console.log(osmtogeojson(osmdata));
//     console.timeEnd('load data');
// }

// async function loadDataOP() {
//     console.time('load data');
//     // osmdata = await requestDataFromOSMForTrack(16165831);  // 160ms ++
//     osmdata = await requestDataFromOverpass(tmp); // 860ms ++
//     console.timeLog('load data');
//     console.log(osmtogeojson(osmdata));
//     console.timeEnd('load data');
// }

// loadData();

// function getBusStops() {
//     const bus_stops = osmdata.elements.filter(o => o.tags?.highway == 'bus_stop');
//     const bus_stop_names = bus_stops.map(o => o.tags?.name);
//     console.log('Bus Stops', bus_stop_names);
//     return bus_stops;
// }

// function getStops(trackId = 16165831, type = 'stop') {
//     const e = osmdata.elements;
//     return e.find(o => o.type == 'relation' && o.id === trackId)
//         .members.filter(o => o.role == type)
//         .map(i =>
//             e.find(f => f.id === i.ref));
// }

// function getStopsData() {
//     return getStops().map(s => ({ name: s.tags.name, lat: s.lat, lon: s.lon, id: s.id }));
// }
// function getPlatformsData() {
//     return getPlatforms().map(s => ({ name: s.tags.name, lat: s.lat, lon: s.lon, id: s.id }));
// }

// function getPlatforms(trackId = 16165831) {
//     return getStops(trackId, 'platform');
// }

var osmdatOld = {
    "version": "0.6",
    "generator": "CGImap 0.8.10 (1579482 spike-06.openstreetmap.org)",
    "copyright": "OpenStreetMap and contributors",
    "attribution": "http://www.openstreetmap.org/copyright",
    "license": "http://opendatacommons.org/licenses/odbl/1-0/",
    "elements": [
        {
            "type": "node",
            "id": 31328492,
            "lat": 53.079293,
            "lon": 10.5879793,
            "timestamp": "2013-07-29T07:37:47Z",
            "version": 11,
            "changeset": 17135140,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 31328515,
            "lat": 53.07932,
            "lon": 10.590386,
            "timestamp": "2016-01-30T09:25:46Z",
            "version": 6,
            "changeset": 36894703,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 31328700,
            "lat": 53.0777967,
            "lon": 10.5788294,
            "timestamp": "2013-03-19T14:09:07Z",
            "version": 6,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 31328704,
            "lat": 53.0771434,
            "lon": 10.5794896,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 4,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 31328736,
            "lat": 53.0774463,
            "lon": 10.583514,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 7,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 31328750,
            "lat": 53.0795015,
            "lon": 10.58953,
            "timestamp": "2013-08-02T20:23:09Z",
            "version": 4,
            "changeset": 17196539,
            "user": "simlox",
            "uid": 795290
        },
        {
            "type": "node",
            "id": 31328751,
            "lat": 53.0767059,
            "lon": 10.5813099,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 9,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 31328924,
            "lat": 53.0788262,
            "lon": 10.5785539,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 6,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 31328949,
            "lat": 53.078098,
            "lon": 10.5788804,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 6,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 260564261,
            "lat": 53.0825873,
            "lon": 10.5885278,
            "timestamp": "2019-07-21T17:26:33Z",
            "version": 3,
            "changeset": 72487754,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 275646087,
            "lat": 53.0790824,
            "lon": 10.5912472,
            "timestamp": "2016-01-30T09:25:46Z",
            "version": 7,
            "changeset": 36894703,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 275646098,
            "lat": 53.0789247,
            "lon": 10.5912219,
            "timestamp": "2013-07-29T07:32:21Z",
            "version": 5,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 279088570,
            "lat": 53.0876069,
            "lon": 10.563085,
            "timestamp": "2018-11-30T14:35:04Z",
            "version": 8,
            "changeset": 65046519,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 281735154,
            "lat": 53.0762805,
            "lon": 10.5712422,
            "timestamp": "2014-09-02T11:29:40Z",
            "version": 4,
            "changeset": 25179673,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 285127496,
            "lat": 53.0800957,
            "lon": 10.5719501,
            "timestamp": "2014-07-07T09:17:45Z",
            "version": 4,
            "changeset": 23999800,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 287830381,
            "lat": 53.0841921,
            "lon": 10.5662736,
            "timestamp": "2021-09-09T20:59:54Z",
            "version": 7,
            "changeset": 110995045,
            "user": "openstreet32",
            "uid": 2225599,
            "tags": {
                "name": "Bad Bevensen",
                "traffic_sign": "city_limit",
                "traffic_sign:direction": "backward"
            }
        },
        {
            "type": "node",
            "id": 287830388,
            "lat": 53.0831868,
            "lon": 10.5706097,
            "timestamp": "2016-03-28T18:48:04Z",
            "version": 7,
            "changeset": 38127309,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 287830434,
            "lat": 53.0842808,
            "lon": 10.5660652,
            "timestamp": "2016-01-24T20:50:55Z",
            "version": 4,
            "changeset": 36784245,
            "user": "poppei82",
            "uid": 461945
        },
        {
            "type": "node",
            "id": 287830435,
            "lat": 53.0835953,
            "lon": 10.5688486,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 5,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 287830436,
            "lat": 53.0835402,
            "lon": 10.5690566,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 6,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 287830484,
            "lat": 53.0840124,
            "lon": 10.5672826,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 6,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 287830783,
            "lat": 53.0811643,
            "lon": 10.5740002,
            "timestamp": "2018-06-05T21:07:29Z",
            "version": 8,
            "changeset": 59582368,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 291766843,
            "lat": 53.0800234,
            "lon": 10.5782139,
            "timestamp": "2018-06-09T16:13:08Z",
            "version": 5,
            "changeset": 59694369,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 291766844,
            "lat": 53.0800564,
            "lon": 10.5783354,
            "timestamp": "2018-06-09T16:13:08Z",
            "version": 4,
            "changeset": 59694369,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 291766847,
            "lat": 53.0789518,
            "lon": 10.578317,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 7,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 291766849,
            "lat": 53.0794075,
            "lon": 10.5769741,
            "timestamp": "2014-04-25T09:10:51Z",
            "version": 7,
            "changeset": 21926372,
            "user": "WMWDe",
            "uid": 292562
        },
        {
            "type": "node",
            "id": 291767138,
            "lat": 53.0838448,
            "lon": 10.5682299,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 6,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 291767329,
            "lat": 53.0872482,
            "lon": 10.5633987,
            "timestamp": "2018-11-30T14:35:04Z",
            "version": 7,
            "changeset": 65046519,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 291767388,
            "lat": 53.088608,
            "lon": 10.5621795,
            "timestamp": "2023-07-25T17:13:50Z",
            "version": 10,
            "changeset": 138999993,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 293662003,
            "lat": 53.07994,
            "lon": 10.5882401,
            "timestamp": "2019-07-21T17:26:33Z",
            "version": 4,
            "changeset": 72487754,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 293662548,
            "lat": 53.0843861,
            "lon": 10.5886945,
            "timestamp": "2019-07-21T17:26:33Z",
            "version": 7,
            "changeset": 72487754,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 293716570,
            "lat": 53.0786628,
            "lon": 10.5787068,
            "timestamp": "2014-04-25T09:10:51Z",
            "version": 10,
            "changeset": 21926372,
            "user": "WMWDe",
            "uid": 292562
        },
        {
            "type": "node",
            "id": 293717647,
            "lat": 53.0789222,
            "lon": 10.5783928,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 8,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 293726089,
            "lat": 53.0808001,
            "lon": 10.5883622,
            "timestamp": "2019-07-21T17:26:33Z",
            "version": 5,
            "changeset": 72487754,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 293891083,
            "lat": 53.0846461,
            "lon": 10.5887186,
            "timestamp": "2023-03-17T20:21:34Z",
            "version": 7,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 297502294,
            "lat": 53.0833348,
            "lon": 10.5704526,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 6,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 297503331,
            "lat": 53.0837987,
            "lon": 10.5742917,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 5,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 299002492,
            "lat": 53.0790685,
            "lon": 10.5762201,
            "timestamp": "2023-01-20T23:54:59Z",
            "version": 7,
            "changeset": 131526917,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 299002495,
            "lat": 53.0786175,
            "lon": 10.5744247,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 8,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 299002498,
            "lat": 53.077161,
            "lon": 10.5755675,
            "timestamp": "2020-12-26T12:50:03Z",
            "version": 6,
            "changeset": 96450250,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 310279065,
            "lat": 53.0898753,
            "lon": 10.5646904,
            "timestamp": "2013-06-24T12:25:00Z",
            "version": 8,
            "changeset": 16683624,
            "user": "GPS-Wolf",
            "uid": 38735
        },
        {
            "type": "node",
            "id": 310283553,
            "lat": 53.0899656,
            "lon": 10.5645404,
            "timestamp": "2020-01-30T22:59:48Z",
            "version": 4,
            "changeset": 80340285,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 310405998,
            "lat": 53.0836023,
            "lon": 10.5694626,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 8,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 310406002,
            "lat": 53.0834959,
            "lon": 10.5702244,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 6,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 310406008,
            "lat": 53.0815368,
            "lon": 10.5733483,
            "timestamp": "2014-04-25T09:10:51Z",
            "version": 7,
            "changeset": 21926372,
            "user": "WMWDe",
            "uid": 292562
        },
        {
            "type": "node",
            "id": 317731927,
            "lat": 53.0787644,
            "lon": 10.5865197,
            "timestamp": "2013-07-29T07:34:34Z",
            "version": 6,
            "changeset": 17135110,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 319765210,
            "lat": 53.0828747,
            "lon": 10.5710382,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 5,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 387728537,
            "lat": 53.0859195,
            "lon": 10.6004749,
            "timestamp": "2017-02-19T22:27:32Z",
            "version": 5,
            "changeset": 46228556,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 411693346,
            "lat": 53.0771523,
            "lon": 10.5756715,
            "timestamp": "2018-06-08T09:20:48Z",
            "version": 6,
            "changeset": 59662205,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 411693349,
            "lat": 53.0779966,
            "lon": 10.5749318,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 6,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 411693355,
            "lat": 53.0791535,
            "lon": 10.5764414,
            "timestamp": "2023-01-20T23:54:59Z",
            "version": 6,
            "changeset": 131526917,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 420339492,
            "lat": 53.0850894,
            "lon": 10.5969519,
            "timestamp": "2013-06-20T20:17:00Z",
            "version": 5,
            "changeset": 16635425,
            "user": "GPS-Wolf",
            "uid": 38735
        },
        {
            "type": "node",
            "id": 725553987,
            "lat": 53.0773676,
            "lon": 10.5790144,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 7,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 726675518,
            "lat": 53.0771953,
            "lon": 10.5793209,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 4,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 726675625,
            "lat": 53.0787493,
            "lon": 10.5786383,
            "timestamp": "2013-03-19T14:09:07Z",
            "version": 3,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 726675632,
            "lat": 53.0804423,
            "lon": 10.5883291,
            "timestamp": "2019-07-21T17:26:33Z",
            "version": 4,
            "changeset": 72487754,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 726675789,
            "lat": 53.0800722,
            "lon": 10.5882789,
            "timestamp": "2012-08-13T20:31:05Z",
            "version": 3,
            "changeset": 12719349,
            "user": "star-flight",
            "uid": 38867
        },
        {
            "type": "node",
            "id": 726675803,
            "lat": 53.079816,
            "lon": 10.5881896,
            "timestamp": "2019-07-21T17:26:33Z",
            "version": 3,
            "changeset": 72487754,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 730865792,
            "lat": 53.0784125,
            "lon": 10.5788068,
            "timestamp": "2013-03-19T14:09:08Z",
            "version": 3,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 730903220,
            "lat": 53.0788166,
            "lon": 10.5796499,
            "timestamp": "2020-01-18T14:38:44Z",
            "version": 6,
            "changeset": 79732499,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 730903228,
            "lat": 53.0788628,
            "lon": 10.5798603,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 8,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 731813695,
            "lat": 53.0816137,
            "lon": 10.5884376,
            "timestamp": "2019-07-21T17:26:33Z",
            "version": 2,
            "changeset": 72487754,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1708477516,
            "lat": 53.0853629,
            "lon": 10.5981232,
            "timestamp": "2013-08-25T04:55:42Z",
            "version": 2,
            "changeset": 17493137,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1708477519,
            "lat": 53.0856931,
            "lon": 10.5995105,
            "timestamp": "2013-08-25T04:55:42Z",
            "version": 2,
            "changeset": 17493137,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1708477521,
            "lat": 53.0867118,
            "lon": 10.6038028,
            "timestamp": "2021-05-23T07:55:45Z",
            "version": 4,
            "changeset": 105155545,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1829836675,
            "lat": 53.0757823,
            "lon": 10.5677129,
            "timestamp": "2013-03-19T14:09:04Z",
            "version": 2,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1829836677,
            "lat": 53.0759966,
            "lon": 10.5673347,
            "timestamp": "2013-03-19T14:09:04Z",
            "version": 2,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1829836690,
            "lat": 53.0766248,
            "lon": 10.5821611,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 5,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1829836692,
            "lat": 53.0766511,
            "lon": 10.58181,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 6,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1829836696,
            "lat": 53.077216,
            "lon": 10.5657228,
            "timestamp": "2013-03-19T14:09:04Z",
            "version": 2,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1829836702,
            "lat": 53.0777025,
            "lon": 10.5703416,
            "timestamp": "2019-07-12T22:07:01Z",
            "version": 3,
            "changeset": 72198994,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 1829836704,
            "lat": 53.0778799,
            "lon": 10.5655227,
            "timestamp": "2013-03-19T14:09:04Z",
            "version": 3,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1829836707,
            "lat": 53.0784701,
            "lon": 10.5653326,
            "timestamp": "2013-03-19T14:09:04Z",
            "version": 2,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1829836708,
            "lat": 53.0786472,
            "lon": 10.5697282,
            "timestamp": "2012-07-18T15:54:46Z",
            "version": 1,
            "changeset": 12287846,
            "user": "KartoGrapHiti",
            "uid": 57645
        },
        {
            "type": "node",
            "id": 1829836719,
            "lat": 53.0794143,
            "lon": 10.5650219,
            "timestamp": "2013-05-07T22:28:41Z",
            "version": 2,
            "changeset": 16020589,
            "user": "WMWDe",
            "uid": 292562
        },
        {
            "type": "node",
            "id": 1829836721,
            "lat": 53.079447,
            "lon": 10.5899056,
            "timestamp": "2013-07-29T07:32:19Z",
            "version": 2,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1829836724,
            "lat": 53.0795548,
            "lon": 10.5693989,
            "timestamp": "2013-03-19T14:09:04Z",
            "version": 2,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1829836731,
            "lat": 53.0804222,
            "lon": 10.5708509,
            "timestamp": "2014-04-25T09:10:49Z",
            "version": 2,
            "changeset": 21926372,
            "user": "WMWDe",
            "uid": 292562
        },
        {
            "type": "node",
            "id": 1829836734,
            "lat": 53.0809091,
            "lon": 10.569174,
            "timestamp": "2013-03-19T14:09:04Z",
            "version": 3,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1829836735,
            "lat": 53.0812791,
            "lon": 10.5644634,
            "timestamp": "2018-07-15T06:48:24Z",
            "version": 4,
            "changeset": 60725802,
            "user": "bison166",
            "uid": 431336
        },
        {
            "type": "node",
            "id": 1829836737,
            "lat": 53.0841509,
            "lon": 10.5941738,
            "timestamp": "2023-04-20T15:56:33Z",
            "version": 5,
            "changeset": 135156917,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1829836738,
            "lat": 53.0844474,
            "lon": 10.5947336,
            "timestamp": "2023-04-20T15:56:33Z",
            "version": 2,
            "changeset": 135156917,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1829836739,
            "lat": 53.0854275,
            "lon": 10.5713993,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 2,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830824205,
            "lat": 53.0835661,
            "lon": 10.5699739,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 2,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830824206,
            "lat": 53.083615,
            "lon": 10.5695924,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 2,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830824207,
            "lat": 53.0838121,
            "lon": 10.5683822,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 3,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830824209,
            "lat": 53.0842391,
            "lon": 10.5661453,
            "timestamp": "2012-07-19T13:00:59Z",
            "version": 1,
            "changeset": 12327684,
            "user": "som-tam",
            "uid": 362391
        },
        {
            "type": "node",
            "id": 1830824213,
            "lat": 53.084572,
            "lon": 10.5708151,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 2,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830824218,
            "lat": 53.0848523,
            "lon": 10.5724217,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 2,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830824221,
            "lat": 53.0851133,
            "lon": 10.5743413,
            "timestamp": "2012-07-19T13:00:59Z",
            "version": 1,
            "changeset": 12327684,
            "user": "som-tam",
            "uid": 362391
        },
        {
            "type": "node",
            "id": 1830824227,
            "lat": 53.086034,
            "lon": 10.5718075,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 2,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830871993,
            "lat": 53.0886727,
            "lon": 10.5621214,
            "timestamp": "2023-07-25T17:13:50Z",
            "version": 5,
            "changeset": 138999993,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 1830871994,
            "lat": 53.0888492,
            "lon": 10.5619946,
            "timestamp": "2020-10-13T10:03:30Z",
            "version": 4,
            "changeset": 92407019,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830871995,
            "lat": 53.0890774,
            "lon": 10.5619525,
            "timestamp": "2020-01-30T22:59:48Z",
            "version": 4,
            "changeset": 80340285,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1830872030,
            "lat": 53.0901402,
            "lon": 10.5620013,
            "timestamp": "2019-07-28T09:24:39Z",
            "version": 4,
            "changeset": 72733275,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 1830872034,
            "lat": 53.0902901,
            "lon": 10.5602766,
            "timestamp": "2019-07-28T09:24:39Z",
            "version": 2,
            "changeset": 72733275,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 1830872035,
            "lat": 53.0903989,
            "lon": 10.5590422,
            "timestamp": "2019-07-28T09:24:39Z",
            "version": 2,
            "changeset": 72733275,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 1830872039,
            "lat": 53.0904869,
            "lon": 10.5581325,
            "timestamp": "2019-07-28T08:24:07Z",
            "version": 2,
            "changeset": 72732147,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 1830872042,
            "lat": 53.0905042,
            "lon": 10.5579331,
            "timestamp": "2019-07-28T09:24:39Z",
            "version": 3,
            "changeset": 72733275,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 1830872047,
            "lat": 53.0905941,
            "lon": 10.5569408,
            "timestamp": "2019-07-28T08:24:07Z",
            "version": 2,
            "changeset": 72732147,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 1830872064,
            "lat": 53.0905024,
            "lon": 10.5620251,
            "timestamp": "2018-11-30T14:35:04Z",
            "version": 2,
            "changeset": 65046519,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830872070,
            "lat": 53.0907908,
            "lon": 10.556996,
            "timestamp": "2019-07-28T08:24:07Z",
            "version": 2,
            "changeset": 72732147,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 1830872072,
            "lat": 53.0906147,
            "lon": 10.5620428,
            "timestamp": "2018-11-30T14:35:04Z",
            "version": 4,
            "changeset": 65046519,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830872075,
            "lat": 53.0910519,
            "lon": 10.5572324,
            "timestamp": "2019-07-28T08:24:07Z",
            "version": 2,
            "changeset": 72732147,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 1830872076,
            "lat": 53.0910794,
            "lon": 10.5620647,
            "timestamp": "2018-11-30T14:35:04Z",
            "version": 4,
            "changeset": 65046519,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830872084,
            "lat": 53.0916095,
            "lon": 10.5615211,
            "timestamp": "2018-11-30T14:40:53Z",
            "version": 4,
            "changeset": 65046702,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830872097,
            "lat": 53.0916029,
            "lon": 10.5577844,
            "timestamp": "2019-07-28T08:24:07Z",
            "version": 2,
            "changeset": 72732147,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 1830872099,
            "lat": 53.0917009,
            "lon": 10.5613927,
            "timestamp": "2018-11-30T14:40:53Z",
            "version": 3,
            "changeset": 65046702,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830872102,
            "lat": 53.09178,
            "lon": 10.5612446,
            "timestamp": "2018-11-30T14:40:53Z",
            "version": 3,
            "changeset": 65046702,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830872106,
            "lat": 53.0918417,
            "lon": 10.5610595,
            "timestamp": "2018-11-30T14:40:53Z",
            "version": 2,
            "changeset": 65046702,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830872116,
            "lat": 53.0920004,
            "lon": 10.5604949,
            "timestamp": "2020-01-30T22:59:48Z",
            "version": 3,
            "changeset": 80340285,
            "user": "sundew",
            "uid": 617520,
            "tags": {
                "bus": "yes",
                "name": "Medingen, Siedlung",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 1830872122,
            "lat": 53.0921638,
            "lon": 10.560161,
            "timestamp": "2018-11-30T14:40:53Z",
            "version": 2,
            "changeset": 65046702,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830872129,
            "lat": 53.0921952,
            "lon": 10.5583833,
            "timestamp": "2019-07-28T08:24:07Z",
            "version": 2,
            "changeset": 72732147,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 1830872131,
            "lat": 53.0922541,
            "lon": 10.5600751,
            "timestamp": "2018-11-30T14:40:53Z",
            "version": 2,
            "changeset": 65046702,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830872142,
            "lat": 53.0923401,
            "lon": 10.5600184,
            "timestamp": "2018-11-30T14:40:53Z",
            "version": 2,
            "changeset": 65046702,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830872144,
            "lat": 53.0924396,
            "lon": 10.5599899,
            "timestamp": "2018-11-30T14:40:53Z",
            "version": 3,
            "changeset": 65046702,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830872150,
            "lat": 53.0925527,
            "lon": 10.5600109,
            "timestamp": "2018-11-30T14:40:53Z",
            "version": 4,
            "changeset": 65046702,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830872159,
            "lat": 53.0926567,
            "lon": 10.5600536,
            "timestamp": "2018-11-30T14:40:53Z",
            "version": 3,
            "changeset": 65046702,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830872168,
            "lat": 53.0927451,
            "lon": 10.5589368,
            "timestamp": "2019-07-28T08:24:07Z",
            "version": 2,
            "changeset": 72732147,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 1830872175,
            "lat": 53.0927815,
            "lon": 10.5598367,
            "timestamp": "2012-07-19T13:22:27Z",
            "version": 1,
            "changeset": 12327684,
            "user": "som-tam",
            "uid": 362391
        },
        {
            "type": "node",
            "id": 1830872207,
            "lat": 53.0932086,
            "lon": 10.5594194,
            "timestamp": "2019-07-28T08:24:07Z",
            "version": 2,
            "changeset": 72732147,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 1830897445,
            "lat": 53.079057,
            "lon": 10.5793982,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 4,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830897448,
            "lat": 53.079143,
            "lon": 10.5792934,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 4,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830897452,
            "lat": 53.0796046,
            "lon": 10.5792747,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 4,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830897454,
            "lat": 53.0798147,
            "lon": 10.5783345,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 5,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830897459,
            "lat": 53.0801299,
            "lon": 10.5725676,
            "timestamp": "2014-07-07T09:17:45Z",
            "version": 2,
            "changeset": 23999800,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830897466,
            "lat": 53.0802434,
            "lon": 10.5741881,
            "timestamp": "2018-06-08T09:20:48Z",
            "version": 3,
            "changeset": 59662205,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830897468,
            "lat": 53.0803063,
            "lon": 10.573419,
            "timestamp": "2018-06-08T09:20:48Z",
            "version": 3,
            "changeset": 59662205,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830897469,
            "lat": 53.0803131,
            "lon": 10.5737918,
            "timestamp": "2018-06-08T09:20:48Z",
            "version": 3,
            "changeset": 59662205,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830897473,
            "lat": 53.0812156,
            "lon": 10.567789,
            "timestamp": "2013-03-19T14:09:05Z",
            "version": 2,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830897475,
            "lat": 53.0812658,
            "lon": 10.5673945,
            "timestamp": "2013-03-19T14:09:05Z",
            "version": 2,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830897476,
            "lat": 53.0812908,
            "lon": 10.5665138,
            "timestamp": "2013-03-19T14:09:05Z",
            "version": 2,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830897526,
            "lat": 53.0839491,
            "lon": 10.5676496,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 4,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830897529,
            "lat": 53.0841074,
            "lon": 10.5667316,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 3,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830920427,
            "lat": 53.0744555,
            "lon": 10.5957942,
            "timestamp": "2013-07-29T07:32:19Z",
            "version": 2,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830920430,
            "lat": 53.0745647,
            "lon": 10.5965707,
            "timestamp": "2013-07-29T07:32:19Z",
            "version": 2,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830920431,
            "lat": 53.0747783,
            "lon": 10.5974478,
            "timestamp": "2013-07-29T07:08:10Z",
            "version": 2,
            "changeset": 17134832,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830920437,
            "lat": 53.0749129,
            "lon": 10.5982654,
            "timestamp": "2020-11-13T20:07:34Z",
            "version": 3,
            "changeset": 94083932,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830920439,
            "lat": 53.0751848,
            "lon": 10.5994118,
            "timestamp": "2020-11-13T20:07:34Z",
            "version": 4,
            "changeset": 94083932,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830920440,
            "lat": 53.0752481,
            "lon": 10.5953791,
            "timestamp": "2013-07-29T07:32:19Z",
            "version": 2,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830920442,
            "lat": 53.0753529,
            "lon": 10.5953448,
            "timestamp": "2013-07-29T07:32:19Z",
            "version": 2,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830920446,
            "lat": 53.0756577,
            "lon": 10.5989705,
            "timestamp": "2013-07-29T07:08:10Z",
            "version": 3,
            "changeset": 17134832,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830920448,
            "lat": 53.0759078,
            "lon": 10.5952282,
            "timestamp": "2012-07-19T13:48:00Z",
            "version": 1,
            "changeset": 12327684,
            "user": "som-tam",
            "uid": 362391
        },
        {
            "type": "node",
            "id": 1830920455,
            "lat": 53.0760587,
            "lon": 10.5952596,
            "timestamp": "2012-07-19T13:48:00Z",
            "version": 1,
            "changeset": 12327684,
            "user": "som-tam",
            "uid": 362391
        },
        {
            "type": "node",
            "id": 1830920459,
            "lat": 53.0761642,
            "lon": 10.5951882,
            "timestamp": "2012-07-19T13:48:00Z",
            "version": 1,
            "changeset": 12327684,
            "user": "som-tam",
            "uid": 362391
        },
        {
            "type": "node",
            "id": 1830920472,
            "lat": 53.0762633,
            "lon": 10.5950781,
            "timestamp": "2012-07-19T13:48:00Z",
            "version": 1,
            "changeset": 12327684,
            "user": "som-tam",
            "uid": 362391
        },
        {
            "type": "node",
            "id": 1830920482,
            "lat": 53.0768559,
            "lon": 10.5977318,
            "timestamp": "2013-07-29T07:32:19Z",
            "version": 2,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830920488,
            "lat": 53.0770966,
            "lon": 10.5947371,
            "timestamp": "2013-07-29T08:18:32Z",
            "version": 2,
            "changeset": 17135603,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830920491,
            "lat": 53.0772274,
            "lon": 10.5921901,
            "timestamp": "2013-05-02T21:49:41Z",
            "version": 2,
            "changeset": 15953370,
            "user": "OPerivar",
            "uid": 51324
        },
        {
            "type": "node",
            "id": 1830920493,
            "lat": 53.0772582,
            "lon": 10.5978599,
            "timestamp": "2016-01-30T09:25:45Z",
            "version": 4,
            "changeset": 36894703,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830920495,
            "lat": 53.077306,
            "lon": 10.5935238,
            "timestamp": "2013-07-29T08:18:32Z",
            "version": 2,
            "changeset": 17135603,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830920498,
            "lat": 53.0773917,
            "lon": 10.5943203,
            "timestamp": "2013-07-29T08:18:32Z",
            "version": 2,
            "changeset": 17135603,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830920501,
            "lat": 53.0774167,
            "lon": 10.5946663,
            "timestamp": "2012-07-19T13:48:01Z",
            "version": 1,
            "changeset": 12327684,
            "user": "som-tam",
            "uid": 362391
        },
        {
            "type": "node",
            "id": 1830920518,
            "lat": 53.0776433,
            "lon": 10.598091,
            "timestamp": "2023-03-17T20:21:34Z",
            "version": 3,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1830920570,
            "lat": 53.0803096,
            "lon": 10.597347,
            "timestamp": "2016-04-13T20:45:20Z",
            "version": 3,
            "changeset": 38537965,
            "user": "letihu",
            "uid": 1787357
        },
        {
            "type": "node",
            "id": 1830920571,
            "lat": 53.0804098,
            "lon": 10.5984088,
            "timestamp": "2023-03-17T20:21:34Z",
            "version": 4,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1830940036,
            "lat": 53.0804557,
            "lon": 10.5988948,
            "timestamp": "2013-06-20T20:16:59Z",
            "version": 3,
            "changeset": 16635425,
            "user": "GPS-Wolf",
            "uid": 38735
        },
        {
            "type": "node",
            "id": 1830940041,
            "lat": 53.0813478,
            "lon": 10.5987701,
            "timestamp": "2013-06-20T20:16:59Z",
            "version": 3,
            "changeset": 16635425,
            "user": "GPS-Wolf",
            "uid": 38735
        },
        {
            "type": "node",
            "id": 1830940045,
            "lat": 53.0815524,
            "lon": 10.5987929,
            "timestamp": "2013-06-20T20:16:59Z",
            "version": 2,
            "changeset": 16635425,
            "user": "GPS-Wolf",
            "uid": 38735
        },
        {
            "type": "node",
            "id": 1830940071,
            "lat": 53.083003,
            "lon": 10.5981907,
            "timestamp": "2013-05-02T21:49:41Z",
            "version": 3,
            "changeset": 15953370,
            "user": "OPerivar",
            "uid": 51324
        },
        {
            "type": "node",
            "id": 1830940081,
            "lat": 53.0830408,
            "lon": 10.5885699,
            "timestamp": "2019-07-21T17:26:33Z",
            "version": 2,
            "changeset": 72487754,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830940085,
            "lat": 53.083118,
            "lon": 10.5981599,
            "timestamp": "2013-08-25T04:55:42Z",
            "version": 4,
            "changeset": 17493137,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830940090,
            "lat": 53.0838408,
            "lon": 10.5981773,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 4,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Lyraweg",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 1830940096,
            "lat": 53.0839333,
            "lon": 10.5886525,
            "timestamp": "2019-07-21T17:26:33Z",
            "version": 3,
            "changeset": 72487754,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830940097,
            "lat": 53.0840181,
            "lon": 10.5981158,
            "timestamp": "2013-08-25T04:55:42Z",
            "version": 3,
            "changeset": 17493137,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830940100,
            "lat": 53.0847139,
            "lon": 10.5954407,
            "timestamp": "2023-04-20T15:56:33Z",
            "version": 3,
            "changeset": 135156917,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830940101,
            "lat": 53.0845972,
            "lon": 10.5950906,
            "timestamp": "2023-04-20T15:56:33Z",
            "version": 4,
            "changeset": 135156917,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830940105,
            "lat": 53.084236,
            "lon": 10.5933275,
            "timestamp": "2012-08-13T20:30:56Z",
            "version": 2,
            "changeset": 12719349,
            "user": "star-flight",
            "uid": 38867
        },
        {
            "type": "node",
            "id": 1830940114,
            "lat": 53.084213,
            "lon": 10.597917,
            "timestamp": "2013-08-25T04:55:42Z",
            "version": 4,
            "changeset": 17493137,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830940117,
            "lat": 53.0842948,
            "lon": 10.5927452,
            "timestamp": "2023-03-17T20:21:35Z",
            "version": 3,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1830940120,
            "lat": 53.0843501,
            "lon": 10.5920789,
            "timestamp": "2023-03-17T20:21:35Z",
            "version": 3,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1830940121,
            "lat": 53.0844534,
            "lon": 10.5975698,
            "timestamp": "2013-08-25T04:55:42Z",
            "version": 4,
            "changeset": 17493137,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830940128,
            "lat": 53.0844245,
            "lon": 10.5914617,
            "timestamp": "2023-03-17T20:21:35Z",
            "version": 3,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1830940131,
            "lat": 53.0845237,
            "lon": 10.597489,
            "timestamp": "2013-08-25T04:55:42Z",
            "version": 3,
            "changeset": 17493137,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1830940133,
            "lat": 53.0845763,
            "lon": 10.5906997,
            "timestamp": "2023-03-17T20:21:35Z",
            "version": 3,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1830940137,
            "lat": 53.0846415,
            "lon": 10.5899217,
            "timestamp": "2023-03-17T20:21:35Z",
            "version": 2,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1830940148,
            "lat": 53.0848804,
            "lon": 10.5971337,
            "timestamp": "2013-06-20T20:16:59Z",
            "version": 3,
            "changeset": 16635425,
            "user": "GPS-Wolf",
            "uid": 38735
        },
        {
            "type": "node",
            "id": 1830940156,
            "lat": 53.0854047,
            "lon": 10.5902351,
            "timestamp": "2023-03-17T20:21:35Z",
            "version": 3,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1830940161,
            "lat": 53.0861724,
            "lon": 10.5903673,
            "timestamp": "2023-03-17T20:21:35Z",
            "version": 4,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1830940167,
            "lat": 53.0862641,
            "lon": 10.590381,
            "timestamp": "2023-03-17T20:21:35Z",
            "version": 3,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1830942470,
            "lat": 53.0771784,
            "lon": 10.5757453,
            "timestamp": "2018-06-08T09:20:48Z",
            "version": 2,
            "changeset": 59662205,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1830942472,
            "lat": 53.0785843,
            "lon": 10.5786433,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 5,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655,
            "tags": {
                "direction": "backward",
                "highway": "give_way"
            }
        },
        {
            "type": "node",
            "id": 1831231160,
            "lat": 53.0789578,
            "lon": 10.586953,
            "timestamp": "2016-01-23T22:00:23Z",
            "version": 3,
            "changeset": 36766661,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1831312173,
            "lat": 53.0852404,
            "lon": 10.5975851,
            "timestamp": "2015-04-04T21:20:10Z",
            "version": 2,
            "changeset": 29981678,
            "user": "hotteliene",
            "uid": 1913655,
            "tags": {
                "name": "Bad Bevensen",
                "traffic_sign": "city_limit"
            }
        },
        {
            "type": "node",
            "id": 1831312222,
            "lat": 53.0820383,
            "lon": 10.5986392,
            "timestamp": "2013-07-29T08:28:33Z",
            "version": 2,
            "changeset": 17135697,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1831312289,
            "lat": 53.0859114,
            "lon": 10.604089,
            "timestamp": "2021-05-23T07:55:45Z",
            "version": 2,
            "changeset": 105155545,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1831312291,
            "lat": 53.08593,
            "lon": 10.6043041,
            "timestamp": "2021-05-23T07:55:45Z",
            "version": 2,
            "changeset": 105155545,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1831312292,
            "lat": 53.0865583,
            "lon": 10.6041575,
            "timestamp": "2021-05-23T07:55:45Z",
            "version": 3,
            "changeset": 105155545,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1831312293,
            "lat": 53.0865397,
            "lon": 10.6039363,
            "timestamp": "2021-05-23T07:55:45Z",
            "version": 2,
            "changeset": 105155545,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1836761708,
            "lat": 53.076799,
            "lon": 10.5808369,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 3,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1836761713,
            "lat": 53.0770949,
            "lon": 10.5830184,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 3,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 1836761714,
            "lat": 53.0772311,
            "lon": 10.5831505,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 3,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 1836761723,
            "lat": 53.0779178,
            "lon": 10.5788664,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 4,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1836761727,
            "lat": 53.0782805,
            "lon": 10.5788395,
            "timestamp": "2013-03-19T14:09:06Z",
            "version": 2,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1863446398,
            "lat": 53.0853069,
            "lon": 10.5901923,
            "timestamp": "2023-03-17T20:21:35Z",
            "version": 3,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1870432721,
            "lat": 53.0858166,
            "lon": 10.5903204,
            "timestamp": "2023-03-17T20:21:35Z",
            "version": 3,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1871652018,
            "lat": 53.0807446,
            "lon": 10.5883571,
            "timestamp": "2019-07-21T17:26:33Z",
            "version": 2,
            "changeset": 72487754,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1871652024,
            "lat": 53.0808081,
            "lon": 10.58803,
            "timestamp": "2012-08-18T17:00:44Z",
            "version": 1,
            "changeset": 12775063,
            "user": "star-flight",
            "uid": 38867
        },
        {
            "type": "node",
            "id": 1871652025,
            "lat": 53.0808319,
            "lon": 10.5873336,
            "timestamp": "2021-08-07T20:38:35Z",
            "version": 2,
            "changeset": 109325114,
            "user": "OPerivar",
            "uid": 51324
        },
        {
            "type": "node",
            "id": 1871652028,
            "lat": 53.0809885,
            "lon": 10.588039,
            "timestamp": "2012-08-18T17:00:44Z",
            "version": 1,
            "changeset": 12775063,
            "user": "star-flight",
            "uid": 38867
        },
        {
            "type": "node",
            "id": 1871652029,
            "lat": 53.0810123,
            "lon": 10.5873425,
            "timestamp": "2021-08-07T20:38:35Z",
            "version": 2,
            "changeset": 109325114,
            "user": "OPerivar",
            "uid": 51324
        },
        {
            "type": "node",
            "id": 1874119693,
            "lat": 53.0842685,
            "lon": 10.5746408,
            "timestamp": "2012-08-20T09:06:34Z",
            "version": 1,
            "changeset": 12793184,
            "user": "kerosin",
            "uid": 42619
        },
        {
            "type": "node",
            "id": 1874119695,
            "lat": 53.0849191,
            "lon": 10.5750662,
            "timestamp": "2012-08-20T09:06:34Z",
            "version": 1,
            "changeset": 12793184,
            "user": "kerosin",
            "uid": 42619
        },
        {
            "type": "node",
            "id": 1874119699,
            "lat": 53.0845875,
            "lon": 10.574865,
            "timestamp": "2012-08-20T09:06:34Z",
            "version": 1,
            "changeset": 12793184,
            "user": "kerosin",
            "uid": 42619
        },
        {
            "type": "node",
            "id": 1897001713,
            "lat": 53.0849615,
            "lon": 10.5900483,
            "timestamp": "2023-03-17T20:21:36Z",
            "version": 3,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1897001789,
            "lat": 53.0859982,
            "lon": 10.5903468,
            "timestamp": "2023-03-17T20:21:36Z",
            "version": 3,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1928939761,
            "lat": 53.0778092,
            "lon": 10.5750672,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 3,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 1928939779,
            "lat": 53.0782152,
            "lon": 10.574666,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 2,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 1928939789,
            "lat": 53.0784067,
            "lon": 10.5745083,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 3,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "crossing": "uncontrolled",
                "crossing:island": "no",
                "highway": "crossing",
                "kerb": "lowered",
                "tactile_paving": "no",
                "traffic_calming": "table"
            }
        },
        {
            "type": "node",
            "id": 1928939799,
            "lat": 53.0784507,
            "lon": 10.5746439,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 3,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "crossing": "uncontrolled",
                "crossing:island": "no",
                "highway": "crossing",
                "kerb": "lowered",
                "tactile_paving": "no",
                "traffic_calming": "table"
            }
        },
        {
            "type": "node",
            "id": 1928939814,
            "lat": 53.0785657,
            "lon": 10.5744114,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 3,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 1928939829,
            "lat": 53.0786631,
            "lon": 10.5744596,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 3,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 1928939832,
            "lat": 53.0786975,
            "lon": 10.5745199,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 4,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298
        },
        {
            "type": "node",
            "id": 1928939855,
            "lat": 53.0789061,
            "lon": 10.5755342,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 4,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 1928939871,
            "lat": 53.0791096,
            "lon": 10.5763373,
            "timestamp": "2023-01-20T23:54:59Z",
            "version": 2,
            "changeset": 131526917,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 1928939874,
            "lat": 53.0796982,
            "lon": 10.5764745,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 4,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1928939877,
            "lat": 53.0797186,
            "lon": 10.5775959,
            "timestamp": "2014-04-25T09:10:49Z",
            "version": 3,
            "changeset": 21926372,
            "user": "WMWDe",
            "uid": 292562
        },
        {
            "type": "node",
            "id": 1928939903,
            "lat": 53.0800861,
            "lon": 10.5723595,
            "timestamp": "2014-07-07T09:17:45Z",
            "version": 3,
            "changeset": 23999800,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1928939908,
            "lat": 53.0802559,
            "lon": 10.5731553,
            "timestamp": "2013-03-19T14:09:06Z",
            "version": 2,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 1928939924,
            "lat": 53.0802935,
            "lon": 10.5738846,
            "timestamp": "2018-06-08T09:20:48Z",
            "version": 3,
            "changeset": 59662205,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 1944952998,
            "lat": 53.0776298,
            "lon": 10.5788366,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 3,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2067316323,
            "lat": 53.0797989,
            "lon": 10.5790267,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 4,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2120989958,
            "lat": 53.0898052,
            "lon": 10.5643952,
            "timestamp": "2013-06-22T17:29:21Z",
            "version": 2,
            "changeset": 16659340,
            "user": "GPS-Wolf",
            "uid": 38735
        },
        {
            "type": "node",
            "id": 2121521768,
            "lat": 53.087794,
            "lon": 10.5629241,
            "timestamp": "2021-08-30T22:12:33Z",
            "version": 4,
            "changeset": 110481833,
            "user": "openstreet32",
            "uid": 2225599,
            "tags": {
                "bus": "yes",
                "departures_board": "yes",
                "name": "Medingen, Vier Linden",
                "public_transport": "stop_position",
                "route_ref": "7060;7062",
                "shelter": "no"
            }
        },
        {
            "type": "node",
            "id": 2121521770,
            "lat": 53.08872,
            "lon": 10.5620895,
            "timestamp": "2020-10-13T10:03:30Z",
            "version": 3,
            "changeset": 92407019,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2121521772,
            "lat": 53.0894703,
            "lon": 10.5637701,
            "timestamp": "2020-02-03T14:45:06Z",
            "version": 3,
            "changeset": 80485479,
            "user": "raanedreglih",
            "uid": 8498982
        },
        {
            "type": "node",
            "id": 2121521774,
            "lat": 53.0895779,
            "lon": 10.5639813,
            "timestamp": "2020-02-03T14:45:06Z",
            "version": 3,
            "changeset": 80485479,
            "user": "raanedreglih",
            "uid": 8498982
        },
        {
            "type": "node",
            "id": 2121521805,
            "lat": 53.0910032,
            "lon": 10.5620988,
            "timestamp": "2018-11-30T14:35:04Z",
            "version": 3,
            "changeset": 65046519,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2121521814,
            "lat": 53.0911661,
            "lon": 10.5619973,
            "timestamp": "2018-11-30T14:35:04Z",
            "version": 2,
            "changeset": 65046519,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2140193029,
            "lat": 53.0766432,
            "lon": 10.5664523,
            "timestamp": "2013-03-19T14:09:06Z",
            "version": 2,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2140193034,
            "lat": 53.0787718,
            "lon": 10.5652339,
            "timestamp": "2013-05-07T22:28:41Z",
            "version": 3,
            "changeset": 16020589,
            "user": "WMWDe",
            "uid": 292562
        },
        {
            "type": "node",
            "id": 2209935807,
            "lat": 53.0758856,
            "lon": 10.5675033,
            "timestamp": "2013-03-19T14:08:43Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209935811,
            "lat": 53.0763157,
            "lon": 10.566896,
            "timestamp": "2013-03-19T14:08:43Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209935812,
            "lat": 53.0764049,
            "lon": 10.5668295,
            "timestamp": "2013-03-19T14:08:43Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209935819,
            "lat": 53.0765953,
            "lon": 10.5665613,
            "timestamp": "2013-03-19T14:08:43Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209935821,
            "lat": 53.0766592,
            "lon": 10.5710162,
            "timestamp": "2019-07-12T22:07:01Z",
            "version": 3,
            "changeset": 72198994,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 2209935833,
            "lat": 53.0771145,
            "lon": 10.5657923,
            "timestamp": "2013-03-19T14:08:43Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209935839,
            "lat": 53.0772404,
            "lon": 10.5657155,
            "timestamp": "2013-03-19T14:08:44Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209935841,
            "lat": 53.0772839,
            "lon": 10.570621,
            "timestamp": "2019-07-12T22:07:01Z",
            "version": 2,
            "changeset": 72198994,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 2209935848,
            "lat": 53.0774848,
            "lon": 10.5789087,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 2,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2209935855,
            "lat": 53.0776429,
            "lon": 10.5655941,
            "timestamp": "2013-03-19T14:08:44Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209935861,
            "lat": 53.0777256,
            "lon": 10.5788242,
            "timestamp": "2013-03-19T14:08:44Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209935881,
            "lat": 53.078001,
            "lon": 10.5788798,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 2,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2209935903,
            "lat": 53.0783334,
            "lon": 10.5699262,
            "timestamp": "2013-03-19T14:08:45Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209935918,
            "lat": 53.0785218,
            "lon": 10.578771,
            "timestamp": "2013-03-19T14:08:45Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209935967,
            "lat": 53.0789065,
            "lon": 10.5799934,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 4,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2209935969,
            "lat": 53.0789138,
            "lon": 10.5695609,
            "timestamp": "2023-07-25T16:35:39Z",
            "version": 2,
            "changeset": 138998377,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 2209935971,
            "lat": 53.0789454,
            "lon": 10.5799354,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 4,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2209935979,
            "lat": 53.0789807,
            "lon": 10.5798301,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 4,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2209935985,
            "lat": 53.0790966,
            "lon": 10.5793258,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 3,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2209935989,
            "lat": 53.079089,
            "lon": 10.5694625,
            "timestamp": "2013-03-19T14:08:46Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209936061,
            "lat": 53.0793433,
            "lon": 10.5771154,
            "timestamp": "2013-03-19T14:08:47Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209936143,
            "lat": 53.0794597,
            "lon": 10.5792125,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 3,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2209936193,
            "lat": 53.0799584,
            "lon": 10.5648445,
            "timestamp": "2013-03-19T14:08:48Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209936261,
            "lat": 53.0802327,
            "lon": 10.5745127,
            "timestamp": "2023-01-24T02:46:54Z",
            "version": 3,
            "changeset": 131630804,
            "user": "wermak",
            "uid": 11211647
        },
        {
            "type": "node",
            "id": 2209936263,
            "lat": 53.0802353,
            "lon": 10.5751628,
            "timestamp": "2013-03-19T14:08:49Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209936265,
            "lat": 53.0802639,
            "lon": 10.5740449,
            "timestamp": "2018-06-08T09:20:48Z",
            "version": 2,
            "changeset": 59662205,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2209936266,
            "lat": 53.0802499,
            "lon": 10.5753002,
            "timestamp": "2013-03-19T14:08:49Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209936275,
            "lat": 53.0803058,
            "lon": 10.5754361,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 4,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 2209936281,
            "lat": 53.0803106,
            "lon": 10.5647364,
            "timestamp": "2013-03-19T14:08:49Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209936283,
            "lat": 53.0803192,
            "lon": 10.5735477,
            "timestamp": "2018-06-08T09:20:48Z",
            "version": 2,
            "changeset": 59662205,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2209936332,
            "lat": 53.0807413,
            "lon": 10.569197,
            "timestamp": "2013-03-19T14:08:49Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209936373,
            "lat": 53.0810587,
            "lon": 10.56869,
            "timestamp": "2014-07-07T09:17:52Z",
            "version": 2,
            "changeset": 23999978,
            "user": "WMWDe",
            "uid": 292562
        },
        {
            "type": "node",
            "id": 2209936394,
            "lat": 53.0811645,
            "lon": 10.5681349,
            "timestamp": "2013-03-19T14:08:50Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209936415,
            "lat": 53.0812242,
            "lon": 10.5644559,
            "timestamp": "2013-03-19T14:08:50Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209936427,
            "lat": 53.0812857,
            "lon": 10.5669204,
            "timestamp": "2013-03-19T14:08:50Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2209936431,
            "lat": 53.0812882,
            "lon": 10.5667209,
            "timestamp": "2013-03-19T14:08:51Z",
            "version": 1,
            "changeset": 15420246,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2289714732,
            "lat": 53.0860501,
            "lon": 10.6040553,
            "timestamp": "2021-05-23T07:55:46Z",
            "version": 3,
            "changeset": 105155545,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 2289714756,
            "lat": 53.0865005,
            "lon": 10.604171,
            "timestamp": "2021-05-23T07:55:46Z",
            "version": 2,
            "changeset": 105155545,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 2347346252,
            "lat": 53.0841671,
            "lon": 10.5940124,
            "timestamp": "2023-04-20T15:56:33Z",
            "version": 2,
            "changeset": 135156917,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2353986172,
            "lat": 53.0792255,
            "lon": 10.5876859,
            "timestamp": "2013-07-29T07:34:34Z",
            "version": 2,
            "changeset": 17135110,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2353986174,
            "lat": 53.0834557,
            "lon": 10.5981212,
            "timestamp": "2013-06-20T20:16:55Z",
            "version": 1,
            "changeset": 16635425,
            "user": "GPS-Wolf",
            "uid": 38735
        },
        {
            "type": "node",
            "id": 2355850965,
            "lat": 53.0766977,
            "lon": 10.5828108,
            "timestamp": "2023-10-03T11:55:35Z",
            "version": 9,
            "changeset": 142097163,
            "user": "kizu",
            "uid": 162469,
            "tags": {
                "button_operated": "yes",
                "crossing": "traffic_signals",
                "crossing:island": "yes",
                "highway": "crossing",
                "tactile_paving": "no",
                "traffic_signals:sound": "no",
                "traffic_signals:vibration": "yes"
            }
        },
        {
            "type": "node",
            "id": 2355850966,
            "lat": 53.0767261,
            "lon": 10.5826451,
            "timestamp": "2023-10-03T14:07:55Z",
            "version": 5,
            "changeset": 142103179,
            "user": "kizu",
            "uid": 162469,
            "tags": {
                "crossing": "uncontrolled",
                "crossing:island": "no",
                "crossing:markings": "dashes",
                "highway": "crossing"
            }
        },
        {
            "type": "node",
            "id": 2356277087,
            "lat": 53.0842854,
            "lon": 10.5944067,
            "timestamp": "2023-04-20T15:56:33Z",
            "version": 2,
            "changeset": 135156917,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2400107876,
            "lat": 53.0751388,
            "lon": 10.5992471,
            "timestamp": "2020-11-13T20:07:34Z",
            "version": 2,
            "changeset": 94083932,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2400107963,
            "lat": 53.0853568,
            "lon": 10.5980958,
            "timestamp": "2013-07-29T07:08:01Z",
            "version": 1,
            "changeset": 17134832,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400138404,
            "lat": 53.074869,
            "lon": 10.5955552,
            "timestamp": "2013-07-29T07:32:08Z",
            "version": 1,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400138406,
            "lat": 53.0756653,
            "lon": 10.5952589,
            "timestamp": "2013-07-29T07:32:08Z",
            "version": 1,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400138408,
            "lat": 53.07571,
            "lon": 10.5952533,
            "timestamp": "2013-07-29T07:32:08Z",
            "version": 1,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400138431,
            "lat": 53.0761735,
            "lon": 10.5984373,
            "timestamp": "2013-07-29T07:32:09Z",
            "version": 1,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400138437,
            "lat": 53.0764778,
            "lon": 10.5981227,
            "timestamp": "2013-07-29T07:32:09Z",
            "version": 1,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400138441,
            "lat": 53.0766285,
            "lon": 10.5979669,
            "timestamp": "2013-07-29T07:32:09Z",
            "version": 1,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400138443,
            "lat": 53.0771154,
            "lon": 10.5978758,
            "timestamp": "2013-07-29T07:32:09Z",
            "version": 1,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400138444,
            "lat": 53.0772323,
            "lon": 10.5979538,
            "timestamp": "2016-01-30T09:25:46Z",
            "version": 2,
            "changeset": 36894703,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2400138458,
            "lat": 53.078502,
            "lon": 10.5978623,
            "timestamp": "2013-07-29T07:32:09Z",
            "version": 1,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400138492,
            "lat": 53.0790246,
            "lon": 10.5912214,
            "timestamp": "2013-07-29T07:32:10Z",
            "version": 1,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400138511,
            "lat": 53.0792357,
            "lon": 10.5906916,
            "timestamp": "2016-01-30T09:25:46Z",
            "version": 2,
            "changeset": 36894703,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2400138517,
            "lat": 53.0793248,
            "lon": 10.58815,
            "timestamp": "2023-10-03T11:55:38Z",
            "version": 8,
            "changeset": 142097159,
            "user": "kizu",
            "uid": 162469,
            "tags": {
                "bicycle": "yes",
                "button_operated": "yes",
                "crossing": "traffic_signals",
                "crossing:island": "no",
                "crossing_ref": "pelican",
                "highway": "crossing",
                "tactile_paving": "yes",
                "traffic_signals:sound": "yes",
                "traffic_signals:vibration": "yes"
            }
        },
        {
            "type": "node",
            "id": 2400138519,
            "lat": 53.0793853,
            "lon": 10.5901493,
            "timestamp": "2016-01-30T09:25:46Z",
            "version": 2,
            "changeset": 36894703,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2400138521,
            "lat": 53.0793949,
            "lon": 10.5901144,
            "timestamp": "2013-07-29T07:32:10Z",
            "version": 1,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400138523,
            "lat": 53.0794119,
            "lon": 10.5880109,
            "timestamp": "2023-10-03T11:55:40Z",
            "version": 8,
            "changeset": 142097163,
            "user": "kizu",
            "uid": 162469,
            "tags": {
                "bicycle": "yes",
                "button_operated": "yes",
                "crossing": "traffic_signals",
                "crossing:island": "no",
                "crossing_ref": "pelican",
                "highway": "crossing",
                "tactile_paving": "yes",
                "traffic_signals:sound": "yes",
                "traffic_signals:vibration": "yes"
            }
        },
        {
            "type": "node",
            "id": 2400138525,
            "lat": 53.0794104,
            "lon": 10.5900524,
            "timestamp": "2013-07-29T07:32:10Z",
            "version": 1,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400138535,
            "lat": 53.0794757,
            "lon": 10.5897436,
            "timestamp": "2013-07-29T07:32:11Z",
            "version": 1,
            "changeset": 17135089,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400140184,
            "lat": 53.0790923,
            "lon": 10.5872773,
            "timestamp": "2016-01-23T22:00:23Z",
            "version": 2,
            "changeset": 36766661,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2400140187,
            "lat": 53.0794416,
            "lon": 10.5888771,
            "timestamp": "2016-01-23T22:00:23Z",
            "version": 2,
            "changeset": 36766661,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2400143348,
            "lat": 53.0793735,
            "lon": 10.5884483,
            "timestamp": "2013-07-29T07:37:46Z",
            "version": 1,
            "changeset": 17135140,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400143354,
            "lat": 53.0795875,
            "lon": 10.5880814,
            "timestamp": "2019-07-21T17:26:33Z",
            "version": 2,
            "changeset": 72487754,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2400172041,
            "lat": 53.0770867,
            "lon": 10.5978599,
            "timestamp": "2013-07-29T08:18:26Z",
            "version": 1,
            "changeset": 17135603,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400172050,
            "lat": 53.0772647,
            "lon": 10.5929433,
            "timestamp": "2013-07-29T08:18:26Z",
            "version": 1,
            "changeset": 17135603,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400172052,
            "lat": 53.0772995,
            "lon": 10.5978885,
            "timestamp": "2013-07-29T08:18:26Z",
            "version": 1,
            "changeset": 17135603,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400172054,
            "lat": 53.0773462,
            "lon": 10.5938894,
            "timestamp": "2013-07-29T08:18:26Z",
            "version": 1,
            "changeset": 17135603,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2400177874,
            "lat": 53.0817088,
            "lon": 10.5987611,
            "timestamp": "2013-07-29T08:28:30Z",
            "version": 1,
            "changeset": 17135697,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2405511954,
            "lat": 53.0794905,
            "lon": 10.5892848,
            "timestamp": "2013-08-02T20:23:07Z",
            "version": 1,
            "changeset": 17196539,
            "user": "simlox",
            "uid": 795290
        },
        {
            "type": "node",
            "id": 2405511955,
            "lat": 53.0794911,
            "lon": 10.5896446,
            "timestamp": "2013-08-02T20:23:07Z",
            "version": 1,
            "changeset": 17196539,
            "user": "simlox",
            "uid": 795290
        },
        {
            "type": "node",
            "id": 2430675583,
            "lat": 53.0833081,
            "lon": 10.5981284,
            "timestamp": "2013-08-25T04:55:33Z",
            "version": 1,
            "changeset": 17493137,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2430675588,
            "lat": 53.0839197,
            "lon": 10.5981606,
            "timestamp": "2013-08-25T04:55:33Z",
            "version": 1,
            "changeset": 17493137,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2430675592,
            "lat": 53.0841145,
            "lon": 10.5980339,
            "timestamp": "2013-08-25T04:55:33Z",
            "version": 1,
            "changeset": 17493137,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2430676779,
            "lat": 53.0858677,
            "lon": 10.600254,
            "timestamp": "2017-02-19T22:27:32Z",
            "version": 2,
            "changeset": 46228556,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2430796339,
            "lat": 53.0772301,
            "lon": 10.5922443,
            "timestamp": "2013-08-25T08:53:22Z",
            "version": 1,
            "changeset": 17495114,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2434015353,
            "lat": 53.0800586,
            "lon": 10.5721427,
            "timestamp": "2014-07-07T09:17:45Z",
            "version": 3,
            "changeset": 23999800,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 2434253404,
            "lat": 53.0775257,
            "lon": 10.5764727,
            "timestamp": "2019-07-12T22:07:01Z",
            "version": 2,
            "changeset": 72198994,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 2434253406,
            "lat": 53.0784654,
            "lon": 10.5783996,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 3,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2434253418,
            "lat": 53.0786156,
            "lon": 10.5787338,
            "timestamp": "2014-04-25T09:10:51Z",
            "version": 2,
            "changeset": 21926372,
            "user": "WMWDe",
            "uid": 292562
        },
        {
            "type": "node",
            "id": 2434253453,
            "lat": 53.0789983,
            "lon": 10.5781698,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 2,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 2952146505,
            "lat": 53.0773831,
            "lon": 10.5753982,
            "timestamp": "2020-12-26T12:50:03Z",
            "version": 3,
            "changeset": 96450250,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 2952152847,
            "lat": 53.0782457,
            "lon": 10.5747986,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 3,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298
        },
        {
            "type": "node",
            "id": 2952158745,
            "lat": 53.081611,
            "lon": 10.5732204,
            "timestamp": "2014-07-07T09:20:46Z",
            "version": 1,
            "changeset": 23999800,
            "user": "biker@gf",
            "uid": 333167
        },
        {
            "type": "node",
            "id": 3334063021,
            "lat": 53.0886171,
            "lon": 10.5622493,
            "timestamp": "2023-07-25T17:13:50Z",
            "version": 5,
            "changeset": 138999993,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "direction": "forward",
                "highway": "stop"
            }
        },
        {
            "type": "node",
            "id": 3334063023,
            "lat": 53.0871496,
            "lon": 10.5634849,
            "timestamp": "2021-09-07T19:56:55Z",
            "version": 4,
            "changeset": 110877632,
            "user": "openstreet32",
            "uid": 2225599,
            "tags": {
                "name": "Medingen",
                "traffic_sign": "city_limit",
                "traffic_sign:direction": "forward"
            }
        },
        {
            "type": "node",
            "id": 3334181796,
            "lat": 53.0802745,
            "lon": 10.5753641,
            "timestamp": "2021-06-22T12:06:43Z",
            "version": 2,
            "changeset": 106775608,
            "user": "DaN0mic",
            "uid": 12999434,
            "tags": {
                "direction": "backward",
                "highway": "stop"
            }
        },
        {
            "type": "node",
            "id": 3438135394,
            "lat": 53.0857635,
            "lon": 10.5998102,
            "timestamp": "2017-02-19T22:27:32Z",
            "version": 2,
            "changeset": 46228556,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 3540141563,
            "lat": 53.0919679,
            "lon": 10.560453,
            "timestamp": "2020-01-30T22:59:48Z",
            "version": 3,
            "changeset": 80340285,
            "user": "sundew",
            "uid": 617520,
            "tags": {
                "highway": "bus_stop",
                "name": "Medingen, Siedlung",
                "public_transport": "platform",
                "route_ref": "7060",
                "shelter": "yes"
            }
        },
        {
            "type": "node",
            "id": 3654391552,
            "lat": 53.0794716,
            "lon": 10.5768658,
            "timestamp": "2022-06-13T08:06:52Z",
            "version": 5,
            "changeset": 122312067,
            "user": "Ralle61",
            "uid": 10592928,
            "tags": {
                "crossing": "uncontrolled",
                "crossing:island": "no",
                "crossing_ref": "zebra",
                "highway": "crossing",
                "kerb": "lowered",
                "tactile_paving": "yes"
            }
        },
        {
            "type": "node",
            "id": 3654397239,
            "lat": 53.0804184,
            "lon": 10.575266,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 2,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655,
            "tags": {
                "crossing": "uncontrolled",
                "crossing_ref": "zebra",
                "highway": "crossing",
                "kerb": "lowered"
            }
        },
        {
            "type": "node",
            "id": 3655356094,
            "lat": 53.078893,
            "lon": 10.5784447,
            "timestamp": "2022-06-13T08:38:49Z",
            "version": 4,
            "changeset": 122312067,
            "user": "Ralle61",
            "uid": 10592928,
            "tags": {
                "crossing": "uncontrolled",
                "crossing:island": "no",
                "crossing_ref": "zebra",
                "highway": "crossing",
                "tactile_paving": "no"
            }
        },
        {
            "type": "node",
            "id": 3655356099,
            "lat": 53.076675,
            "lon": 10.5815565,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 5,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655,
            "tags": {
                "crossing": "uncontrolled",
                "crossing_ref": "zebra",
                "highway": "crossing",
                "tactile_paving": "no"
            }
        },
        {
            "type": "node",
            "id": 3655356103,
            "lat": 53.0811058,
            "lon": 10.5883905,
            "timestamp": "2023-03-17T20:21:36Z",
            "version": 5,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520,
            "tags": {
                "crossing": "zebra",
                "crossing:island": "no",
                "highway": "crossing",
                "tactile_paving": "yes"
            }
        },
        {
            "type": "node",
            "id": 3781774547,
            "lat": 53.0843176,
            "lon": 10.5660193,
            "timestamp": "2015-10-11T08:40:00Z",
            "version": 1,
            "changeset": 34564481,
            "user": "Himberger",
            "uid": 605326
        },
        {
            "type": "node",
            "id": 3957782514,
            "lat": 53.0841539,
            "lon": 10.588673,
            "timestamp": "2022-09-03T14:18:23Z",
            "version": 4,
            "changeset": 125740299,
            "user": "ftrcat",
            "uid": 6419287,
            "tags": {
                "crossing": "zebra",
                "crossing:island": "no",
                "highway": "crossing",
                "tactile_paving": "yes"
            }
        },
        {
            "type": "node",
            "id": 3957785305,
            "lat": 53.0775883,
            "lon": 10.578854,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 3,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655,
            "tags": {
                "crossing": "uncontrolled",
                "crossing_ref": "zebra",
                "highway": "crossing",
                "tactile_paving": "no"
            }
        },
        {
            "type": "node",
            "id": 3962427747,
            "lat": 53.0782962,
            "lon": 10.5854343,
            "timestamp": "2016-01-23T21:45:33Z",
            "version": 1,
            "changeset": 36766452,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4083290614,
            "lat": 53.0803213,
            "lon": 10.5736849,
            "timestamp": "2018-06-08T09:20:48Z",
            "version": 2,
            "changeset": 59662205,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4083516750,
            "lat": 53.0831657,
            "lon": 10.5706322,
            "timestamp": "2016-03-28T18:48:03Z",
            "version": 1,
            "changeset": 38127309,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4084404975,
            "lat": 53.085607,
            "lon": 10.5730668,
            "timestamp": "2016-03-29T05:15:30Z",
            "version": 1,
            "changeset": 38135252,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4084407809,
            "lat": 53.0854415,
            "lon": 10.5734941,
            "timestamp": "2016-03-29T05:15:31Z",
            "version": 1,
            "changeset": 38135252,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4084407811,
            "lat": 53.0853124,
            "lon": 10.5738274,
            "timestamp": "2016-03-29T05:15:31Z",
            "version": 1,
            "changeset": 38135252,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4084407812,
            "lat": 53.0851743,
            "lon": 10.5741837,
            "timestamp": "2016-03-29T05:15:31Z",
            "version": 1,
            "changeset": 38135252,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4084542752,
            "lat": 53.0806686,
            "lon": 10.5748414,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 2,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4084561682,
            "lat": 53.0850155,
            "lon": 10.572132,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 2,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4084561688,
            "lat": 53.0852531,
            "lon": 10.5717103,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 2,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4084566478,
            "lat": 53.0842752,
            "lon": 10.5734461,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 2,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4084566488,
            "lat": 53.0840595,
            "lon": 10.573829,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 2,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4084633231,
            "lat": 53.079022,
            "lon": 10.5760484,
            "timestamp": "2023-01-20T23:54:59Z",
            "version": 2,
            "changeset": 131526917,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 4084633249,
            "lat": 53.0799334,
            "lon": 10.5760557,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 4,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 4084633261,
            "lat": 53.0806869,
            "lon": 10.5699381,
            "timestamp": "2019-07-07T11:23:17Z",
            "version": 2,
            "changeset": 71979427,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 4084633269,
            "lat": 53.0835363,
            "lon": 10.569135,
            "timestamp": "2021-03-13T12:16:17Z",
            "version": 3,
            "changeset": 100951148,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 4084924590,
            "lat": 53.0808606,
            "lon": 10.5645675,
            "timestamp": "2016-03-29T12:30:40Z",
            "version": 1,
            "changeset": 38143516,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4084924608,
            "lat": 53.0804215,
            "lon": 10.5647023,
            "timestamp": "2016-03-29T12:30:40Z",
            "version": 1,
            "changeset": 38143516,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4084924626,
            "lat": 53.0801003,
            "lon": 10.5648009,
            "timestamp": "2016-03-29T12:30:40Z",
            "version": 1,
            "changeset": 38143516,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4084933964,
            "lat": 53.0784553,
            "lon": 10.5653374,
            "timestamp": "2016-03-29T12:38:07Z",
            "version": 1,
            "changeset": 38143639,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4084933966,
            "lat": 53.078203,
            "lon": 10.5654186,
            "timestamp": "2017-11-26T11:36:20Z",
            "version": 2,
            "changeset": 54092885,
            "user": "OPerivar",
            "uid": 51324
        },
        {
            "type": "node",
            "id": 4084943429,
            "lat": 53.0771546,
            "lon": 10.5657648,
            "timestamp": "2016-03-29T12:48:41Z",
            "version": 1,
            "changeset": 38143792,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4084943435,
            "lat": 53.0769846,
            "lon": 10.5659742,
            "timestamp": "2016-03-29T12:48:41Z",
            "version": 1,
            "changeset": 38143792,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4084943488,
            "lat": 53.076418,
            "lon": 10.5668141,
            "timestamp": "2016-03-29T12:48:42Z",
            "version": 1,
            "changeset": 38143792,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4084991326,
            "lat": 53.0763304,
            "lon": 10.5668851,
            "timestamp": "2016-03-29T13:04:45Z",
            "version": 1,
            "changeset": 38144052,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4084991340,
            "lat": 53.0761023,
            "lon": 10.5671894,
            "timestamp": "2016-03-29T13:04:45Z",
            "version": 1,
            "changeset": 38144052,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4084991342,
            "lat": 53.075945,
            "lon": 10.5674131,
            "timestamp": "2016-03-29T13:04:45Z",
            "version": 1,
            "changeset": 38144052,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4085018072,
            "lat": 53.0804124,
            "lon": 10.569253,
            "timestamp": "2016-03-29T13:22:16Z",
            "version": 1,
            "changeset": 38144314,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4085025816,
            "lat": 53.0791777,
            "lon": 10.5694504,
            "timestamp": "2016-03-29T13:26:13Z",
            "version": 1,
            "changeset": 38144374,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4085156321,
            "lat": 53.0798074,
            "lon": 10.5789578,
            "timestamp": "2018-06-09T16:13:08Z",
            "version": 3,
            "changeset": 59694369,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4085156322,
            "lat": 53.0796512,
            "lon": 10.5793389,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 6,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4085356272,
            "lat": 53.0770367,
            "lon": 10.5799068,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 2,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4086947404,
            "lat": 53.0778103,
            "lon": 10.5918576,
            "timestamp": "2016-03-30T19:00:49Z",
            "version": 1,
            "changeset": 38177512,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4088626876,
            "lat": 53.0772518,
            "lon": 10.592682,
            "timestamp": "2016-03-31T16:31:05Z",
            "version": 1,
            "changeset": 38202404,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4088626878,
            "lat": 53.0772711,
            "lon": 10.5930335,
            "timestamp": "2016-03-31T16:31:05Z",
            "version": 1,
            "changeset": 38202404,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4088650616,
            "lat": 53.0776383,
            "lon": 10.5919557,
            "timestamp": "2016-03-31T16:47:22Z",
            "version": 1,
            "changeset": 38202903,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4088650618,
            "lat": 53.0775032,
            "lon": 10.5920328,
            "timestamp": "2016-03-31T16:47:22Z",
            "version": 1,
            "changeset": 38202903,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4088650638,
            "lat": 53.0780818,
            "lon": 10.5917027,
            "timestamp": "2016-03-31T16:47:22Z",
            "version": 1,
            "changeset": 38202903,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4088650640,
            "lat": 53.0779333,
            "lon": 10.5917874,
            "timestamp": "2016-03-31T16:47:22Z",
            "version": 1,
            "changeset": 38202903,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4088650642,
            "lat": 53.0777833,
            "lon": 10.591873,
            "timestamp": "2016-03-31T16:47:22Z",
            "version": 1,
            "changeset": 38202903,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4088650658,
            "lat": 53.0785466,
            "lon": 10.5914376,
            "timestamp": "2016-03-31T16:47:23Z",
            "version": 1,
            "changeset": 38202903,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4088651152,
            "lat": 53.0774142,
            "lon": 10.5946315,
            "timestamp": "2016-03-31T16:47:24Z",
            "version": 1,
            "changeset": 38202903,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4088651154,
            "lat": 53.0773971,
            "lon": 10.5943944,
            "timestamp": "2016-03-31T16:47:24Z",
            "version": 1,
            "changeset": 38202903,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4089040077,
            "lat": 53.0766344,
            "lon": 10.5949263,
            "timestamp": "2016-03-31T21:08:34Z",
            "version": 1,
            "changeset": 38212285,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4090393443,
            "lat": 53.0771738,
            "lon": 10.59472,
            "timestamp": "2016-04-01T17:38:37Z",
            "version": 1,
            "changeset": 38232058,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4090465587,
            "lat": 53.0759243,
            "lon": 10.5952316,
            "timestamp": "2016-04-01T18:17:37Z",
            "version": 1,
            "changeset": 38233018,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4090465689,
            "lat": 53.0761559,
            "lon": 10.5951938,
            "timestamp": "2016-04-01T18:17:37Z",
            "version": 1,
            "changeset": 38233018,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4090641225,
            "lat": 53.0756668,
            "lon": 10.598961,
            "timestamp": "2016-04-01T19:37:48Z",
            "version": 1,
            "changeset": 38235346,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4090641262,
            "lat": 53.0753542,
            "lon": 10.5992613,
            "timestamp": "2020-11-13T20:07:34Z",
            "version": 2,
            "changeset": 94083932,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4092305251,
            "lat": 53.0759871,
            "lon": 10.5986299,
            "timestamp": "2016-04-02T11:26:04Z",
            "version": 1,
            "changeset": 38246833,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4092305283,
            "lat": 53.0763206,
            "lon": 10.5982852,
            "timestamp": "2017-11-26T11:36:20Z",
            "version": 2,
            "changeset": 54092885,
            "user": "OPerivar",
            "uid": 51324
        },
        {
            "type": "node",
            "id": 4092645341,
            "lat": 53.0803425,
            "lon": 10.597695,
            "timestamp": "2016-04-13T20:45:23Z",
            "version": 2,
            "changeset": 38537965,
            "user": "letihu",
            "uid": 1787357
        },
        {
            "type": "node",
            "id": 4092645384,
            "lat": 53.0804104,
            "lon": 10.5984151,
            "timestamp": "2016-04-13T20:45:23Z",
            "version": 2,
            "changeset": 38537965,
            "user": "letihu",
            "uid": 1787357
        },
        {
            "type": "node",
            "id": 4092682158,
            "lat": 53.0838038,
            "lon": 10.5981791,
            "timestamp": "2016-04-02T14:42:29Z",
            "version": 1,
            "changeset": 38249707,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4093691924,
            "lat": 53.0789868,
            "lon": 10.5977241,
            "timestamp": "2016-04-02T21:08:52Z",
            "version": 1,
            "changeset": 38256073,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4093691926,
            "lat": 53.0795978,
            "lon": 10.59755,
            "timestamp": "2016-04-02T21:08:52Z",
            "version": 1,
            "changeset": 38256073,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4093691928,
            "lat": 53.0794677,
            "lon": 10.597587,
            "timestamp": "2016-04-02T21:08:52Z",
            "version": 1,
            "changeset": 38256073,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4093691930,
            "lat": 53.0792748,
            "lon": 10.597642,
            "timestamp": "2016-04-02T21:08:52Z",
            "version": 1,
            "changeset": 38256073,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4093691932,
            "lat": 53.0798016,
            "lon": 10.5974919,
            "timestamp": "2016-04-02T21:08:52Z",
            "version": 1,
            "changeset": 38256073,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4093691934,
            "lat": 53.0784619,
            "lon": 10.5978737,
            "timestamp": "2016-04-02T21:08:52Z",
            "version": 1,
            "changeset": 38256073,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4093691936,
            "lat": 53.0781122,
            "lon": 10.5979734,
            "timestamp": "2016-04-02T21:08:52Z",
            "version": 1,
            "changeset": 38256073,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4093691938,
            "lat": 53.0778593,
            "lon": 10.5980455,
            "timestamp": "2016-04-02T21:08:52Z",
            "version": 1,
            "changeset": 38256073,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4094991276,
            "lat": 53.0783078,
            "lon": 10.5979176,
            "timestamp": "2016-04-03T08:06:54Z",
            "version": 1,
            "changeset": 38262101,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4094999994,
            "lat": 53.0792152,
            "lon": 10.597659,
            "timestamp": "2016-04-03T08:06:55Z",
            "version": 1,
            "changeset": 38262101,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4095000024,
            "lat": 53.079573,
            "lon": 10.597557,
            "timestamp": "2016-04-03T08:06:55Z",
            "version": 1,
            "changeset": 38262101,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4095670939,
            "lat": 53.0836587,
            "lon": 10.5886271,
            "timestamp": "2019-07-21T17:26:33Z",
            "version": 2,
            "changeset": 72487754,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4095683962,
            "lat": 53.0827727,
            "lon": 10.588545,
            "timestamp": "2019-07-21T17:26:33Z",
            "version": 2,
            "changeset": 72487754,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4131316865,
            "lat": 53.075903,
            "lon": 10.5685677,
            "timestamp": "2016-04-18T19:57:39Z",
            "version": 1,
            "changeset": 38676765,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4131316868,
            "lat": 53.0760237,
            "lon": 10.5694142,
            "timestamp": "2019-07-12T22:07:01Z",
            "version": 2,
            "changeset": 72198994,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 4131316880,
            "lat": 53.076073,
            "lon": 10.5697723,
            "timestamp": "2016-04-18T19:57:39Z",
            "version": 1,
            "changeset": 38676765,
            "user": "hknorr",
            "uid": 3743128
        },
        {
            "type": "node",
            "id": 4159999696,
            "lat": 53.0766384,
            "lon": 10.5819749,
            "timestamp": "2020-10-13T10:15:39Z",
            "version": 4,
            "changeset": 92407968,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4159999701,
            "lat": 53.0767488,
            "lon": 10.581066,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 3,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 4535837537,
            "lat": 53.0780697,
            "lon": 10.5748557,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 3,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298
        },
        {
            "type": "node",
            "id": 5678656955,
            "lat": 53.0774023,
            "lon": 10.5834288,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 2,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 5678656956,
            "lat": 53.0772903,
            "lon": 10.5832337,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 2,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 5678656957,
            "lat": 53.0771638,
            "lon": 10.5830815,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 2,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 5678656958,
            "lat": 53.0770204,
            "lon": 10.5829628,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 2,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 5678656959,
            "lat": 53.0773535,
            "lon": 10.5833396,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 2,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 5695215063,
            "lat": 53.078012,
            "lon": 10.5774587,
            "timestamp": "2019-12-26T22:56:57Z",
            "version": 3,
            "changeset": 78900282,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 5994182982,
            "lat": 53.0765692,
            "lon": 10.5823358,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 4,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 5994182984,
            "lat": 53.0766844,
            "lon": 10.5825665,
            "timestamp": "2020-10-13T10:15:39Z",
            "version": 3,
            "changeset": 92407968,
            "user": "hotteliene",
            "uid": 1913655,
            "tags": {
                "highway": "give_way"
            }
        },
        {
            "type": "node",
            "id": 5994183885,
            "lat": 53.0767799,
            "lon": 10.5827244,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 4,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 5994183891,
            "lat": 53.0766477,
            "lon": 10.5824492,
            "timestamp": "2020-10-13T10:15:39Z",
            "version": 3,
            "changeset": 92407968,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 5994183892,
            "lat": 53.0767501,
            "lon": 10.5826845,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 3,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 5994183894,
            "lat": 53.0766026,
            "lon": 10.5828009,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 2,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 5994183895,
            "lat": 53.0765411,
            "lon": 10.582604,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 5,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "crossing": "no",
                "highway": "traffic_signals"
            }
        },
        {
            "type": "node",
            "id": 5994183901,
            "lat": 53.0788397,
            "lon": 10.5797684,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 3,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6106339021,
            "lat": 53.0909194,
            "lon": 10.5621126,
            "timestamp": "2018-11-30T14:35:04Z",
            "version": 1,
            "changeset": 65046519,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6106339022,
            "lat": 53.0908211,
            "lon": 10.5621006,
            "timestamp": "2018-11-30T14:35:04Z",
            "version": 1,
            "changeset": 65046519,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6106339023,
            "lat": 53.0889501,
            "lon": 10.5619611,
            "timestamp": "2018-11-30T14:35:04Z",
            "version": 1,
            "changeset": 65046519,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6106357613,
            "lat": 53.0920759,
            "lon": 10.5603155,
            "timestamp": "2018-11-30T14:40:53Z",
            "version": 1,
            "changeset": 65046702,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6635857980,
            "lat": 53.0837649,
            "lon": 10.5685277,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 1,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6635857981,
            "lat": 53.0837105,
            "lon": 10.5686465,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 1,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6635857982,
            "lat": 53.0835445,
            "lon": 10.5692433,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 1,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6635857983,
            "lat": 53.083555,
            "lon": 10.568967,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 1,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6635857984,
            "lat": 53.083566,
            "lon": 10.5703014,
            "timestamp": "2020-10-13T10:03:30Z",
            "version": 2,
            "changeset": 92407019,
            "user": "hotteliene",
            "uid": 1913655,
            "tags": {
                "direction": "forward",
                "highway": "give_way"
            }
        },
        {
            "type": "node",
            "id": 6635862885,
            "lat": 53.0834076,
            "lon": 10.5703658,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 1,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6635862886,
            "lat": 53.0835985,
            "lon": 10.569773,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 1,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6635862887,
            "lat": 53.0835349,
            "lon": 10.570115,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 1,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6635862891,
            "lat": 53.0860398,
            "lon": 10.5719453,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 1,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6635862892,
            "lat": 53.0859748,
            "lon": 10.5717377,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 1,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6635862898,
            "lat": 53.0772674,
            "lon": 10.5791536,
            "timestamp": "2019-07-21T20:56:02Z",
            "version": 1,
            "changeset": 72492292,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 6654846312,
            "lat": 53.0903239,
            "lon": 10.5598928,
            "timestamp": "2019-07-28T11:51:47Z",
            "version": 1,
            "changeset": 72736161,
            "user": "ibanez",
            "uid": 30137
        },
        {
            "type": "node",
            "id": 6905084248,
            "lat": 53.079545,
            "lon": 10.5792337,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 2,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 7122866797,
            "lat": 53.0829381,
            "lon": 10.5885604,
            "timestamp": "2020-01-10T17:21:40Z",
            "version": 1,
            "changeset": 79428822,
            "user": "Hartkerius",
            "uid": 2515738
        },
        {
            "type": "node",
            "id": 7455776335,
            "lat": 53.0801732,
            "lon": 10.5756439,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 2,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 8726572166,
            "lat": 53.0819946,
            "lon": 10.5986556,
            "timestamp": "2023-07-26T13:47:20Z",
            "version": 2,
            "changeset": 139039093,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 8726634120,
            "lat": 53.0844209,
            "lon": 10.5976167,
            "timestamp": "2021-05-13T00:32:28Z",
            "version": 1,
            "changeset": 104601701,
            "user": "openstreet32",
            "uid": 2225599
        },
        {
            "type": "node",
            "id": 8783746154,
            "lat": 53.0859476,
            "lon": 10.5902597,
            "timestamp": "2023-07-26T19:31:50Z",
            "version": 4,
            "changeset": 139054263,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "bus": "yes",
                "departures_board": "yes",
                "highway": "bus_stop",
                "name": "Roggenkamp",
                "public_transport": "platform",
                "shelter": "no",
                "website": "https://buergerbus-badbevensen.de/"
            }
        },
        {
            "type": "node",
            "id": 8783755702,
            "lat": 53.0860358,
            "lon": 10.5718509,
            "timestamp": "2021-05-30T21:17:39Z",
            "version": 1,
            "changeset": 105584693,
            "user": "openstreet32",
            "uid": 2225599
        },
        {
            "type": "node",
            "id": 8899375698,
            "lat": 53.086161,
            "lon": 10.6014892,
            "timestamp": "2021-07-06T23:11:33Z",
            "version": 1,
            "changeset": 107524495,
            "user": "openstreet32",
            "uid": 2225599
        },
        {
            "type": "node",
            "id": 9049260429,
            "lat": 53.0835391,
            "lon": 10.5690781,
            "timestamp": "2021-08-30T20:58:31Z",
            "version": 1,
            "changeset": 110480110,
            "user": "openstreet32",
            "uid": 2225599
        },
        {
            "type": "node",
            "id": 9049260441,
            "lat": 53.0838065,
            "lon": 10.5684,
            "timestamp": "2021-08-30T20:58:31Z",
            "version": 1,
            "changeset": 110480110,
            "user": "openstreet32",
            "uid": 2225599
        },
        {
            "type": "node",
            "id": 9049260449,
            "lat": 53.0840165,
            "lon": 10.5674458,
            "timestamp": "2023-07-25T17:13:50Z",
            "version": 2,
            "changeset": 138999993,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "bus": "yes",
                "departures_board": "yes",
                "highway": "bus_stop",
                "name": "Bad Bevensen Medinger Allee",
                "operator": "Regionalbus Braunschweig GmbH",
                "public_transport": "platform",
                "route_ref": "7060;7062",
                "shelter": "no"
            }
        },
        {
            "type": "node",
            "id": 9049382224,
            "lat": 53.0878323,
            "lon": 10.5628913,
            "timestamp": "2021-08-30T22:12:33Z",
            "version": 1,
            "changeset": 110481833,
            "user": "openstreet32",
            "uid": 2225599
        },
        {
            "type": "node",
            "id": 9051155911,
            "lat": 53.0838177,
            "lon": 10.5683561,
            "timestamp": "2021-08-31T14:59:53Z",
            "version": 1,
            "changeset": 110519387,
            "user": "openstreet32",
            "uid": 2225599
        },
        {
            "type": "node",
            "id": 9051210566,
            "lat": 53.0841965,
            "lon": 10.5662617,
            "timestamp": "2021-08-31T15:06:47Z",
            "version": 1,
            "changeset": 110519641,
            "user": "openstreet32",
            "uid": 2225599,
            "tags": {
                "maxspeed": "60",
                "traffic_sign": "maxspeed",
                "traffic_sign:direction": "forward"
            }
        },
        {
            "type": "node",
            "id": 9071521820,
            "lat": 53.0839871,
            "lon": 10.5674262,
            "timestamp": "2023-07-25T17:13:50Z",
            "version": 3,
            "changeset": 138999993,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "bus": "yes",
                "name": "Bad Bevensen Medinger Allee",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 9071527222,
            "lat": 53.0867188,
            "lon": 10.5638705,
            "timestamp": "2021-09-07T19:45:46Z",
            "version": 1,
            "changeset": 110877194,
            "user": "openstreet32",
            "uid": 2225599,
            "tags": {
                "traffic_sign": "de:138",
                "traffic_sign:direction": "forward"
            }
        },
        {
            "type": "node",
            "id": 9071555219,
            "lat": 53.0871597,
            "lon": 10.5634761,
            "timestamp": "2021-09-07T19:56:55Z",
            "version": 1,
            "changeset": 110877632,
            "user": "openstreet32",
            "uid": 2225599,
            "tags": {
                "traffic_sign": "de:306",
                "traffic_sign:direction": "forward"
            }
        },
        {
            "type": "node",
            "id": 9100482197,
            "lat": 53.0808939,
            "lon": 10.5692264,
            "timestamp": "2021-09-17T10:22:41Z",
            "version": 1,
            "changeset": 111330383,
            "user": "bathines",
            "uid": 10219386
        },
        {
            "type": "node",
            "id": 9124709389,
            "lat": 53.0834143,
            "lon": 10.5886045,
            "timestamp": "2021-09-26T18:31:45Z",
            "version": 1,
            "changeset": 111735604,
            "user": "jan4321",
            "uid": 2006984
        },
        {
            "type": "node",
            "id": 9451262532,
            "lat": 53.0785117,
            "lon": 10.5784949,
            "timestamp": "2022-06-13T08:38:45Z",
            "version": 3,
            "changeset": 122313361,
            "user": "Ralle61",
            "uid": 10592928,
            "tags": {
                "crossing": "uncontrolled",
                "crossing:island": "no",
                "crossing_ref": "zebra",
                "highway": "crossing",
                "tactile_paving": "no"
            }
        },
        {
            "type": "node",
            "id": 9451262533,
            "lat": 53.0790558,
            "lon": 10.5783576,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 1,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 9451262534,
            "lat": 53.0786837,
            "lon": 10.5788268,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 1,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655,
            "tags": {
                "crossing": "uncontrolled",
                "crossing_ref": "zebra",
                "highway": "crossing"
            }
        },
        {
            "type": "node",
            "id": 9696233487,
            "lat": 53.0790313,
            "lon": 10.579484,
            "timestamp": "2022-04-26T21:45:51Z",
            "version": 1,
            "changeset": 120231800,
            "user": "hotteliene",
            "uid": 1913655
        },
        {
            "type": "node",
            "id": 10050710650,
            "lat": 53.0863189,
            "lon": 10.6021525,
            "timestamp": "2022-09-25T10:34:17Z",
            "version": 1,
            "changeset": 126610322,
            "user": "Motte1986",
            "uid": 14340301
        },
        {
            "type": "node",
            "id": 10577639937,
            "lat": 53.0775576,
            "lon": 10.5837455,
            "timestamp": "2023-01-23T21:40:27Z",
            "version": 1,
            "changeset": 131625729,
            "user": "wermak",
            "uid": 11211647
        },
        {
            "type": "node",
            "id": 10577639938,
            "lat": 53.0779668,
            "lon": 10.5846707,
            "timestamp": "2023-01-23T21:40:27Z",
            "version": 1,
            "changeset": 131625729,
            "user": "wermak",
            "uid": 11211647
        },
        {
            "type": "node",
            "id": 10577715102,
            "lat": 53.0794916,
            "lon": 10.5893098,
            "timestamp": "2023-01-23T21:40:27Z",
            "version": 1,
            "changeset": 131625729,
            "user": "wermak",
            "uid": 11211647
        },
        {
            "type": "node",
            "id": 10742269374,
            "lat": 53.0845125,
            "lon": 10.5911122,
            "timestamp": "2023-03-17T20:21:34Z",
            "version": 1,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 10742269375,
            "lat": 53.0843793,
            "lon": 10.5917747,
            "timestamp": "2023-03-17T20:21:34Z",
            "version": 1,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 10742269376,
            "lat": 53.0846173,
            "lon": 10.5903081,
            "timestamp": "2023-03-17T20:21:34Z",
            "version": 1,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 10742269384,
            "lat": 53.0775735,
            "lon": 10.5980878,
            "timestamp": "2023-03-17T20:21:34Z",
            "version": 1,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520
        },
        {
            "type": "node",
            "id": 11012347335,
            "lat": 53.0794993,
            "lon": 10.578252,
            "timestamp": "2023-08-07T04:42:21Z",
            "version": 7,
            "changeset": 139543158,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "departures_board": "yes",
                "highway": "bus_stop",
                "name": "Rathausstraße",
                "note": "Route West",
                "operator": "Bürgerbus Bad Bevensen e.V.",
                "public_transport": "platform",
                "route_ref": "7072",
                "shelter": "no"
            }
        },
        {
            "type": "node",
            "id": 11067397287,
            "lat": 53.0767823,
            "lon": 10.582834,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 1,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11067397288,
            "lat": 53.0767324,
            "lon": 10.5828166,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 1,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "crossing": "no",
                "highway": "traffic_signals",
                "traffic_signals:direction": "backward"
            }
        },
        {
            "type": "node",
            "id": 11067397289,
            "lat": 53.0766611,
            "lon": 10.5828039,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 1,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11067397290,
            "lat": 53.0768454,
            "lon": 10.5828656,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 1,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11067397291,
            "lat": 53.0768796,
            "lon": 10.5828806,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 1,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11067397292,
            "lat": 53.076927,
            "lon": 10.5829058,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 1,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11067397293,
            "lat": 53.0769777,
            "lon": 10.5829346,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 1,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11067397298,
            "lat": 53.0765289,
            "lon": 10.5828023,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 1,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11067397299,
            "lat": 53.0765322,
            "lon": 10.5827053,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 1,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11067404015,
            "lat": 53.0886327,
            "lon": 10.5623012,
            "timestamp": "2023-07-25T17:13:50Z",
            "version": 1,
            "changeset": 138999993,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11068258650,
            "lat": 53.079504,
            "lon": 10.578344,
            "timestamp": "2023-07-26T06:05:45Z",
            "version": 1,
            "changeset": 139018929,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Rathausstraße",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069312958,
            "lat": 53.0801135,
            "lon": 10.5757475,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 1,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "crossing": "uncontrolled",
                "highway": "crossing"
            }
        },
        {
            "type": "node",
            "id": 11069312972,
            "lat": 53.0778332,
            "lon": 10.5750499,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 1,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11069312978,
            "lat": 53.0786921,
            "lon": 10.5745044,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 2,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298
        },
        {
            "type": "node",
            "id": 11069312979,
            "lat": 53.0786833,
            "lon": 10.5744877,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 1,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11069312980,
            "lat": 53.0786458,
            "lon": 10.5744454,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 1,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11069312981,
            "lat": 53.0785942,
            "lon": 10.5744139,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 1,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11069312985,
            "lat": 53.0785334,
            "lon": 10.574424,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 1,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11069312987,
            "lat": 53.0786208,
            "lon": 10.574536,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 1,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737
        },
        {
            "type": "node",
            "id": 11069736259,
            "lat": 53.0808129,
            "lon": 10.5874649,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "highway": "bus_stop",
                "name": "Kurhaus",
                "public_transport": "platform",
                "shelter": "no"
            }
        },
        {
            "type": "node",
            "id": 11069736260,
            "lat": 53.0808281,
            "lon": 10.5874435,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Kurhaus",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069736261,
            "lat": 53.0841325,
            "lon": 10.5886162,
            "timestamp": "2023-07-26T19:31:50Z",
            "version": 2,
            "changeset": 139054263,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "highway": "bus_stop",
                "name": "Dahlenburger Straße",
                "public_transport": "platform",
                "shelter": "no"
            }
        },
        {
            "type": "node",
            "id": 11069736262,
            "lat": 53.0841301,
            "lon": 10.5886708,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Dahlenburger Straße",
                "public_transport": "stop_position",
                "shelter": "no"
            }
        },
        {
            "type": "node",
            "id": 11069736263,
            "lat": 53.0859391,
            "lon": 10.5903382,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Roggenkamp",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069736264,
            "lat": 53.0843291,
            "lon": 10.5927059,
            "timestamp": "2023-07-26T19:31:50Z",
            "version": 2,
            "changeset": 139054263,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "highway": "bus_stop",
                "name": "Am Fuhrenkamp",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11069736265,
            "lat": 53.0843043,
            "lon": 10.5926312,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Am Fuhrenkamp",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069736267,
            "lat": 53.0860892,
            "lon": 10.604267,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "HGZ",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069736268,
            "lat": 53.0838579,
            "lon": 10.5982152,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "highway": "bus_stop",
                "name": "Lyraweg",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11069736269,
            "lat": 53.0802917,
            "lon": 10.5976439,
            "timestamp": "2023-07-26T19:31:50Z",
            "version": 2,
            "changeset": 139054263,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "highway": "bus_stop",
                "name": "Gollerner Weg",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11069736270,
            "lat": 53.0803364,
            "lon": 10.5976303,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Gollerner Weg",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069736271,
            "lat": 53.0763215,
            "lon": 10.5983795,
            "timestamp": "2023-08-06T15:56:17Z",
            "version": 2,
            "changeset": 139521936,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "highway": "bus_stop",
                "name": "Albert-Schweitzer-Straße",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11069736272,
            "lat": 53.0763067,
            "lon": 10.5982996,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Albert-Schweitzer-Straße",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069736273,
            "lat": 53.0759645,
            "lon": 10.59514,
            "timestamp": "2023-07-26T19:31:50Z",
            "version": 2,
            "changeset": 139054263,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "highway": "bus_stop",
                "name": "Röntgenstraße",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11069736274,
            "lat": 53.0759613,
            "lon": 10.5952393,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Röntgenstraße",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069736275,
            "lat": 53.0784234,
            "lon": 10.5914044,
            "timestamp": "2023-07-26T19:31:50Z",
            "version": 2,
            "changeset": 139054263,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "highway": "bus_stop",
                "name": "Klein Hesebecker Straße",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11069736276,
            "lat": 53.0784328,
            "lon": 10.5915025,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Klein Hesebecker Straße",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069736281,
            "lat": 53.0783598,
            "lon": 10.5747787,
            "timestamp": "2023-08-06T15:56:17Z",
            "version": 2,
            "changeset": 139521936,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "highway": "bus_stop",
                "name": "Bahnhof",
                "public_transport": "platform",
                "shelter": "yes"
            }
        },
        {
            "type": "node",
            "id": 11069736282,
            "lat": 53.078353,
            "lon": 10.5747176,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Bahnhof",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069736299,
            "lat": 53.0784267,
            "lon": 10.5744066,
            "timestamp": "2023-08-06T15:56:17Z",
            "version": 3,
            "changeset": 139521936,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "highway": "bus_stop",
                "name": "Bahnhof",
                "public_transport": "platform",
                "shelter": "yes"
            }
        },
        {
            "type": "node",
            "id": 11069736300,
            "lat": 53.0784492,
            "lon": 10.57448,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Bahnhof",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069736303,
            "lat": 53.0877835,
            "lon": 10.5629068,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "highway": "bus_stop",
                "name": "Medingen / Vier Linden",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11069736304,
            "lat": 53.0914078,
            "lon": 10.5576339,
            "timestamp": "2023-07-27T12:36:10Z",
            "version": 2,
            "changeset": 139084289,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Medingen / Lerchenberg",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11069746605,
            "lat": 53.0914159,
            "lon": 10.5575971,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Medingen / Lerchenberg",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069746607,
            "lat": 53.089832,
            "lon": 10.564508,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Medingen Mühlenstr.",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069746611,
            "lat": 53.0851127,
            "lon": 10.5719595,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Rosengarten",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069746614,
            "lat": 53.0809802,
            "lon": 10.5688663,
            "timestamp": "2023-07-27T12:36:10Z",
            "version": 2,
            "changeset": 139084289,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "highway": "bus_stop",
                "name": "Ebstorfer Straße",
                "public_transport": "platform",
                "shelter": "yes"
            }
        },
        {
            "type": "node",
            "id": 11069746615,
            "lat": 53.0810009,
            "lon": 10.568877,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Ebstorfer Straße",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069746616,
            "lat": 53.0796384,
            "lon": 10.5650364,
            "timestamp": "2023-07-26T19:31:50Z",
            "version": 2,
            "changeset": 139054263,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "highway": "bus_stop",
                "name": "Am Britzenberg / Mozartstr.",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11069746617,
            "lat": 53.0796294,
            "lon": 10.5649497,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Am Britzenberg / Mozartstr.",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069746618,
            "lat": 53.0781629,
            "lon": 10.5655088,
            "timestamp": "2023-07-26T19:31:50Z",
            "version": 2,
            "changeset": 139054263,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "highway": "bus_stop",
                "name": "Am Britzenberg / Schubertstraße",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11069746619,
            "lat": 53.0781524,
            "lon": 10.5654349,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Am Britzenberg / Schubertstraße",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11069746620,
            "lat": 53.0776077,
            "lon": 10.570301,
            "timestamp": "2023-07-26T19:31:50Z",
            "version": 2,
            "changeset": 139054263,
            "user": "ma-rt-in",
            "uid": 1431737,
            "tags": {
                "highway": "bus_stop",
                "name": "Jahnstr. / Händelstr.",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11069746621,
            "lat": 53.0776371,
            "lon": 10.5703852,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 1,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Jahnstr. / Händelstr.",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11071172860,
            "lat": 53.086102,
            "lon": 10.6043,
            "timestamp": "2023-07-27T12:36:10Z",
            "version": 1,
            "changeset": 139084289,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "highway": "bus_stop",
                "name": "HGZ",
                "public_transport": "platform",
                "shelter": "yes"
            }
        },
        {
            "type": "node",
            "id": 11071172884,
            "lat": 53.0809218,
            "lon": 10.5743885,
            "timestamp": "2023-07-27T12:36:10Z",
            "version": 1,
            "changeset": 139084289,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "highway": "bus_stop",
                "name": "Medinger Straße",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11071172885,
            "lat": 53.0809296,
            "lon": 10.5743985,
            "timestamp": "2023-07-27T12:36:10Z",
            "version": 1,
            "changeset": 139084289,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Medinger Straße",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "node",
            "id": 11071172887,
            "lat": 53.0898373,
            "lon": 10.5645184,
            "timestamp": "2023-07-27T12:36:10Z",
            "version": 1,
            "changeset": 139084289,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "highway": "bus_stop",
                "name": "Medingen Mühlenstraße",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11071172888,
            "lat": 53.0851162,
            "lon": 10.5719641,
            "timestamp": "2023-07-27T12:36:10Z",
            "version": 1,
            "changeset": 139084289,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "highway": "bus_stop",
                "name": "Rosengarten",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11071172889,
            "lat": 53.0808177,
            "lon": 10.5746133,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 2,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "highway": "bus_stop",
                "name": "Medinger Straße",
                "public_transport": "platform"
            }
        },
        {
            "type": "node",
            "id": 11071172890,
            "lat": 53.0808092,
            "lon": 10.5745992,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 2,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "tags": {
                "bus": "yes",
                "name": "Medinger Straße",
                "public_transport": "stop_position"
            }
        },
        {
            "type": "way",
            "id": 4857154,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 35,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                2434253418,
                2209935918,
                730865792,
                1836761727,
                31328949,
                2209935881,
                1836761723,
                31328700,
                2209935861,
                1944952998,
                3957785305,
                2209935848,
                725553987,
                6635862898,
                726675518,
                31328704,
                4085356272,
                1836761708,
                4159999701,
                31328751,
                3655356099,
                1829836692
            ],
            "tags": {
                "highway": "tertiary",
                "maxspeed": "50",
                "name": "Klein-Bünstorfer Straße",
                "ref": "K 56",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 4857195,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 23,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737,
            "nodes": [
                11067397290,
                11067397291,
                11067397292,
                11067397293,
                5678656958,
                1836761713,
                5678656957,
                1836761714,
                5678656956,
                5678656959,
                5678656955,
                31328736
            ],
            "tags": {
                "cycleway:left": "no",
                "cycleway:right": "track",
                "cycleway:right:segregated": "no",
                "highway": "secondary",
                "lanes": "3",
                "lanes:backward": "2",
                "lanes:forward": "1",
                "lit": "yes",
                "maxspeed": "50",
                "name": "Demminer Allee",
                "ref": "L 252",
                "sidewalk": "right",
                "surface": "asphalt",
                "turn:lanes:backward": "through|right"
            }
        },
        {
            "type": "way",
            "id": 24026704,
            "timestamp": "2018-09-26T20:48:08Z",
            "version": 23,
            "changeset": 62958460,
            "user": "Maegg",
            "uid": 1891235,
            "nodes": [
                31328492,
                2400138517,
                2400143348
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "3",
                "lanes:backward": "2",
                "lanes:forward": "1",
                "maxspeed": "50",
                "name": "Göhrdestraße",
                "ref": "L 252",
                "surface": "asphalt",
                "turn:lanes:backward": "left|through"
            }
        },
        {
            "type": "way",
            "id": 24026705,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 50,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                293726089,
                3655356103,
                731813695,
                260564261,
                4095683962,
                7122866797,
                1830940081,
                9124709389,
                4095670939,
                1830940096,
                11069736262,
                3957782514,
                293662548,
                293891083
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "2",
                "lit": "no",
                "maxspeed": "50",
                "name": "Dahlenburger Straße",
                "ref": "L 232",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 25306176,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 39,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                275646087,
                2400138492,
                275646098,
                4088650658,
                11069736276,
                4088650638,
                4088650640,
                4086947404,
                4088650642,
                4088650616,
                4088650618,
                1830920491
            ],
            "tags": {
                "highway": "secondary",
                "maxspeed": "50",
                "name": "Klein Hesebecker Straße",
                "ref": "L 254",
                "source:maxspeed": "DE:urban",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 28264707,
            "timestamp": "2023-07-27T12:36:10Z",
            "version": 32,
            "changeset": 139084289,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                287830783,
                11071172885,
                11071172890,
                4084542752,
                3654397239,
                2209936275
            ],
            "tags": {
                "highway": "tertiary",
                "lcn": "yes",
                "maxspeed": "50",
                "name": "Medinger Straße",
                "ref": "K 56",
                "sidewalk": "both"
            }
        },
        {
            "type": "way",
            "id": 42691085,
            "timestamp": "2022-09-03T10:39:37Z",
            "version": 14,
            "changeset": 125731289,
            "user": "ftrcat",
            "uid": 6419287,
            "nodes": [
                1928939877,
                291766843,
                291766844
            ],
            "tags": {
                "cycleway": "opposite",
                "highway": "living_street",
                "lit": "yes",
                "name": "Bahnhofstraße",
                "oneway": "no",
                "oneway:bicycle": "no",
                "smoothness": "intermediate",
                "surface": "sett"
            }
        },
        {
            "type": "way",
            "id": 42691086,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 9,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                4535837537,
                411693349,
                11069312972
            ],
            "tags": {
                "highway": "residential",
                "lit": "yes",
                "maxspeed": "30",
                "name": "Am Bahnhof",
                "sidewalk": "both",
                "surface": "sett"
            }
        },
        {
            "type": "way",
            "id": 42692718,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 16,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                291766847,
                293717647,
                3655356094,
                31328924,
                726675625,
                293716570
            ],
            "tags": {
                "cycleway:left": "no",
                "cycleway:right": "lane",
                "cycleway:right:lane": "advisory",
                "highway": "tertiary",
                "lane_markings": "no",
                "lit": "yes",
                "maxspeed": "50",
                "name": "Medinger Straße",
                "ref": "K 56",
                "sidewalk": "both",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 43133586,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 16,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737,
            "nodes": [
                2209936275,
                7455776335,
                11069312958,
                4084633249,
                1928939874,
                3654391552,
                291766849
            ],
            "tags": {
                "cycleway:left": "no",
                "cycleway:right": "lane",
                "cycleway:right:lane": "advisory",
                "highway": "tertiary",
                "lane_markings": "no",
                "maxspeed": "50",
                "name": "Medinger Straße",
                "ref": "K 56",
                "smoothness": "good",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 43176953,
            "timestamp": "2018-09-26T20:45:50Z",
            "version": 13,
            "changeset": 62958460,
            "user": "Maegg",
            "uid": 1891235,
            "nodes": [
                31328750,
                2405511955
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "3",
                "lanes:backward": "1",
                "lanes:forward": "2",
                "maxspeed": "50",
                "ref": "L 252",
                "surface": "asphalt",
                "turn:lanes:forward": "left|through"
            }
        },
        {
            "type": "way",
            "id": 58981531,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 10,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                293716570,
                9451262534,
                730903220,
                5994183901,
                730903228,
                2209935967
            ],
            "tags": {
                "cycleway": "opposite",
                "highway": "residential",
                "lit": "yes",
                "maxspeed": "30",
                "name": "Bergstraße",
                "oneway": "yes",
                "oneway:bicycle": "no",
                "sidewalk": "left",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 77211350,
            "timestamp": "2018-09-26T20:48:17Z",
            "version": 8,
            "changeset": 62958460,
            "user": "Maegg",
            "uid": 1891235,
            "nodes": [
                1831231160,
                2400140184,
                2353986172,
                31328492
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "3",
                "lanes:backward": "1",
                "lanes:forward": "2",
                "maxspeed": "50",
                "name": "Demminer Allee",
                "ref": "L 252",
                "surface": "asphalt",
                "turn:lanes:forward": "left|through;right"
            }
        },
        {
            "type": "way",
            "id": 143844002,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 9,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                310279065,
                11069746607,
                2120989958
            ],
            "tags": {
                "highway": "residential",
                "lcn": "yes",
                "maxspeed": "30",
                "name": "Mühlenstraße",
                "source:maxspeed": "DE:zone:30",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 158692001,
            "timestamp": "2018-09-26T21:08:20Z",
            "version": 5,
            "changeset": 62958460,
            "user": "Maegg",
            "uid": 1891235,
            "nodes": [
                1708477516,
                1708477519
            ],
            "tags": {
                "bridge": "yes",
                "bridge_ref": "550",
                "highway": "secondary",
                "layer": "1",
                "maxspeed:backward": "60",
                "maxspeed:forward": "100",
                "name": "Römstedter Straße",
                "ref": "L 253",
                "source:maxspeed:backward": "sign",
                "source:maxspeed:forward": "DE:rural",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 158692005,
            "timestamp": "2023-10-03T11:55:55Z",
            "version": 7,
            "changeset": 142097146,
            "user": "kizu",
            "uid": 162469,
            "nodes": [
                1708477519,
                3438135394
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "2",
                "maxspeed:backward": "60",
                "maxspeed:forward": "100",
                "name": "Römstedter Straße",
                "ref": "L 253",
                "source:maxspeed:backward": "sign",
                "source:maxspeed:forward": "DE:rural",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 172033855,
            "timestamp": "2023-10-03T11:55:36Z",
            "version": 10,
            "changeset": 142097167,
            "user": "kizu",
            "uid": 162469,
            "nodes": [
                10577639937,
                10577639938
            ],
            "tags": {
                "bridge": "yes",
                "cycleway:left": "no",
                "cycleway:right": "track",
                "cycleway:right:segregated": "no",
                "highway": "secondary",
                "lit": "yes",
                "maxspeed": "50",
                "maxweight:signed": "no",
                "name": "Demminer Allee",
                "ref": "L 252",
                "sidewalk": "right",
                "source:maxspeed": "DE:urban",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 172033867,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 12,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1829836735,
                2209936415,
                4084924590,
                4084924608,
                2209936281,
                4084924626,
                2209936193,
                11069746617,
                1829836719,
                2140193034,
                1829836707,
                4084933964,
                4084933966,
                11069746619,
                1829836704,
                2209935855,
                2209935839,
                1829836696,
                4084943429,
                2209935833,
                4084943435,
                2140193029,
                2209935819,
                4084943488,
                2209935812,
                4084991326,
                2209935811,
                4084991340,
                1829836677
            ],
            "tags": {
                "highway": "residential",
                "lit": "yes",
                "maxspeed": "30",
                "name": "Am Britzenberg",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 172033868,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 11,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1829836734,
                2209936332,
                4085018072,
                1829836724,
                4085025816,
                2209935989,
                2209935969,
                1829836708,
                2209935903,
                1829836702,
                11069746621,
                2209935841,
                2209935821,
                281735154
            ],
            "tags": {
                "hgv": "destination",
                "highway": "residential",
                "lit": "yes",
                "maxspeed": "50",
                "name": "Jahnstraße",
                "surface": "asphalt",
                "traffic_sign": "DE:253,DE:1020-30"
            }
        },
        {
            "type": "way",
            "id": 172033869,
            "timestamp": "2016-03-29T13:04:47Z",
            "version": 5,
            "changeset": 38144052,
            "user": "hknorr",
            "uid": 3743128,
            "nodes": [
                1829836677,
                4084991342,
                2209935807,
                1829836675
            ],
            "tags": {
                "highway": "residential",
                "lit": "yes",
                "maxspeed": "30",
                "name": "Am Britzenberg",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 172148677,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 3,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1829836739,
                1830824213,
                6635857984,
                310406002
            ],
            "tags": {
                "highway": "residential",
                "maxspeed": "30",
                "name": "Glockeneichenstraße",
                "source:maxspeed": "DE:zone:30"
            }
        },
        {
            "type": "way",
            "id": 172148680,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 10,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1874119695,
                1830824221,
                4084407812,
                4084407811,
                4084407809,
                4084404975,
                6635862891,
                8783755702,
                1830824227
            ],
            "tags": {
                "highway": "residential",
                "lit": "yes",
                "maxspeed": "30",
                "name": "Im Ilmenautal",
                "sidewalk": "left",
                "source:maxspeed": "DE:zone:30",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 172148687,
            "timestamp": "2023-07-27T12:36:10Z",
            "version": 18,
            "changeset": 139084289,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                6635857982,
                4084633269,
                9049260429,
                287830436,
                6635857983,
                287830435,
                6635857981,
                6635857980,
                9049260441,
                1830824207,
                9051155911,
                291767138,
                1830897526,
                9071521820,
                287830484,
                1830897529,
                287830381
            ],
            "tags": {
                "highway": "tertiary",
                "lcn": "yes",
                "maxspeed": "50",
                "name": "Medinger Allee",
                "ref": "K 56",
                "source:maxspeed": "DE:urban",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 172148689,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 9,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                287830783,
                310406008,
                2952158745,
                319765210,
                4083516750,
                287830388,
                297502294,
                6635862885,
                310406002
            ],
            "tags": {
                "highway": "tertiary",
                "lcn": "yes",
                "maxspeed": "50",
                "name": "Medinger Straße",
                "ref": "K 56",
                "source:maxspeed": "DE:urban"
            }
        },
        {
            "type": "way",
            "id": 172151958,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 2,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1830872047,
                1830872070,
                1830872075,
                11069746605,
                1830872097,
                1830872129,
                1830872168,
                1830872207
            ],
            "tags": {
                "highway": "residential",
                "name": "Am Lerchenberg"
            }
        },
        {
            "type": "way",
            "id": 172151965,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 11,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1830872159,
                1830872150,
                1830872144,
                1830872142,
                1830872131,
                1830872122,
                6106357613,
                1830872116,
                1830872106,
                1830872102,
                1830872099,
                1830872084,
                2121521814,
                1830872076,
                2121521805,
                6106339021,
                6106339022,
                1830872072,
                1830872064,
                1830872030
            ],
            "tags": {
                "highway": "tertiary",
                "maxspeed": "50",
                "name": "Bevensener Straße",
                "ref": "K 56",
                "source:maxspeed": "DE:urban"
            }
        },
        {
            "type": "way",
            "id": 172151969,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 7,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1830872030,
                1830872034,
                6654846312,
                1830872035,
                1830872039,
                1830872042,
                1830872047
            ],
            "tags": {
                "highway": "residential",
                "name": "Feldstraße"
            }
        },
        {
            "type": "way",
            "id": 172153225,
            "timestamp": "2022-09-03T10:37:34Z",
            "version": 9,
            "changeset": 125731442,
            "user": "ftrcat",
            "uid": 6419287,
            "nodes": [
                1830897454,
                4085156321,
                2067316323,
                4085156322,
                1830897452,
                6905084248,
                2209936143,
                1830897448,
                2209935985,
                1830897445,
                9696233487,
                2209935979,
                2209935971,
                2209935967
            ],
            "tags": {
                "highway": "residential",
                "maxspeed": "30",
                "maxweight": "7.5",
                "name": "Bäckergang",
                "sidewalk": "no",
                "surface": "sett"
            }
        },
        {
            "type": "way",
            "id": 172153231,
            "timestamp": "2018-09-26T21:24:19Z",
            "version": 7,
            "changeset": 62958460,
            "user": "Maegg",
            "uid": 1891235,
            "nodes": [
                2209936275,
                3334181796,
                2209936266,
                2209936263,
                2209936261,
                1830897466,
                2209936265,
                1928939924,
                1830897469,
                4083290614,
                2209936283,
                1830897468,
                1928939908,
                1830897459
            ],
            "tags": {
                "highway": "residential",
                "lcn": "yes",
                "maxspeed": "50",
                "name": "Lüneburger Straße",
                "source:maxspeed": "DE:urban",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 172153233,
            "timestamp": "2023-11-11T09:59:33Z",
            "version": 13,
            "changeset": 143892554,
            "user": "philopsil",
            "uid": 467783,
            "nodes": [
                11068258650,
                9451262533,
                291766847
            ],
            "tags": {
                "cycleway": "opposite",
                "highway": "living_street",
                "lit": "yes",
                "name": "Rathausstraße",
                "oneway": "yes",
                "oneway:bicycle": "no",
                "surface": "sett"
            }
        },
        {
            "type": "way",
            "id": 172153904,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 10,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1830920439,
                4090641262,
                1830920446,
                4090641225,
                4092305251,
                2400138431,
                11069736272,
                4092305283,
                2400138437,
                2400138441,
                1830920482,
                2400172041,
                2400138443,
                2400138444
            ],
            "tags": {
                "highway": "residential",
                "lit": "yes",
                "maxspeed": "30",
                "maxspeed:type": "DE:zone30",
                "name": "Albert-Schweitzer-Straße",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 172153906,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 9,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1830920491,
                2430796339,
                4088626876,
                2400172050,
                4088626878,
                1830920495,
                2400172054,
                1830920498,
                4088651154,
                4088651152,
                1830920501
            ],
            "tags": {
                "highway": "residential",
                "maxspeed": "30",
                "name": "Am Hesekamp",
                "surface": "asphalt",
                "zone:maxspeed": "DE:30"
            }
        },
        {
            "type": "way",
            "id": 172153915,
            "timestamp": "2023-03-17T20:21:37Z",
            "version": 8,
            "changeset": 133803470,
            "user": "sundew",
            "uid": 617520,
            "nodes": [
                1830920570,
                4093691932,
                4093691926,
                4095000024,
                4093691928,
                4093691930,
                4094999994,
                4093691924,
                2400138458,
                4093691934,
                4094991276,
                4093691936,
                4093691938,
                1830920518,
                10742269384,
                2400172052,
                1830920493
            ],
            "tags": {
                "highway": "residential",
                "maxspeed": "30",
                "name": "Ostpreußenweg"
            }
        },
        {
            "type": "way",
            "id": 172153916,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 8,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1830920427,
                1830920430,
                1830920431,
                1830920437,
                2400107876,
                1830920439
            ],
            "tags": {
                "highway": "residential",
                "maxspeed": "30",
                "maxspeed:type": "DE:zone30",
                "name": "Paracelsusstraße",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 172153921,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 9,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1830920455,
                11069736274,
                4090465587,
                1830920448,
                2400138408,
                2400138406,
                1830920442,
                1830920440,
                2400138404,
                1830920427
            ],
            "tags": {
                "highway": "residential",
                "maxspeed": "30",
                "maxspeed:type": "DE:zone30",
                "name": "Röntgenstraße",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 172153924,
            "timestamp": "2018-10-14T17:59:27Z",
            "version": 7,
            "changeset": 63515962,
            "user": "Maegg",
            "uid": 1891235,
            "nodes": [
                1830920501,
                4090393443,
                1830920488,
                4089040077,
                1830920472,
                1830920459,
                4090465689,
                1830920455
            ],
            "tags": {
                "highway": "residential",
                "lit": "yes",
                "maxspeed": "30",
                "name": "Sauerbruchstraße",
                "surface": "asphalt",
                "zone:maxspeed": "DE:30"
            }
        },
        {
            "type": "way",
            "id": 172156099,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 6,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1830940137,
                10742269376,
                1830940133,
                10742269374,
                1830940128,
                10742269375,
                1830940120,
                11069736265,
                1830940117,
                1830940105,
                2347346252,
                1829836737
            ],
            "tags": {
                "highway": "residential",
                "maxspeed": "30",
                "name": "Am Fuhrenkamp",
                "width": "4"
            }
        },
        {
            "type": "way",
            "id": 172156113,
            "timestamp": "2021-05-13T00:32:28Z",
            "version": 9,
            "changeset": 104601701,
            "user": "openstreet32",
            "uid": 2225599,
            "nodes": [
                1830940036,
                1830940041,
                1830940045,
                2400177874,
                8726572166,
                1831312222,
                1830940071,
                1830940085,
                2430675583,
                2353986174,
                4092682158,
                1830940090,
                2430675588,
                1830940097,
                2430675592,
                1830940114,
                8726634120,
                1830940121,
                1830940131,
                1830940148,
                420339492
            ],
            "tags": {
                "highway": "residential",
                "maxspeed": "30",
                "name": "Lyraweg",
                "source:maxspeed": "DE:zone30",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 172156118,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 9,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1830940137,
                1897001713,
                1863446398,
                1830940156,
                1870432721,
                11069736263,
                1897001789,
                1830940161,
                1830940167
            ],
            "tags": {
                "highway": "residential",
                "maxspeed": "30",
                "name": "Roggenkamp",
                "width": "4"
            }
        },
        {
            "type": "way",
            "id": 172156495,
            "timestamp": "2022-01-26T21:24:25Z",
            "version": 5,
            "changeset": 116639993,
            "user": "hotteliene",
            "uid": 1913655,
            "nodes": [
                2434253418,
                1830942472,
                9451262532,
                2434253406,
                5695215063,
                2434253404,
                1830942470,
                411693346,
                299002498
            ],
            "tags": {
                "highway": "residential",
                "lit": "yes",
                "maxspeed": "30",
                "name": "Lindenstraße",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 172190611,
            "timestamp": "2013-08-02T20:23:08Z",
            "version": 7,
            "changeset": 17196539,
            "user": "simlox",
            "uid": 795290,
            "nodes": [
                2405511955,
                2400138535,
                1829836721,
                2400138525,
                2400138521
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "2",
                "maxspeed": "50",
                "name": "Röbbeler Straße",
                "ref": "L 252",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 172199799,
            "timestamp": "2018-09-26T21:08:39Z",
            "version": 4,
            "changeset": 62958460,
            "user": "Maegg",
            "uid": 1891235,
            "nodes": [
                1831312173,
                2400107963,
                1708477516
            ],
            "tags": {
                "highway": "secondary",
                "maxspeed:backward": "60",
                "maxspeed:forward": "100",
                "name": "Römstedter Straße",
                "ref": "L 253",
                "source:maxspeed:backward": "sign",
                "source:maxspeed:forward": "DE:rural",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 172199816,
            "timestamp": "2023-07-26T17:38:59Z",
            "version": 6,
            "changeset": 139048038,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1831312291,
                11069736267,
                2289714756,
                1831312292,
                1831312293
            ],
            "tags": {
                "highway": "service",
                "lit": "yes",
                "maxspeed": "10",
                "service": "parking_aisle",
                "surface": "paving_stones"
            }
        },
        {
            "type": "way",
            "id": 176687599,
            "timestamp": "2023-08-06T15:40:30Z",
            "version": 4,
            "changeset": 139521172,
            "user": "ma-rt-in",
            "uid": 1431737,
            "nodes": [
                1871652024,
                11069736260,
                1871652025,
                1871652029,
                1871652028,
                1871652024
            ],
            "tags": {
                "highway": "service",
                "service": "parking_aisle",
                "surface": "paving_stones"
            }
        },
        {
            "type": "way",
            "id": 176931436,
            "timestamp": "2012-08-20T09:06:34Z",
            "version": 1,
            "changeset": 12793184,
            "user": "kerosin",
            "uid": 42619,
            "nodes": [
                297503331,
                1874119693,
                1874119699,
                1874119695
            ],
            "tags": {
                "highway": "residential",
                "name": "Koppelweg"
            }
        },
        {
            "type": "way",
            "id": 182532166,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 8,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1928939829,
                11069312980,
                299002495,
                11069312981,
                1928939814,
                11069312985,
                11069736300,
                1928939789,
                1928939779,
                4535837537
            ],
            "tags": {
                "highway": "residential",
                "lit": "yes",
                "maxspeed": "30",
                "name": "Am Bahnhof",
                "sidewalk": "right",
                "surface": "sett"
            }
        },
        {
            "type": "way",
            "id": 182532167,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 7,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737,
            "nodes": [
                291766849,
                411693355,
                1928939871,
                299002492,
                4084633231,
                1928939855,
                1928939832,
                11069312978,
                11069312979,
                1928939829
            ],
            "tags": {
                "highway": "residential",
                "lit": "yes",
                "maxspeed": "30",
                "name": "Bahnhofstraße",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 182532171,
            "timestamp": "2018-09-26T21:21:58Z",
            "version": 5,
            "changeset": 62958460,
            "user": "Maegg",
            "uid": 1891235,
            "nodes": [
                1928939903,
                2434015353,
                285127496
            ],
            "tags": {
                "highway": "residential",
                "lcn": "yes",
                "maxspeed": "50",
                "name": "Lüneburger Straße",
                "source:maxspeed": "DE:urban",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 182532173,
            "timestamp": "2021-05-18T17:17:25Z",
            "version": 6,
            "changeset": 104905603,
            "user": "frantzius2177",
            "uid": 1551542,
            "nodes": [
                1830897459,
                1928939903
            ],
            "tags": {
                "highway": "residential",
                "lane_markings": "no",
                "lcn": "yes",
                "maxheight": "4.1",
                "maxspeed": "50",
                "name": "Lüneburger Straße",
                "source:maxspeed": "DE:urban",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 182532182,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 7,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1928939829,
                11069312987,
                1928939799,
                11069736282,
                2952152847,
                4535837537
            ],
            "tags": {
                "bicycle": "yes",
                "bus": "yes",
                "foot": "yes",
                "highway": "service",
                "psv": "official",
                "surface": "sett",
                "tourist_bus": "yes",
                "traffic_sign": "DE:250,1024-14",
                "vehicle": "no"
            }
        },
        {
            "type": "way",
            "id": 202114304,
            "timestamp": "2018-09-26T21:38:12Z",
            "version": 3,
            "changeset": 62958460,
            "user": "Maegg",
            "uid": 1891235,
            "nodes": [
                2120989958,
                310283553
            ],
            "tags": {
                "highway": "residential",
                "maxspeed": "30",
                "name": "Klosterweg",
                "source:maxspeed": "DE:zone:30",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 270575248,
            "timestamp": "2023-10-03T11:55:50Z",
            "version": 3,
            "changeset": 142097146,
            "user": "kizu",
            "uid": 162469,
            "nodes": [
                420339492,
                1831312173
            ],
            "tags": {
                "highway": "secondary",
                "lane_markings": "no",
                "maxspeed": "50",
                "name": "Römstedter Straße",
                "ref": "L 253",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 270575250,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 11,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                3438135394,
                2430676779,
                387728537,
                8899375698,
                10050710650,
                1708477521
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "2",
                "lit": "no",
                "maxspeed": "60",
                "name": "Römstedter Straße",
                "ref": "L 253",
                "shoulder": "no",
                "source:maxspeed": "sign",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 306057828,
            "timestamp": "2021-09-07T19:45:46Z",
            "version": 6,
            "changeset": 110877194,
            "user": "openstreet32",
            "uid": 2225599,
            "nodes": [
                287830381,
                9051210566,
                1830824209,
                287830434,
                3781774547,
                9071527222,
                3334063023
            ],
            "tags": {
                "highway": "tertiary",
                "lcn": "yes",
                "maxspeed": "60",
                "name": "Medinger Allee",
                "ref": "K 56",
                "source:maxspeed": "sign",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 307064737,
            "timestamp": "2018-09-26T21:38:15Z",
            "version": 3,
            "changeset": 62958460,
            "user": "Maegg",
            "uid": 1891235,
            "nodes": [
                310283553,
                310279065
            ],
            "tags": {
                "highway": "residential",
                "maxspeed": "30",
                "name": "Klosterweg",
                "source:maxspeed": "DE:zone:30",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 307064738,
            "timestamp": "2023-07-25T17:13:50Z",
            "version": 5,
            "changeset": 138999993,
            "user": "ma-rt-in",
            "uid": 1431737,
            "nodes": [
                2120989958,
                2121521774,
                2121521772,
                11067404015,
                3334063021,
                291767388
            ],
            "tags": {
                "highway": "residential",
                "lcn": "yes",
                "maxspeed": "30",
                "name": "Mühlenstraße",
                "source:maxspeed": "DE:zone:30",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 326751154,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 6,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1829836735,
                1830897476,
                2209936431,
                2209936427,
                1830897475,
                1830897473,
                2209936394,
                2209936373,
                11069746615,
                1829836734
            ],
            "tags": {
                "highway": "residential",
                "lcn": "yes",
                "maxspeed": "50",
                "name": "Ebstorfer Straße",
                "oneway": "no",
                "sidewalk": "left",
                "source:maxspeed": "DE:urban",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 326751155,
            "timestamp": "2021-09-07T19:56:55Z",
            "version": 4,
            "changeset": 110877632,
            "user": "openstreet32",
            "uid": 2225599,
            "nodes": [
                3334063023,
                9071555219,
                291767329,
                279088570,
                2121521768,
                9049382224,
                291767388
            ],
            "tags": {
                "highway": "tertiary",
                "lcn": "yes",
                "maxspeed": "50",
                "name": "Medinger Allee",
                "ref": "K 56",
                "source:maxspeed": "DE:urban",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 345605387,
            "timestamp": "2023-01-23T21:40:27Z",
            "version": 7,
            "changeset": 131625729,
            "user": "wermak",
            "uid": 11211647,
            "nodes": [
                10577639938,
                3962427747
            ],
            "tags": {
                "cycleway:left": "no",
                "cycleway:right": "track",
                "cycleway:right:segregated": "no",
                "highway": "secondary",
                "lit": "yes",
                "maxspeed": "50",
                "name": "Demminer Allee",
                "ref": "L 252",
                "sidewalk": "right",
                "source:maxspeed": "DE:urban",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 357759016,
            "timestamp": "2023-11-11T09:59:33Z",
            "version": 9,
            "changeset": 143892554,
            "user": "philopsil",
            "uid": 467783,
            "nodes": [
                291766844,
                1830897454
            ],
            "tags": {
                "highway": "living_street",
                "lit": "yes",
                "name": "Rathausstraße",
                "smoothness": "intermediate",
                "surface": "sett"
            }
        },
        {
            "type": "way",
            "id": 393046143,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 4,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737,
            "nodes": [
                1829836690,
                4159999696,
                1829836692
            ],
            "tags": {
                "highway": "tertiary",
                "lanes": "3",
                "lanes:backward": "1",
                "lanes:forward": "2",
                "maxspeed": "50",
                "name": "Klein-Bünstorfer Straße",
                "ref": "K 56",
                "surface": "asphalt",
                "turn:lanes:forward": "left|none"
            }
        },
        {
            "type": "way",
            "id": 393046144,
            "timestamp": "2023-01-23T21:40:27Z",
            "version": 5,
            "changeset": 131625729,
            "user": "wermak",
            "uid": 11211647,
            "nodes": [
                3962427747,
                317731927
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "3",
                "lanes:backward": "1",
                "lanes:forward": "2",
                "lit": "yes",
                "maxspeed": "50",
                "name": "Demminer Allee",
                "ref": "L 252",
                "source:maxspeed": "DE:urban",
                "surface": "asphalt",
                "turn:lanes:forward": "left|through"
            }
        },
        {
            "type": "way",
            "id": 393047841,
            "timestamp": "2019-02-25T13:47:29Z",
            "version": 3,
            "changeset": 67549621,
            "user": "loconvey",
            "uid": 4051669,
            "nodes": [
                2400138523,
                2400143354,
                726675803
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "3",
                "lanes:backward": "2",
                "lanes:forward": "1",
                "lit": "no",
                "maxspeed": "50",
                "name": "Dahlenburger Straße",
                "ref": "L 232",
                "surface": "asphalt",
                "turn:lanes:backward": "left;through|right"
            }
        },
        {
            "type": "way",
            "id": 393047842,
            "timestamp": "2018-09-26T20:48:24Z",
            "version": 2,
            "changeset": 62958460,
            "user": "Maegg",
            "uid": 1891235,
            "nodes": [
                317731927,
                1831231160
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "3",
                "lanes:backward": "2",
                "lanes:forward": "1",
                "maxspeed": "50",
                "name": "Demminer Allee",
                "ref": "L 252",
                "surface": "asphalt",
                "turn:lanes:backward": "left|through;right"
            }
        },
        {
            "type": "way",
            "id": 393047843,
            "timestamp": "2018-09-26T20:48:03Z",
            "version": 2,
            "changeset": 62958460,
            "user": "Maegg",
            "uid": 1891235,
            "nodes": [
                2400143348,
                2400140187
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "3",
                "lanes:backward": "2",
                "lanes:forward": "1",
                "maxspeed": "50",
                "name": "Göhrdestraße",
                "ref": "L 252",
                "surface": "asphalt",
                "turn:lanes:backward": "left|through;right"
            }
        },
        {
            "type": "way",
            "id": 393047844,
            "timestamp": "2023-01-23T21:40:27Z",
            "version": 3,
            "changeset": 131625729,
            "user": "wermak",
            "uid": 11211647,
            "nodes": [
                2400140187,
                2405511954,
                10577715102,
                31328750
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "3",
                "lanes:backward": "1",
                "lanes:forward": "2",
                "maxspeed": "50",
                "name": "Göhrdestraße",
                "ref": "L 252",
                "surface": "asphalt",
                "turn:lanes:forward": "left|through"
            }
        },
        {
            "type": "way",
            "id": 457431135,
            "timestamp": "2021-09-17T10:22:41Z",
            "version": 2,
            "changeset": 111330383,
            "user": "bathines",
            "uid": 10219386,
            "nodes": [
                1829836734,
                9100482197,
                4084633261,
                1829836731,
                285127496
            ],
            "tags": {
                "highway": "residential",
                "lcn": "yes",
                "maxspeed": "50",
                "name": "Ebstorfer Straße",
                "oneway": "no",
                "sidewalk": "left",
                "source:maxspeed": "DE:urban"
            }
        },
        {
            "type": "way",
            "id": 635437609,
            "timestamp": "2018-10-17T20:56:20Z",
            "version": 1,
            "changeset": 63625283,
            "user": "hotteliene",
            "uid": 1913655,
            "nodes": [
                5994183891,
                1829836690
            ],
            "tags": {
                "destination": "Medingen",
                "highway": "tertiary",
                "lanes": "1",
                "maxspeed": "50",
                "name": "Klein-Bünstorfer Straße",
                "oneway": "yes",
                "ref": "K 56",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 635437624,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 2,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737,
            "nodes": [
                1829836690,
                5994182982,
                5994183895,
                11067397299,
                11067397298
            ],
            "tags": {
                "destination:lanes": "Dahlenburg;Hohenzethen;Himbergen-;Göhrde;Rosche|Lüneburg;Uelzen",
                "destination:ref:to": "B 4",
                "highway": "tertiary",
                "lanes": "2",
                "maxspeed": "50",
                "name": "Klein-Bünstorfer Straße",
                "oneway": "yes",
                "ref": "K 56",
                "surface": "asphalt",
                "turn:lanes": "left|right"
            }
        },
        {
            "type": "way",
            "id": 635437631,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 2,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737,
            "nodes": [
                11067397290,
                5994183885,
                5994183892,
                2355850966,
                5994182984,
                5994183891
            ],
            "tags": {
                "destination": "Medingen",
                "highway": "tertiary",
                "lanes": "1",
                "maxspeed": "50",
                "name": "Klein-Bünstorfer Straße",
                "oneway": "yes",
                "ref": "K 56",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 672878373,
            "timestamp": "2019-02-25T13:47:27Z",
            "version": 1,
            "changeset": 67549621,
            "user": "loconvey",
            "uid": 4051669,
            "nodes": [
                31328492,
                2400138523
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "3",
                "lanes:backward": "2",
                "lanes:forward": "1",
                "lit": "no",
                "maxspeed": "50",
                "name": "Dahlenburger Straße",
                "ref": "L 232",
                "surface": "asphalt",
                "turn:lanes:backward": "left;through|right"
            }
        },
        {
            "type": "way",
            "id": 833877682,
            "timestamp": "2020-08-04T13:51:36Z",
            "version": 2,
            "changeset": 88933010,
            "user": "Ilona_S",
            "uid": 4990820,
            "nodes": [
                310405998,
                6635857982
            ],
            "tags": {
                "highway": "tertiary",
                "lcn": "yes",
                "maxheight": "3.8",
                "maxspeed": "50",
                "name": "Medinger Allee",
                "ref": "K 56",
                "source:maxspeed": "DE:urban",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 1022369394,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 4,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1831312293,
                2289714732,
                1831312289,
                1831312291
            ],
            "tags": {
                "highway": "service",
                "lit": "yes",
                "maxspeed": "10",
                "surface": "paving_stones"
            }
        },
        {
            "type": "way",
            "id": 1024440376,
            "timestamp": "2023-08-28T10:01:13Z",
            "version": 2,
            "changeset": 140486449,
            "user": "Yoonah",
            "uid": 7033,
            "nodes": [
                291766849,
                1928939877
            ],
            "tags": {
                "cycleway": "opposite",
                "highway": "living_street",
                "lit": "yes",
                "name": "Bahnhofstraße",
                "oneway": "yes",
                "oneway:bicycle": "no",
                "smoothness": "intermediate",
                "surface": "sett"
            }
        },
        {
            "type": "way",
            "id": 1134649367,
            "timestamp": "2023-01-23T21:40:27Z",
            "version": 1,
            "changeset": 131625729,
            "user": "wermak",
            "uid": 11211647,
            "nodes": [
                31328736,
                10577639937
            ],
            "tags": {
                "cycleway:left": "no",
                "cycleway:right": "track",
                "cycleway:right:segregated": "no",
                "highway": "secondary",
                "lit": "yes",
                "maxspeed": "50",
                "name": "Demminer Allee",
                "ref": "L 252",
                "sidewalk": "right",
                "source:maxspeed": "DE:urban",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 1192147241,
            "timestamp": "2023-07-25T17:28:44Z",
            "version": 1,
            "changeset": 139000672,
            "user": "ma-rt-in",
            "uid": 1431737,
            "nodes": [
                11067397298,
                5994183894,
                11067397289,
                2355850965,
                11067397288,
                11067397287,
                11067397290
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "2",
                "lit": "yes",
                "maxspeed": "50",
                "name": "Demminer Allee",
                "ref": "L 252",
                "source:maxspeed": "DE:urban",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 1192422442,
            "timestamp": "2023-07-26T14:36:18Z",
            "version": 1,
            "changeset": 139041265,
            "user": "ma-rt-in",
            "uid": 1431737,
            "nodes": [
                11069312972,
                1928939761,
                2952146505,
                299002498
            ],
            "tags": {
                "highway": "residential",
                "lit": "yes",
                "maxspeed": "30",
                "name": "Am Bahnhof",
                "sidewalk": "both",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 1195236003,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 1,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                291766849,
                2209936061,
                2434253453,
                291766847
            ],
            "tags": {
                "cycleway:left": "no",
                "cycleway:right": "lane",
                "cycleway:right:lane": "advisory",
                "highway": "tertiary",
                "lane_markings": "no",
                "lit": "yes",
                "maxspeed": "50",
                "name": "Medinger Straße",
                "ref": "K 56",
                "sidewalk": "both",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 1195236005,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 1,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                293716570,
                2434253418
            ],
            "tags": {
                "highway": "tertiary",
                "maxspeed": "50",
                "name": "Klein-Bünstorfer Straße",
                "ref": "K 56",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 1195236008,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 1,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1830872030,
                1830871995,
                6106339023,
                1830871994,
                2121521770,
                1830871993,
                291767388
            ],
            "tags": {
                "highway": "tertiary",
                "maxspeed": "50",
                "name": "Bevensener Straße",
                "ref": "K 56",
                "source:maxspeed": "DE:urban"
            }
        },
        {
            "type": "way",
            "id": 1195236010,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 1,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                297503331,
                4084566488,
                4084566478,
                1830824218,
                4084561682,
                11069746611,
                4084561688,
                1829836739
            ],
            "tags": {
                "highway": "residential",
                "lit": "yes",
                "maxspeed": "30",
                "name": "Rosengarten",
                "source:maxspeed": "DE:zone:30",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 1195236011,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 1,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1830824227,
                6635862892,
                1829836739
            ],
            "tags": {
                "highway": "residential",
                "maxspeed": "30",
                "name": "Glockeneichenstraße",
                "source:maxspeed": "DE:zone:30"
            }
        },
        {
            "type": "way",
            "id": 1195236012,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 1,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                310406002,
                6635862887,
                1830824205,
                6635862886,
                1830824206,
                310405998
            ],
            "tags": {
                "highway": "tertiary",
                "lcn": "yes",
                "maxspeed": "50",
                "name": "Medinger Straße",
                "ref": "K 56",
                "source:maxspeed": "DE:urban"
            }
        },
        {
            "type": "way",
            "id": 1195236013,
            "timestamp": "2023-08-06T13:19:08Z",
            "version": 1,
            "changeset": 139515676,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1829836675,
                4131316865,
                4131316868,
                4131316880,
                281735154
            ],
            "tags": {
                "highway": "residential",
                "lcn": "yes",
                "maxspeed": "50",
                "name": "Sasendorfer Straße",
                "source:maxspeed": "DE:urban",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 1195260884,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 1,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                726675803,
                293662003,
                726675789,
                726675632,
                1871652018,
                293726089
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "2",
                "lit": "no",
                "maxspeed": "50",
                "name": "Dahlenburger Straße",
                "ref": "L 232",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 1195260887,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 1,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                293891083,
                1830940137
            ],
            "tags": {
                "highway": "residential",
                "maxspeed": "30",
                "name": "Am Fuhrenkamp",
                "width": "4"
            }
        },
        {
            "type": "way",
            "id": 1195260888,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 1,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1829836737,
                2356277087,
                1829836738,
                1830940101,
                1830940100,
                420339492
            ],
            "tags": {
                "highway": "secondary",
                "maxspeed": "50",
                "name": "Römstedter Straße",
                "ref": "L 253",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 1195260889,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 1,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1708477521,
                1831312293
            ],
            "tags": {
                "highway": "service",
                "lit": "yes",
                "maxspeed": "10",
                "surface": "paving_stones"
            }
        },
        {
            "type": "way",
            "id": 1195260892,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 1,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1830920570,
                11069736270,
                4092645341,
                1830920571,
                4092645384,
                1830940036
            ],
            "tags": {
                "highway": "residential",
                "maxspeed": "30",
                "name": "Gollerner Weg",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 1195260893,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 1,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1830920493,
                2400138444
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "2",
                "lit": "yes",
                "maxspeed": "50",
                "name": "Röbbeler Straße",
                "ref": "L 252",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 1195260899,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 1,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                2400138521,
                2400138519,
                31328515,
                2400138511,
                275646087
            ],
            "tags": {
                "highway": "secondary",
                "lanes": "2",
                "lit": "yes",
                "maxspeed": "50",
                "name": "Röbbeler Straße",
                "ref": "L 252",
                "surface": "asphalt"
            }
        },
        {
            "type": "way",
            "id": 1195260900,
            "timestamp": "2023-08-06T15:04:00Z",
            "version": 1,
            "changeset": 139519734,
            "user": "Andy Fuchs",
            "uid": 126298,
            "nodes": [
                1830872159,
                1830872175,
                1830872207
            ],
            "tags": {
                "highway": "residential",
                "name": "Drosselbrink"
            }
        },
        {
            "type": "way",
            "id": 1195268482,
            "timestamp": "2023-08-06T15:40:30Z",
            "version": 1,
            "changeset": 139521172,
            "user": "ma-rt-in",
            "uid": 1431737,
            "nodes": [
                293726089,
                1871652024
            ],
            "tags": {
                "highway": "service",
                "service": "driveway",
                "surface": "paving_stones"
            }
        },
        {
            "type": "way",
            "id": 1195271596,
            "timestamp": "2023-11-11T09:59:33Z",
            "version": 2,
            "changeset": 143892554,
            "user": "philopsil",
            "uid": 467783,
            "nodes": [
                1830897454,
                11068258650
            ],
            "tags": {
                "cycleway": "opposite",
                "highway": "living_street",
                "lit": "yes",
                "name": "Rathausstraße",
                "oneway": "yes",
                "oneway:bicycle": "no",
                "surface": "sett"
            }
        },
        {
            "type": "relation",
            "id": 16165831,
            "timestamp": "2023-11-11T02:24:06Z",
            "version": 6,
            "changeset": 143885161,
            "user": "b-jazz-bot",
            "uid": 9451067,
            "members": [
                {
                    "type": "node",
                    "ref": 11068258650,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11012347335,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069746621,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069746620,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069746619,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069746618,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069746617,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069746616,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069746615,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069746614,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11071172890,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11071172889,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069746611,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11071172888,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 9071521820,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 9049260449,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069746607,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11071172887,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069746605,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069736304,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 1830872116,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 3540141563,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 2121521768,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069736303,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 9071521820,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 9049260449,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11071172885,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11071172884,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069736300,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069736299,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11068258650,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11012347335,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069736276,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069736275,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069736274,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069736273,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069736272,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069736271,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069736270,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069736269,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 1830940090,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069736268,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069736267,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11071172860,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069736265,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069736264,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069736263,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 8783746154,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069736262,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069736261,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069736260,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069736259,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11069736282,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11069736281,
                    "role": "platform"
                },
                {
                    "type": "node",
                    "ref": 11068258650,
                    "role": "stop"
                },
                {
                    "type": "node",
                    "ref": 11012347335,
                    "role": "platform"
                },
                {
                    "type": "way",
                    "ref": 172153233,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195236003,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 43133586,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172153231,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 182532173,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 182532171,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 457431135,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172033868,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195236013,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172033869,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172033867,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 326751154,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 457431135,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 182532171,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 182532173,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172153231,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 28264707,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172148689,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172148677,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195236010,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 176931436,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172148680,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195236011,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172148677,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195236012,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 833877682,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172148687,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 306057828,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 326751155,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 307064738,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 143844002,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 307064737,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 202114304,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 307064738,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195236008,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172151969,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172151958,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195260900,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172151965,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195236008,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 326751155,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 306057828,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172148687,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 833877682,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195236012,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172148689,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 28264707,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 43133586,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 182532167,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 182532166,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 42691086,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1192422442,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172156495,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195236005,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 58981531,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172153225,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195271596,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172153233,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 42692718,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195236005,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 4857154,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 393046143,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 635437624,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1192147241,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 4857195,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1134649367,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172033855,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 345605387,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 393046144,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 393047842,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 77211350,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 24026704,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 393047843,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 393047844,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 43176953,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172190611,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195260899,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 25306176,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172153906,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172153924,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172153921,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172153916,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172153904,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195260893,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172153915,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195260892,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172156113,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 270575248,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172199799,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 158692001,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 158692005,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 270575250,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195260889,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1022369394,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172199816,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195260889,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 270575250,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 158692005,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 158692001,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172199799,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 270575248,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195260888,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172156099,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172156118,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172156118,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195260887,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 24026705,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195268482,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 176687599,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195268482,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195260884,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 393047841,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 672878373,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 77211350,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 393047842,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 393046144,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 345605387,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172033855,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1134649367,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 4857195,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 635437631,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 635437609,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 393046143,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 4857154,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 172156495,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1192422442,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 42691086,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 182532182,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 182532167,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1024440376,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 42691085,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 357759016,
                    "role": ""
                },
                {
                    "type": "way",
                    "ref": 1195271596,
                    "role": ""
                }
            ],
            "tags": {
                "colour": "#FF1493",
                "from": "Rathausstraße",
                "name": "BürgerBus Bad Bevensen",
                "network": "RBB",
                "operator": "BürgerBus Bad Bevensen e.V.",
                "public_transport:version": "2",
                "ref": "7072",
                "roundtrip": "yes",
                "route": "bus",
                "to": "Rathausstraße",
                "type": "route",
                "website": "https://buergerbus-badbevensen.de/"
            }
        }
    ]
};