function InitAccordeon(n){var i=document.getElementById(n),u,f,r,t;if(i!=null){for(u=0,t=0;t<i.childNodes.length;t++)if(i.childNodes[t].className!=undefined&&i.childNodes[t].className.indexOf("box_mostpopular")!=-1)for(r=0;r<i.childNodes[t].childNodes.length;r++)i.childNodes[t].childNodes[r].className!=undefined&&i.childNodes[t].childNodes[r].className.indexOf("mostpopular_inner")!=-1&&(f=$(i.childNodes[t].childNodes[r]).outerHeight(),u=Math.max(u,f));for(t=0;t<i.childNodes.length;t++)if(i.childNodes[t].className!=undefined&&i.childNodes[t].className.indexOf("box_mostpopular")!=-1)for(r=0;r<i.childNodes[t].childNodes.length;r++)i.childNodes[t].childNodes[r].className!=undefined&&i.childNodes[t].childNodes[r].className.indexOf("mostpopular_inner")!=-1&&$(i.childNodes[t].childNodes[r]).height(u);for(t=0;t<i.childNodes.length;t++)if(i.childNodes[t].className!=undefined&&i.childNodes[t].className.indexOf("box_mostpopular")!=-1){ResizeAccordeonPart(n,i.childNodes[t].id,!0);break}$(i).parent().css("padding-top","1px");$(i).parent().css("padding-bottom","3px");$("#"+n+" a.tab_acc:first").addClass("opened")}}function ActivateAccordeonPart(n,t,i){var u=document.getElementById(t),r;$("#"+t+" a").removeClass("opened");$(n).addClass("opened");u!=null&&(r=t+"_int",runningIntervals[r]!=undefined&&runningIntervals[r]!=null&&window.clearInterval(runningIntervals[r]),runningIntervals[r]=window.setInterval('ResizeAccordeonPart("'+t+'","'+i+'",false)',100))}function ResizeAccordeonPart(n,t,i){var e=document.getElementById(n),v=document.getElementById(t),c,l,a,f,r,u,y;if(e!=null){for(c=0,l=0,f=0;f<e.childNodes.length;f++)if(e.childNodes[f].className!=undefined&&e.childNodes[f].className.indexOf("box_mostpopular")!=-1&&(r=e.childNodes[f],r==v)){var s=$(r).height(),o=0,h=0;for(u=0;u<r.childNodes.length;u++)r.childNodes[u].className!=undefined&&(r.childNodes[u].className.indexOf("mostpopular_heading")!=-1?o=$(r.childNodes[u]).outerHeight():r.childNodes[u].className.indexOf("mostpopular_inner")!=-1&&(h=$(r.childNodes[u]).outerHeight()));s<o+h&&(a=i?o+h:Math.ceil(Math.min(o+h,s+Math.max((o+h-s)/2,5))),l=a-s,$(r).height(a),c++)}for(f=0;f<e.childNodes.length;f++)if(e.childNodes[f].className!=undefined&&e.childNodes[f].className.indexOf("box_mostpopular")!=-1&&(r=e.childNodes[f],r!=v)){var s=$(r).height(),o=0,h=0;for(u=0;u<r.childNodes.length;u++)r.childNodes[u].className!=undefined&&(r.childNodes[u].className.indexOf("mostpopular_heading")!=-1?o=$(r.childNodes[u]).outerHeight():r.childNodes[u].className.indexOf("mostpopular_inner")!=-1&&(h=$(r.childNodes[u]).outerHeight()));s>o&&(i?$(r).height(o):$(r).height(Math.max(o,s-l)),c++)}c==0&&(y=n+"_int",window.clearInterval(runningIntervals[y]))}}var runningIntervals=Array();;