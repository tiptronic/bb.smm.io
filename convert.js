
var fs = require("fs");
// console.log(process.argv);
// console.log(process.cwd());
const path = process.cwd() + '/haltestellen.json';

// "routes": [
//     {
//         "departure_offset": 3000,
//         "prev_id": 36,
//         "route_id": 70721000
//     }
// ]

fs.readFile(path, "utf8", (err, jsn) => {
    if(err) {
        console.error(err);
        return;
    }

    const haltestellen = JSON.parse(jsn);

    haltestellen.forEach(element => {
        delete element.inuse;

        if(!element.hasOwnProperty('routes')) {
            element.routes = [ {
                "departure_offset": element.departure_offset || 0,
                "prev_id": element.prev_id || 0,
                "route_id": element.route_id || 0
            } ];
            delete element.departure_offset;
            delete element.prev_id;
            // delete element.route_id;
        }

    });

    // console.log(haltestellen);

    function pbcopy(data) {
        var proc = require('child_process').spawn('pbcopy');
        proc.stdin.write(data); proc.stdin.end();
    }

    // pbcopy(JSON.stringify(haltestellen));

    const makeFeature = ({name, lat, lng}) => {
        return {
            "type": "Feature",
            "properties": {
                "name": name,
                "type": "via"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    lat,
                    lng
                ]
            }
        };
    };

    const features = haltestellen.filter(h => h.route_id == 70721000).map(makeFeature);

    // pbcopy(JSON.stringify(features));
    console.log(JSON.stringify(features, null, 2));



});
