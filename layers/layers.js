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
var format_geologi_137420220922100104_1 = new ol.format.GeoJSON();
var features_geologi_137420220922100104_1 = format_geologi_137420220922100104_1.readFeatures(json_geologi_137420220922100104_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geologi_137420220922100104_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geologi_137420220922100104_1.addFeatures(features_geologi_137420220922100104_1);
var lyr_geologi_137420220922100104_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_geologi_137420220922100104_1, 
                style: style_geologi_137420220922100104_1,
                popuplayertitle: "geologi_137420220922100104",
                interactive: true,
    title: 'geologi_137420220922100104<br />\
    <img src="styles/legend/geologi_137420220922100104_1_0.png" /> Rendah<br />\
    <img src="styles/legend/geologi_137420220922100104_1_1.png" /> Sedang<br />\
    <img src="styles/legend/geologi_137420220922100104_1_2.png" /> Tinggi<br />\
    <img src="styles/legend/geologi_137420220922100104_1_3.png" /> <br />'
        });
var format_jalur_137420220922095012_2 = new ol.format.GeoJSON();
var features_jalur_137420220922095012_2 = format_jalur_137420220922095012_2.readFeatures(json_jalur_137420220922095012_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalur_137420220922095012_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalur_137420220922095012_2.addFeatures(features_jalur_137420220922095012_2);
var lyr_jalur_137420220922095012_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalur_137420220922095012_2, 
                style: style_jalur_137420220922095012_2,
                popuplayertitle: "jalur_137420220922095012",
                interactive: true,
    title: 'jalur_137420220922095012<br />\
    <img src="styles/legend/jalur_137420220922095012_2_0.png" /> Jalan Arteri Primer<br />\
    <img src="styles/legend/jalur_137420220922095012_2_1.png" /> Jalan Arteri Sekunder<br />\
    <img src="styles/legend/jalur_137420220922095012_2_2.png" /> Jalan Kolektor Sekunder<br />\
    <img src="styles/legend/jalur_137420220922095012_2_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/jalur_137420220922095012_2_4.png" /> <br />'
        });
var format_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3 = new ol.format.GeoJSON();
var features_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3 = format_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3.readFeatures(json_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3.addFeatures(features_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3);
var lyr_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3, 
                style: style_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3,
                popuplayertitle: "rambu_rambu_lokasi_evakuasi_bencana_137420221003111218",
                interactive: true,
                title: '<img src="styles/legend/rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3.png" /> rambu_rambu_lokasi_evakuasi_bencana_137420221003111218'
            });

lyr_OSMStandard_0.setVisible(true);lyr_geologi_137420220922100104_1.setVisible(true);lyr_jalur_137420220922095012_2.setVisible(true);lyr_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_geologi_137420220922100104_1,lyr_jalur_137420220922095012_2,lyr_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3];
lyr_geologi_137420220922100104_1.set('fieldAliases', {'id_rb': 'id_rb', 'bencana': 'bencana', 'kecamatan': 'kecamatan', 'kelurahan': 'kelurahan', 'luas_ha': 'luas_ha', 'Deskripsi': 'Deskripsi', });
lyr_jalur_137420220922095012_2.set('fieldAliases', {'id_jeb': 'id_jeb', 'jalan': 'jalan', 'evakuasi': 'evakuasi', 'lebar_m': 'lebar_m', 'panjang_km': 'panjang_km', });
lyr_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3.set('fieldAliases', {'name': 'name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemo': 'altitudemo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', 'descript_1': 'descript_1', 'pdfmaps_ph': 'pdfmaps_ph', });
lyr_geologi_137420220922100104_1.set('fieldImages', {'id_rb': 'Hidden', 'bencana': 'TextEdit', 'kecamatan': 'Hidden', 'kelurahan': 'Hidden', 'luas_ha': 'Hidden', 'Deskripsi': 'TextEdit', });
lyr_jalur_137420220922095012_2.set('fieldImages', {'id_jeb': 'Hidden', 'jalan': 'TextEdit', 'evakuasi': 'Hidden', 'lebar_m': 'Hidden', 'panjang_km': 'Hidden', });
lyr_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3.set('fieldImages', {'name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudemo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'draworder': 'Hidden', 'icon': 'Hidden', 'descript_1': 'Hidden', 'pdfmaps_ph': 'Hidden', });
lyr_geologi_137420220922100104_1.set('fieldLabels', {'bencana': 'inline label - visible with data', 'Deskripsi': 'inline label - visible with data', });
lyr_jalur_137420220922095012_2.set('fieldLabels', {'jalan': 'inline label - visible with data', });
lyr_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3.set('fieldLabels', {'name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', });
lyr_rambu_rambu_lokasi_evakuasi_bencana_137420221003111218_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});