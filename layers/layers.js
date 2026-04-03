var wms_layers = [];

var format_BOUNDARY_0 = new ol.format.GeoJSON();
var features_BOUNDARY_0 = format_BOUNDARY_0.readFeatures(json_BOUNDARY_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUNDARY_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_0.addFeatures(features_BOUNDARY_0);
var lyr_BOUNDARY_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUNDARY_0, 
                style: style_BOUNDARY_0,
                popuplayertitle: 'BOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/BOUNDARY_0.png" /> BOUNDARY'
            });
var format_Tree_1 = new ol.format.GeoJSON();
var features_Tree_1 = format_Tree_1.readFeatures(json_Tree_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tree_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tree_1.addFeatures(features_Tree_1);
var lyr_Tree_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tree_1, 
                style: style_Tree_1,
                popuplayertitle: 'Tree',
                interactive: true,
                title: '<img src="styles/legend/Tree_1.png" /> Tree'
            });
var format_Road_2 = new ol.format.GeoJSON();
var features_Road_2 = format_Road_2.readFeatures(json_Road_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_2.addFeatures(features_Road_2);
var lyr_Road_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_2, 
                style: style_Road_2,
                popuplayertitle: 'Road',
                interactive: true,
                title: '<img src="styles/legend/Road_2.png" /> Road'
            });
var format_Buildings_3 = new ol.format.GeoJSON();
var features_Buildings_3 = format_Buildings_3.readFeatures(json_Buildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_3.addFeatures(features_Buildings_3);
var lyr_Buildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_3, 
                style: style_Buildings_3,
                popuplayertitle: 'Buildings',
                interactive: true,
                title: '<img src="styles/legend/Buildings_3.png" /> Buildings'
            });
var format_HOSPITAL_4 = new ol.format.GeoJSON();
var features_HOSPITAL_4 = format_HOSPITAL_4.readFeatures(json_HOSPITAL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOSPITAL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSPITAL_4.addFeatures(features_HOSPITAL_4);
var lyr_HOSPITAL_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOSPITAL_4, 
                style: style_HOSPITAL_4,
                popuplayertitle: 'HOSPITAL',
                interactive: true,
                title: '<img src="styles/legend/HOSPITAL_4.png" /> HOSPITAL'
            });
var format_FILED_5 = new ol.format.GeoJSON();
var features_FILED_5 = format_FILED_5.readFeatures(json_FILED_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILED_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILED_5.addFeatures(features_FILED_5);
var lyr_FILED_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FILED_5, 
                style: style_FILED_5,
                popuplayertitle: 'FILED',
                interactive: true,
                title: '<img src="styles/legend/FILED_5.png" /> FILED'
            });

lyr_BOUNDARY_0.setVisible(true);lyr_Tree_1.setVisible(true);lyr_Road_2.setVisible(true);lyr_Buildings_3.setVisible(true);lyr_HOSPITAL_4.setVisible(true);lyr_FILED_5.setVisible(true);
var layersList = [lyr_BOUNDARY_0,lyr_Tree_1,lyr_Road_2,lyr_Buildings_3,lyr_HOSPITAL_4,lyr_FILED_5];
lyr_BOUNDARY_0.set('fieldAliases', {'id': 'id', });
lyr_Tree_1.set('fieldAliases', {'id': 'id', });
lyr_Road_2.set('fieldAliases', {'id': 'id', });
lyr_Buildings_3.set('fieldAliases', {'id': 'id', });
lyr_HOSPITAL_4.set('fieldAliases', {'id': 'id', });
lyr_FILED_5.set('fieldAliases', {'id': 'id', });
lyr_BOUNDARY_0.set('fieldImages', {'id': 'TextEdit', });
lyr_Tree_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Road_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Buildings_3.set('fieldImages', {'id': 'TextEdit', });
lyr_HOSPITAL_4.set('fieldImages', {'id': 'TextEdit', });
lyr_FILED_5.set('fieldImages', {'id': 'TextEdit', });
lyr_BOUNDARY_0.set('fieldLabels', {'id': 'no label', });
lyr_Tree_1.set('fieldLabels', {'id': 'no label', });
lyr_Road_2.set('fieldLabels', {'id': 'no label', });
lyr_Buildings_3.set('fieldLabels', {'id': 'no label', });
lyr_HOSPITAL_4.set('fieldLabels', {'id': 'no label', });
lyr_FILED_5.set('fieldLabels', {'id': 'no label', });
lyr_FILED_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});