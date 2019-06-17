// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/setting/AttributeSettings.html":'\x3cdiv class\x3d"esriCTMainAttributeSettingsContainer"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"attributeSettingsAddFields" \r\n                class\x3d"esriCTBtnAddField esriCTEllipsis"\x3e\r\n                    \x3cspan class\x3d"esriCTBtnAddIcon"\x3e\x3c/span\x3e\r\n                    \x3cspan class\x3d"esriCTBtnAddLabel esriCTEllipsis"\x3e${nls.layerSettings.addFieldLabelTitle}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv\x3e\r\n        \x3cdiv class\x3d"esriCTAttributeSettingsTable" data-dojo-attach-point\x3d"attributeSettingsTableNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/dijit/SimpleTable jimu/BaseWidget dojo/Evented dojo/_base/lang dojo/dom-class dijit/_WidgetsInTemplateMixin dojo/text!./AttributeSettings.html dojo/on dojo/query dijit/form/Select dojo/_base/array".split(" "),function(l,m,n,p,d,h,q,r,g,t,k,e){return l([n,p,q],{templateString:r,attributeSettingPopup:null,baseClass:"jimu-widget-cost-analysis-attribute-settings",_layerSettingsTable:null,_projectLayer:"",_entireFieldsArr:[],_selectedFieldsArr:[],_entireFieldObj:[],_projectFieldTypes:[],
validFieldTypes:"esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeSmallInteger esriFieldTypeDouble esriFieldTypeString esriFieldTypeDate esriFieldTypeGUID".split(" "),constructor:function(a){d.mixin(this,a)},postMixInProperties:function(){this.nls.common={};d.mixin(this.nls.common,window.jimuNls.common)},postCreate:function(){this._entireFieldsArr=[];this._selectedFieldsArr=[];this._entireFieldObj=[];this._projectFieldTypes=[];this._layerSettingsTable=this.attributeSettingPopup=null;this._projectLayer=
this.config.projectSettings.projectLayer||this.projectLayer||"";this._projectLayerAttributeStore="";this.inherited(arguments);this._init()},_init:function(){this._clearData();this._fetchProjectLayerFieldTypes();this._addValidFields();this._createAttributeSettingsFieldsTable();this._attachEventsToElement();this._displayPreviousConfiguredFields()},_clearData:function(){this._entireFieldsArr=[];this._selectedFieldsArr=[];this._projectFieldTypes=[]},_fetchProjectLayerFieldTypes:function(){var a;a=this.map.getLayer(this._projectLayer).fields;
e.forEach(a,d.hitch(this,function(a){-1<this.validFieldTypes.indexOf(a.type)&&-1===this._projectFieldTypes.indexOf(a.type)&&this._projectFieldTypes.push(a.type)}))},_displayPreviousConfiguredFields:function(){this.selectedFields&&0<this.selectedFields.length&&(e.forEach(this.selectedFields,d.hitch(this,function(a){this._configuredField=a;this.attributeSettingsAddFields.click()})),this._configuredField=null)},_addValidFields:function(){e.forEach(this.featureLayer.fields,d.hitch(this,function(a){this._entireFieldObj[a.name]=
a;-1<this.validFieldTypes.indexOf(a.type)&&-1<this._projectFieldTypes.indexOf(a.type)&&a.editable&&(this._entireFieldsArr.push(a.name),this._entireFieldObj[a.name]=d.clone(a),this.selectedFields&&this.selectedFields[a.name]&&(this._entireFieldObj[a.name].label=this.selectedFields[a.name].label))}));0===this._entireFieldsArr.length&&this._disableAddFieldButton()},_disableAddFieldButton:function(){this._selectedFieldsArr.length===this._entireFieldsArr.length&&h.add(this.attributeSettingsAddFields,"esriCTDisabled")},
_addFieldsRow:function(a){var b,c,f;b=this._attributeSettingsTable.addRow({});b.success&&b.tr&&(b=b.tr,f=t(".simple-table-cell",b),c=f[0],f=f[1],this._addFieldDropdown(a,c,b),this._addProjectFieldDropdown(f,b))},_deleteFieldRow:function(a){var b;h.remove(this.attributeSettingsAddFields,"esriCTDisabled");b=this._selectedFieldsArr.indexOf(a.fieldDropdownInstance.value);-1<b&&this._selectedFieldsArr.splice(b,1);this._addSelectedFieldInOtherDropdown(a.fieldDropdownInstance.value,null)},_addFieldDropdown:function(a,
b,c){a=this._getDistinctFieldsOptionsObj(a);a=new k({"class":"esriCTFieldChooserDropdown",options:a});a.placeAt(b);a.startup();this._configuredField&&a.set("value",this._configuredField.layerField,!1);c.fieldDropdownInstance=a;this.own(g(a,"change",d.hitch(this,function(a){var b;b=this._selectedFieldsArr[c.rowIndex];this._selectedFieldsArr[c.rowIndex]=a;this._addSelectedFieldInOtherDropdown(b,a);this._removeSelectedFieldFromOtherDropdown(a);c.projectFieldDropdownInstance.set("options",this._getProjectLayerFields(c));
c.projectFieldDropdownInstance.set("value",c.projectFieldDropdownInstance.options[0])})));this._selectedFieldsArr.push(a.value);this._removeSelectedFieldFromOtherDropdown(a.value);this._disableAddFieldButton()},_addProjectFieldDropdown:function(a,b){var c;c=this._getProjectLayerFields(b);c=new k({"class":"esriCTFieldChooserDropdown",options:c});c.placeAt(a);c.startup();this._configuredField&&c.set("value",this._configuredField.projectField,!1);b.projectFieldDropdownInstance=c;this.own(g(c,"change",
d.hitch(this,function(){})))},_getProjectLayerFields:function(a){var b=[],c;a=a.fieldDropdownInstance.getValue();c=this._getFieldType(a);this._projectLayer&&""!==this._projectLayer&&(a=this.map.getLayer(this._projectLayer).fields,b=[],e.forEach(a,d.hitch(this,function(a){c===a.type?b.push({label:a.alias||a.name,value:a.name}):"esriFieldTypeString"===c&&"esriFieldTypeGlobalID"===a.type?b.push({label:a.alias||a.name,value:a.name}):"esriFieldTypeGUID"!==c||"esriFieldTypeGlobalID"!==a.type&&"esriFieldTypeGUID"!==
a.type||b.push({label:a.alias||a.name,value:a.name})})));return b},_getFieldType:function(a){return this.featureLayer.getField(a).type},_getDistinctFieldsOptionsObj:function(a){var b=[];e.forEach(a,d.hitch(this,function(a){b.push({label:this._entireFieldObj[a].alias||this._entireFieldObj[a].name,value:a})}));return b},_removeSelectedFieldFromOtherDropdown:function(a){var b;b=this._attributeSettingsTable.getRows();e.forEach(b,d.hitch(this,function(b){a!==b.fieldDropdownInstance.value&&b.fieldDropdownInstance.removeOption(a)}))},
_addSelectedFieldInOtherDropdown:function(a,b){var c;c=this._attributeSettingsTable.getRows();e.forEach(c,d.hitch(this,function(c){b!==c.fieldDropdownInstance.value&&c.fieldDropdownInstance.addOption({label:this._entireFieldObj[a].alias||this._entireFieldObj[a].name,value:a})}))},okButtonClicked:function(){var a,b;b=[];a=this._attributeSettingsTable.getRows();0===a.length?this.selectedFields=null:(e.forEach(a,d.hitch(this,function(a){b.push({layerField:a.fieldDropdownInstance.value,projectField:a.projectFieldDropdownInstance.value})})),
this.selectedFields=b);return this.selectedFields},_getDistinctFields:function(a,b){return a.filter(function(a){return 0>b.indexOf(a)})},_attachEventsToElement:function(){this.own(g(this.attributeSettingsAddFields,"click",d.hitch(this,function(){var a;h.contains(this.attributeSettingsAddFields,"esriCTDisabled")||(a=this._getDistinctFields(this._entireFieldsArr,this._selectedFieldsArr),this._addFieldsRow(a))})));this.own(g(this._attributeSettingsTable,"row-delete",d.hitch(this,function(a){this._deleteFieldRow(a)})))},
onOkButtonClicked:function(){this.parentNode.attributeSettingPopup=this.attributeSettingPopup;this.attributeSettingPopup.hide()},onCancelButtonClicked:function(){this.attributeSettingPopup.hide()},_createAttributeSettingsFieldsTable:function(){this._attributeSettingsTable=new m({fields:[{name:"layerAttributes",title:this.nls.layerSettings.layerAttributesHeaderTitle,type:"empty",editable:!1,width:"40%"},{name:"projectLayerAttributes",title:this.nls.layerSettings.projectLayerAttributesHeaderTitle,type:"empty",
editable:!1,width:"40%"},{name:"Delete",title:this.nls.layerSettings.delete,type:"actions",actions:["delete"],width:"20%"}],selectable:!0});this._attributeSettingsTable.placeAt(this.attributeSettingsTableNode);this._attributeSettingsTable.startup()}})});