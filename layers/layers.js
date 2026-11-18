var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_layer_red_ferroviaria_20231207064916_1 = new ol.format.GeoJSON();
var features_layer_red_ferroviaria_20231207064916_1 = format_layer_red_ferroviaria_20231207064916_1.readFeatures(json_layer_red_ferroviaria_20231207064916_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_red_ferroviaria_20231207064916_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_red_ferroviaria_20231207064916_1.addFeatures(features_layer_red_ferroviaria_20231207064916_1);
var lyr_layer_red_ferroviaria_20231207064916_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layer_red_ferroviaria_20231207064916_1, 
                style: style_layer_red_ferroviaria_20231207064916_1,
                popuplayertitle: 'layer_red_ferroviaria_20231207064916',
                interactive: true,
                title: '<img src="styles/legend/layer_red_ferroviaria_20231207064916_1.png" /> layer_red_ferroviaria_20231207064916'
            });
var format_MASASDEAGUA_2 = new ol.format.GeoJSON();
var features_MASASDEAGUA_2 = format_MASASDEAGUA_2.readFeatures(json_MASASDEAGUA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MASASDEAGUA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MASASDEAGUA_2.addFeatures(features_MASASDEAGUA_2);
var lyr_MASASDEAGUA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MASASDEAGUA_2, 
                style: style_MASASDEAGUA_2,
                popuplayertitle: 'MASAS DE AGUA',
                interactive: true,
                title: '<img src="styles/legend/MASASDEAGUA_2.png" /> MASAS DE AGUA'
            });
var format_CAMINONACIONAL_3 = new ol.format.GeoJSON();
var features_CAMINONACIONAL_3 = format_CAMINONACIONAL_3.readFeatures(json_CAMINONACIONAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAMINONACIONAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAMINONACIONAL_3.addFeatures(features_CAMINONACIONAL_3);
var lyr_CAMINONACIONAL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAMINONACIONAL_3, 
                style: style_CAMINONACIONAL_3,
                popuplayertitle: 'CAMINO NACIONAL',
                interactive: true,
                title: '<img src="styles/legend/CAMINONACIONAL_3.png" /> CAMINO NACIONAL'
            });
var format_santiago_4 = new ol.format.GeoJSON();
var features_santiago_4 = format_santiago_4.readFeatures(json_santiago_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_santiago_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_santiago_4.addFeatures(features_santiago_4);
var lyr_santiago_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_santiago_4, 
                style: style_santiago_4,
                popuplayertitle: 'santiago',
                interactive: true,
                title: '<img src="styles/legend/santiago_4.png" /> santiago'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_layer_red_ferroviaria_20231207064916_1.setVisible(true);lyr_MASASDEAGUA_2.setVisible(true);lyr_CAMINONACIONAL_3.setVisible(true);lyr_santiago_4.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_layer_red_ferroviaria_20231207064916_1,lyr_MASASDEAGUA_2,lyr_CAMINONACIONAL_3,lyr_santiago_4];
lyr_layer_red_ferroviaria_20231207064916_1.set('fieldAliases', {'OBEJTO': 'OBEJTO', 'ACTIV_2016': 'ACTIV_2016', 'LARGO_KM': 'LARGO_KM', 'ST_LENGTH_': 'ST_LENGTH_', });
lyr_MASASDEAGUA_2.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Nombre': 'Nombre', 'Tipo': 'Tipo', });
lyr_CAMINONACIONAL_3.set('fieldAliases', {'fid': 'fid', 'ROL': 'ROL', 'ROL_ID': 'ROL_ID', 'CALZADA': 'CALZADA', 'ORIENTACIO': 'ORIENTACIO', 'ROL_LABEL': 'ROL_LABEL', 'CODIGO_CAM': 'CODIGO_CAM', 'NOMBRE_CAM': 'NOMBRE_CAM', 'CLASIFICAC': 'CLASIFICAC', 'CARPETA': 'CARPETA', 'KM_I': 'KM_I', 'KM_F': 'KM_F', 'KM_TRAMO': 'KM_TRAMO', 'ENROLADO': 'ENROLADO', 'CONCESIONA': 'CONCESIONA', 'REGION': 'REGION', 'TUICION': 'TUICION', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_santiago_4.set('fieldAliases', {'fid': 'fid', 'ciudad': 'ciudad', });
lyr_layer_red_ferroviaria_20231207064916_1.set('fieldImages', {'OBEJTO': '', 'ACTIV_2016': '', 'LARGO_KM': '', 'ST_LENGTH_': '', });
lyr_MASASDEAGUA_2.set('fieldImages', {'fid': '', 'objectid': '', 'st_area_sh': '', 'st_length_': '', 'Nombre': '', 'Tipo': '', });
lyr_CAMINONACIONAL_3.set('fieldImages', {'fid': '', 'ROL': '', 'ROL_ID': '', 'CALZADA': '', 'ORIENTACIO': '', 'ROL_LABEL': '', 'CODIGO_CAM': '', 'NOMBRE_CAM': '', 'CLASIFICAC': '', 'CARPETA': '', 'KM_I': '', 'KM_F': '', 'KM_TRAMO': '', 'ENROLADO': '', 'CONCESIONA': '', 'REGION': '', 'TUICION': '', 'SHAPE_Leng': '', });
lyr_santiago_4.set('fieldImages', {'fid': '', 'ciudad': '', });
lyr_layer_red_ferroviaria_20231207064916_1.set('fieldLabels', {'OBEJTO': 'hidden field', 'ACTIV_2016': 'inline label - always visible', 'LARGO_KM': 'hidden field', 'ST_LENGTH_': 'hidden field', });
lyr_MASASDEAGUA_2.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'st_area_sh': 'hidden field', 'st_length_': 'hidden field', 'Nombre': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', });
lyr_CAMINONACIONAL_3.set('fieldLabels', {'fid': 'hidden field', 'ROL': 'hidden field', 'ROL_ID': 'hidden field', 'CALZADA': 'hidden field', 'ORIENTACIO': 'hidden field', 'ROL_LABEL': 'hidden field', 'CODIGO_CAM': 'hidden field', 'NOMBRE_CAM': 'hidden field', 'CLASIFICAC': 'hidden field', 'CARPETA': 'hidden field', 'KM_I': 'hidden field', 'KM_F': 'hidden field', 'KM_TRAMO': 'hidden field', 'ENROLADO': 'hidden field', 'CONCESIONA': 'hidden field', 'REGION': 'hidden field', 'TUICION': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_santiago_4.set('fieldLabels', {'fid': 'hidden field', 'ciudad': 'inline label - visible with data', });
lyr_santiago_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});