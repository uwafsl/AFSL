Type.registerNamespace('www.rferl.org.Services');
www.rferl.org.Services.CaptchaService=function() {
www.rferl.org.Services.CaptchaService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
www.rferl.org.Services.CaptchaService.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return www.rferl.org.Services.CaptchaService._staticInstance.get_path();},
CaptchaContactUsSendComment:function(widgetInstanceID,title,email,emailToId,comment,txt,kd,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'CaptchaContactUsSendComment',false,{widgetInstanceID:widgetInstanceID,title:title,email:email,emailToId:emailToId,comment:comment,txt:txt,kd:kd},succeededCallback,failedCallback,userContext); },
IsCaptchaValid:function(enteredCaptchaValue,realCaptchaValue,captchaKeyName,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'IsCaptchaValid',false,{enteredCaptchaValue:enteredCaptchaValue,realCaptchaValue:realCaptchaValue,captchaKeyName:captchaKeyName},succeededCallback,failedCallback,userContext); },
IsCaptchaValidNoCheck:function(enteredCaptchaValue,realCaptchaValue,ThreadId,ArticleID,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'IsCaptchaValidNoCheck',false,{enteredCaptchaValue:enteredCaptchaValue,realCaptchaValue:realCaptchaValue,ThreadId:ThreadId,ArticleID:ArticleID},succeededCallback,failedCallback,userContext); },
GetCaptchaBody:function(captchaType,controlNumber,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetCaptchaBody',false,{captchaType:captchaType,controlNumber:controlNumber},succeededCallback,failedCallback,userContext); }}
www.rferl.org.Services.CaptchaService.registerClass('www.rferl.org.Services.CaptchaService',Sys.Net.WebServiceProxy);
www.rferl.org.Services.CaptchaService._staticInstance = new www.rferl.org.Services.CaptchaService();
www.rferl.org.Services.CaptchaService.set_path = function(value) { www.rferl.org.Services.CaptchaService._staticInstance.set_path(value); }
www.rferl.org.Services.CaptchaService.get_path = function() { return www.rferl.org.Services.CaptchaService._staticInstance.get_path(); }
www.rferl.org.Services.CaptchaService.set_timeout = function(value) { www.rferl.org.Services.CaptchaService._staticInstance.set_timeout(value); }
www.rferl.org.Services.CaptchaService.get_timeout = function() { return www.rferl.org.Services.CaptchaService._staticInstance.get_timeout(); }
www.rferl.org.Services.CaptchaService.set_defaultUserContext = function(value) { www.rferl.org.Services.CaptchaService._staticInstance.set_defaultUserContext(value); }
www.rferl.org.Services.CaptchaService.get_defaultUserContext = function() { return www.rferl.org.Services.CaptchaService._staticInstance.get_defaultUserContext(); }
www.rferl.org.Services.CaptchaService.set_defaultSucceededCallback = function(value) { www.rferl.org.Services.CaptchaService._staticInstance.set_defaultSucceededCallback(value); }
www.rferl.org.Services.CaptchaService.get_defaultSucceededCallback = function() { return www.rferl.org.Services.CaptchaService._staticInstance.get_defaultSucceededCallback(); }
www.rferl.org.Services.CaptchaService.set_defaultFailedCallback = function(value) { www.rferl.org.Services.CaptchaService._staticInstance.set_defaultFailedCallback(value); }
www.rferl.org.Services.CaptchaService.get_defaultFailedCallback = function() { return www.rferl.org.Services.CaptchaService._staticInstance.get_defaultFailedCallback(); }
www.rferl.org.Services.CaptchaService.set_enableJsonp = function(value) { www.rferl.org.Services.CaptchaService._staticInstance.set_enableJsonp(value); }
www.rferl.org.Services.CaptchaService.get_enableJsonp = function() { return www.rferl.org.Services.CaptchaService._staticInstance.get_enableJsonp(); }
www.rferl.org.Services.CaptchaService.set_jsonpCallbackParameter = function(value) { www.rferl.org.Services.CaptchaService._staticInstance.set_jsonpCallbackParameter(value); }
www.rferl.org.Services.CaptchaService.get_jsonpCallbackParameter = function() { return www.rferl.org.Services.CaptchaService._staticInstance.get_jsonpCallbackParameter(); }
www.rferl.org.Services.CaptchaService.set_path("/Services/CaptchaService.asmx");
www.rferl.org.Services.CaptchaService.CaptchaContactUsSendComment= function(widgetInstanceID,title,email,emailToId,comment,txt,kd,onSuccess,onFailed,userContext) {www.rferl.org.Services.CaptchaService._staticInstance.CaptchaContactUsSendComment(widgetInstanceID,title,email,emailToId,comment,txt,kd,onSuccess,onFailed,userContext); }
www.rferl.org.Services.CaptchaService.IsCaptchaValid= function(enteredCaptchaValue,realCaptchaValue,captchaKeyName,onSuccess,onFailed,userContext) {www.rferl.org.Services.CaptchaService._staticInstance.IsCaptchaValid(enteredCaptchaValue,realCaptchaValue,captchaKeyName,onSuccess,onFailed,userContext); }
www.rferl.org.Services.CaptchaService.IsCaptchaValidNoCheck= function(enteredCaptchaValue,realCaptchaValue,ThreadId,ArticleID,onSuccess,onFailed,userContext) {www.rferl.org.Services.CaptchaService._staticInstance.IsCaptchaValidNoCheck(enteredCaptchaValue,realCaptchaValue,ThreadId,ArticleID,onSuccess,onFailed,userContext); }
www.rferl.org.Services.CaptchaService.GetCaptchaBody= function(captchaType,controlNumber,onSuccess,onFailed,userContext) {www.rferl.org.Services.CaptchaService._staticInstance.GetCaptchaBody(captchaType,controlNumber,onSuccess,onFailed,userContext); }
