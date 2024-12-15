ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([30.199712, -17.353949, 30.213488, -17.346271]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Easteregghunteaster_egg_hunt_points_2 = new ol.format.GeoJSON();
var features_Easteregghunteaster_egg_hunt_points_2 = format_Easteregghunteaster_egg_hunt_points_2.readFeatures(json_Easteregghunteaster_egg_hunt_points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Easteregghunteaster_egg_hunt_points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Easteregghunteaster_egg_hunt_points_2.addFeatures(features_Easteregghunteaster_egg_hunt_points_2);
var lyr_Easteregghunteaster_egg_hunt_points_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Easteregghunteaster_egg_hunt_points_2, 
                style: style_Easteregghunteaster_egg_hunt_points_2,
                popuplayertitle: "Easter egg hunt — easter_egg_hunt_points",
                interactive: true,
    title: 'Easter egg hunt — easter_egg_hunt_points<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_0.png" /> 202773<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_1.png" /> 202899<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_2.png" /> 203120<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_3.png" /> 203148<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_4.png" /> 203162<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_5.png" /> 203168<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_6.png" /> 203181<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_7.png" /> 203182<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_8.png" /> 203189<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_9.png" /> 203215<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_10.png" /> 203220<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_11.png" /> 203224<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_12.png" /> 203327<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_13.png" /> 203394<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_14.png" /> 203398<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_15.png" /> 203454<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_16.png" /> 203466<br />\
    <img src="styles/legend/Easteregghunteaster_egg_hunt_points_2_17.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Easteregghunteaster_egg_hunt_points_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Easteregghunteaster_egg_hunt_points_2];
lyr_Easteregghunteaster_egg_hunt_points_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'point': 'point', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', });
lyr_Easteregghunteaster_egg_hunt_points_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'point': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Easteregghunteaster_egg_hunt_points_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'description': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - always visible', 'altitudeMode': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', 'point': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', });
lyr_Easteregghunteaster_egg_hunt_points_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});