var wms_layers = [];

var format_ne_110m_ocean_0 = new ol.format.GeoJSON();
var features_ne_110m_ocean_0 = format_ne_110m_ocean_0.readFeatures(json_ne_110m_ocean_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_110m_ocean_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_110m_ocean_0.addFeatures(features_ne_110m_ocean_0);
var lyr_ne_110m_ocean_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_110m_ocean_0, 
                style: style_ne_110m_ocean_0,
                interactive: false,
                title: '<img src="styles/legend/ne_110m_ocean_0.png" /> ne_110m_ocean'
            });
var format_ne_110m_land_1 = new ol.format.GeoJSON();
var features_ne_110m_land_1 = format_ne_110m_land_1.readFeatures(json_ne_110m_land_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_110m_land_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_110m_land_1.addFeatures(features_ne_110m_land_1);
var lyr_ne_110m_land_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_110m_land_1, 
                style: style_ne_110m_land_1,
                interactive: false,
                title: '<img src="styles/legend/ne_110m_land_1.png" /> ne_110m_land'
            });
var format_ne_110m_lakes_2 = new ol.format.GeoJSON();
var features_ne_110m_lakes_2 = format_ne_110m_lakes_2.readFeatures(json_ne_110m_lakes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_110m_lakes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_110m_lakes_2.addFeatures(features_ne_110m_lakes_2);
var lyr_ne_110m_lakes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_110m_lakes_2, 
                style: style_ne_110m_lakes_2,
                interactive: false,
                title: '<img src="styles/legend/ne_110m_lakes_2.png" /> ne_110m_lakes'
            });
var format_ne_110m_admin_1_states_provinces_lines_3 = new ol.format.GeoJSON();
var features_ne_110m_admin_1_states_provinces_lines_3 = format_ne_110m_admin_1_states_provinces_lines_3.readFeatures(json_ne_110m_admin_1_states_provinces_lines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_110m_admin_1_states_provinces_lines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_110m_admin_1_states_provinces_lines_3.addFeatures(features_ne_110m_admin_1_states_provinces_lines_3);
var lyr_ne_110m_admin_1_states_provinces_lines_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_110m_admin_1_states_provinces_lines_3, 
                style: style_ne_110m_admin_1_states_provinces_lines_3,
                interactive: false,
                title: '<img src="styles/legend/ne_110m_admin_1_states_provinces_lines_3.png" /> ne_110m_admin_1_states_provinces_lines'
            });
var format_ne_110m_admin_0_boundary_lines_land_4 = new ol.format.GeoJSON();
var features_ne_110m_admin_0_boundary_lines_land_4 = format_ne_110m_admin_0_boundary_lines_land_4.readFeatures(json_ne_110m_admin_0_boundary_lines_land_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_110m_admin_0_boundary_lines_land_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_110m_admin_0_boundary_lines_land_4.addFeatures(features_ne_110m_admin_0_boundary_lines_land_4);
var lyr_ne_110m_admin_0_boundary_lines_land_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_110m_admin_0_boundary_lines_land_4, 
                style: style_ne_110m_admin_0_boundary_lines_land_4,
                interactive: false,
                title: '<img src="styles/legend/ne_110m_admin_0_boundary_lines_land_4.png" /> ne_110m_admin_0_boundary_lines_land'
            });
var format_destmsol_5 = new ol.format.GeoJSON();
var features_destmsol_5 = format_destmsol_5.readFeatures(json_destmsol_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_destmsol_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_destmsol_5.addFeatures(features_destmsol_5);
var lyr_destmsol_5 = new ol.layer.Vector({
                source:jsonSource_destmsol_5, 
                style: style_destmsol_5,
                interactive: false,
                title: '<img src="styles/legend/destmsol_5.png" /> dest másol'
            });

lyr_ne_110m_ocean_0.setVisible(true);lyr_ne_110m_land_1.setVisible(true);lyr_ne_110m_lakes_2.setVisible(true);lyr_ne_110m_admin_1_states_provinces_lines_3.setVisible(true);lyr_ne_110m_admin_0_boundary_lines_land_4.setVisible(true);lyr_destmsol_5.setVisible(true);
var layersList = [lyr_ne_110m_ocean_0,lyr_ne_110m_land_1,lyr_ne_110m_lakes_2,lyr_ne_110m_admin_1_states_provinces_lines_3,lyr_ne_110m_admin_0_boundary_lines_land_4,lyr_destmsol_5];
lyr_ne_110m_ocean_0.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'min_zoom': 'min_zoom', });
lyr_ne_110m_land_1.set('fieldAliases', {'featurecla': 'featurecla', 'scalerank': 'scalerank', 'min_zoom': 'min_zoom', });
lyr_ne_110m_lakes_2.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'name': 'name', 'name_alt': 'name_alt', 'admin': 'admin', 'min_zoom': 'min_zoom', 'min_label': 'min_label', 'name_abb': 'name_abb', 'label': 'label', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'ne_id': 'ne_id', 'name_fa': 'name_fa', 'name_he': 'name_he', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_zht': 'name_zht', });
lyr_ne_110m_admin_1_states_provinces_lines_3.set('fieldAliases', {'SCALERANK': 'SCALERANK', 'FEATURECLA': 'FEATURECLA', 'NAME': 'NAME', 'ADM0_A3': 'ADM0_A3', 'ADM0_NAME': 'ADM0_NAME', 'MAPCOLOR9': 'MAPCOLOR9', 'MAPCOLOR13': 'MAPCOLOR13', 'MIN_ZOOM': 'MIN_ZOOM', 'FCLASS_ISO': 'FCLASS_ISO', 'FCLASS_US': 'FCLASS_US', 'FCLASS_FR': 'FCLASS_FR', 'FCLASS_RU': 'FCLASS_RU', 'FCLASS_ES': 'FCLASS_ES', 'FCLASS_CN': 'FCLASS_CN', 'FCLASS_TW': 'FCLASS_TW', 'FCLASS_IN': 'FCLASS_IN', 'FCLASS_NP': 'FCLASS_NP', 'FCLASS_PK': 'FCLASS_PK', 'FCLASS_DE': 'FCLASS_DE', 'FCLASS_GB': 'FCLASS_GB', 'FCLASS_BR': 'FCLASS_BR', 'FCLASS_IL': 'FCLASS_IL', 'FCLASS_PS': 'FCLASS_PS', 'FCLASS_SA': 'FCLASS_SA', 'FCLASS_EG': 'FCLASS_EG', 'FCLASS_MA': 'FCLASS_MA', 'FCLASS_PT': 'FCLASS_PT', 'FCLASS_AR': 'FCLASS_AR', 'FCLASS_JP': 'FCLASS_JP', 'FCLASS_KO': 'FCLASS_KO', 'FCLASS_VN': 'FCLASS_VN', 'FCLASS_TR': 'FCLASS_TR', 'FCLASS_ID': 'FCLASS_ID', 'FCLASS_PL': 'FCLASS_PL', 'FCLASS_GR': 'FCLASS_GR', 'FCLASS_IT': 'FCLASS_IT', 'FCLASS_NL': 'FCLASS_NL', 'FCLASS_SE': 'FCLASS_SE', 'FCLASS_BD': 'FCLASS_BD', 'FCLASS_UA': 'FCLASS_UA', 'NE_ID': 'NE_ID', 'BRK_A3': 'BRK_A3', 'FCLASS_TLC': 'FCLASS_TLC', });
lyr_ne_110m_admin_0_boundary_lines_land_4.set('fieldAliases', {'SCALERANK': 'SCALERANK', 'FEATURECLA': 'FEATURECLA', 'NAME': 'NAME', 'NAME_ALT': 'NAME_ALT', 'MIN_ZOOM': 'MIN_ZOOM', 'FCLASS_ISO': 'FCLASS_ISO', 'FCLASS_US': 'FCLASS_US', 'FCLASS_FR': 'FCLASS_FR', 'FCLASS_RU': 'FCLASS_RU', 'FCLASS_ES': 'FCLASS_ES', 'FCLASS_CN': 'FCLASS_CN', 'FCLASS_TW': 'FCLASS_TW', 'FCLASS_IN': 'FCLASS_IN', 'FCLASS_NP': 'FCLASS_NP', 'FCLASS_PK': 'FCLASS_PK', 'FCLASS_DE': 'FCLASS_DE', 'FCLASS_GB': 'FCLASS_GB', 'FCLASS_BR': 'FCLASS_BR', 'FCLASS_IL': 'FCLASS_IL', 'FCLASS_PS': 'FCLASS_PS', 'FCLASS_SA': 'FCLASS_SA', 'FCLASS_EG': 'FCLASS_EG', 'FCLASS_MA': 'FCLASS_MA', 'FCLASS_PT': 'FCLASS_PT', 'FCLASS_AR': 'FCLASS_AR', 'FCLASS_JP': 'FCLASS_JP', 'FCLASS_KO': 'FCLASS_KO', 'FCLASS_VN': 'FCLASS_VN', 'FCLASS_TR': 'FCLASS_TR', 'FCLASS_ID': 'FCLASS_ID', 'FCLASS_PL': 'FCLASS_PL', 'FCLASS_GR': 'FCLASS_GR', 'FCLASS_IT': 'FCLASS_IT', 'FCLASS_NL': 'FCLASS_NL', 'FCLASS_SE': 'FCLASS_SE', 'FCLASS_BD': 'FCLASS_BD', 'FCLASS_UA': 'FCLASS_UA', 'NE_ID': 'NE_ID', 'BRK_A3': 'BRK_A3', 'FCLASS_TLC': 'FCLASS_TLC', });
lyr_destmsol_5.set('fieldAliases', {'Name': 'Name', 'IATA': 'IATA', 'id': 'id', 'ident': 'ident', 'type': 'type', 'name': 'name', 'latitude_deg': 'latitude_deg', 'longitude_deg': 'longitude_deg', 'elevation_ft': 'elevation_ft', 'continent': 'continent', 'iso_country': 'iso_country', 'iso_region': 'iso_region', 'municipality': 'municipality', 'scheduled_service': 'scheduled_service', 'gps_code': 'gps_code', 'local_code': 'local_code', 'home_link': 'home_link', 'wikipedia_link': 'wikipedia_link', 'keywords': 'keywords', 'timezone': 'timezone', });
lyr_ne_110m_ocean_0.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'TextEdit', 'min_zoom': 'Range', });
lyr_ne_110m_land_1.set('fieldImages', {'featurecla': 'TextEdit', 'scalerank': 'Range', 'min_zoom': 'TextEdit', });
lyr_ne_110m_lakes_2.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'TextEdit', 'name': 'TextEdit', 'name_alt': 'TextEdit', 'admin': 'TextEdit', 'min_zoom': 'TextEdit', 'min_label': 'TextEdit', 'name_abb': 'TextEdit', 'label': 'TextEdit', 'wikidataid': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_es': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'ne_id': 'TextEdit', 'name_fa': 'TextEdit', 'name_he': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_zht': 'TextEdit', });
lyr_ne_110m_admin_1_states_provinces_lines_3.set('fieldImages', {'SCALERANK': 'TextEdit', 'FEATURECLA': 'TextEdit', 'NAME': 'TextEdit', 'ADM0_A3': 'TextEdit', 'ADM0_NAME': 'TextEdit', 'MAPCOLOR9': 'Range', 'MAPCOLOR13': 'Range', 'MIN_ZOOM': 'TextEdit', 'FCLASS_ISO': 'TextEdit', 'FCLASS_US': 'TextEdit', 'FCLASS_FR': 'TextEdit', 'FCLASS_RU': 'TextEdit', 'FCLASS_ES': 'TextEdit', 'FCLASS_CN': 'TextEdit', 'FCLASS_TW': 'TextEdit', 'FCLASS_IN': 'TextEdit', 'FCLASS_NP': 'TextEdit', 'FCLASS_PK': 'TextEdit', 'FCLASS_DE': 'TextEdit', 'FCLASS_GB': 'TextEdit', 'FCLASS_BR': 'TextEdit', 'FCLASS_IL': 'TextEdit', 'FCLASS_PS': 'TextEdit', 'FCLASS_SA': 'TextEdit', 'FCLASS_EG': 'TextEdit', 'FCLASS_MA': 'TextEdit', 'FCLASS_PT': 'TextEdit', 'FCLASS_AR': 'TextEdit', 'FCLASS_JP': 'TextEdit', 'FCLASS_KO': 'TextEdit', 'FCLASS_VN': 'TextEdit', 'FCLASS_TR': 'TextEdit', 'FCLASS_ID': 'TextEdit', 'FCLASS_PL': 'TextEdit', 'FCLASS_GR': 'TextEdit', 'FCLASS_IT': 'TextEdit', 'FCLASS_NL': 'TextEdit', 'FCLASS_SE': 'TextEdit', 'FCLASS_BD': 'TextEdit', 'FCLASS_UA': 'TextEdit', 'NE_ID': 'TextEdit', 'BRK_A3': 'TextEdit', 'FCLASS_TLC': 'TextEdit', });
lyr_ne_110m_admin_0_boundary_lines_land_4.set('fieldImages', {'SCALERANK': '', 'FEATURECLA': '', 'NAME': '', 'NAME_ALT': '', 'MIN_ZOOM': '', 'FCLASS_ISO': '', 'FCLASS_US': '', 'FCLASS_FR': '', 'FCLASS_RU': '', 'FCLASS_ES': '', 'FCLASS_CN': '', 'FCLASS_TW': '', 'FCLASS_IN': '', 'FCLASS_NP': '', 'FCLASS_PK': '', 'FCLASS_DE': '', 'FCLASS_GB': '', 'FCLASS_BR': '', 'FCLASS_IL': '', 'FCLASS_PS': '', 'FCLASS_SA': '', 'FCLASS_EG': '', 'FCLASS_MA': '', 'FCLASS_PT': '', 'FCLASS_AR': '', 'FCLASS_JP': '', 'FCLASS_KO': '', 'FCLASS_VN': '', 'FCLASS_TR': '', 'FCLASS_ID': '', 'FCLASS_PL': '', 'FCLASS_GR': '', 'FCLASS_IT': '', 'FCLASS_NL': '', 'FCLASS_SE': '', 'FCLASS_BD': '', 'FCLASS_UA': '', 'NE_ID': '', 'BRK_A3': '', 'FCLASS_TLC': '', });
lyr_destmsol_5.set('fieldImages', {'Name': 'TextEdit', 'IATA': 'TextEdit', 'id': 'Range', 'ident': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'latitude_deg': 'TextEdit', 'longitude_deg': 'TextEdit', 'elevation_ft': 'Range', 'continent': 'TextEdit', 'iso_country': 'TextEdit', 'iso_region': 'TextEdit', 'municipality': 'TextEdit', 'scheduled_service': 'TextEdit', 'gps_code': 'TextEdit', 'local_code': 'TextEdit', 'home_link': 'TextEdit', 'wikipedia_link': 'TextEdit', 'keywords': 'TextEdit', 'timezone': 'TextEdit', });
lyr_ne_110m_ocean_0.set('fieldLabels', {'scalerank': 'no label', 'featurecla': 'no label', 'min_zoom': 'no label', });
lyr_ne_110m_land_1.set('fieldLabels', {'featurecla': 'no label', 'scalerank': 'no label', 'min_zoom': 'no label', });
lyr_ne_110m_lakes_2.set('fieldLabels', {'scalerank': 'no label', 'featurecla': 'no label', 'name': 'no label', 'name_alt': 'no label', 'admin': 'no label', 'min_zoom': 'no label', 'min_label': 'no label', 'name_abb': 'no label', 'label': 'no label', 'wikidataid': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_en': 'no label', 'name_es': 'no label', 'name_fr': 'no label', 'name_el': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'ne_id': 'no label', 'name_fa': 'no label', 'name_he': 'no label', 'name_uk': 'no label', 'name_ur': 'no label', 'name_zht': 'no label', });
lyr_ne_110m_admin_1_states_provinces_lines_3.set('fieldLabels', {'SCALERANK': 'no label', 'FEATURECLA': 'no label', 'NAME': 'no label', 'ADM0_A3': 'no label', 'ADM0_NAME': 'no label', 'MAPCOLOR9': 'no label', 'MAPCOLOR13': 'no label', 'MIN_ZOOM': 'no label', 'FCLASS_ISO': 'no label', 'FCLASS_US': 'no label', 'FCLASS_FR': 'no label', 'FCLASS_RU': 'no label', 'FCLASS_ES': 'no label', 'FCLASS_CN': 'no label', 'FCLASS_TW': 'no label', 'FCLASS_IN': 'no label', 'FCLASS_NP': 'no label', 'FCLASS_PK': 'no label', 'FCLASS_DE': 'no label', 'FCLASS_GB': 'no label', 'FCLASS_BR': 'no label', 'FCLASS_IL': 'no label', 'FCLASS_PS': 'no label', 'FCLASS_SA': 'no label', 'FCLASS_EG': 'no label', 'FCLASS_MA': 'no label', 'FCLASS_PT': 'no label', 'FCLASS_AR': 'no label', 'FCLASS_JP': 'no label', 'FCLASS_KO': 'no label', 'FCLASS_VN': 'no label', 'FCLASS_TR': 'no label', 'FCLASS_ID': 'no label', 'FCLASS_PL': 'no label', 'FCLASS_GR': 'no label', 'FCLASS_IT': 'no label', 'FCLASS_NL': 'no label', 'FCLASS_SE': 'no label', 'FCLASS_BD': 'no label', 'FCLASS_UA': 'no label', 'NE_ID': 'no label', 'BRK_A3': 'no label', 'FCLASS_TLC': 'no label', });
lyr_ne_110m_admin_0_boundary_lines_land_4.set('fieldLabels', {'SCALERANK': 'no label', 'FEATURECLA': 'no label', 'NAME': 'no label', 'NAME_ALT': 'no label', 'MIN_ZOOM': 'no label', 'FCLASS_ISO': 'no label', 'FCLASS_US': 'no label', 'FCLASS_FR': 'no label', 'FCLASS_RU': 'no label', 'FCLASS_ES': 'no label', 'FCLASS_CN': 'no label', 'FCLASS_TW': 'no label', 'FCLASS_IN': 'no label', 'FCLASS_NP': 'no label', 'FCLASS_PK': 'no label', 'FCLASS_DE': 'no label', 'FCLASS_GB': 'no label', 'FCLASS_BR': 'no label', 'FCLASS_IL': 'no label', 'FCLASS_PS': 'no label', 'FCLASS_SA': 'no label', 'FCLASS_EG': 'no label', 'FCLASS_MA': 'no label', 'FCLASS_PT': 'no label', 'FCLASS_AR': 'no label', 'FCLASS_JP': 'no label', 'FCLASS_KO': 'no label', 'FCLASS_VN': 'no label', 'FCLASS_TR': 'no label', 'FCLASS_ID': 'no label', 'FCLASS_PL': 'no label', 'FCLASS_GR': 'no label', 'FCLASS_IT': 'no label', 'FCLASS_NL': 'no label', 'FCLASS_SE': 'no label', 'FCLASS_BD': 'no label', 'FCLASS_UA': 'no label', 'NE_ID': 'no label', 'BRK_A3': 'no label', 'FCLASS_TLC': 'no label', });
lyr_destmsol_5.set('fieldLabels', {'Name': 'header label', 'IATA': 'no label', 'id': 'no label', 'ident': 'no label', 'type': 'no label', 'name': 'inline label', 'latitude_deg': 'no label', 'longitude_deg': 'no label', 'elevation_ft': 'no label', 'continent': 'no label', 'iso_country': 'no label', 'iso_region': 'no label', 'municipality': 'no label', 'scheduled_service': 'no label', 'gps_code': 'no label', 'local_code': 'no label', 'home_link': 'no label', 'wikipedia_link': 'no label', 'keywords': 'no label', 'timezone': 'no label', });
lyr_destmsol_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});