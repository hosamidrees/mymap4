ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4979").setExtent([-25.222876, -20.653578, 152.796052, 66.334781]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_database_1 = new ol.format.GeoJSON();
var features_database_1 = format_database_1.readFeatures(json_database_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4979'});
var jsonSource_database_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_database_1.addFeatures(features_database_1);
var lyr_database_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_database_1, 
                style: style_database_1,
                interactive: true,
                title: '<img src="styles/legend/database_1.png" /> قاعدة البيانات - data base'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_database_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_database_1];
lyr_database_1.set('fieldAliases', {'رقم المنشأة': 'رقم المنشأة', 'اسم المنشأة': 'اسم المنشأة', 'المركز': 'المركز', 'المنطقة': 'المنطقة', 'النوع': 'النوع', 'التصنيف': 'التصنيف', 'الموقع': 'الموقع', 'y': 'y', 'x': 'x', 'حالة التنفيذ': 'حالة التنفيذ', 'حالة التشغيل': 'حالة التشغيل', 'المشغل': 'المشغل', 'المساحة الكاملة لمسطحات المباني (متر مربع)': 'المساحة الكاملة لمسطحات المباني (متر مربع)', 'مساحة ارض المنشأة (متر مربع)': 'مساحة ارض المنشأة (متر مربع)', 'عمر المنشأة (سنة)': 'عمر المنشأة (سنة)', 'عدد المراحل': 'عدد المراحل', 'الطاقة الاستيعابية (التصميمية)': 'الطاقة الاستيعابية (التصميمية)', 'ملاحظات': 'ملاحظات', 'مزيد من المعلومات': 'مزيد من المعلومات', 'رابط المخططات التعاقدية (TENDER)': 'رابط المخططات التعاقدية (TENDER)', 'رابط المخططات كما نفذت (AS built)': 'رابط المخططات كما نفذت (AS built)', 'عدد المصاعد': 'عدد المصاعد', 'تكلفة المنشأة(ريال)': 'تكلفة المنشأة(ريال)', 'تاريخ الاستلام النهائي للمنشأة': 'تاريخ الاستلام النهائي للمنشأة', 'رابط الصك': 'رابط الصك', 'رابط رخصة البناء': 'رابط رخصة البناء', 'رابط عقد الصيانة والتشغيل': 'رابط عقد الصيانة والتشغيل', 'هل يوجد عقد صيانة وتشغيل': 'هل يوجد عقد صيانة وتشغيل', 'مقاول الصيانة والتشغيل': 'مقاول الصيانة والتشغيل', 'تاريخ إنتهاء عقد الصيانة والتشغيل': 'تاريخ إنتهاء عقد الصيانة والتشغيل', 'مكونات المنشأة': 'مكونات المنشأة', });
lyr_database_1.set('fieldImages', {'رقم المنشأة': 'Range', 'اسم المنشأة': 'TextEdit', 'المركز': 'TextEdit', 'المنطقة': 'TextEdit', 'النوع': 'TextEdit', 'التصنيف': 'TextEdit', 'الموقع': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'حالة التنفيذ': 'TextEdit', 'حالة التشغيل': 'TextEdit', 'المشغل': 'TextEdit', 'المساحة الكاملة لمسطحات المباني (متر مربع)': 'Range', 'مساحة ارض المنشأة (متر مربع)': 'TextEdit', 'عمر المنشأة (سنة)': 'TextEdit', 'عدد المراحل': 'TextEdit', 'الطاقة الاستيعابية (التصميمية)': 'Range', 'ملاحظات': 'TextEdit', 'مزيد من المعلومات': 'TextEdit', 'رابط المخططات التعاقدية (TENDER)': 'TextEdit', 'رابط المخططات كما نفذت (AS built)': 'TextEdit', 'عدد المصاعد': 'Range', 'تكلفة المنشأة(ريال)': 'Range', 'تاريخ الاستلام النهائي للمنشأة': 'TextEdit', 'رابط الصك': 'TextEdit', 'رابط رخصة البناء': 'TextEdit', 'رابط عقد الصيانة والتشغيل': 'TextEdit', 'هل يوجد عقد صيانة وتشغيل': 'TextEdit', 'مقاول الصيانة والتشغيل': 'TextEdit', 'تاريخ إنتهاء عقد الصيانة والتشغيل': 'TextEdit', 'مكونات المنشأة': 'TextEdit', });
lyr_database_1.set('fieldLabels', {'رقم المنشأة': 'no label', 'اسم المنشأة': 'no label', 'المركز': 'no label', 'المنطقة': 'no label', 'النوع': 'no label', 'التصنيف': 'no label', 'الموقع': 'no label', 'y': 'no label', 'x': 'no label', 'حالة التنفيذ': 'no label', 'حالة التشغيل': 'no label', 'المشغل': 'no label', 'المساحة الكاملة لمسطحات المباني (متر مربع)': 'no label', 'مساحة ارض المنشأة (متر مربع)': 'no label', 'عمر المنشأة (سنة)': 'no label', 'عدد المراحل': 'no label', 'الطاقة الاستيعابية (التصميمية)': 'no label', 'ملاحظات': 'no label', 'مزيد من المعلومات': 'no label', 'رابط المخططات التعاقدية (TENDER)': 'no label', 'رابط المخططات كما نفذت (AS built)': 'no label', 'عدد المصاعد': 'no label', 'تكلفة المنشأة(ريال)': 'no label', 'تاريخ الاستلام النهائي للمنشأة': 'no label', 'رابط الصك': 'no label', 'رابط رخصة البناء': 'no label', 'رابط عقد الصيانة والتشغيل': 'no label', 'هل يوجد عقد صيانة وتشغيل': 'no label', 'مقاول الصيانة والتشغيل': 'no label', 'تاريخ إنتهاء عقد الصيانة والتشغيل': 'no label', 'مكونات المنشأة': 'no label', });
lyr_database_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});