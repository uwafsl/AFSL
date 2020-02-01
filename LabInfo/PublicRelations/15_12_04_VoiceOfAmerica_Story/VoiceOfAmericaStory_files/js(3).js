Type.registerNamespace('www.rferl.org.Services');
www.rferl.org.Services.AudioHighlightService=function() {
www.rferl.org.Services.AudioHighlightService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
www.rferl.org.Services.AudioHighlightService.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return www.rferl.org.Services.AudioHighlightService._staticInstance.get_path();},
UpdateAudioHighlightMenu:function(succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'UpdateAudioHighlightMenu',false,{},succeededCallback,failedCallback,userContext); },
UpdateFeatureAudioWidget:function(succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'UpdateFeatureAudioWidget',false,{},succeededCallback,failedCallback,userContext); },
UpdateAudioHighlight:function(succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'UpdateAudioHighlight',false,{},succeededCallback,failedCallback,userContext); },
UpdateAudioHighlightAlternative:function(alternativePlayJs,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'UpdateAudioHighlightAlternative',false,{alternativePlayJs:alternativePlayJs},succeededCallback,failedCallback,userContext); },
UpdateUpcommingNowplaying:function(config,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'UpdateUpcommingNowplaying',false,{config:config},succeededCallback,failedCallback,userContext); },
UpdateItvUpcoming:function(succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'UpdateItvUpcoming',false,{},succeededCallback,failedCallback,userContext); },
GetUpcommingNowplayingInfoUnited:function(methods,config,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetUpcommingNowplayingInfoUnited',false,{methods:methods,config:config},succeededCallback,failedCallback,userContext); }}
www.rferl.org.Services.AudioHighlightService.registerClass('www.rferl.org.Services.AudioHighlightService',Sys.Net.WebServiceProxy);
www.rferl.org.Services.AudioHighlightService._staticInstance = new www.rferl.org.Services.AudioHighlightService();
www.rferl.org.Services.AudioHighlightService.set_path = function(value) { www.rferl.org.Services.AudioHighlightService._staticInstance.set_path(value); }
www.rferl.org.Services.AudioHighlightService.get_path = function() { return www.rferl.org.Services.AudioHighlightService._staticInstance.get_path(); }
www.rferl.org.Services.AudioHighlightService.set_timeout = function(value) { www.rferl.org.Services.AudioHighlightService._staticInstance.set_timeout(value); }
www.rferl.org.Services.AudioHighlightService.get_timeout = function() { return www.rferl.org.Services.AudioHighlightService._staticInstance.get_timeout(); }
www.rferl.org.Services.AudioHighlightService.set_defaultUserContext = function(value) { www.rferl.org.Services.AudioHighlightService._staticInstance.set_defaultUserContext(value); }
www.rferl.org.Services.AudioHighlightService.get_defaultUserContext = function() { return www.rferl.org.Services.AudioHighlightService._staticInstance.get_defaultUserContext(); }
www.rferl.org.Services.AudioHighlightService.set_defaultSucceededCallback = function(value) { www.rferl.org.Services.AudioHighlightService._staticInstance.set_defaultSucceededCallback(value); }
www.rferl.org.Services.AudioHighlightService.get_defaultSucceededCallback = function() { return www.rferl.org.Services.AudioHighlightService._staticInstance.get_defaultSucceededCallback(); }
www.rferl.org.Services.AudioHighlightService.set_defaultFailedCallback = function(value) { www.rferl.org.Services.AudioHighlightService._staticInstance.set_defaultFailedCallback(value); }
www.rferl.org.Services.AudioHighlightService.get_defaultFailedCallback = function() { return www.rferl.org.Services.AudioHighlightService._staticInstance.get_defaultFailedCallback(); }
www.rferl.org.Services.AudioHighlightService.set_enableJsonp = function(value) { www.rferl.org.Services.AudioHighlightService._staticInstance.set_enableJsonp(value); }
www.rferl.org.Services.AudioHighlightService.get_enableJsonp = function() { return www.rferl.org.Services.AudioHighlightService._staticInstance.get_enableJsonp(); }
www.rferl.org.Services.AudioHighlightService.set_jsonpCallbackParameter = function(value) { www.rferl.org.Services.AudioHighlightService._staticInstance.set_jsonpCallbackParameter(value); }
www.rferl.org.Services.AudioHighlightService.get_jsonpCallbackParameter = function() { return www.rferl.org.Services.AudioHighlightService._staticInstance.get_jsonpCallbackParameter(); }
www.rferl.org.Services.AudioHighlightService.set_path("/Services/AudioHighlightService.asmx");
www.rferl.org.Services.AudioHighlightService.UpdateAudioHighlightMenu= function(onSuccess,onFailed,userContext) {www.rferl.org.Services.AudioHighlightService._staticInstance.UpdateAudioHighlightMenu(onSuccess,onFailed,userContext); }
www.rferl.org.Services.AudioHighlightService.UpdateFeatureAudioWidget= function(onSuccess,onFailed,userContext) {www.rferl.org.Services.AudioHighlightService._staticInstance.UpdateFeatureAudioWidget(onSuccess,onFailed,userContext); }
www.rferl.org.Services.AudioHighlightService.UpdateAudioHighlight= function(onSuccess,onFailed,userContext) {www.rferl.org.Services.AudioHighlightService._staticInstance.UpdateAudioHighlight(onSuccess,onFailed,userContext); }
www.rferl.org.Services.AudioHighlightService.UpdateAudioHighlightAlternative= function(alternativePlayJs,onSuccess,onFailed,userContext) {www.rferl.org.Services.AudioHighlightService._staticInstance.UpdateAudioHighlightAlternative(alternativePlayJs,onSuccess,onFailed,userContext); }
www.rferl.org.Services.AudioHighlightService.UpdateUpcommingNowplaying= function(config,onSuccess,onFailed,userContext) {www.rferl.org.Services.AudioHighlightService._staticInstance.UpdateUpcommingNowplaying(config,onSuccess,onFailed,userContext); }
www.rferl.org.Services.AudioHighlightService.UpdateItvUpcoming= function(onSuccess,onFailed,userContext) {www.rferl.org.Services.AudioHighlightService._staticInstance.UpdateItvUpcoming(onSuccess,onFailed,userContext); }
www.rferl.org.Services.AudioHighlightService.GetUpcommingNowplayingInfoUnited= function(methods,config,onSuccess,onFailed,userContext) {www.rferl.org.Services.AudioHighlightService._staticInstance.GetUpcommingNowplayingInfoUnited(methods,config,onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
if (typeof(www.rferl.org.Services.AudioMenuResponse) === 'undefined') {
www.rferl.org.Services.AudioMenuResponse=gtc("www.rferl.org.Services.AudioMenuResponse");
www.rferl.org.Services.AudioMenuResponse.registerClass('www.rferl.org.Services.AudioMenuResponse');
}
if (typeof(www.rferl.org.Services.UpcommingNowplayingInfoResult) === 'undefined') {
www.rferl.org.Services.UpcommingNowplayingInfoResult=gtc("www.rferl.org.Services.UpcommingNowplayingInfoResult");
www.rferl.org.Services.UpcommingNowplayingInfoResult.registerClass('www.rferl.org.Services.UpcommingNowplayingInfoResult');
}
if (typeof(www.rferl.org.Services.UpcommingNowplayingInfoConfig) === 'undefined') {
www.rferl.org.Services.UpcommingNowplayingInfoConfig=gtc("www.rferl.org.Services.UpcommingNowplayingInfoConfig");
www.rferl.org.Services.UpcommingNowplayingInfoConfig.registerClass('www.rferl.org.Services.UpcommingNowplayingInfoConfig');
}
if (typeof(www.rferl.org.Services.UpcommingNowPlayingMethods) === 'undefined') {
www.rferl.org.Services.UpcommingNowPlayingMethods = function() { throw Error.invalidOperation(); }
www.rferl.org.Services.UpcommingNowPlayingMethods.prototype = {UpdateAudioHighlight: 1,UpdateAudioHighlightMenu: 2,UpdateUpcommingNowplaying: 4,UpdateFeatureAudioWidget: 8,UpdateItvUpcoming: 16}
www.rferl.org.Services.UpcommingNowPlayingMethods.registerEnum('www.rferl.org.Services.UpcommingNowPlayingMethods', true);
}
