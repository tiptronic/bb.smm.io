relation 16165831

53.080530
10.570030

//  open https://overpass-turbo.eu/
// output complete data structure
// then click 'Export' in to UI

[out:json][timeout:25];
area["name"="Bad Bevensen"]->.searchArea;
(
  way["id"=16165831];
  node["ref"="7072"]["route"="bus"](area.searchArea);
  way["ref"="7072"]["route"="bus"](area.searchArea);
  relation["ref"="7072"]["route"="bus"](area.searchArea);
  relation["ref"="7072"]["name"="*"](area.searchArea);
);
(._;>;);
out meta;

// same thing:
[out:json][timeout:25];
area["name"="Bad Bevensen"]->.searchArea;
nwr["ref"="7072"]["route"="bus"](area.searchArea);
(._;>;);
out meta;

// also the same:
[out:json][timeout:25];
area["name"="Bad Bevensen"]->.searchArea;
wr["ref"="7072"]["route"="bus"](area.searchArea);
(._;>;);

out meta;

[out:json][timeout:25];
area["name"="Bad Bevensen"]->.searchArea;
wr["ref"="7072"]["route"="bus"](area.searchArea);
(._;>;);

out meta;


// ################################################################# BUSHALTESTELLEN #################################################################
[out:json][timeout:25];

area["name"="Bad Bevensen"]->.searchArea;
relation["ref"= "7072"](area.searchArea);
> -> .a;
node.a["highway"="bus_stop"];

out meta;
>;
out skel qt;


// #################################################################

[out:json][timeout:25];

area["name"="Bad Bevensen"];
node(area)["highway"="bus_stop"];
rel[public_transport=stop_area]({{bbox}});
node(r:"stop");
foreach(
  rel(bn)[type=route];
  node(r:"stop");
  out;
);





// nix

[out:json][timeout:25];

(
  way["id"=16165831];
  node["ref"="7072"]["route"="bus"]({{bbox}});
  way["ref"="7072"]["route"="bus"]({{bbox}});
  relation["ref"="7072"]["route"="bus"]({{bbox}});
  relation["ref"="7072"]["name"="*"]({{bbox}});
);
// print results

out meta;
>;
out skel qt;



node(area)[highway=bus_stop];
node["ref"="7072"]["highway"="bus_stop"]->.all;


(
    node(area)["highway"="bus_stop"];
    node(area)["ref"="7072"];<;
    );