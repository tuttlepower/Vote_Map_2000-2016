//vars for years with their upper fences 
var year = 2000;
var upperfence = 51327.875;

////////////////////////////////////////////////////////////////////////////////////////////////
//pulls county data from US
var counties = L.esri.featureLayer({
    url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1',
    simplifyFactor: 0.1,
    precision: 5,
    weight: .5,
    fillOpacity: 1,
    fields: ['OBJECTID', 'GEOID', 'NAME'],
    ////////////////////////////////////////////////////////////////////////////////////////////////
    style: function layerstylist(feature) {
        for (i in reworked) {
            if (feature.properties.GEOID == reworked[i].fips) {
                if (reworked[i].year == year) {
                    if (reworked[i].democrat > reworked[i].republican) {
                        return {
                            //Democrat - Blue - fillColor: 'hsl(250,100%,50%)'
                            fillColor: 'hsl(' + 240 + ',' + (reworked[i].percent) + '% ,' + 50 +
                                '%)',
                            color: 'hsl(' + 240 + ',' + (reworked[i].percent) + '% ,' + 50 + '%)',
                            fillOpacity: (reworked[i].votetotal / upperfence),
                        }
                    } else {
                        return {
                            // Republican - Red - fillColor: 'hsl(0,100%,50%)'
                            fillColor: 'hsl(' + 0 + ',' + (reworked[i].percent) + '% ,' + 50 +
                                '%)',
                            color: 'hsl(' + 0 + ',' + (reworked[i].percent) + '% ,' + 50 + '%)',
                            fillOpacity: (reworked[i].votetotal / upperfence2000),
                        }
                    }
                }
            }
        }
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////

var oldId;

////////////////////////////////////////////////////////////////////////////////////////////////

counties.on('mouseout', function (e) {
    document.getElementById('info-pane').innerHTML = 'Hover to Inspect';
    counties.resetFeatureStyle(oldId);
});

////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////

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
////////////////////////////////////////////////////////////////////////////////////////////////