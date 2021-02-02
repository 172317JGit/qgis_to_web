ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:5234").setExtent([104157.119997, 168089.443696, 104344.633291, 168217.704693]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_District_1 = new ol.format.GeoJSON();
var features_District_1 = format_District_1.readFeatures(json_District_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_District_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_1.addFeatures(features_District_1);
var lyr_District_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_1, 
                style: style_District_1,
                interactive: true,
                title: '<img src="styles/legend/District_1.png" /> District'
            });
var format_wes_layer_2 = new ol.format.GeoJSON();
var features_wes_layer_2 = format_wes_layer_2.readFeatures(json_wes_layer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_wes_layer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wes_layer_2.addFeatures(features_wes_layer_2);
var lyr_wes_layer_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wes_layer_2, 
                style: style_wes_layer_2,
                interactive: true,
                title: '<img src="styles/legend/wes_layer_2.png" /> wes_layer'
            });
var format_Main_Street_3 = new ol.format.GeoJSON();
var features_Main_Street_3 = format_Main_Street_3.readFeatures(json_Main_Street_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_Main_Street_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Main_Street_3.addFeatures(features_Main_Street_3);
var lyr_Main_Street_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Main_Street_3, 
                style: style_Main_Street_3,
                interactive: true,
                title: '<img src="styles/legend/Main_Street_3.png" /> Main_Street'
            });
var format_Hirana_rd_4 = new ol.format.GeoJSON();
var features_Hirana_rd_4 = format_Hirana_rd_4.readFeatures(json_Hirana_rd_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_Hirana_rd_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hirana_rd_4.addFeatures(features_Hirana_rd_4);
var lyr_Hirana_rd_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hirana_rd_4, 
                style: style_Hirana_rd_4,
                interactive: true,
                title: '<img src="styles/legend/Hirana_rd_4.png" /> Hirana_rd'
            });
var format_AA002Galle_Road_5 = new ol.format.GeoJSON();
var features_AA002Galle_Road_5 = format_AA002Galle_Road_5.readFeatures(json_AA002Galle_Road_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_AA002Galle_Road_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AA002Galle_Road_5.addFeatures(features_AA002Galle_Road_5);
var lyr_AA002Galle_Road_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AA002Galle_Road_5, 
                style: style_AA002Galle_Road_5,
                interactive: true,
                title: '<img src="styles/legend/AA002Galle_Road_5.png" /> AA002-Galle_Road'
            });
var format_Modarawila_Industrial_Park_6 = new ol.format.GeoJSON();
var features_Modarawila_Industrial_Park_6 = format_Modarawila_Industrial_Park_6.readFeatures(json_Modarawila_Industrial_Park_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_Modarawila_Industrial_Park_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Modarawila_Industrial_Park_6.addFeatures(features_Modarawila_Industrial_Park_6);
var lyr_Modarawila_Industrial_Park_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Modarawila_Industrial_Park_6, 
                style: style_Modarawila_Industrial_Park_6,
                interactive: true,
                title: '<img src="styles/legend/Modarawila_Industrial_Park_6.png" /> Modarawila_Industrial_Park'
            });
var format_AA008PanaduraRathnapura_Road_7 = new ol.format.GeoJSON();
var features_AA008PanaduraRathnapura_Road_7 = format_AA008PanaduraRathnapura_Road_7.readFeatures(json_AA008PanaduraRathnapura_Road_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_AA008PanaduraRathnapura_Road_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AA008PanaduraRathnapura_Road_7.addFeatures(features_AA008PanaduraRathnapura_Road_7);
var lyr_AA008PanaduraRathnapura_Road_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AA008PanaduraRathnapura_Road_7, 
                style: style_AA008PanaduraRathnapura_Road_7,
                interactive: true,
                title: '<img src="styles/legend/AA008PanaduraRathnapura_Road_7.png" /> AA008-Panadura-Rathnapura_Road'
            });
var format_ColomboMatara_railwayline_8 = new ol.format.GeoJSON();
var features_ColomboMatara_railwayline_8 = format_ColomboMatara_railwayline_8.readFeatures(json_ColomboMatara_railwayline_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_ColomboMatara_railwayline_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColomboMatara_railwayline_8.addFeatures(features_ColomboMatara_railwayline_8);
var lyr_ColomboMatara_railwayline_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ColomboMatara_railwayline_8, 
                style: style_ColomboMatara_railwayline_8,
                interactive: true,
                title: '<img src="styles/legend/ColomboMatara_railwayline_8.png" /> Colombo-Matara_railwayline'
            });
var format_PanaduraTown_9 = new ol.format.GeoJSON();
var features_PanaduraTown_9 = format_PanaduraTown_9.readFeatures(json_PanaduraTown_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_PanaduraTown_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PanaduraTown_9.addFeatures(features_PanaduraTown_9);cluster_PanaduraTown_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PanaduraTown_9
});
var lyr_PanaduraTown_9 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PanaduraTown_9, 
                style: style_PanaduraTown_9,
                interactive: true,
                title: '<img src="styles/legend/PanaduraTown_9.png" /> Panadura Town'
            });
var format_GeoTagged_Images_10 = new ol.format.GeoJSON();
var features_GeoTagged_Images_10 = format_GeoTagged_Images_10.readFeatures(json_GeoTagged_Images_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_GeoTagged_Images_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoTagged_Images_10.addFeatures(features_GeoTagged_Images_10);cluster_GeoTagged_Images_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GeoTagged_Images_10
});
var lyr_GeoTagged_Images_10 = new ol.layer.Vector({
                declutter: true,
                source:cluster_GeoTagged_Images_10, 
                style: style_GeoTagged_Images_10,
                interactive: true,
                title: '<img src="styles/legend/GeoTagged_Images_10.png" /> GeoTagged_Images'
            });

lyr_OSMStandard_0.setVisible(true);lyr_District_1.setVisible(true);lyr_wes_layer_2.setVisible(true);lyr_Main_Street_3.setVisible(true);lyr_Hirana_rd_4.setVisible(true);lyr_AA002Galle_Road_5.setVisible(true);lyr_Modarawila_Industrial_Park_6.setVisible(true);lyr_AA008PanaduraRathnapura_Road_7.setVisible(true);lyr_ColomboMatara_railwayline_8.setVisible(true);lyr_PanaduraTown_9.setVisible(true);lyr_GeoTagged_Images_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_District_1,lyr_wes_layer_2,lyr_Main_Street_3,lyr_Hirana_rd_4,lyr_AA002Galle_Road_5,lyr_Modarawila_Industrial_Park_6,lyr_AA008PanaduraRathnapura_Road_7,lyr_ColomboMatara_railwayline_8,lyr_PanaduraTown_9,lyr_GeoTagged_Images_10];
lyr_District_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'Area': 'Area', 'District': 'District', 'Sinhalese': 'Sinhalese', 'SL_Tamils': 'SL_Tamils', 'Ind_Tamils': 'Ind_Tamils', 'Moor': 'Moor', 'Burgher': 'Burgher', 'Malay': 'Malay', 'Other': 'Other', 'Male': 'Male', 'Female': 'Female', 'Pop1963': 'Pop1963', 'Pop1971': 'Pop1971', 'Pop1981_': 'Pop1981_', 'Pop2001_': 'Pop2001_', 'Pop2012': 'Pop2012', 'Sin_2012': 'Sin_2012', 'In_Tam2012': 'In_Tam2012', 'Sl_Tam2012': 'Sl_Tam2012', 'Mus_2012': 'Mus_2012', 'Other_2012': 'Other_2012', });
lyr_wes_layer_2.set('fieldAliases', {'fid': 'fid', 'PROVINCE_N': 'PROVINCE_N', 'Area': 'Area', 'District': 'District', 'Sinhalese': 'Sinhalese', 'SL_Tamils': 'SL_Tamils', 'Ind_Tamils': 'Ind_Tamils', 'Moor': 'Moor', 'Burgher': 'Burgher', 'Malay': 'Malay', 'Other': 'Other', 'Male': 'Male', 'Female': 'Female', 'Pop1963': 'Pop1963', 'Pop1971': 'Pop1971', 'Pop1981_': 'Pop1981_', 'Pop2001_': 'Pop2001_', 'Pop2012': 'Pop2012', 'Sin_2012': 'Sin_2012', 'In_Tam2012': 'In_Tam2012', 'Sl_Tam2012': 'Sl_Tam2012', 'Mus_2012': 'Mus_2012', 'Other_2012': 'Other_2012', });
lyr_Main_Street_3.set('fieldAliases', {'Street': 'Street', });
lyr_Hirana_rd_4.set('fieldAliases', {'id': 'id', 'Hirana rd': 'Hirana rd', });
lyr_AA002Galle_Road_5.set('fieldAliases', {'Galle road': 'Galle road', 'Length': 'Length', });
lyr_Modarawila_Industrial_Park_6.set('fieldAliases', {'Modarawila': 'Modarawila', 'Distance': 'Distance', });
lyr_AA008PanaduraRathnapura_Road_7.set('fieldAliases', {'Eluwila rd': 'Eluwila rd', 'Length': 'Length', });
lyr_ColomboMatara_railwayline_8.set('fieldAliases', {'Railway': 'Railway', 'Length': 'Length', 'No_Tracks': 'No_Tracks', });
lyr_PanaduraTown_9.set('fieldAliases', {'Panadura': 'Panadura', 'Populaton': 'Populaton', 'Density': 'Density', });
lyr_GeoTagged_Images_10.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_District_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'Area': 'TextEdit', 'District': 'TextEdit', 'Sinhalese': 'TextEdit', 'SL_Tamils': 'TextEdit', 'Ind_Tamils': 'TextEdit', 'Moor': 'TextEdit', 'Burgher': 'TextEdit', 'Malay': 'TextEdit', 'Other': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'Pop1963': 'TextEdit', 'Pop1971': 'TextEdit', 'Pop1981_': 'Range', 'Pop2001_': 'Range', 'Pop2012': 'Range', 'Sin_2012': 'Range', 'In_Tam2012': 'Range', 'Sl_Tam2012': 'Range', 'Mus_2012': 'Range', 'Other_2012': 'Range', });
lyr_wes_layer_2.set('fieldImages', {'fid': 'TextEdit', 'PROVINCE_N': 'TextEdit', 'Area': 'TextEdit', 'District': 'TextEdit', 'Sinhalese': 'TextEdit', 'SL_Tamils': 'TextEdit', 'Ind_Tamils': 'TextEdit', 'Moor': 'TextEdit', 'Burgher': 'TextEdit', 'Malay': 'TextEdit', 'Other': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'Pop1963': 'TextEdit', 'Pop1971': 'TextEdit', 'Pop1981_': 'Range', 'Pop2001_': 'Range', 'Pop2012': 'Range', 'Sin_2012': 'Range', 'In_Tam2012': 'Range', 'Sl_Tam2012': 'Range', 'Mus_2012': 'Range', 'Other_2012': 'Range', });
lyr_Main_Street_3.set('fieldImages', {'Street': 'TextEdit', });
lyr_Hirana_rd_4.set('fieldImages', {'id': 'TextEdit', 'Hirana rd': 'TextEdit', });
lyr_AA002Galle_Road_5.set('fieldImages', {'Galle road': 'TextEdit', 'Length': 'TextEdit', });
lyr_Modarawila_Industrial_Park_6.set('fieldImages', {'Modarawila': 'TextEdit', 'Distance': 'TextEdit', });
lyr_AA008PanaduraRathnapura_Road_7.set('fieldImages', {'Eluwila rd': 'TextEdit', 'Length': 'TextEdit', });
lyr_ColomboMatara_railwayline_8.set('fieldImages', {'Railway': 'TextEdit', 'Length': '', 'No_Tracks': '', });
lyr_PanaduraTown_9.set('fieldImages', {'Panadura': 'TextEdit', 'Populaton': 'Range', 'Density': 'Range', });
lyr_GeoTagged_Images_10.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', });
lyr_District_1.set('fieldLabels', {'PROVINCE_N': 'no label', 'Area': 'no label', 'District': 'no label', 'Sinhalese': 'no label', 'SL_Tamils': 'no label', 'Ind_Tamils': 'no label', 'Moor': 'no label', 'Burgher': 'no label', 'Malay': 'no label', 'Other': 'no label', 'Male': 'no label', 'Female': 'no label', 'Pop1963': 'no label', 'Pop1971': 'no label', 'Pop1981_': 'no label', 'Pop2001_': 'no label', 'Pop2012': 'no label', 'Sin_2012': 'no label', 'In_Tam2012': 'no label', 'Sl_Tam2012': 'no label', 'Mus_2012': 'no label', 'Other_2012': 'no label', });
lyr_wes_layer_2.set('fieldLabels', {'fid': 'no label', 'PROVINCE_N': 'inline label', 'Area': 'inline label', 'District': 'header label', 'Sinhalese': 'inline label', 'SL_Tamils': 'inline label', 'Ind_Tamils': 'inline label', 'Moor': 'inline label', 'Burgher': 'inline label', 'Malay': 'inline label', 'Other': 'inline label', 'Male': 'inline label', 'Female': 'inline label', 'Pop1963': 'no label', 'Pop1971': 'no label', 'Pop1981_': 'no label', 'Pop2001_': 'no label', 'Pop2012': 'inline label', 'Sin_2012': 'no label', 'In_Tam2012': 'no label', 'Sl_Tam2012': 'no label', 'Mus_2012': 'no label', 'Other_2012': 'no label', });
lyr_Main_Street_3.set('fieldLabels', {'Street': 'inline label', });
lyr_Hirana_rd_4.set('fieldLabels', {'id': 'no label', 'Hirana rd': 'inline label', });
lyr_AA002Galle_Road_5.set('fieldLabels', {'Galle road': 'header label', 'Length': 'header label', });
lyr_Modarawila_Industrial_Park_6.set('fieldLabels', {'Modarawila': 'header label', 'Distance': 'inline label', });
lyr_AA008PanaduraRathnapura_Road_7.set('fieldLabels', {'Eluwila rd': 'inline label', 'Length': 'inline label', });
lyr_ColomboMatara_railwayline_8.set('fieldLabels', {'Railway': 'inline label', 'Length': 'inline label', 'No_Tracks': 'inline label', });
lyr_PanaduraTown_9.set('fieldLabels', {'Panadura': 'header label', 'Populaton': 'inline label', 'Density': 'inline label', });
lyr_GeoTagged_Images_10.set('fieldLabels', {'fid': 'no label', 'photo': 'no label', 'filename': 'header label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'longitude': 'inline label', 'latitude': 'inline label', 'timestamp': 'no label', });
lyr_GeoTagged_Images_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});