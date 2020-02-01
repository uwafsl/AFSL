Type.registerNamespace('www.rferl.org.Services');
www.rferl.org.Services.MediaWidgetService=function() {
www.rferl.org.Services.MediaWidgetService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
www.rferl.org.Services.MediaWidgetService.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return www.rferl.org.Services.MediaWidgetService._staticInstance.get_path();},
GetMediaDescription:function(photogalleryId,width,height,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetMediaDescription',true,{photogalleryId:photogalleryId,width:width,height:height},succeededCallback,failedCallback,userContext); }}
www.rferl.org.Services.MediaWidgetService.registerClass('www.rferl.org.Services.MediaWidgetService',Sys.Net.WebServiceProxy);
www.rferl.org.Services.MediaWidgetService._staticInstance = new www.rferl.org.Services.MediaWidgetService();
www.rferl.org.Services.MediaWidgetService.set_path = function(value) { www.rferl.org.Services.MediaWidgetService._staticInstance.set_path(value); }
www.rferl.org.Services.MediaWidgetService.get_path = function() { return www.rferl.org.Services.MediaWidgetService._staticInstance.get_path(); }
www.rferl.org.Services.MediaWidgetService.set_timeout = function(value) { www.rferl.org.Services.MediaWidgetService._staticInstance.set_timeout(value); }
www.rferl.org.Services.MediaWidgetService.get_timeout = function() { return www.rferl.org.Services.MediaWidgetService._staticInstance.get_timeout(); }
www.rferl.org.Services.MediaWidgetService.set_defaultUserContext = function(value) { www.rferl.org.Services.MediaWidgetService._staticInstance.set_defaultUserContext(value); }
www.rferl.org.Services.MediaWidgetService.get_defaultUserContext = function() { return www.rferl.org.Services.MediaWidgetService._staticInstance.get_defaultUserContext(); }
www.rferl.org.Services.MediaWidgetService.set_defaultSucceededCallback = function(value) { www.rferl.org.Services.MediaWidgetService._staticInstance.set_defaultSucceededCallback(value); }
www.rferl.org.Services.MediaWidgetService.get_defaultSucceededCallback = function() { return www.rferl.org.Services.MediaWidgetService._staticInstance.get_defaultSucceededCallback(); }
www.rferl.org.Services.MediaWidgetService.set_defaultFailedCallback = function(value) { www.rferl.org.Services.MediaWidgetService._staticInstance.set_defaultFailedCallback(value); }
www.rferl.org.Services.MediaWidgetService.get_defaultFailedCallback = function() { return www.rferl.org.Services.MediaWidgetService._staticInstance.get_defaultFailedCallback(); }
www.rferl.org.Services.MediaWidgetService.set_enableJsonp = function(value) { www.rferl.org.Services.MediaWidgetService._staticInstance.set_enableJsonp(value); }
www.rferl.org.Services.MediaWidgetService.get_enableJsonp = function() { return www.rferl.org.Services.MediaWidgetService._staticInstance.get_enableJsonp(); }
www.rferl.org.Services.MediaWidgetService.set_jsonpCallbackParameter = function(value) { www.rferl.org.Services.MediaWidgetService._staticInstance.set_jsonpCallbackParameter(value); }
www.rferl.org.Services.MediaWidgetService.get_jsonpCallbackParameter = function() { return www.rferl.org.Services.MediaWidgetService._staticInstance.get_jsonpCallbackParameter(); }
www.rferl.org.Services.MediaWidgetService.set_path("/Services/MediaWidgetService.asmx");
www.rferl.org.Services.MediaWidgetService.GetMediaDescription= function(photogalleryId,width,height,onSuccess,onFailed,userContext) {www.rferl.org.Services.MediaWidgetService._staticInstance.GetMediaDescription(photogalleryId,width,height,onSuccess,onFailed,userContext); }
