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