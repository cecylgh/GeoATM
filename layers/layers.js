var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KawasanUGM_2 = new ol.format.GeoJSON();
var features_KawasanUGM_2 = format_KawasanUGM_2.readFeatures(json_KawasanUGM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanUGM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanUGM_2.addFeatures(features_KawasanUGM_2);
var lyr_KawasanUGM_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KawasanUGM_2, 
                style: style_KawasanUGM_2,
                interactive: false,
                title: '<img src="styles/legend/KawasanUGM_2.png" /> Kawasan UGM'
            });
var format_Bangunan_3 = new ol.format.GeoJSON();
var features_Bangunan_3 = format_Bangunan_3.readFeatures(json_Bangunan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_3.addFeatures(features_Bangunan_3);
var lyr_Bangunan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_3, 
                style: style_Bangunan_3,
                interactive: false,
                title: '<img src="styles/legend/Bangunan_3.png" /> Bangunan'
            });
var format_JaringanJalan_4 = new ol.format.GeoJSON();
var features_JaringanJalan_4 = format_JaringanJalan_4.readFeatures(json_JaringanJalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_4.addFeatures(features_JaringanJalan_4);
var lyr_JaringanJalan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanJalan_4, 
                style: style_JaringanJalan_4,
                interactive: false,
                title: '<img src="styles/legend/JaringanJalan_4.png" /> Jaringan Jalan'
            });
var format_FapertakeATM_5 = new ol.format.GeoJSON();
var features_FapertakeATM_5 = format_FapertakeATM_5.readFeatures(json_FapertakeATM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FapertakeATM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FapertakeATM_5.addFeatures(features_FapertakeATM_5);
var lyr_FapertakeATM_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FapertakeATM_5, 
                style: style_FapertakeATM_5,
                interactive: false,
                title: '<img src="styles/legend/FapertakeATM_5.png" /> Faperta ke ATM'
            });
var format_FarmasikeATM_6 = new ol.format.GeoJSON();
var features_FarmasikeATM_6 = format_FarmasikeATM_6.readFeatures(json_FarmasikeATM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FarmasikeATM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FarmasikeATM_6.addFeatures(features_FarmasikeATM_6);
var lyr_FarmasikeATM_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FarmasikeATM_6, 
                style: style_FarmasikeATM_6,
                interactive: false,
                title: '<img src="styles/legend/FarmasikeATM_6.png" /> Farmasi ke ATM'
            });
var format_FTPkeATM_7 = new ol.format.GeoJSON();
var features_FTPkeATM_7 = format_FTPkeATM_7.readFeatures(json_FTPkeATM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FTPkeATM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FTPkeATM_7.addFeatures(features_FTPkeATM_7);
var lyr_FTPkeATM_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FTPkeATM_7, 
                style: style_FTPkeATM_7,
                interactive: false,
                title: '<img src="styles/legend/FTPkeATM_7.png" /> FTP ke ATM'
            });
var format_PascaSarjanakeATM_8 = new ol.format.GeoJSON();
var features_PascaSarjanakeATM_8 = format_PascaSarjanakeATM_8.readFeatures(json_PascaSarjanakeATM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PascaSarjanakeATM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PascaSarjanakeATM_8.addFeatures(features_PascaSarjanakeATM_8);
var lyr_PascaSarjanakeATM_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PascaSarjanakeATM_8, 
                style: style_PascaSarjanakeATM_8,
                interactive: false,
                title: '<img src="styles/legend/PascaSarjanakeATM_8.png" /> Pasca Sarjana ke ATM'
            });
var format_SVkeATM_9 = new ol.format.GeoJSON();
var features_SVkeATM_9 = format_SVkeATM_9.readFeatures(json_SVkeATM_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SVkeATM_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVkeATM_9.addFeatures(features_SVkeATM_9);
var lyr_SVkeATM_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SVkeATM_9, 
                style: style_SVkeATM_9,
                interactive: false,
                title: '<img src="styles/legend/SVkeATM_9.png" /> SV ke ATM'
            });
var format_BiokeATM_10 = new ol.format.GeoJSON();
var features_BiokeATM_10 = format_BiokeATM_10.readFeatures(json_BiokeATM_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiokeATM_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BiokeATM_10.addFeatures(features_BiokeATM_10);
var lyr_BiokeATM_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiokeATM_10, 
                style: style_BiokeATM_10,
                interactive: false,
                title: '<img src="styles/legend/BiokeATM_10.png" /> Bio ke ATM'
            });
var format_FHkeATM_11 = new ol.format.GeoJSON();
var features_FHkeATM_11 = format_FHkeATM_11.readFeatures(json_FHkeATM_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FHkeATM_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FHkeATM_11.addFeatures(features_FHkeATM_11);
var lyr_FHkeATM_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FHkeATM_11, 
                style: style_FHkeATM_11,
                interactive: false,
                title: '<img src="styles/legend/FHkeATM_11.png" /> FH ke ATM'
            });
var format_FIBkeATM_12 = new ol.format.GeoJSON();
var features_FIBkeATM_12 = format_FIBkeATM_12.readFeatures(json_FIBkeATM_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIBkeATM_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIBkeATM_12.addFeatures(features_FIBkeATM_12);
var lyr_FIBkeATM_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FIBkeATM_12, 
                style: style_FIBkeATM_12,
                interactive: false,
                title: '<img src="styles/legend/FIBkeATM_12.png" /> FIB ke ATM'
            });
var format_FKKMKkeATM_13 = new ol.format.GeoJSON();
var features_FKKMKkeATM_13 = format_FKKMKkeATM_13.readFeatures(json_FKKMKkeATM_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FKKMKkeATM_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FKKMKkeATM_13.addFeatures(features_FKKMKkeATM_13);
var lyr_FKKMKkeATM_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FKKMKkeATM_13, 
                style: style_FKKMKkeATM_13,
                interactive: false,
                title: '<img src="styles/legend/FKKMKkeATM_13.png" /> FKKMK ke ATM'
            });
var format_FGeokeATM_14 = new ol.format.GeoJSON();
var features_FGeokeATM_14 = format_FGeokeATM_14.readFeatures(json_FGeokeATM_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FGeokeATM_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FGeokeATM_14.addFeatures(features_FGeokeATM_14);
var lyr_FGeokeATM_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FGeokeATM_14, 
                style: style_FGeokeATM_14,
                interactive: false,
                title: '<img src="styles/legend/FGeokeATM_14.png" /> FGeo ke ATM'
            });
var format_FilsafatkeATM_15 = new ol.format.GeoJSON();
var features_FilsafatkeATM_15 = format_FilsafatkeATM_15.readFeatures(json_FilsafatkeATM_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FilsafatkeATM_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FilsafatkeATM_15.addFeatures(features_FilsafatkeATM_15);
var lyr_FilsafatkeATM_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FilsafatkeATM_15, 
                style: style_FilsafatkeATM_15,
                interactive: false,
                title: '<img src="styles/legend/FilsafatkeATM_15.png" /> Filsafat ke ATM'
            });
var format_FKTkeATM_16 = new ol.format.GeoJSON();
var features_FKTkeATM_16 = format_FKTkeATM_16.readFeatures(json_FKTkeATM_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FKTkeATM_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FKTkeATM_16.addFeatures(features_FKTkeATM_16);
var lyr_FKTkeATM_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FKTkeATM_16, 
                style: style_FKTkeATM_16,
                interactive: false,
                title: '<img src="styles/legend/FKTkeATM_16.png" /> FKT ke ATM'
            });
var format_FEBkeATM_17 = new ol.format.GeoJSON();
var features_FEBkeATM_17 = format_FEBkeATM_17.readFeatures(json_FEBkeATM_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FEBkeATM_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FEBkeATM_17.addFeatures(features_FEBkeATM_17);
var lyr_FEBkeATM_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FEBkeATM_17, 
                style: style_FEBkeATM_17,
                interactive: false,
                title: '<img src="styles/legend/FEBkeATM_17.png" /> FEB ke ATM'
            });
var format_FKGkeATM_18 = new ol.format.GeoJSON();
var features_FKGkeATM_18 = format_FKGkeATM_18.readFeatures(json_FKGkeATM_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FKGkeATM_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FKGkeATM_18.addFeatures(features_FKGkeATM_18);
var lyr_FKGkeATM_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FKGkeATM_18, 
                style: style_FKGkeATM_18,
                interactive: false,
                title: '<img src="styles/legend/FKGkeATM_18.png" /> FKG ke ATM'
            });
var format_FKHkeATM_19 = new ol.format.GeoJSON();
var features_FKHkeATM_19 = format_FKHkeATM_19.readFeatures(json_FKHkeATM_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FKHkeATM_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FKHkeATM_19.addFeatures(features_FKHkeATM_19);
var lyr_FKHkeATM_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FKHkeATM_19, 
                style: style_FKHkeATM_19,
                interactive: false,
                title: '<img src="styles/legend/FKHkeATM_19.png" /> FKH ke ATM'
            });
var format_FTkeATM_20 = new ol.format.GeoJSON();
var features_FTkeATM_20 = format_FTkeATM_20.readFeatures(json_FTkeATM_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FTkeATM_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FTkeATM_20.addFeatures(features_FTkeATM_20);
var lyr_FTkeATM_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FTkeATM_20, 
                style: style_FTkeATM_20,
                interactive: false,
                title: '<img src="styles/legend/FTkeATM_20.png" /> FT ke ATM'
            });
var format_FisipolkeATM_21 = new ol.format.GeoJSON();
var features_FisipolkeATM_21 = format_FisipolkeATM_21.readFeatures(json_FisipolkeATM_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FisipolkeATM_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FisipolkeATM_21.addFeatures(features_FisipolkeATM_21);
var lyr_FisipolkeATM_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FisipolkeATM_21, 
                style: style_FisipolkeATM_21,
                interactive: false,
                title: '<img src="styles/legend/FisipolkeATM_21.png" /> Fisipol ke ATM'
            });
var format_MIPAkeATM_22 = new ol.format.GeoJSON();
var features_MIPAkeATM_22 = format_MIPAkeATM_22.readFeatures(json_MIPAkeATM_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MIPAkeATM_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MIPAkeATM_22.addFeatures(features_MIPAkeATM_22);
var lyr_MIPAkeATM_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MIPAkeATM_22, 
                style: style_MIPAkeATM_22,
                interactive: false,
                title: '<img src="styles/legend/MIPAkeATM_22.png" /> MIPA ke ATM'
            });
var format_PsikokeATM_23 = new ol.format.GeoJSON();
var features_PsikokeATM_23 = format_PsikokeATM_23.readFeatures(json_PsikokeATM_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PsikokeATM_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PsikokeATM_23.addFeatures(features_PsikokeATM_23);
var lyr_PsikokeATM_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PsikokeATM_23, 
                style: style_PsikokeATM_23,
                interactive: false,
                title: '<img src="styles/legend/PsikokeATM_23.png" /> Psiko ke ATM'
            });
var format_FapetkeATM_24 = new ol.format.GeoJSON();
var features_FapetkeATM_24 = format_FapetkeATM_24.readFeatures(json_FapetkeATM_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FapetkeATM_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FapetkeATM_24.addFeatures(features_FapetkeATM_24);
var lyr_FapetkeATM_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FapetkeATM_24, 
                style: style_FapetkeATM_24,
                interactive: false,
                title: '<img src="styles/legend/FapetkeATM_24.png" /> Fapet ke ATM'
            });
var format_ATM_25 = new ol.format.GeoJSON();
var features_ATM_25 = format_ATM_25.readFeatures(json_ATM_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATM_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATM_25.addFeatures(features_ATM_25);
var lyr_ATM_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ATM_25, 
                style: style_ATM_25,
                interactive: true,
                title: '<img src="styles/legend/ATM_25.png" /> ATM'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_KawasanUGM_2.setVisible(true);lyr_Bangunan_3.setVisible(true);lyr_JaringanJalan_4.setVisible(true);lyr_FapertakeATM_5.setVisible(true);lyr_FarmasikeATM_6.setVisible(true);lyr_FTPkeATM_7.setVisible(true);lyr_PascaSarjanakeATM_8.setVisible(true);lyr_SVkeATM_9.setVisible(true);lyr_BiokeATM_10.setVisible(true);lyr_FHkeATM_11.setVisible(true);lyr_FIBkeATM_12.setVisible(true);lyr_FKKMKkeATM_13.setVisible(true);lyr_FGeokeATM_14.setVisible(true);lyr_FilsafatkeATM_15.setVisible(true);lyr_FKTkeATM_16.setVisible(true);lyr_FEBkeATM_17.setVisible(true);lyr_FKGkeATM_18.setVisible(true);lyr_FKHkeATM_19.setVisible(true);lyr_FTkeATM_20.setVisible(true);lyr_FisipolkeATM_21.setVisible(true);lyr_MIPAkeATM_22.setVisible(true);lyr_PsikokeATM_23.setVisible(true);lyr_FapetkeATM_24.setVisible(true);lyr_ATM_25.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_OpenStreetMap_1,lyr_KawasanUGM_2,lyr_Bangunan_3,lyr_JaringanJalan_4,lyr_FapertakeATM_5,lyr_FarmasikeATM_6,lyr_FTPkeATM_7,lyr_PascaSarjanakeATM_8,lyr_SVkeATM_9,lyr_BiokeATM_10,lyr_FHkeATM_11,lyr_FIBkeATM_12,lyr_FKKMKkeATM_13,lyr_FGeokeATM_14,lyr_FilsafatkeATM_15,lyr_FKTkeATM_16,lyr_FEBkeATM_17,lyr_FKGkeATM_18,lyr_FKHkeATM_19,lyr_FTkeATM_20,lyr_FisipolkeATM_21,lyr_MIPAkeATM_22,lyr_PsikokeATM_23,lyr_FapetkeATM_24,lyr_ATM_25];
lyr_KawasanUGM_2.set('fieldAliases', {'id': 'id', });
lyr_Bangunan_3.set('fieldAliases', {'osm_id': 'osm_id', 'building': 'building', 'roof_mater': 'roof_mater', 'name': 'name', 'addr_stree': 'addr_stree', 'isced_leve': 'isced_leve', 'capacity': 'capacity', 'addr_house': 'addr_house', 'amenity': 'amenity', 'building_m': 'building_m', 'access_roo': 'access_roo', });
lyr_JaringanJalan_4.set('fieldAliases', {'osm_id': 'osm_id', 'smoothness': 'smoothness', 'bridge': 'bridge', 'surface': 'surface', 'name': 'name', 'layer': 'layer', 'oneway': 'oneway', 'width': 'width', 'highway': 'highway', 'tunnel': 'tunnel', });
lyr_FapertakeATM_5.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_FarmasikeATM_6.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_FTPkeATM_7.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_PascaSarjanakeATM_8.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_SVkeATM_9.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_BiokeATM_10.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_FHkeATM_11.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_FIBkeATM_12.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_FKKMKkeATM_13.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_FGeokeATM_14.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_FilsafatkeATM_15.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_FKTkeATM_16.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_FEBkeATM_17.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_FKGkeATM_18.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_FKHkeATM_19.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_FTkeATM_20.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_FisipolkeATM_21.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_MIPAkeATM_22.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_PsikokeATM_23.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_FapetkeATM_24.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_ATM_25.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTarikTunai': 'NominalTarikTunai', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesin': 'JumlahMesin', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', });
lyr_KawasanUGM_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Bangunan_3.set('fieldImages', {'osm_id': 'TextEdit', 'building': 'TextEdit', 'roof_mater': 'TextEdit', 'name': 'TextEdit', 'addr_stree': 'TextEdit', 'isced_leve': 'TextEdit', 'capacity': 'TextEdit', 'addr_house': 'TextEdit', 'amenity': 'TextEdit', 'building_m': 'TextEdit', 'access_roo': 'TextEdit', });
lyr_JaringanJalan_4.set('fieldImages', {'osm_id': 'TextEdit', 'smoothness': 'TextEdit', 'bridge': 'TextEdit', 'surface': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'oneway': 'TextEdit', 'width': 'TextEdit', 'highway': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_FapertakeATM_5.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_FarmasikeATM_6.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_FTPkeATM_7.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_PascaSarjanakeATM_8.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_SVkeATM_9.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_BiokeATM_10.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_FHkeATM_11.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_FIBkeATM_12.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_FKKMKkeATM_13.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_FGeokeATM_14.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_FilsafatkeATM_15.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_FKTkeATM_16.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_FEBkeATM_17.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_FKGkeATM_18.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_FKHkeATM_19.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_FTkeATM_20.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_FisipolkeATM_21.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_MIPAkeATM_22.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_PsikokeATM_23.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_FapetkeATM_24.set('fieldImages', {'fid': 'TextEdit', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTar': 'TextEdit', 'SetorTunai': 'Range', 'Alamat': 'TextEdit', 'JumlahMesi': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_ATM_25.set('fieldImages', {'fid': 'Hidden', 'NamaATM': 'TextEdit', 'JenisBank': 'TextEdit', 'NominalTarikTunai': 'TextEdit', 'SetorTunai': 'CheckBox', 'Alamat': 'TextEdit', 'JumlahMesin': 'TextEdit', 'Keterangan': 'TextEdit', 'FotoATM': 'ExternalResource', });
lyr_KawasanUGM_2.set('fieldLabels', {'id': 'no label', });
lyr_Bangunan_3.set('fieldLabels', {'osm_id': 'no label', 'building': 'no label', 'roof_mater': 'no label', 'name': 'no label', 'addr_stree': 'no label', 'isced_leve': 'no label', 'capacity': 'no label', 'addr_house': 'no label', 'amenity': 'no label', 'building_m': 'no label', 'access_roo': 'no label', });
lyr_JaringanJalan_4.set('fieldLabels', {'osm_id': 'no label', 'smoothness': 'no label', 'bridge': 'no label', 'surface': 'no label', 'name': 'no label', 'layer': 'no label', 'oneway': 'no label', 'width': 'no label', 'highway': 'no label', 'tunnel': 'no label', });
lyr_FapertakeATM_5.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_FarmasikeATM_6.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_FTPkeATM_7.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_PascaSarjanakeATM_8.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_SVkeATM_9.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_BiokeATM_10.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_FHkeATM_11.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_FIBkeATM_12.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_FKKMKkeATM_13.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_FGeokeATM_14.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_FilsafatkeATM_15.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_FKTkeATM_16.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_FEBkeATM_17.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_FKGkeATM_18.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_FKHkeATM_19.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_FTkeATM_20.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_FisipolkeATM_21.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_MIPAkeATM_22.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_PsikokeATM_23.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_FapetkeATM_24.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'no label', 'JenisBank': 'no label', 'NominalTar': 'no label', 'SetorTunai': 'no label', 'Alamat': 'no label', 'JumlahMesi': 'no label', 'Keterangan': 'no label', 'FotoATM': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_ATM_25.set('fieldLabels', {'NamaATM': 'header label', 'JenisBank': 'header label', 'NominalTarikTunai': 'header label', 'SetorTunai': 'header label', 'Alamat': 'header label', 'JumlahMesin': 'header label', 'Keterangan': 'header label', 'FotoATM': 'header label', });
lyr_ATM_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});