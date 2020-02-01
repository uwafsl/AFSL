Type.registerNamespace('www.rferl.org.Services');
www.rferl.org.Services.MailerService=function() {
www.rferl.org.Services.MailerService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
www.rferl.org.Services.MailerService.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return www.rferl.org.Services.MailerService._staticInstance.get_path();},
HelloWorld:function(succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'HelloWorld',false,{},succeededCallback,failedCallback,userContext); },
Subscribe:function(mailerTopicIds,email,hidCA,txtCA,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'Subscribe',false,{mailerTopicIds:mailerTopicIds,email:email,hidCA:hidCA,txtCA:txtCA},succeededCallback,failedCallback,userContext); },
GenerateCaptchaCode:function(succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GenerateCaptchaCode',false,{},succeededCallback,failedCallback,userContext); },
ReportComment:function(ArticleID,ThreadID,Reason,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'ReportComment',false,{ArticleID:ArticleID,ThreadID:ThreadID,Reason:Reason},succeededCallback,failedCallback,userContext); }}
www.rferl.org.Services.MailerService.registerClass('www.rferl.org.Services.MailerService',Sys.Net.WebServiceProxy);
www.rferl.org.Services.MailerService._staticInstance = new www.rferl.org.Services.MailerService();
www.rferl.org.Services.MailerService.set_path = function(value) { www.rferl.org.Services.MailerService._staticInstance.set_path(value); }
www.rferl.org.Services.MailerService.get_path = function() { return www.rferl.org.Services.MailerService._staticInstance.get_path(); }
www.rferl.org.Services.MailerService.set_timeout = function(value) { www.rferl.org.Services.MailerService._staticInstance.set_timeout(value); }
www.rferl.org.Services.MailerService.get_timeout = function() { return www.rferl.org.Services.MailerService._staticInstance.get_timeout(); }
www.rferl.org.Services.MailerService.set_defaultUserContext = function(value) { www.rferl.org.Services.MailerService._staticInstance.set_defaultUserContext(value); }
www.rferl.org.Services.MailerService.get_defaultUserContext = function() { return www.rferl.org.Services.MailerService._staticInstance.get_defaultUserContext(); }
www.rferl.org.Services.MailerService.set_defaultSucceededCallback = function(value) { www.rferl.org.Services.MailerService._staticInstance.set_defaultSucceededCallback(value); }
www.rferl.org.Services.MailerService.get_defaultSucceededCallback = function() { return www.rferl.org.Services.MailerService._staticInstance.get_defaultSucceededCallback(); }
www.rferl.org.Services.MailerService.set_defaultFailedCallback = function(value) { www.rferl.org.Services.MailerService._staticInstance.set_defaultFailedCallback(value); }
www.rferl.org.Services.MailerService.get_defaultFailedCallback = function() { return www.rferl.org.Services.MailerService._staticInstance.get_defaultFailedCallback(); }
www.rferl.org.Services.MailerService.set_enableJsonp = function(value) { www.rferl.org.Services.MailerService._staticInstance.set_enableJsonp(value); }
www.rferl.org.Services.MailerService.get_enableJsonp = function() { return www.rferl.org.Services.MailerService._staticInstance.get_enableJsonp(); }
www.rferl.org.Services.MailerService.set_jsonpCallbackParameter = function(value) { www.rferl.org.Services.MailerService._staticInstance.set_jsonpCallbackParameter(value); }
www.rferl.org.Services.MailerService.get_jsonpCallbackParameter = function() { return www.rferl.org.Services.MailerService._staticInstance.get_jsonpCallbackParameter(); }
www.rferl.org.Services.MailerService.set_path("/Services/MailerService.asmx");
www.rferl.org.Services.MailerService.HelloWorld= function(onSuccess,onFailed,userContext) {www.rferl.org.Services.MailerService._staticInstance.HelloWorld(onSuccess,onFailed,userContext); }
www.rferl.org.Services.MailerService.Subscribe= function(mailerTopicIds,email,hidCA,txtCA,onSuccess,onFailed,userContext) {www.rferl.org.Services.MailerService._staticInstance.Subscribe(mailerTopicIds,email,hidCA,txtCA,onSuccess,onFailed,userContext); }
www.rferl.org.Services.MailerService.GenerateCaptchaCode= function(onSuccess,onFailed,userContext) {www.rferl.org.Services.MailerService._staticInstance.GenerateCaptchaCode(onSuccess,onFailed,userContext); }
www.rferl.org.Services.MailerService.ReportComment= function(ArticleID,ThreadID,Reason,onSuccess,onFailed,userContext) {www.rferl.org.Services.MailerService._staticInstance.ReportComment(ArticleID,ThreadID,Reason,onSuccess,onFailed,userContext); }
