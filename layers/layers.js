ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-140.017563, 72.869886, -138.748065, 73.900450]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ssha_HR_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ssha_HR<br />\
    <img src="styles/legend/ssha_HR_1_0.png" /> -0.5000<br />\
    <img src="styles/legend/ssha_HR_1_1.png" /> -0.4000<br />\
    <img src="styles/legend/ssha_HR_1_2.png" /> -0.2800<br />\
    <img src="styles/legend/ssha_HR_1_3.png" /> -0.1500<br />\
    <img src="styles/legend/ssha_HR_1_4.png" /> -0.0200<br />\
    <img src="styles/legend/ssha_HR_1_5.png" /> 0.1100<br />\
    <img src="styles/legend/ssha_HR_1_6.png" /> 0.2400<br />\
    <img src="styles/legend/ssha_HR_1_7.png" /> 0.3700<br />\
    <img src="styles/legend/ssha_HR_1_8.png" /> 0.5000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ssha_HR_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-17248603.609137, 10978603.174470, -14429767.089546, 13241025.661682]
        })
    });
var lyr_sig0_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'sig0<br />\
    <img src="styles/legend/sig0_2_0.png" /> -3.54328<br />\
    <img src="styles/legend/sig0_2_1.png" /> 3.79828<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/sig0_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-17251336.228784, 10975525.069802, -14427301.514615, 13235757.087428]
        })
    });
var format_is2_downsampled_3 = new ol.format.GeoJSON();
var features_is2_downsampled_3 = format_is2_downsampled_3.readFeatures(json_is2_downsampled_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_is2_downsampled_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_is2_downsampled_3.addFeatures(features_is2_downsampled_3);
var lyr_is2_downsampled_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_is2_downsampled_3, 
                style: style_is2_downsampled_3,
                popuplayertitle: 'is2_downsampled',
                interactive: false,
    title: 'is2_downsampled<br />\
    <img src="styles/legend/is2_downsampled_3_0.png" /> -0.194 - 0.048<br />\
    <img src="styles/legend/is2_downsampled_3_1.png" /> 0.048 - 0.096<br />\
    <img src="styles/legend/is2_downsampled_3_2.png" /> 0.096 - 0.129<br />\
    <img src="styles/legend/is2_downsampled_3_3.png" /> 0.129 - 0.161<br />\
    <img src="styles/legend/is2_downsampled_3_4.png" /> 0.161 - 0.200<br />\
    <img src="styles/legend/is2_downsampled_3_5.png" /> 0.200 - 0.242<br />\
    <img src="styles/legend/is2_downsampled_3_6.png" /> 0.242 - 0.286<br />\
    <img src="styles/legend/is2_downsampled_3_7.png" /> 0.286 - 0.342<br />\
    <img src="styles/legend/is2_downsampled_3_8.png" /> 0.342 - 0.427<br />\
    <img src="styles/legend/is2_downsampled_3_9.png" /> 0.427 - 1.120<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_ssha_HR_1.setVisible(true);lyr_sig0_2.setVisible(true);lyr_is2_downsampled_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ssha_HR_1,lyr_sig0_2,lyr_is2_downsampled_3];
lyr_is2_downsampled_3.set('fieldAliases', {'longitude': 'longitude', 'latitude': 'latitude', 'ssha_smoothed': 'ssha_smoothed', });
lyr_is2_downsampled_3.set('fieldImages', {'longitude': '', 'latitude': '', 'ssha_smoothed': '', });
lyr_is2_downsampled_3.set('fieldLabels', {'longitude': 'no label', 'latitude': 'no label', 'ssha_smoothed': 'no label', });
lyr_is2_downsampled_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});