var wms_layers = [];

var lyr_ssha_HR_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ssha_HR<br />\
    <img src="styles/legend/ssha_HR_0_0.png" /> -1.0000<br />\
    <img src="styles/legend/ssha_HR_0_1.png" /> -0.7400<br />\
    <img src="styles/legend/ssha_HR_0_2.png" /> -0.4800<br />\
    <img src="styles/legend/ssha_HR_0_3.png" /> -0.2200<br />\
    <img src="styles/legend/ssha_HR_0_4.png" /> 0.0400<br />\
    <img src="styles/legend/ssha_HR_0_5.png" /> 0.3000<br />\
    <img src="styles/legend/ssha_HR_0_6.png" /> 0.5600<br />\
    <img src="styles/legend/ssha_HR_0_7.png" /> 0.8000<br />\
    <img src="styles/legend/ssha_HR_0_8.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ssha_HR_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-17248603.609137, 10978603.174470, -14429767.089546, 13241025.661682]
        })
    });
var lyr_sig0_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'sig0<br />\
    <img src="styles/legend/sig0_1_0.png" /> -3.54328<br />\
    <img src="styles/legend/sig0_1_1.png" /> 3.79828<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/sig0_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-17251336.228784, 10975525.069802, -14427301.514615, 13235757.087428]
        })
    });

lyr_ssha_HR_0.setVisible(true);lyr_sig0_1.setVisible(true);
var layersList = [lyr_ssha_HR_0,lyr_sig0_1];
