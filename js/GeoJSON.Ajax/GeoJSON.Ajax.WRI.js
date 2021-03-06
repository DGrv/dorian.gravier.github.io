/*
 * Copyright (c) 2016 Dominique Cavailhez
 * https://github.com/Dominique92
 * Supported both on Leaflet V0.7 & V1.+
 *
 * geoJSON layers to access www.refuges.info geographic flows
 */

// Europe mountain points of interest
L.GeoJSON.Ajax.WRIpoi = L.GeoJSON.Ajax.extend({
	options: {
		urlGeoJSON: '//www.refuges.info/api/bbox',
		argsGeoJSON: {
			type_points: 'all'
		},
		bbox: true,
		style: function(feature) {
			return {
				iconUrl: '//www.refuges.info/images/icones/' + feature.properties.type.icone + '.png',
				iconAnchor: [8, 8],
				popup: feature.properties.nom,
				url: feature.properties.lien,
				degroup: 12 // Spread the icons when the cursor hover on a busy area.
			};
		}
	}
});
