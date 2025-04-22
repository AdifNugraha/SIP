var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Titik_UMKM_21_April_1 = new ol.format.GeoJSON();
var features_Titik_UMKM_21_April_1 = format_Titik_UMKM_21_April_1.readFeatures(json_Titik_UMKM_21_April_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_UMKM_21_April_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_UMKM_21_April_1.addFeatures(features_Titik_UMKM_21_April_1);
var lyr_Titik_UMKM_21_April_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_UMKM_21_April_1, 
                style: style_Titik_UMKM_21_April_1,
                popuplayertitle: 'Titik_UMKM_21_April',
                interactive: true,
                title: '<img src="styles/legend/Titik_UMKM_21_April_1.png" /> Titik_UMKM_21_April'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Titik_UMKM_21_April_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Titik_UMKM_21_April_1];
lyr_Titik_UMKM_21_April_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Jenis': 'Jenis', 'Cluster': 'Cluster', });
lyr_Titik_UMKM_21_April_1.set('fieldImages', {'OBJECTID': '', 'Name': '', 'Jenis': '', 'Cluster': '', });
lyr_Titik_UMKM_21_April_1.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'Jenis': 'no label', 'Cluster': 'no label', });
lyr_Titik_UMKM_21_April_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});