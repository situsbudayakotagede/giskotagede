// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","dijit/form/ValidationTextBox","./Coordinate"],function(b,c,d){return b("test",c,{required:!0,inputCoordinate:null,invalidMessage:"Blah Blah Blah",validateOnInput:!0,_validateOnInputSetter:function(a){this.validateOnInput="true"===a},clear:function(){this.set("validateOnInput",!0);this.set("value","");this.inputCoordinate.coordinateEsriGeometry=null},constructor:function(a){b.safeMixin(this,a);this.inherited(arguments);this.inputCoordinate=new d({nls:this.nls,appConfig:arguments[0].appConfig})},
postMixinProperties:function(){},validator:function(a){if(!this.validateOnInput)return!0;this.inputCoordinate.set("inputString",a);this.set("invalidMessage",this.inputCoordinate.message);this.set("promptMessage",this.inputCoordinate.message);return!0}})});