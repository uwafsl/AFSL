Type.registerNamespace("www.rferl.org.Services");www.rferl.org.Services.AudioHighlightServiceHelper=function(){throw Error.notImplemented("This is static class");};www.rferl.org.Services.AudioHighlightServiceHelper._registrations=[];www.rferl.org.Services.AudioHighlightServiceHelper._methods=0;www.rferl.org.Services.AudioHighlightServiceHelper._interval=null;www.rferl.org.Services.AudioHighlightServiceHelper._handle=null;www.rferl.org.Services.AudioHighlightServiceHelper._config=null;www.rferl.org.Services.AudioHighlightServiceHelper._invokeInitialDone=!1;www.rferl.org.Services.AudioHighlightServiceHelper.register=function(n,t,i,r,u){var e=www.rferl.org.Services.AudioHighlightServiceHelper._interval,f;e==null&&t>0?www.rferl.org.Services.AudioHighlightServiceHelper._interval=t:e&&t>0&&t<e&&(www.rferl.org.Services.AudioHighlightServiceHelper._handle&&window.clearInterval(www.rferl.org.Services.AudioHighlightServiceHelper._handle),www.rferl.org.Services.AudioHighlightServiceHelper._interval=t);switch(n.toLowerCase()){case"updateaudiohighlight":case"updateaudiohighlightalternative":www.rferl.org.Services.AudioHighlightServiceHelper._methods|=www.rferl.org.Services.UpcommingNowPlayingMethods.UpdateAudioHighlight;f=www.rferl.org.Services.UpcommingNowPlayingMethods.toString(www.rferl.org.Services.UpcommingNowPlayingMethods.UpdateAudioHighlight);break;case"updateaudiohighlightmenu":www.rferl.org.Services.AudioHighlightServiceHelper._methods|=www.rferl.org.Services.UpcommingNowPlayingMethods.UpdateAudioHighlightMenu;f=www.rferl.org.Services.UpcommingNowPlayingMethods.toString(www.rferl.org.Services.UpcommingNowPlayingMethods.UpdateAudioHighlightMenu);break;case"updatefeatureaudiowidget":www.rferl.org.Services.AudioHighlightServiceHelper._methods|=www.rferl.org.Services.UpcommingNowPlayingMethods.UpdateFeatureAudioWidget;f=www.rferl.org.Services.UpcommingNowPlayingMethods.toString(www.rferl.org.Services.UpcommingNowPlayingMethods.UpdateFeatureAudioWidget);break;case"updateupcommingnowplaying":www.rferl.org.Services.AudioHighlightServiceHelper._methods|=www.rferl.org.Services.UpcommingNowPlayingMethods.UpdateUpcommingNowplaying;f=www.rferl.org.Services.UpcommingNowPlayingMethods.toString(www.rferl.org.Services.UpcommingNowPlayingMethods.UpdateUpcommingNowplaying);break;case"updateitvupcoming":www.rferl.org.Services.AudioHighlightServiceHelper._methods|=www.rferl.org.Services.UpcommingNowPlayingMethods.UpdateItvUpcoming;f=www.rferl.org.Services.UpcommingNowPlayingMethods.toString(www.rferl.org.Services.UpcommingNowPlayingMethods.UpdateItvUpcoming);break;default:throw Error.argument("method",String.format("Unknown method '{0}'",n));}www.rferl.org.Services.AudioHighlightServiceHelper._registrations.push({key:f,onSuccess:r,onFail:u});www.rferl.org.Services.AudioHighlightServiceHelper._interval>0&&(www.rferl.org.Services.AudioHighlightServiceHelper._handle=window.setInterval(www.rferl.org.Services.AudioHighlightServiceHelper.invoke,www.rferl.org.Services.AudioHighlightServiceHelper._interval));www.rferl.org.Services.AudioHighlightServiceHelper._config==null&&(www.rferl.org.Services.AudioHighlightServiceHelper._config=i);www.rferl.org.Services.AudioHighlightServiceHelper._invokeInitialDone&&www.rferl.org.Services.AudioHighlightServiceHelper.invoke()};www.rferl.org.Services.AudioHighlightServiceHelper.invoke=function(){www.rferl.org.Services.AudioHighlightServiceHelper._methods!=0&&www.rferl.org.Services.AudioHighlightService.GetUpcommingNowplayingInfoUnited(www.rferl.org.Services.AudioHighlightServiceHelper._methods,www.rferl.org.Services.AudioHighlightServiceHelper._config,www.rferl.org.Services.AudioHighlightServiceHelper._onSuccess,www.rferl.org.Services.AudioHighlightServiceHelper._onFail)};www.rferl.org.Services.AudioHighlightServiceHelper._invokeInitial=function(){www.rferl.org.Services.AudioHighlightServiceHelper._invokeInitialDone=!0;www.rferl.org.Services.AudioHighlightServiceHelper.invoke()};www.rferl.org.Services.AudioHighlightServiceHelper._onSuccess=function(n){var t=[];for(var i in www.rferl.org.Services.AudioHighlightServiceHelper._registrations)if(n[www.rferl.org.Services.AudioHighlightServiceHelper._registrations[i].key])try{www.rferl.org.Services.AudioHighlightServiceHelper._registrations[i].onSuccess(n[www.rferl.org.Services.AudioHighlightServiceHelper._registrations[i].key])}catch(r){t.push(r)}if(t.length>0)throw t;};www.rferl.org.Services.AudioHighlightServiceHelper._onFail=function(n){var i=[];for(var t in www.rferl.org.Services.AudioHighlightServiceHelper._registrations)if(n[www.rferl.org.Services.AudioHighlightServiceHelper._registrations[t].key]&&www.rferl.org.Services.AudioHighlightServiceHelper._updateAudioHighlightRegistrations[t].onFail)try{www.rferl.org.Services.AudioHighlightServiceHelper._updateAudioHighlightRegistrations[t].onFail(n[www.rferl.org.Services.AudioHighlightServiceHelper._registrations[t].key])}catch(r){i.push(r)}if(i.length>0)throw i;};window.setTimeout(www.rferl.org.Services.AudioHighlightServiceHelper._invokeInitial,1e3);www.rferl.org.Services.AudioHighlightServiceHelper.registerClass("www.rferl.org.Services.AudioHighlightServiceHelper");;