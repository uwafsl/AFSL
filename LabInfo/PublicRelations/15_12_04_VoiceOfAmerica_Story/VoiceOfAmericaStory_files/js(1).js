Type.registerNamespace('www.rferl.org.Services');
www.rferl.org.Services.MembershipService=function() {
www.rferl.org.Services.MembershipService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
www.rferl.org.Services.MembershipService.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return www.rferl.org.Services.MembershipService._staticInstance.get_path();},
GetCurrentUserName:function(succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetCurrentUserName',false,{},succeededCallback,failedCallback,userContext); },
RateComment:function(forumThreadID,agree,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'RateComment',false,{forumThreadID:forumThreadID,agree:agree},succeededCallback,failedCallback,userContext); }}
www.rferl.org.Services.MembershipService.registerClass('www.rferl.org.Services.MembershipService',Sys.Net.WebServiceProxy);
www.rferl.org.Services.MembershipService._staticInstance = new www.rferl.org.Services.MembershipService();
www.rferl.org.Services.MembershipService.set_path = function(value) { www.rferl.org.Services.MembershipService._staticInstance.set_path(value); }
www.rferl.org.Services.MembershipService.get_path = function() { return www.rferl.org.Services.MembershipService._staticInstance.get_path(); }
www.rferl.org.Services.MembershipService.set_timeout = function(value) { www.rferl.org.Services.MembershipService._staticInstance.set_timeout(value); }
www.rferl.org.Services.MembershipService.get_timeout = function() { return www.rferl.org.Services.MembershipService._staticInstance.get_timeout(); }
www.rferl.org.Services.MembershipService.set_defaultUserContext = function(value) { www.rferl.org.Services.MembershipService._staticInstance.set_defaultUserContext(value); }
www.rferl.org.Services.MembershipService.get_defaultUserContext = function() { return www.rferl.org.Services.MembershipService._staticInstance.get_defaultUserContext(); }
www.rferl.org.Services.MembershipService.set_defaultSucceededCallback = function(value) { www.rferl.org.Services.MembershipService._staticInstance.set_defaultSucceededCallback(value); }
www.rferl.org.Services.MembershipService.get_defaultSucceededCallback = function() { return www.rferl.org.Services.MembershipService._staticInstance.get_defaultSucceededCallback(); }
www.rferl.org.Services.MembershipService.set_defaultFailedCallback = function(value) { www.rferl.org.Services.MembershipService._staticInstance.set_defaultFailedCallback(value); }
www.rferl.org.Services.MembershipService.get_defaultFailedCallback = function() { return www.rferl.org.Services.MembershipService._staticInstance.get_defaultFailedCallback(); }
www.rferl.org.Services.MembershipService.set_enableJsonp = function(value) { www.rferl.org.Services.MembershipService._staticInstance.set_enableJsonp(value); }
www.rferl.org.Services.MembershipService.get_enableJsonp = function() { return www.rferl.org.Services.MembershipService._staticInstance.get_enableJsonp(); }
www.rferl.org.Services.MembershipService.set_jsonpCallbackParameter = function(value) { www.rferl.org.Services.MembershipService._staticInstance.set_jsonpCallbackParameter(value); }
www.rferl.org.Services.MembershipService.get_jsonpCallbackParameter = function() { return www.rferl.org.Services.MembershipService._staticInstance.get_jsonpCallbackParameter(); }
www.rferl.org.Services.MembershipService.set_path("/Services/MembershipService.asmx");
www.rferl.org.Services.MembershipService.GetCurrentUserName= function(onSuccess,onFailed,userContext) {www.rferl.org.Services.MembershipService._staticInstance.GetCurrentUserName(onSuccess,onFailed,userContext); }
www.rferl.org.Services.MembershipService.RateComment= function(forumThreadID,agree,onSuccess,onFailed,userContext) {www.rferl.org.Services.MembershipService._staticInstance.RateComment(forumThreadID,agree,onSuccess,onFailed,userContext); }
