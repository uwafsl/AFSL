Type.registerNamespace('www.rferl.org.Services');
www.rferl.org.Services.PlaylistService=function() {
www.rferl.org.Services.PlaylistService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
www.rferl.org.Services.PlaylistService.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return www.rferl.org.Services.PlaylistService._staticInstance.get_path();},
AddToPlaylist:function(itemType,itemId,asFirst,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'AddToPlaylist',false,{itemType:itemType,itemId:itemId,asFirst:asFirst},succeededCallback,failedCallback,userContext); },
AddToPlaylistWithBody:function(itemType,itemId,asFirst,campaign,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'AddToPlaylistWithBody',false,{itemType:itemType,itemId:itemId,asFirst:asFirst,campaign:campaign},succeededCallback,failedCallback,userContext); },
GetPlaylistBody$0:function(succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetPlaylistBody$0',false,{},succeededCallback,failedCallback,userContext); },
GetPlaylistBody$4:function(nowPlayingType,nowPlayingContentId,addItem,campaign,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetPlaylistBody$4',false,{nowPlayingType:nowPlayingType,nowPlayingContentId:nowPlayingContentId,addItem:addItem,campaign:campaign},succeededCallback,failedCallback,userContext); },
GetPlaylistBodyForWidget:function(widgetId,nowPlayingType,nowPlayingIdentifier,campaign,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetPlaylistBodyForWidget',true,{widgetId:widgetId,nowPlayingType:nowPlayingType,nowPlayingIdentifier:nowPlayingIdentifier,campaign:campaign},succeededCallback,failedCallback,userContext); },
MergePlaylistWithWidget:function(widgetId,nowPlayingType,nowPlayingIdentifier,campaign,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'MergePlaylistWithWidget',false,{widgetId:widgetId,nowPlayingType:nowPlayingType,nowPlayingIdentifier:nowPlayingIdentifier,campaign:campaign},succeededCallback,failedCallback,userContext); },
RemoveFromPlaylist:function(itemId,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'RemoveFromPlaylist',false,{itemId:itemId},succeededCallback,failedCallback,userContext); },
ClearPlaylist:function(succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'ClearPlaylist',false,{},succeededCallback,failedCallback,userContext); },
SetItemOrder:function(itemId,newOrder,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'SetItemOrder',false,{itemId:itemId,newOrder:newOrder},succeededCallback,failedCallback,userContext); },
SetItemsOrder:function(itemIdsOrdered,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'SetItemsOrder',false,{itemIdsOrdered:itemIdsOrdered},succeededCallback,failedCallback,userContext); },
GetPlaylistItem:function(type,identifier,campaign,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetPlaylistItem',false,{type:type,identifier:identifier,campaign:campaign},succeededCallback,failedCallback,userContext); },
UpdateItvLive:function(tubeId,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'UpdateItvLive',false,{tubeId:tubeId},succeededCallback,failedCallback,userContext); }}
www.rferl.org.Services.PlaylistService.registerClass('www.rferl.org.Services.PlaylistService',Sys.Net.WebServiceProxy);
www.rferl.org.Services.PlaylistService._staticInstance = new www.rferl.org.Services.PlaylistService();
www.rferl.org.Services.PlaylistService.set_path = function(value) { www.rferl.org.Services.PlaylistService._staticInstance.set_path(value); }
www.rferl.org.Services.PlaylistService.get_path = function() { return www.rferl.org.Services.PlaylistService._staticInstance.get_path(); }
www.rferl.org.Services.PlaylistService.set_timeout = function(value) { www.rferl.org.Services.PlaylistService._staticInstance.set_timeout(value); }
www.rferl.org.Services.PlaylistService.get_timeout = function() { return www.rferl.org.Services.PlaylistService._staticInstance.get_timeout(); }
www.rferl.org.Services.PlaylistService.set_defaultUserContext = function(value) { www.rferl.org.Services.PlaylistService._staticInstance.set_defaultUserContext(value); }
www.rferl.org.Services.PlaylistService.get_defaultUserContext = function() { return www.rferl.org.Services.PlaylistService._staticInstance.get_defaultUserContext(); }
www.rferl.org.Services.PlaylistService.set_defaultSucceededCallback = function(value) { www.rferl.org.Services.PlaylistService._staticInstance.set_defaultSucceededCallback(value); }
www.rferl.org.Services.PlaylistService.get_defaultSucceededCallback = function() { return www.rferl.org.Services.PlaylistService._staticInstance.get_defaultSucceededCallback(); }
www.rferl.org.Services.PlaylistService.set_defaultFailedCallback = function(value) { www.rferl.org.Services.PlaylistService._staticInstance.set_defaultFailedCallback(value); }
www.rferl.org.Services.PlaylistService.get_defaultFailedCallback = function() { return www.rferl.org.Services.PlaylistService._staticInstance.get_defaultFailedCallback(); }
www.rferl.org.Services.PlaylistService.set_enableJsonp = function(value) { www.rferl.org.Services.PlaylistService._staticInstance.set_enableJsonp(value); }
www.rferl.org.Services.PlaylistService.get_enableJsonp = function() { return www.rferl.org.Services.PlaylistService._staticInstance.get_enableJsonp(); }
www.rferl.org.Services.PlaylistService.set_jsonpCallbackParameter = function(value) { www.rferl.org.Services.PlaylistService._staticInstance.set_jsonpCallbackParameter(value); }
www.rferl.org.Services.PlaylistService.get_jsonpCallbackParameter = function() { return www.rferl.org.Services.PlaylistService._staticInstance.get_jsonpCallbackParameter(); }
www.rferl.org.Services.PlaylistService.set_path("/Services/PlaylistService.asmx");
www.rferl.org.Services.PlaylistService.AddToPlaylist= function(itemType,itemId,asFirst,onSuccess,onFailed,userContext) {www.rferl.org.Services.PlaylistService._staticInstance.AddToPlaylist(itemType,itemId,asFirst,onSuccess,onFailed,userContext); }
www.rferl.org.Services.PlaylistService.AddToPlaylistWithBody= function(itemType,itemId,asFirst,campaign,onSuccess,onFailed,userContext) {www.rferl.org.Services.PlaylistService._staticInstance.AddToPlaylistWithBody(itemType,itemId,asFirst,campaign,onSuccess,onFailed,userContext); }
www.rferl.org.Services.PlaylistService.GetPlaylistBody$0= function(onSuccess,onFailed,userContext) {www.rferl.org.Services.PlaylistService._staticInstance.GetPlaylistBody$0(onSuccess,onFailed,userContext); }
www.rferl.org.Services.PlaylistService.GetPlaylistBody$4= function(nowPlayingType,nowPlayingContentId,addItem,campaign,onSuccess,onFailed,userContext) {www.rferl.org.Services.PlaylistService._staticInstance.GetPlaylistBody$4(nowPlayingType,nowPlayingContentId,addItem,campaign,onSuccess,onFailed,userContext); }
www.rferl.org.Services.PlaylistService.GetPlaylistBodyForWidget= function(widgetId,nowPlayingType,nowPlayingIdentifier,campaign,onSuccess,onFailed,userContext) {www.rferl.org.Services.PlaylistService._staticInstance.GetPlaylistBodyForWidget(widgetId,nowPlayingType,nowPlayingIdentifier,campaign,onSuccess,onFailed,userContext); }
www.rferl.org.Services.PlaylistService.MergePlaylistWithWidget= function(widgetId,nowPlayingType,nowPlayingIdentifier,campaign,onSuccess,onFailed,userContext) {www.rferl.org.Services.PlaylistService._staticInstance.MergePlaylistWithWidget(widgetId,nowPlayingType,nowPlayingIdentifier,campaign,onSuccess,onFailed,userContext); }
www.rferl.org.Services.PlaylistService.RemoveFromPlaylist= function(itemId,onSuccess,onFailed,userContext) {www.rferl.org.Services.PlaylistService._staticInstance.RemoveFromPlaylist(itemId,onSuccess,onFailed,userContext); }
www.rferl.org.Services.PlaylistService.ClearPlaylist= function(onSuccess,onFailed,userContext) {www.rferl.org.Services.PlaylistService._staticInstance.ClearPlaylist(onSuccess,onFailed,userContext); }
www.rferl.org.Services.PlaylistService.SetItemOrder= function(itemId,newOrder,onSuccess,onFailed,userContext) {www.rferl.org.Services.PlaylistService._staticInstance.SetItemOrder(itemId,newOrder,onSuccess,onFailed,userContext); }
www.rferl.org.Services.PlaylistService.SetItemsOrder= function(itemIdsOrdered,onSuccess,onFailed,userContext) {www.rferl.org.Services.PlaylistService._staticInstance.SetItemsOrder(itemIdsOrdered,onSuccess,onFailed,userContext); }
www.rferl.org.Services.PlaylistService.GetPlaylistItem= function(type,identifier,campaign,onSuccess,onFailed,userContext) {www.rferl.org.Services.PlaylistService._staticInstance.GetPlaylistItem(type,identifier,campaign,onSuccess,onFailed,userContext); }
www.rferl.org.Services.PlaylistService.UpdateItvLive= function(tubeId,onSuccess,onFailed,userContext) {www.rferl.org.Services.PlaylistService._staticInstance.UpdateItvLive(tubeId,onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
if (typeof(www.rferl.org.Services.PlaylistBody) === 'undefined') {
www.rferl.org.Services.PlaylistBody=gtc("www.rferl.org.Services.PlaylistBody");
www.rferl.org.Services.PlaylistBody.registerClass('www.rferl.org.Services.PlaylistBody');
}
Type.registerNamespace('RFERL.Publisher.Model.Multimedia.Audio');
if (typeof(RFERL.Publisher.Model.Multimedia.Audio.AudioItemType) === 'undefined') {
RFERL.Publisher.Model.Multimedia.Audio.AudioItemType = function() { throw Error.invalidOperation(); }
RFERL.Publisher.Model.Multimedia.Audio.AudioItemType.prototype = {none: 0,News: 1,Audio: 4,OnDemand: 16,Channel: 64,all: 85,Tube: 256}
RFERL.Publisher.Model.Multimedia.Audio.AudioItemType.registerEnum('RFERL.Publisher.Model.Multimedia.Audio.AudioItemType', true);
}
