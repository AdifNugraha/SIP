var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_admkudus_1 = new ol.format.GeoJSON();
var features_admkudus_1 = format_admkudus_1.readFeatures(json_admkudus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admkudus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admkudus_1.addFeatures(features_admkudus_1);
var lyr_admkudus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_admkudus_1, 
                style: style_admkudus_1,
                popuplayertitle: 'admkudus',
                interactive: true,
                title: '<img src="styles/legend/admkudus_1.png" /> admkudus'
            });
var format_Titik_UMKM_21_April_2 = new ol.format.GeoJSON();
var features_Titik_UMKM_21_April_2 = format_Titik_UMKM_21_April_2.readFeatures(json_Titik_UMKM_21_April_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_UMKM_21_April_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_UMKM_21_April_2.addFeatures(features_Titik_UMKM_21_April_2);
var lyr_Titik_UMKM_21_April_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_UMKM_21_April_2, 
                style: style_Titik_UMKM_21_April_2,
                popuplayertitle: 'Titik_UMKM_21_April',
                interactive: true,
                title: '<img src="styles/legend/Titik_UMKM_21_April_2.png" /> Titik_UMKM_21_April'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_admkudus_1.setVisible(true);lyr_Titik_UMKM_21_April_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_admkudus_1,lyr_Titik_UMKM_21_April_2];
lyr_admkudus_1.set('fieldAliases', {'NAMA_DESA': 'NAMA_DESA', 'NAMA_KEC': 'NAMA_KEC', 'NAMA_KAB': 'NAMA_KAB', 'NAMA_PROP': 'NAMA_PROP', 'MACEM': 'MACEM', 'SWP': 'SWP', 'AIR_LIMBAH': 'AIR_LIMBAH', 'PHBS': 'PHBS', });
lyr_Titik_UMKM_21_April_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Jenis': 'Jenis', 'Cluster': 'Cluster', });
lyr_admkudus_1.set('fieldImages', {'NAMA_DESA': '', 'NAMA_KEC': '', 'NAMA_KAB': '', 'NAMA_PROP': '', 'MACEM': '', 'SWP': '', 'AIR_LIMBAH': '', 'PHBS': '', });
lyr_Titik_UMKM_21_April_2.set('fieldImages', {'OBJECTID': '', 'Name': '', 'Jenis': '', 'Cluster': '', });
lyr_admkudus_1.set('fieldLabels', {'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'NAMA_KAB': 'no label', 'NAMA_PROP': 'no label', 'MACEM': 'no label', 'SWP': 'no label', 'AIR_LIMBAH': 'no label', 'PHBS': 'no label', });
lyr_Titik_UMKM_21_April_2.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'Jenis': 'no label', 'Cluster': 'no label', });
lyr_Titik_UMKM_21_April_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});