//creates variable called map and sets the view to middle of America with a zoom level of 5
var map = L.map('map', {
    center: [39.0902, -95.7129],
    zoom: 5,
});

var year = 2008;
var test = [{
    "year": 2000,
    "upperFence": 51327.875
},
{
    "year": 2004,
    "upperFence": 60004.5
},
{
    "year": 2008,
    "upperFence": 64140
},
{
    "year": 2012,
    "upperFence": 62942
},
{
    "year": 2016,
    "upperFence": 66148
}]
var upperfence2000 = 51327.875;
var upperfence2004 = 60004.5;
var upperfence2008 = 64140;
var upperfence2012 = 62942;
var upperfence2016 = 66148;

//Sets basemap color and features 
L.esri.basemapLayer('Gray').addTo(map);
//pulls county data from US
var counties = L.esri.featureLayer({
    url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1',
    simplifyFactor: 0.1,
    precision: 5,
    weight: .5,
    opacity: 1,
    fillOpacity: 1,
    color: 'white',
    fields: ['OBJECTID', 'GEOID', 'NAME'],
    //fillColor: 'white',

}).addTo(map);

var oldId;

counties.on('mouseout', function (e) {
    document.getElementById('info-pane').innerHTML = 'Hover to Inspect';
    counties.resetFeatureStyle(oldId);
});

counties.on('mouseover', function (e) {
    oldId = e.layer.feature.id;
    document.getElementById('info-pane').innerHTML = e.layer.feature.properties.NAME + ' - ' + e
        .layer.feature
        .properties.GEOID;
    counties.setFeatureStyle(e.layer.feature.id, {
        color: 'orange',
        fillColor: 'orange',
        weight: .3,
        opacity: 1,
        fillOpacity: 1,
    });
});

//binds popups to the counties layer
//this determines what goes inside the popup for each county
counties.bindPopup(function (layer) {
    for (i in reworked) {
        if (layer.feature.properties.GEOID == reworked[i].fips) {
            if (reworked[i].year == year) {
                return L.Util.template(
                    '<div><p><b>Year: </b>' + reworked[i].year.toString() +
                    '</p><p><b>County Name: </b>{NAME}</p><p><b>Democratic Votes:</b> ' +
                    reworked[i]
                    .democrat.toLocaleString() + '<b> (' + (reworked[i].democrat / reworked[i]
                        .votetotal *
                        100).toFixed(2) +
                    '%)</b>' + '</p><p><b>Republican Votes: </b>' + reworked[i].republican
                    .toLocaleString() + '<b> (' + (reworked[i].republican / reworked[i]
                        .votetotal * 100)
                    .toFixed(2) + '%)</b>' +
                    '</p></div>',
                    layer.feature.properties);
            }
        }
    }


});