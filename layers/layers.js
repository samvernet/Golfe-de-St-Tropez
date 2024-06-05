var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EmplacementN1_1 = new ol.format.GeoJSON();
var features_EmplacementN1_1 = format_EmplacementN1_1.readFeatures(json_EmplacementN1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmplacementN1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmplacementN1_1.addFeatures(features_EmplacementN1_1);
var lyr_EmplacementN1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmplacementN1_1, 
                style: style_EmplacementN1_1,
                popuplayertitle: "Emplacement N°1",
                interactive: true,
                title: 'Emplacement N°1'
            });
var format_EnseignesNationales_2 = new ol.format.GeoJSON();
var features_EnseignesNationales_2 = format_EnseignesNationales_2.readFeatures(json_EnseignesNationales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnseignesNationales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnseignesNationales_2.addFeatures(features_EnseignesNationales_2);
var lyr_EnseignesNationales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnseignesNationales_2, 
                style: style_EnseignesNationales_2,
                popuplayertitle: "Enseignes Nationales",
                interactive: true,
    title: 'Enseignes Nationales<br />\
    <img src="styles/legend/EnseignesNationales_2_0.png" /> Locale<br />\
    <img src="styles/legend/EnseignesNationales_2_1.png" /> Nationale<br />'
        });
var format_LocauxvacantsHiver2023_3 = new ol.format.GeoJSON();
var features_LocauxvacantsHiver2023_3 = format_LocauxvacantsHiver2023_3.readFeatures(json_LocauxvacantsHiver2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocauxvacantsHiver2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocauxvacantsHiver2023_3.addFeatures(features_LocauxvacantsHiver2023_3);
var lyr_LocauxvacantsHiver2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocauxvacantsHiver2023_3, 
                style: style_LocauxvacantsHiver2023_3,
                popuplayertitle: "Locaux vacants Hiver 2023",
                interactive: true,
    title: 'Locaux vacants Hiver 2023<br />\
    <img src="styles/legend/LocauxvacantsHiver2023_3_0.png" /> Locaux en travaux<br />\
    <img src="styles/legend/LocauxvacantsHiver2023_3_1.png" /> Locaux saisonniers<br />\
    <img src="styles/legend/LocauxvacantsHiver2023_3_2.png" /> Locaux vacants<br />'
        });
var format_LocauxvacantsEt2023_4 = new ol.format.GeoJSON();
var features_LocauxvacantsEt2023_4 = format_LocauxvacantsEt2023_4.readFeatures(json_LocauxvacantsEt2023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocauxvacantsEt2023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocauxvacantsEt2023_4.addFeatures(features_LocauxvacantsEt2023_4);
var lyr_LocauxvacantsEt2023_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocauxvacantsEt2023_4, 
                style: style_LocauxvacantsEt2023_4,
                popuplayertitle: "Locaux vacants Eté 2023",
                interactive: true,
    title: 'Locaux vacants Eté 2023<br />\
    <img src="styles/legend/LocauxvacantsEt2023_4_0.png" /> Locaux en travaux<br />\
    <img src="styles/legend/LocauxvacantsEt2023_4_1.png" /> Locaux saisonniers<br />\
    <img src="styles/legend/LocauxvacantsEt2023_4_2.png" /> Locaux vacants<br />'
        });
var format_Et2023Catgoriesdactivits_5 = new ol.format.GeoJSON();
var features_Et2023Catgoriesdactivits_5 = format_Et2023Catgoriesdactivits_5.readFeatures(json_Et2023Catgoriesdactivits_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Et2023Catgoriesdactivits_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Et2023Catgoriesdactivits_5.addFeatures(features_Et2023Catgoriesdactivits_5);
var lyr_Et2023Catgoriesdactivits_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Et2023Catgoriesdactivits_5, 
                style: style_Et2023Catgoriesdactivits_5,
                popuplayertitle: "Eté 2023 Catégories d'activités",
                interactive: true,
    title: 'Eté 2023 Catégories d\'activités<br />\
    <img src="styles/legend/Et2023Catgoriesdactivits_5_0.png" /> Alimentaire<br />\
    <img src="styles/legend/Et2023Catgoriesdactivits_5_1.png" /> Culture loisirs santé<br />\
    <img src="styles/legend/Et2023Catgoriesdactivits_5_2.png" /> Equip. de la maison<br />\
    <img src="styles/legend/Et2023Catgoriesdactivits_5_3.png" /> Equip. de la personne<br />\
    <img src="styles/legend/Et2023Catgoriesdactivits_5_4.png" /> Grand commerce<br />\
    <img src="styles/legend/Et2023Catgoriesdactivits_5_5.png" /> Hôtellerie restauration<br />\
    <img src="styles/legend/Et2023Catgoriesdactivits_5_6.png" /> Services entreprises<br />\
    <img src="styles/legend/Et2023Catgoriesdactivits_5_7.png" /> Services non commerciaux<br />\
    <img src="styles/legend/Et2023Catgoriesdactivits_5_8.png" /> Services personnels<br />\
    <img src="styles/legend/Et2023Catgoriesdactivits_5_9.png" /> Véhicules<br />'
        });
var format_Hiver2023Catgoriesdactivits_6 = new ol.format.GeoJSON();
var features_Hiver2023Catgoriesdactivits_6 = format_Hiver2023Catgoriesdactivits_6.readFeatures(json_Hiver2023Catgoriesdactivits_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hiver2023Catgoriesdactivits_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hiver2023Catgoriesdactivits_6.addFeatures(features_Hiver2023Catgoriesdactivits_6);
var lyr_Hiver2023Catgoriesdactivits_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hiver2023Catgoriesdactivits_6, 
                style: style_Hiver2023Catgoriesdactivits_6,
                popuplayertitle: "Hiver 2023 Catégories d'activités",
                interactive: true,
    title: 'Hiver 2023 Catégories d\'activités<br />\
    <img src="styles/legend/Hiver2023Catgoriesdactivits_6_0.png" /> Alimentaire<br />\
    <img src="styles/legend/Hiver2023Catgoriesdactivits_6_1.png" /> Culture loisirs santé<br />\
    <img src="styles/legend/Hiver2023Catgoriesdactivits_6_2.png" /> Equip. de la maison<br />\
    <img src="styles/legend/Hiver2023Catgoriesdactivits_6_3.png" /> Equip. de la personne<br />\
    <img src="styles/legend/Hiver2023Catgoriesdactivits_6_4.png" /> Grand commerce<br />\
    <img src="styles/legend/Hiver2023Catgoriesdactivits_6_5.png" /> Hôtellerie restauration<br />\
    <img src="styles/legend/Hiver2023Catgoriesdactivits_6_6.png" /> Services entreprises<br />\
    <img src="styles/legend/Hiver2023Catgoriesdactivits_6_7.png" /> Services non commerciaux<br />\
    <img src="styles/legend/Hiver2023Catgoriesdactivits_6_8.png" /> Services personnels<br />\
    <img src="styles/legend/Hiver2023Catgoriesdactivits_6_9.png" /> Véhicules<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_EmplacementN1_1.setVisible(true);lyr_EnseignesNationales_2.setVisible(true);lyr_LocauxvacantsHiver2023_3.setVisible(true);lyr_LocauxvacantsEt2023_4.setVisible(true);lyr_Et2023Catgoriesdactivits_5.setVisible(true);lyr_Hiver2023Catgoriesdactivits_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EmplacementN1_1,lyr_EnseignesNationales_2,lyr_LocauxvacantsHiver2023_3,lyr_LocauxvacantsEt2023_4,lyr_Et2023Catgoriesdactivits_5,lyr_Hiver2023Catgoriesdactivits_6];
lyr_EmplacementN1_1.set('fieldAliases', {'fid': 'fid', 'Num': 'Num', 'Voie': 'Voie', 'Note': 'Note', 'Empl': 'Empl', 'IDENTIFICATION': 'IDENTIFICATION', 'Etablissement': 'Etablissement', 'EN': 'EN', 'ville': 'ville', 'code postal': 'code postal', 'Hiver': 'Hiver', 'Eté': 'Eté', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', });
lyr_EnseignesNationales_2.set('fieldAliases', {'fid': 'fid', 'Num': 'Num', 'Voie': 'Voie', 'Note': 'Note', 'Empl': 'Empl', 'IDENTIFICATION': 'IDENTIFICATION', 'Etablissement': 'Etablissement', 'EN': 'EN', 'ville': 'ville', 'code postal': 'code postal', 'Hiver': 'Hiver', 'Eté': 'Eté', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', });
lyr_LocauxvacantsHiver2023_3.set('fieldAliases', {'fid': 'fid', 'Num': 'Num', 'Voie': 'Voie', 'Note': 'Note', 'Empl': 'Empl', 'IDENTIFICATION': 'IDENTIFICATION', 'Etablissement': 'Etablissement', 'EN': 'EN', 'ville': 'ville', 'code postal': 'code postal', 'Hiver': 'Hiver', 'Eté': 'Eté', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', });
lyr_LocauxvacantsEt2023_4.set('fieldAliases', {'fid': 'fid', 'Num': 'Num', 'Voie': 'Voie', 'Note': 'Note', 'Empl': 'Empl', 'IDENTIFICATION': 'IDENTIFICATION', 'Etablissement': 'Etablissement', 'EN': 'EN', 'ville': 'ville', 'code postal': 'code postal', 'Hiver': 'Hiver', 'Eté': 'Eté', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', });
lyr_Et2023Catgoriesdactivits_5.set('fieldAliases', {'fid': 'fid', 'Num': 'Num', 'Voie': 'Voie', 'Note': 'Note', 'Empl': 'Empl', 'IDENTIFICATION': 'IDENTIFICATION', 'Etablissement': 'Etablissement', 'EN': 'EN', 'ville': 'ville', 'code postal': 'code postal', 'Hiver': 'Hiver', 'Eté': 'Eté', 'ROWID_ID': 'ROWID_ID', });
lyr_Hiver2023Catgoriesdactivits_6.set('fieldAliases', {'fid': 'fid', 'Num': 'Num', 'Voie': 'Voie', 'Note': 'Note', 'Empl': 'Empl', 'IDENTIFICATION': 'IDENTIFICATION', 'Etablissement': 'Etablissement', 'EN': 'EN', 'ville': 'ville', 'code postal': 'code postal', 'Hiver': 'Hiver', 'Eté': 'Eté', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', });
lyr_EmplacementN1_1.set('fieldImages', {'fid': 'TextEdit', 'Num': 'TextEdit', 'Voie': 'TextEdit', 'Note': 'Range', 'Empl': 'TextEdit', 'IDENTIFICATION': 'TextEdit', 'Etablissement': 'TextEdit', 'EN': 'TextEdit', 'ville': 'TextEdit', 'code postal': 'Range', 'Hiver': 'TextEdit', 'Eté': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'Range', });
lyr_EnseignesNationales_2.set('fieldImages', {'fid': 'TextEdit', 'Num': 'TextEdit', 'Voie': 'TextEdit', 'Note': 'Range', 'Empl': 'TextEdit', 'IDENTIFICATION': 'TextEdit', 'Etablissement': 'TextEdit', 'EN': 'TextEdit', 'ville': 'TextEdit', 'code postal': 'Range', 'Hiver': 'TextEdit', 'Eté': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'Range', });
lyr_LocauxvacantsHiver2023_3.set('fieldImages', {'fid': 'TextEdit', 'Num': 'TextEdit', 'Voie': 'TextEdit', 'Note': 'Range', 'Empl': 'TextEdit', 'IDENTIFICATION': 'TextEdit', 'Etablissement': 'TextEdit', 'EN': 'TextEdit', 'ville': 'TextEdit', 'code postal': 'Range', 'Hiver': 'TextEdit', 'Eté': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'Range', });
lyr_LocauxvacantsEt2023_4.set('fieldImages', {'fid': 'TextEdit', 'Num': 'TextEdit', 'Voie': 'TextEdit', 'Note': 'Range', 'Empl': 'TextEdit', 'IDENTIFICATION': 'TextEdit', 'Etablissement': 'TextEdit', 'EN': 'TextEdit', 'ville': 'TextEdit', 'code postal': 'Range', 'Hiver': 'TextEdit', 'Eté': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'Range', });
lyr_Et2023Catgoriesdactivits_5.set('fieldImages', {'fid': 'TextEdit', 'Num': 'TextEdit', 'Voie': 'TextEdit', 'Note': 'Range', 'Empl': 'TextEdit', 'IDENTIFICATION': 'TextEdit', 'Etablissement': 'TextEdit', 'EN': 'TextEdit', 'ville': 'TextEdit', 'code postal': 'Range', 'Hiver': 'TextEdit', 'Eté': 'TextEdit', 'ROWID_ID': 'Range', });
lyr_Hiver2023Catgoriesdactivits_6.set('fieldImages', {'fid': 'TextEdit', 'Num': 'TextEdit', 'Voie': 'TextEdit', 'Note': 'Range', 'Empl': 'TextEdit', 'IDENTIFICATION': 'TextEdit', 'Etablissement': 'TextEdit', 'EN': 'TextEdit', 'ville': 'TextEdit', 'code postal': 'Range', 'Hiver': 'TextEdit', 'Eté': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'Range', });
lyr_EmplacementN1_1.set('fieldLabels', {'fid': 'hidden field', 'Num': 'no label', 'Voie': 'no label', 'Note': 'no label', 'Empl': 'header label - always visible', 'IDENTIFICATION': 'hidden field', 'Etablissement': 'no label', 'EN': 'no label', 'ville': 'no label', 'code postal': 'no label', 'Hiver': 'no label', 'Eté': 'no label', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', });
lyr_EnseignesNationales_2.set('fieldLabels', {'fid': 'hidden field', 'Num': 'no label', 'Voie': 'no label', 'Note': 'no label', 'Empl': 'header label - always visible', 'IDENTIFICATION': 'hidden field', 'Etablissement': 'no label', 'EN': 'no label', 'ville': 'no label', 'code postal': 'no label', 'Hiver': 'hidden field', 'Eté': 'no label', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', });
lyr_LocauxvacantsHiver2023_3.set('fieldLabels', {'fid': 'hidden field', 'Num': 'inline label - always visible', 'Voie': 'inline label - always visible', 'Note': 'inline label - always visible', 'Empl': 'inline label - always visible', 'IDENTIFICATION': 'hidden field', 'Etablissement': 'inline label - always visible', 'EN': 'inline label - always visible', 'ville': 'inline label - always visible', 'code postal': 'inline label - always visible', 'Hiver': 'inline label - always visible', 'Eté': 'hidden field', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', });
lyr_LocauxvacantsEt2023_4.set('fieldLabels', {'fid': 'hidden field', 'Num': 'inline label - always visible', 'Voie': 'inline label - always visible', 'Note': 'inline label - always visible', 'Empl': 'inline label - always visible', 'IDENTIFICATION': 'hidden field', 'Etablissement': 'inline label - always visible', 'EN': 'inline label - always visible', 'ville': 'inline label - always visible', 'code postal': 'inline label - always visible', 'Hiver': 'hidden field', 'Eté': 'inline label - always visible', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', });
lyr_Et2023Catgoriesdactivits_5.set('fieldLabels', {'fid': 'hidden field', 'Num': 'inline label - always visible', 'Voie': 'inline label - always visible', 'Note': 'inline label - always visible', 'Empl': 'inline label - always visible', 'IDENTIFICATION': 'hidden field', 'Etablissement': 'inline label - always visible', 'EN': 'inline label - always visible', 'ville': 'inline label - always visible', 'code postal': 'inline label - always visible', 'Hiver': 'hidden field', 'Eté': 'inline label - always visible', 'ROWID_ID': 'hidden field', });
lyr_Hiver2023Catgoriesdactivits_6.set('fieldLabels', {'fid': 'hidden field', 'Num': 'inline label - always visible', 'Voie': 'inline label - always visible', 'Note': 'inline label - always visible', 'Empl': 'inline label - always visible', 'IDENTIFICATION': 'hidden field', 'Etablissement': 'inline label - always visible', 'EN': 'inline label - always visible', 'ville': 'inline label - always visible', 'code postal': 'inline label - always visible', 'Hiver': 'inline label - always visible', 'Eté': 'hidden field', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', });
lyr_Hiver2023Catgoriesdactivits_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});