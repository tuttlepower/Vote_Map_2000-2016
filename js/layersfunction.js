(function () {
	var grayscale = L.esri.basemapLayer('Gray'),
		nationalGeographic = L.esri.basemapLayer('NationalGeographic'),
		darkmode = L.esri.basemapLayer('DarkGray');

	var basemaps = {
		Grayscale: grayscale,
		DarkMode: darkmode,
		NationalGeographic: nationalGeographic,
	};

	var groups = {
		cities: new L.LayerGroup(),
		restaurants: new L.LayerGroup(),
		dogs: new L.LayerGroup(),
		cats: new L.LayerGroup(),
		Election_2000: new L.LayerGroup(),
		Election_2004: new L.LayerGroup(),
		Election_2008: new L.LayerGroup(),
		Election_2012: new L.LayerGroup(),
		Election_2016: new L.LayerGroup(),

	};

	var counties = L.esri.featureLayer({
		url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1',
		simplifyFactor: 0.1,
		precision: 5,
		weight: .5,
		fillOpacity: 1,
		color: 'white',
		fields: ['OBJECTID', 'GEOID', 'NAME'],
		style: function (feature) {
			for (i in reworked) {
				if (feature.properties.GEOID == reworked[i].fips) {
					if (reworked[i].year == 2004) {
						if (reworked[i].democrat > reworked[i].republican) {
							return {
								fillColor: 'hsl(' + 240 + ',' + (reworked[i].percent) + '% ,' + 50 +
									'%)',
								color: 'hsl(' + 240 + ',' + (reworked[i].percent) + '% ,' + 50 + '%)',
								fillOpacity: (reworked[i].votetotal / upperfence),
							}

						} else {
							return {
								fillColor: 'hsl(' + 0 + ',' + (reworked[i].percent) + '% ,' + 50 +
									'%)',
								color: 'hsl(' + 0 + ',' + (reworked[i].percent) + '% ,' + 50 + '%)',
								fillOpacity: (reworked[i].votetotal / upperfence),
							}

						}

					}
				}
			}
		}
	}).addTo(groups.Election_2000);
	var bounty = L.esri.featureLayer({
		url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1',
		simplifyFactor: 0.1,
		precision: 5,
		weight: .5,
		fillOpacity: .5,
		color: 'grey',
		fields: ['OBJECTID', 'GEOID', 'NAME'],
		
	}).addTo(groups.cities);
	////////////////////////
	var counties = L.esri.featureLayer({
		url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1',
		simplifyFactor: 0.1,
		precision: 5,
		weight: .5,
		fillOpacity: 1,
		color: 'white',
		fields: ['OBJECTID', 'GEOID', 'NAME'],
		style: function (feature) {
			for (i in reworked) {
				if (feature.properties.GEOID == reworked[i].fips) {
					if (reworked[i].year == 2004) {
						if (reworked[i].democrat > reworked[i].republican) {
							return {
								fillColor: 'hsl(' + 240 + ',' + (reworked[i].percent) + '% ,' + 50 +
									'%)',
								color: 'hsl(' + 240 + ',' + (reworked[i].percent) + '% ,' + 50 + '%)',
								fillOpacity: (reworked[i].votetotal / upperfence),
							}

						} else {
							return {
								fillColor: 'hsl(' + 0 + ',' + (reworked[i].percent) + '% ,' + 50 +
									'%)',
								color: 'hsl(' + 0 + ',' + (reworked[i].percent) + '% ,' + 50 + '%)',
								fillOpacity: (reworked[i].votetotal / upperfence),
							}

						}

					}
				}
			}
		}
	}).addTo(groups.Election_2000);
	var bounty = L.esri.featureLayer({
		url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1',
		simplifyFactor: 0.1,
		precision: 5,
		weight: .5,
		fillOpacity: .5,
		color: 'grey',
		fields: ['OBJECTID', 'GEOID', 'NAME'],
		
	}).addTo(groups.cities);
	///////////////////////
	var counties = L.esri.featureLayer({
		url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1',
		simplifyFactor: 0.1,
		precision: 5,
		weight: .5,
		fillOpacity: 1,
		color: 'white',
		fields: ['OBJECTID', 'GEOID', 'NAME'],
		style: function (feature) {
			for (i in reworked) {
				if (feature.properties.GEOID == reworked[i].fips) {
					if (reworked[i].year == 2004) {
						if (reworked[i].democrat > reworked[i].republican) {
							return {
								fillColor: 'hsl(' + 240 + ',' + (reworked[i].percent) + '% ,' + 50 +
									'%)',
								color: 'hsl(' + 240 + ',' + (reworked[i].percent) + '% ,' + 50 + '%)',
								fillOpacity: (reworked[i].votetotal / upperfence),
							}

						} else {
							return {
								fillColor: 'hsl(' + 0 + ',' + (reworked[i].percent) + '% ,' + 50 +
									'%)',
								color: 'hsl(' + 0 + ',' + (reworked[i].percent) + '% ,' + 50 + '%)',
								fillOpacity: (reworked[i].votetotal / upperfence),
							}

						}

					}
				}
			}
		}
	}).addTo(groups.Election_2004);
	var bounty = L.esri.featureLayer({
		url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1',
		simplifyFactor: 0.1,
		precision: 5,
		weight: .5,
		fillOpacity: .5,
		color: 'grey',
		fields: ['OBJECTID', 'GEOID', 'NAME'],
		
	}).addTo(groups.cities);
	///////////////////////
	var counties = L.esri.featureLayer({
		url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1',
		simplifyFactor: 0.1,
		precision: 5,
		weight: .5,
		fillOpacity: 1,
		color: 'white',
		fields: ['OBJECTID', 'GEOID', 'NAME'],
		style: function (feature) {
			for (i in reworked) {
				if (feature.properties.GEOID == reworked[i].fips) {
					if (reworked[i].year == 2004) {
						if (reworked[i].democrat > reworked[i].republican) {
							return {
								fillColor: 'hsl(' + 240 + ',' + (reworked[i].percent) + '% ,' + 50 +
									'%)',
								color: 'hsl(' + 240 + ',' + (reworked[i].percent) + '% ,' + 50 + '%)',
								fillOpacity: (reworked[i].votetotal / upperfence),
							}

						} else {
							return {
								fillColor: 'hsl(' + 0 + ',' + (reworked[i].percent) + '% ,' + 50 +
									'%)',
								color: 'hsl(' + 0 + ',' + (reworked[i].percent) + '% ,' + 50 + '%)',
								fillOpacity: (reworked[i].votetotal / upperfence),
							}

						}

					}
				}
			}
		}
	}).addTo(groups.Election_2008);
	var bounty = L.esri.featureLayer({
		url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1',
		simplifyFactor: 0.1,
		precision: 5,
		weight: .5,
		fillOpacity: .5,
		color: 'grey',
		fields: ['OBJECTID', 'GEOID', 'NAME'],
		
	}).addTo(groups.cities);
	///////////////////////
	var counties = L.esri.featureLayer({
		url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1',
		simplifyFactor: 0.1,
		precision: 5,
		weight: .5,
		fillOpacity: 1,
		color: 'white',
		fields: ['OBJECTID', 'GEOID', 'NAME'],
		style: function (feature) {
			for (i in reworked) {
				if (feature.properties.GEOID == reworked[i].fips) {
					if (reworked[i].year == 2004) {
						if (reworked[i].democrat > reworked[i].republican) {
							return {
								fillColor: 'hsl(' + 240 + ',' + (reworked[i].percent) + '% ,' + 50 +
									'%)',
								color: 'hsl(' + 240 + ',' + (reworked[i].percent) + '% ,' + 50 + '%)',
								fillOpacity: (reworked[i].votetotal / upperfence),
							}

						} else {
							return {
								fillColor: 'hsl(' + 0 + ',' + (reworked[i].percent) + '% ,' + 50 +
									'%)',
								color: 'hsl(' + 0 + ',' + (reworked[i].percent) + '% ,' + 50 + '%)',
								fillOpacity: (reworked[i].votetotal / upperfence),
							}

						}

					}
				}
			}
		}
	}).addTo(groups.Election_2012);
	var bounty = L.esri.featureLayer({
		url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1',
		simplifyFactor: 0.1,
		precision: 5,
		weight: .5,
		fillOpacity: .5,
		color: 'grey',
		fields: ['OBJECTID', 'GEOID', 'NAME'],
		
	}).addTo(groups.cities);
	//////////////////////
	var counties = L.esri.featureLayer({
		url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1',
		simplifyFactor: 0.1,
		precision: 5,
		weight: .5,
		fillOpacity: 1,
		color: 'white',
		fields: ['OBJECTID', 'GEOID', 'NAME'],
		style: function (feature) {
			for (i in reworked) {
				if (feature.properties.GEOID == reworked[i].fips) {
					if (reworked[i].year == 2004) {
						if (reworked[i].democrat > reworked[i].republican) {
							return {
								fillColor: 'hsl(' + 240 + ',' + (reworked[i].percent) + '% ,' + 50 +
									'%)',
								color: 'hsl(' + 240 + ',' + (reworked[i].percent) + '% ,' + 50 + '%)',
								fillOpacity: (reworked[i].votetotal / upperfence),
							}

						} else {
							return {
								fillColor: 'hsl(' + 0 + ',' + (reworked[i].percent) + '% ,' + 50 +
									'%)',
								color: 'hsl(' + 0 + ',' + (reworked[i].percent) + '% ,' + 50 + '%)',
								fillOpacity: (reworked[i].votetotal / upperfence),
							}

						}

					}
				}
			}
		}
	}).addTo(groups.Election_2016);
	var bounty = L.esri.featureLayer({
		url: 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1',
		simplifyFactor: 0.1,
		precision: 5,
		weight: .5,
		fillOpacity: .5,
		color: 'grey',
		fields: ['OBJECTID', 'GEOID', 'NAME'],
		
	}).addTo(groups.cities);
	//////////////////////
	//////////////////////


	window.ExampleData = {
		LayerGroups: groups,
		Basemaps: basemaps
	};

}());