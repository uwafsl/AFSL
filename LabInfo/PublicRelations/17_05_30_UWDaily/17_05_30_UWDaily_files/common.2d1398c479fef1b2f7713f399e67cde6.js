try{jQuery.cookie=function(a,g,d){if(1<arguments.length&&"[object Object]"!==String(g)){d=jQuery.extend({},d);if(null===g||void 0===g)d.expires=-1;if("number"===typeof d.expires){var l=d.expires,k=d.expires=new Date;k.setDate(k.getDate()+l)}g=String(g);return document.cookie=[encodeURIComponent(a),"=",d.raw?g:encodeURIComponent(g),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("")}d=g||{};k=d.raw?function(a){return a}:
decodeURIComponent;return(l=RegExp("(?:^|; )"+encodeURIComponent(a)+"=([^;]*)").exec(document.cookie))?k(l[1]):null},!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function g(f){var c,b,d,e=arguments.length;d=window[f];c=arguments;var h=c[1];if(2>e)throw Error("Minimum 2 arguments must be given");if(a.isArray(h)){b={};for(var m in h){c=h[m];try{b[c]=JSON.parse(d.getItem(c))}catch(g){b[c]=d.getItem(c)}}return b}if(2!=
e){try{b=JSON.parse(d.getItem(h))}catch(k){throw new ReferenceError(h+" is not defined in this storage");}for(m=2;e-1>m;m++)if(b=b[c[m]],void 0===b)throw new ReferenceError([].slice.call(c,1,m+1).join(".")+" is not defined in this storage");if(a.isArray(c[m])){d=b;b={};for(var l in c[m])b[c[m][l]]=d[c[m][l]];return b}return b[c[m]]}try{return JSON.parse(d.getItem(h))}catch(t){return d.getItem(h)}}function d(f){var c,b,d=arguments.length,m=window[f],h=arguments,e=h[1];c=h[2];var g={};if(2>d||!a.isPlainObject(e)&&
3>d)throw Error("Minimum 3 arguments must be given or second parameter must be an object");if(a.isPlainObject(e)){for(var k in e)c=e[k],a.isPlainObject(c)?m.setItem(k,JSON.stringify(c)):m.setItem(k,c);return e}if(3==d)return"object"==typeof c?m.setItem(e,JSON.stringify(c)):m.setItem(e,c),c;try{b=m.getItem(e),null!=b&&(g=JSON.parse(b))}catch(l){}b=g;for(k=2;d-2>k;k++)c=h[k],b[c]&&a.isPlainObject(b[c])||(b[c]={}),b=b[c];return b[h[k]]=h[k+1],m.setItem(e,JSON.stringify(g)),g}function l(f){var c,b,d=
arguments.length,m=window[f],e=arguments,h=e[1];if(2>d)throw Error("Minimum 2 arguments must be given");if(a.isArray(h)){for(var g in h)m.removeItem(h[g]);return!0}if(2==d)return m.removeItem(h),!0;try{c=b=JSON.parse(m.getItem(h))}catch(k){throw new ReferenceError(h+" is not defined in this storage");}for(g=2;d-1>g;g++)if(b=b[e[g]],void 0===b)throw new ReferenceError([].slice.call(e,1,g).join(".")+" is not defined in this storage");if(a.isArray(e[g]))for(var l in e[g])delete b[e[g][l]];else delete b[e[g]];
return m.setItem(h,JSON.stringify(c)),!0}function k(f){var c=arguments.length,b=arguments,d=(window[f],b[1]);if(1==c)return 0==p(f).length;if(a.isArray(d)){for(var e=0;e<d.length;e++)if(!k(f,d[e]))return!1;return!0}try{var m=g.apply(this,arguments);a.isArray(b[c-1])||(m={totest:m});for(e in m)if(!(a.isPlainObject(m[e])&&a.isEmptyObject(m[e])||a.isArray(m[e])&&!m[e].length)&&m[e])return!1;return!0}catch(h){return!0}}function t(f){var c=arguments.length,b=arguments,d=(window[f],b[1]);if(2>c)throw Error("Minimum 2 arguments must be given");
if(a.isArray(d)){for(var e=0;e<d.length;e++)if(!t(f,d[e]))return!1;return!0}try{var m=g.apply(this,arguments);a.isArray(b[c-1])||(m={totest:m});for(e in m)if(void 0===m[e]||null===m[e])return!1;return!0}catch(h){return!1}}function p(f){var c=arguments.length,b=window[f],e=arguments,d=(e[1],[]),m={};if(m=1<c?g.apply(this,e):b,m._cookie)for(var h in a.cookie())""!=h&&d.push(h.replace(m._prefix,""));else for(var k in m)d.push(k);return d}function h(f){if(!f||"string"!=typeof f)throw Error("First parameter must be a string");
e?(window.localStorage.getItem(f)||window.localStorage.setItem(f,"{}"),window.sessionStorage.getItem(f)||window.sessionStorage.setItem(f,"{}")):(window.localCookieStorage.getItem(f)||window.localCookieStorage.setItem(f,"{}"),window.sessionCookieStorage.getItem(f)||window.sessionCookieStorage.setItem(f,"{}"));var c={localStorage:a.extend({},a.localStorage,{_ns:f}),sessionStorage:a.extend({},a.sessionStorage,{_ns:f})};return a.cookie&&(window.cookieStorage.getItem(f)||window.cookieStorage.setItem(f,
"{}"),c.cookieStorage=a.extend({},a.cookieStorage,{_ns:f})),a.namespaceStorages[f]=c,c}var e=function(f){if(!window[f])return!1;try{return window[f].setItem("jsapi","jsapi"),window[f].removeItem("jsapi"),!0}catch(c){return!1}}("localStorage"),b={_type:"",_ns:"",_callMethod:function(f,c){var a=[this._type];c=Array.prototype.slice.call(c);var b=c[0];return this._ns&&a.push(this._ns),"string"==typeof b&&-1!==b.indexOf(".")&&(c.shift(),[].unshift.apply(c,b.split("."))),[].push.apply(a,c),f.apply(this,
a)},get:function(){return this._callMethod(g,arguments)},set:function(){var f=arguments.length,c=arguments,b=c[0];if(1>f||!a.isPlainObject(b)&&2>f)throw Error("Minimum 2 arguments must be given or first parameter must be an object");if(a.isPlainObject(b)&&this._ns){for(var e in b)d(this._type,this._ns,e,b[e]);return b}f=this._callMethod(d,c);return this._ns?f[b.split(".")[0]]:f},remove:function(){if(1>arguments.length)throw Error("Minimum 1 argument must be given");return this._callMethod(l,arguments)},
removeAll:function(f){if(this._ns)f=(d(this._type,this._ns,{}),!0);else{var c=this._type,b=p(c),e;for(e in b)l(c,b[e]);if(f)for(e in a.namespaceStorages)h(e);f=void 0}return f},isEmpty:function(){return this._callMethod(k,arguments)},isSet:function(){if(1>arguments.length)throw Error("Minimum 1 argument must be given");return this._callMethod(t,arguments)},keys:function(){return this._callMethod(p,arguments)}};if(a.cookie){window.name||(window.name=Math.floor(1E8*Math.random()));var m={_cookie:!0,
_prefix:"",_expires:null,_path:null,_domain:null,setItem:function(f,c){a.cookie(this._prefix+f,c,{expires:this._expires,path:this._path,domain:this._domain})},getItem:function(f){return a.cookie(this._prefix+f)},removeItem:function(f){return a.removeCookie(this._prefix+f)},clear:function(){for(var f in a.cookie())""!=f&&(!this._prefix&&-1===f.indexOf("ls_")&&-1===f.indexOf("ss_")||this._prefix&&0===f.indexOf(this._prefix))&&a.removeCookie(f)},setExpires:function(a){return this._expires=a,this},setPath:function(a){return this._path=
a,this},setDomain:function(a){return this._domain=a,this},setConf:function(a){return a.path&&(this._path=a.path),a.domain&&(this._domain=a.domain),a.expires&&(this._expires=a.expires),this},setDefaultConf:function(){this._path=this._domain=this._expires=null}};e||(window.localCookieStorage=a.extend({},m,{_prefix:"ls_",_expires:3650}),window.sessionCookieStorage=a.extend({},m,{_prefix:"ss_"+window.name+"_"}));window.cookieStorage=a.extend({},m);a.cookieStorage=a.extend({},b,{_type:"cookieStorage",
setExpires:function(a){return window.cookieStorage.setExpires(a),this},setPath:function(a){return window.cookieStorage.setPath(a),this},setDomain:function(a){return window.cookieStorage.setDomain(a),this},setConf:function(a){return window.cookieStorage.setConf(a),this},setDefaultConf:function(){return window.cookieStorage.setDefaultConf(),this}})}a.initNamespaceStorage=function(a){return h(a)};e?(a.localStorage=a.extend({},b,{_type:"localStorage"}),a.sessionStorage=a.extend({},b,{_type:"sessionStorage"})):
(a.localStorage=a.extend({},b,{_type:"localCookieStorage"}),a.sessionStorage=a.extend({},b,{_type:"sessionCookieStorage"}));a.namespaceStorages={};a.removeAllStorages=function(b){a.localStorage.removeAll(b);a.sessionStorage.removeAll(b);a.cookieStorage&&a.cookieStorage.removeAll(b);b||(a.namespaceStorages={})}})}catch(e$$26){}
!function(a,g,d,l){a.fn.dropdownHover=function(k){var l,p,h,e;k=a.extend({},a.fn.dropdownHover.options,k);return this.each(function(){a(this).parent().addClass(k.hoverClass.replace(".","")).attr("data-intent",a(this).data("hover-delay")).attr("data-delay",a(this).data("delay"))}),a(d).on({mouseenter:function(b){if(e)return l=this,!0;b.stopPropagation();g.clearTimeout(h);var d=a(this);b=a(this).data("intent");a(d).hasClass("open")||a(d).is(l)||(p=setTimeout(function(){a(l).removeClass("open");l=d;
a(l).addClass("open")},b?b:k.hoverDelay))},mouseleave:function(b){if(e)return a(".dropdown-menu").removeClass("bs-hover-sub-clickable"),!0;if(b.stopPropagation(),g.clearTimeout(p),l)b=(a(this),a(this).data("delay")),h=setTimeout(function(){a(l).removeClass("open");a(l).find(".dropdown-toggle").blur();l=!1},b?b:k.delay)}},k.hoverClass),a(k.hoverClass).on("click",".dropdown-menu",function(a){a.stopPropagation()}),a(k.hoverClass+" a").on("click",function(b){if(b.preventDefault(),e&&a(this).data("nested")&&
!a(this).next(".dropdown-menu").hasClass("bs-hover-sub-clickable"))return a(this).next(".dropdown-menu").addClass("bs-hover-sub-clickable"),!1;if(a(l).hasClass("open")){b=a(this).attr("href");var d=a(this).attr("target");b&&"_blank"==d?g.open(b,"_blank"):b&&"#"!==b&&(g.location.href=b)}return e?!0:!1}),a(d).one("touchstart",function(){g.clearTimeout(h);g.clearTimeout(p);e=!0}),this};a.fn.dropdownHover.options={hoverClass:".bs-hover-enabled",delay:500,hoverDelay:0};a(d).ready(function(){a('[data-hover="dropdown"]').dropdownHover()})}(jQuery,
window,document);var originalLeave=$.fn.popover.Constructor.prototype.leave;$.fn.popover.Constructor.prototype.leave=function(a){var g=a instanceof this.constructor?a:$(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type),d,l;originalLeave.call(this,a);a.currentTarget&&(d=$(a.currentTarget).siblings(".popover"),l=g.timeout,d.one("mouseenter",function(){clearTimeout(l);d.one("mouseleave",function(){$.fn.popover.Constructor.prototype.leave.call(g,g)})}))};
(function(a){function g(){if(p){var a=[];if(k.querySelectorAll)a=k.querySelectorAll("[data-squery]");else for(var b=k.getElementsByTagName("*"),c=0,e=b.length;c<e;++c)b[c].getAttribute("data-squery")&&a.push(b[c]);c=0;for(e=a.length;c<e;++c){for(var b=a[c],d=[],h=b.getAttribute("data-squery").split(" "),g=0,l=h.length;g<l;++g){var v=/(.*):([0-9]*)(px|em)=(.*)/.exec(h[g]);v&&d.push(v)}b.cq_rules=b.cq_rules||[];b.cq_rules=b.cq_rules.concat(d);t.push(b)}}}function d(){for(var a=0,d=t.length;a<d;++a){el=
t[a];for(var c=0,h=el.cq_rules.length;c<h;++c){var g=el.cq_rules[c],k=parseInt(g[2]);"em"===g[3]&&(k=b(parseFloat(g[2]),el));var l=el,p=g[4],v=l.cloneNode(!0);v.className=(" "+v.className+" ").replace(" "+p+" "," ");v.style.height=0;v.style.visibility="hidden";v.style.overflow="hidden";v.style.clear="both";p=l.parentNode;p.insertBefore(v,l);l=v.offsetWidth;p.removeChild(v);e[g[1]](l,k)?0>el.className.indexOf(g[4])&&(el.className+=" "+g[4]):(g=el.className.replace(RegExp("(^| )"+g[4]+"( |$)"),"$1"),
g=g.replace(/ $/,""),el.className=g)}}}function l(){if(!h){h=!0;g();d();a.addEventListener&&a.addEventListener("resize",d,!1);var e=b(1,k.body);a.setInterval(function(){var a=b(1,k.body);a!==e&&(d(),e=a)},100)}}var k=a.document,t=[],p=!0,h=!1,e={"min-width":function(a,b){return a>b},"max-width":function(a,b){return a<b}},b=function(a){return function(){var b=Array.prototype.slice.call(arguments);a.memoize=a.memoize||{};return b in a.memoize?a.memoize[b]:a.memoize[b]=a.apply(this,b)}}(function(a,b){var c=
k.createElement("div");c.style.fontSize="1em";c.style.margin="0";c.style.padding="0";c.style.border="none";c.style.width="1em";b.appendChild(c);var e=c.offsetWidth;b.removeChild(c);return Math.round(e*a)});k.addEventListener?(k.addEventListener("DOMContentLoaded",l,!1),a.addEventListener("load",l,!1)):k.attachEvent&&(k.attachEvent("onreadystatechange",l),a.attachEvent("onload",l));a.SelectorQueries={add:function(a,b,c,e){c=/([0-9]*)(px|em)/.exec(c);for(var g=0,l=a.length;g<l;++g){var k=a[g];k.cq_rules=
k.cq_rules||[];k.cq_rules.push([null,b,c[1],c[2],e]);t.push(k)}h&&d()},ignoreDataAttributes:function(){p=!1}}})(this);
!function(a){var g=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(g)&&g.match(/rv\:(\d+)/)&&45>RegExp.$1&&addEventListener("resize",function(){var d,g=document.createElement("source"),k=function(a){var e,d,c=a.parentNode;"PICTURE"===c.nodeName.toUpperCase()?(e=g.cloneNode(),c.insertBefore(e,c.firstElementChild),setTimeout(function(){c.removeChild(e)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},
t=function(){var a,e=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<e.length;a++)k(e[a])},p=function(){clearTimeout(d);d=setTimeout(t,99)},h=a.matchMedia&&matchMedia("(orientation: landscape)"),e=function(){p();h&&h.addListener&&h.addListener(p)};return g.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?e():document.addEventListener("DOMContentLoaded",e),p}())}(window);
(function(a,g,d){function l(a){return" "===a||"\t"===a||"\n"===a||"\f"===a||"\r"===a}function k(c,b){var e=new a.Image;return e.onerror=function(){y[c]=!1;D()},e.onload=function(){y[c]=1===e.width;D()},e.src=b,"pending"}function t(a,c){return a.res-c.res}function p(a,b){var e,d,g;if(a&&b)for(g=c.parseSet(b),a=c.makeUrl(a),e=0;e<g.length;e++)if(a===c.makeUrl(g[e].url)){d=g[e];break}return d}function h(a,c){function b(c){var e;return(c=c.exec(a.substring(q)))?(e=c[0],q+=e.length,e):void 0}function e(){var a,
b,B,d,f,m,E,k,x=!1,q={};for(d=0;d<h.length;d++)f=h[d],m=f[f.length-1],f=f.substring(0,f.length-1),E=parseInt(f,10),k=parseFloat(f),da.test(f)&&"w"===m?((a||b)&&(x=!0),0===E?x=!0:a=E):M.test(f)&&"x"===m?((a||b||B)&&(x=!0),0>k?x=!0:b=k):da.test(f)&&"h"===m?((B||b)&&(x=!0),0===E?x=!0:B=E):x=!0;x||(q.url=g,a&&(q.w=a),b&&(q.d=b),B&&(q.h=B),B||b||a||(q.d=1),1===q.d&&(c.has1x=!0),q.set=c,s.push(q))}function d(){b(Z);f="";for(m="in descriptor";;){if(k=a.charAt(q),"in descriptor"===m)if(l(k))f&&(h.push(f),
f="",m="after descriptor");else{if(","===k)return q+=1,f&&h.push(f),void e();if("("===k)f+=k,m="in parens";else{if(""===k)return f&&h.push(f),void e();f+=k}}else if("in parens"===m)if(")"===k)f+=k,m="in descriptor";else{if(""===k)return h.push(f),void e();f+=k}else if("after descriptor"===m&&!l(k)){if(""===k)return void e();m="in descriptor";q-=1}q+=1}}for(var g,h,f,m,k,n=a.length,q=0,s=[];;){if(b(aa),q>=n)return s;g=b(N);h=[];","===g.slice(-1)?(g=g.replace(ka,""),e()):d()}}function e(a){var b,e,
d,f,g,h=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,m=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;b=function(a){function c(){d&&(B.push(d),d="")}function b(){B[0]&&(f.push(B),B=[])}for(var e,d="",B=[],f=[],g=0,h=0,m=!1;;){if(e=a.charAt(h),""===e)return c(),b(),f;if(m)"*"===e&&"/"===a[h+1]?(m=!1,h+=2,c()):h+=1;else{if(l(e)){if(a.charAt(h-1)&&l(a.charAt(h-1))||!d){h+=1;continue}if(0===g){c();h+=1;continue}e=" "}else if("("===e)g+=1;else if(")"===
e)g-=1;else{if(","===e){c();b();h+=1;continue}if("/"===e&&"*"===a.charAt(h+1)){m=!0;h+=2;continue}}d+=e;h+=1}}}(a);e=b.length;for(a=0;e>a;a++)if(d=b[a],f=d[d.length-1],h.test(f)&&0<=parseFloat(f)?!0:m.test(f)?!0:"0"===f||"-0"===f||"+0"===f?!0:!1)if((g=f,d.pop(),0===d.length)||(d=d.join(" "),c.matchesMedia(d)))return g;return"100vw"}g.createElement("picture");var b,m,f,c={},T=!1,I=function(){},w=g.createElement("img"),P=w.getAttribute,L=w.setAttribute,v=w.removeAttribute,A=g.documentElement,y={},J=
{algorithm:""},F=navigator.userAgent,ba=/rident/.test(F)||/ecko/.test(F)&&F.match(/rv\:(\d+)/)&&35<RegExp.$1,Q="currentSrc",K=/\s+\+?\d+(e\d+)?w/,U=/(\([^)]+\))?\s*(.+)/,F=a.picturefillCFG,z=!0,n={},q={},s=a.devicePixelRatio,u={px:1,"in":96},r=g.createElement("a"),G=!1,Z=/^[ \t\n\r\u000c]+/,aa=/^[, \t\n\r\u000c]+/,N=/^[^ \t\n\r\u000c]+/,ka=/[,]+$/,da=/^\d+$/,M=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,R=function(a,c,b,e){a.addEventListener?a.addEventListener(c,b,e||!1):a.attachEvent&&a.attachEvent("on"+
c,b)},O=function(a){var c={};return function(b){return b in c||(c[b]=a(b)),c[b]}},S=function(){var a=/^([\d\.]+)(em|vw|px)$/,c=function(){for(var a=arguments,c=0,b=a[0];++c in a;)b=b.replace(a[c],a[++c]);return b},b=O(function(a){return"return "+c((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(c,e){var d;if(!(c in
n))if(n[c]=!1,e&&(d=c.match(a)))n[c]=d[1]*u[d[2]];else try{n[c]=(new Function("e",b(c)))(u)}catch(f){}return n[c]}}(),V=function(a,b){return a.w?(a.cWidth=c.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},D=function(a){if(T){var b,e,d=a||{};if(d.elements&&1===d.elements.nodeType&&("IMG"===d.elements.nodeName.toUpperCase()?d.elements=[d.elements]:(d.context=d.elements,d.elements=null)),b=d.elements||c.qsa(d.context||g,d.reevaluate||d.reselect?c.sel:c.selShort),e=b.length){c.setupRun(d);
G=!0;for(a=0;e>a;a++)c.fillImg(b[a],d);c.teardownRun(d)}}};Q in w||(Q="src");y["image/jpeg"]=!0;y["image/gif"]=!0;y["image/png"]=!0;y["image/svg+xml"]=g.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1");c.ns=("pf"+(new Date).getTime()).substr(0,9);c.supSrcset="srcset"in w;c.supSizes="sizes"in w;c.supPicture=!!a.HTMLPictureElement;c.supSrcset&&c.supPicture&&!c.supSizes&&!function(a){w.srcset="data:,a";a.src="data:,a";c.supSrcset=w.complete===a.complete;c.supPicture=c.supSrcset&&
c.supPicture}(g.createElement("img"));c.supSrcset&&!c.supSizes?!function(){var a=g.createElement("img"),b=function(){2===a.width&&(c.supSizes=!0);m=c.supSrcset&&!c.supSizes;T=!0;setTimeout(D)};a.onload=b;a.onerror=b;a.setAttribute("sizes","9px");a.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w";a.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}():
T=!0;c.selShort="picture>img,img[srcset]";c.sel=c.selShort;c.cfg=J;c.DPR=s||1;c.u=u;c.types=y;c.setSize=I;c.makeUrl=O(function(a){return r.href=a,r.href});c.qsa=function(a,c){return"querySelector"in a?a.querySelectorAll(c):[]};c.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?c.matchesMedia=function(a){return!a||matchMedia(a).matches}:c.matchesMedia=c.mMQ,c.matchesMedia.apply(this,arguments)};c.mMQ=function(a){return a?S(a):!0};c.calcLength=function(a){a=
S(a,!0)||!1;return 0>a&&(a=!1),a};c.supportsType=function(a){return a?y[a]:!0};c.parseSize=O(function(a){a=(a||"").match(U);return{media:a&&a[1],length:a&&a[2]}});c.parseSet=function(a){return a.cands||(a.cands=h(a.srcset,a)),a.cands};c.getEmValue=function(){var a;if(!b&&(a=g.body)){var c=g.createElement("div"),e=A.style.cssText,d=a.style.cssText;c.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
A.style.cssText="font-size:100%!important;";a.style.cssText="font-size:100%!important;";a.appendChild(c);b=c.offsetWidth;a.removeChild(c);b=parseFloat(b,10);A.style.cssText=e;a.style.cssText=d}return b||16};c.calcListLength=function(a){if(!(a in q)||J.uT){var b=c.calcLength(e(a));q[a]=b?b:u.width}return q[a]};c.setRes=function(a){var b;if(a){b=c.parseSet(a);for(var e=0,d=b.length;d>e;e++)V(b[e],a.sizes)}return b};c.setRes.res=V;c.applySetCandidate=function(a,b){if(a.length){var e,d,f,h,g,m,k,q=b[c.ns],
l=c.DPR;g=q.curSrc||b[Q];if(!(h=q.curCan)){var n=g,s=a[0].set,r;h=(!s&&n&&(s=b[c.ns].sets,s=s&&s[s.length-1]),r=p(n,s),r&&(n=c.makeUrl(n),b[c.ns].curSrc=n,b[c.ns].curCan=r,r.res||V(r,r.set.sizes)),r)}if(d=h,d&&d.set===a[0].set&&(k=ba&&!b.complete&&d.res-0.1>l,k||(d.cached=!0,d.res>=l&&(f=d))),!f)for(a.sort(t),h=a.length,f=a[h-1],d=0;h>d;d++)if(e=a[d],e.res>=l){f=d-1;if(d=a[f]){if(k=k||g!==c.makeUrl(e.url)){k=a[f].res;d=e.res;r=l;var fa=a[f].cached,s=n=h=l=void 0;k=("saveData"===J.algorithm?2.7<k?
s=r+1:(h=d-r,l=Math.pow(k-0.6,1.5),n=h*l,fa&&(n+=0.1*l),s=k+n):s=1<r?Math.sqrt(k*d):k,s>r)}d=k}f=d?a[f]:e;break}f&&(m=c.makeUrl(f.url),q.curSrc=m,q.curCan=f,m!==g&&c.setSrc(b,f),c.setSize(b))}};c.setSrc=function(a,c){var b;a.src=c.url;"image/svg+xml"===c.set.type&&(b=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=b))};c.getSet=function(a){var b,d,e=!1,f=a[c.ns].sets;for(a=0;a<f.length&&!e;a++)if(b=f[a],b.srcset&&c.matchesMedia(b.media)&&(d=c.supportsType(b.type))){"pending"===
d&&(b=d);e=b;break}return e};c.parseSets=function(a,b,e){var f,h,g,k,q=b&&"PICTURE"===b.nodeName.toUpperCase(),n=a[c.ns];(n.src===d||e.src)&&(n.src=P.call(a,"src"),n.src?L.call(a,"data-pfsrc",n.src):v.call(a,"data-pfsrc"));(n.srcset===d||e.srcset||!c.supSrcset||a.srcset)&&(f=P.call(a,"srcset"),n.srcset=f,k=!0);n.sets=[];if(q){n.pic=!0;e=n.sets;var l,s,r,u=b.getElementsByTagName("source");b=0;for(l=u.length;l>b;b++)s=u[b],s[c.ns]=!0,(r=s.getAttribute("srcset"))&&e.push({srcset:r,media:s.getAttribute("media"),
type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}n.srcset?(h={srcset:n.srcset,sizes:P.call(a,"sizes")},n.sets.push(h),g=(m||n.src)&&K.test(n.srcset||""),g||!n.src||p(n.src,h)||h.has1x||(h.srcset+=", "+n.src,h.cands.push({url:n.src,d:1,set:h}))):n.src&&n.sets.push({srcset:n.src,sizes:null});n.curCan=null;n.curSrc=d;n.supported=!(q||h&&!c.supSrcset||g&&!c.supSizes);k&&c.supSrcset&&!n.supported&&(f?(L.call(a,"data-pfsrcset",f),a.srcset=""):v.call(a,"data-pfsrcset"));n.supported&&!n.srcset&&
(!n.src&&a.src||a.src!==c.makeUrl(n.src))&&(null===n.src?a.removeAttribute("src"):a.src=n.src);n.parsed=!0};c.fillImg=function(a,b){var e,d=b.reselect||b.reevaluate;a[c.ns]||(a[c.ns]={});e=a[c.ns];if(d||e.evaled!==f)if(e.parsed&&!b.reevaluate||c.parseSets(a,a.parentNode,b),e.supported)e.evaled=f;else{var h;e=c.getSet(a);d=!1;"pending"!==e&&(d=f,e&&(h=c.setRes(e),c.applySetCandidate(h,a)));a[c.ns].evaled=d}};c.setupRun=function(){if(!G||z||s!==a.devicePixelRatio)z=!1,s=a.devicePixelRatio,n={},q={},
c.DPR=s||1,u.width=Math.max(a.innerWidth||0,A.clientWidth),u.height=Math.max(a.innerHeight||0,A.clientHeight),u.vw=u.width/100,u.vh=u.height/100,f=[u.height,u.width,s].join("-"),u.em=c.getEmValue(),u.rem=u.em};c.supPicture?(D=I,c.fillImg=I):!function(){var b,e=a.attachEvent?/d$|^c/:/d$|^c|^i/,d=function(){var a=g.readyState||"";f=setTimeout(d,"loading"===a?200:999);g.body&&(c.fillImgs(),b=b||e.test(a),b&&clearTimeout(f))},f=setTimeout(d,g.body?9:99),h=A.clientHeight;R(a,"resize",function(a,c){var b,
e,d=function(){var f=new Date-e;c>f?b=setTimeout(d,c-f):(b=null,a())};return function(){e=new Date;b||(b=setTimeout(d,c))}}(function(){z=Math.max(a.innerWidth||0,A.clientWidth)!==u.width||A.clientHeight!==h;h=A.clientHeight;z&&c.fillImgs()},99));R(g,"readystatechange",d)}();c.picturefill=D;c.fillImgs=D;c.teardownRun=I;D._=c;for(a.picturefillCFG={pf:c,push:function(a){var b=a.shift();"function"==typeof c[b]?c[b].apply(c,a):(J[b]=a[0],G&&c.fillImgs({reselect:!0}))}};F&&F.length;)a.picturefillCFG.push(F.shift());
a.picturefill=D;"object"==typeof module&&"object"==typeof module.exports?module.exports=D:"function"==typeof define&&define.amd&&define("picturefill",function(){return D});c.supPicture||(y["image/webp"]=k("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))})(window,document);
!function(a,g){if(a.addEventListener){var d=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,l=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,k=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,t=/^picture$/i,p={getParent:function(e,b){var d=e,f=e.parentNode;return b&&"prev"!=b||!f||!t.test(f.nodeName||"")||(f=f.parentNode),"self"!=b&&(d="prev"==b?e.previousElementSibling:b&&(f.closest||a.jQuery)?(f.closest?f.closest(b):jQuery(f).closest(b)[0])||f:f),d},getFit:function(a){var b,d,f=getComputedStyle(a,null)||
{},c=f.content||f.fontFamily,h={fit:a._lazysizesParentFit||a.getAttribute("data-parent-fit")};return!h.fit&&c&&(b=c.match(l))&&(h.fit=b[1]),h.fit?(d=a._lazysizesParentContainer||a.getAttribute("data-parent-container"),!d&&c&&(b=c.match(k))&&(d=b[1]),h.parent=p.getParent(a,d)):h.fit=f.objectFit,h},getImageRatio:function(e){var b,h,f,c,g=(b=e.parentNode)&&t.test(b.nodeName||"")?b.querySelectorAll("source, img"):[e];for(b=0;b<g.length;b++)if(e=g[b],h=e.getAttribute(lazySizesConfig.srcsetAttr)||e.getAttribute("srcset")||
e.getAttribute("data-pfsrcset")||e.getAttribute("data-risrcset")||"",f=e.getAttribute("media"),f=lazySizesConfig.customMedia[e.getAttribute("data-media")||f]||f,h&&(!f||(a.matchMedia&&matchMedia(f)||{}).matches)){c=parseFloat(e.getAttribute("data-aspectratio"));!c&&h.match(d)&&(c="w"==RegExp.$2?RegExp.$1/RegExp.$3:RegExp.$3/RegExp.$1);break}return c},calculateSize:function(a,b){var d,h,c,g,k=this.getFit(a),l=k.fit,k=k.parent;return"width"==l||("contain"==l||"cover"==l)&&(c=this.getImageRatio(a))?
(k?b=k.clientWidth:k=a,g=b,"width"==l?g=b:(h=k.clientHeight,40<h&&(d=b/h)&&("cover"==l&&c>d||"contain"==l&&d>c)&&(g=c/d*b)),g):b}},h=function(){a.lazySizes&&(lazySizes.parentFit||(lazySizes.parentFit=p),a.removeEventListener("lazyunveilread",h,!0))};a.addEventListener("lazyunveilread",h,!0);g.addEventListener("lazybeforesizes",function(a){a.defaultPrevented||(a.detail.width=p.calculateSize(a.target,a.detail.width))});setTimeout(h)}}(window,document);
!function(){if(window.addEventListener){var a=/\s+/g,g=/\s*\|\s+|\s+\|\s*/g,d=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,l={contain:1,cover:1},k=function(a){var d;return d=(getComputedStyle(a)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!l[d]&&l[a.style.backgroundSize]&&(d=a.style.backgroundSize),d},t=function(h,e,b){var k=document.createElement("picture"),f=e.getAttribute(lazySizesConfig.sizesAttr),c=e.getAttribute("data-ratio"),l=e.getAttribute("data-optimumx");e._lazybgset&&e._lazybgset.parentNode==
e&&e.removeChild(e._lazybgset);Object.defineProperty(b,"_lazybgset",{value:e,writable:!0});Object.defineProperty(e,"_lazybgset",{value:k,writable:!0});h=h.replace(a," ").split(g);k.style.display="none";b.className=lazySizesConfig.lazyClass;1!=h.length||f||(f="auto");h.forEach(function(a){var b=document.createElement("source");f&&"auto"!=f&&b.setAttribute("sizes",f);a.match(d)&&(b.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&b.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||
RegExp.$2));k.appendChild(b)});f&&(b.setAttribute(lazySizesConfig.sizesAttr,f),e.removeAttribute(lazySizesConfig.sizesAttr),e.removeAttribute("sizes"));l&&b.setAttribute("data-optimumx",l);c&&b.setAttribute("data-ratio",c);k.appendChild(b);e.appendChild(k)},p=function(a){if(a.target._lazybgset){a=a.target;var d=a._lazybgset,b=a.currentSrc||a.src;b&&(d.style.backgroundImage="url("+b+")");a._lazybgsetLoading&&(lazySizes.fire(d,"_lazyloaded",{},!1,!0),delete a._lazybgsetLoading)}};addEventListener("lazybeforeunveil",
function(a){var d,b,g;!a.defaultPrevented&&(d=a.target.getAttribute("data-bgset"))&&(g=a.target,b=document.createElement("img"),b.alt="",b._lazybgsetLoading=!0,a.detail.firesLoad=!0,t(d,g,b),setTimeout(function(){lazySizes.loader.unveil(b);lazySizes.rAF(function(){lazySizes.fire(b,"_lazyloaded",{},!0,!0);b.complete&&p({target:b})})}))});document.addEventListener("load",p,!0);window.addEventListener("lazybeforesizes",function(a){if(a.target._lazybgset&&a.detail.dataAttr){var d=k(a.target._lazybgset);
l[d]&&(a.target._lazysizesParentFit=d,lazySizes.rAF(function(){a.target.setAttribute("data-parent-fit",d);a.target._lazysizesParentFit&&delete a.target._lazysizesParentFit}))}},!0);document.documentElement.addEventListener("lazybeforesizes",function(a){if(!a.defaultPrevented&&a.target._lazybgset){var d=a.detail;a=a.target._lazybgset;var b=lazySizes.gW(a,a.parentNode);a=((!a._lazysizesWidth||b>a._lazysizesWidth)&&(a._lazysizesWidth=b),a._lazysizesWidth);d.width=a}})}}();
!function(a){var g,d,l,k;a.addEventListener&&(g=a.lazySizes&&lazySizes.cfg||a.lazySizesConfig||{},d=g.lazyClass||"lazyload",l=function(){var g,k;if("string"==typeof d&&(d=document.getElementsByClassName(d)),a.lazySizes)for(g=0,k=d.length;k>g;g++)lazySizes.loader.unveil(d[g])},addEventListener("beforeprint",l,!1),!("onbeforeprint"in a)&&a.matchMedia&&(k=matchMedia("print"))&&k.addListener&&k.addListener(function(){k.matches&&l()}))}(window);
!function(a,g){var d=g(a,a.document);a.lazySizes=d;"object"==typeof module&&module.exports&&(module.exports=d)}(window,function(a,g){if(g.getElementsByClassName){var d,l=g.documentElement,k=a.Date,t=a.HTMLPictureElement,p=a.addEventListener,h=a.setTimeout,e=a.requestAnimationFrame||h,b=a.requestIdleCallback,m=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],c={},T=Array.prototype.forEach,I=function(a,b){return c[b]||(c[b]=RegExp("(\\s|^)"+b+"(\\s|$)")),c[b].test(a.getAttribute("class")||
"")&&c[b]},w=function(a,b){I(a,b)||a.setAttribute("class",(a.getAttribute("class")||"").trim()+" "+b)},P=function(a,b){var c;(c=I(a,b))&&a.setAttribute("class",(a.getAttribute("class")||"").replace(c," "))},L=function(a,b,c){var d=c?"addEventListener":"removeEventListener";c&&L(a,b);f.forEach(function(c){a[d](c,b)})},v=function(a,b,c,d,e){var f=g.createEvent("CustomEvent");return f.initCustomEvent(b,!d,!e,c||{}),a.dispatchEvent(f),f},A=function(b,c){var e;!t&&(e=a.picturefill||d.pf)?e({reevaluate:!0,
elements:[b]}):c&&c.src&&(b.src=c.src)},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},J=function(){var a,b,c=[],d=function(){var d;a=!0;for(b=!1;c.length;)d=c.shift(),d[0].apply(d[1],d[2]);a=!1};return function(f){a?f.apply(this,arguments):(c.push([f,this,arguments]),b||(b=!0,(g.hidden?h:e)(d)))}}(),F=function(a,b){return b?function(){J(a)}:function(){var b=this,c=arguments;J(function(){a.apply(b,c)})}},ba=function(a){var c,d=
0,e=999,f=function(){c=!1;d=k.now();a()},g=b?function(){b(f,{timeout:e});999!==e&&(e=999)}:F(function(){h(f)},!0);return function(a){var f;(a=!0===a)&&(e=66);c||(c=!0,f=125-(k.now()-d),0>f&&(f=0),a||9>f&&b?g():h(g,f))}},Q=function(a){var c,d,e=function(){c=null;a()},f=function(){var a=k.now()-d;99>a?h(f,99-a):(b||e)(e)};return function(){d=k.now();c||(c=h(f,99))}},K=function(){var b,c,e,f,r,t,Z,aa,N,y,z,M,R,O,S,V=/^img$/i,D=/^iframe$/i,B="onscroll"in a&&!/glebot/.test(navigator.userAgent),K=0,x=0,
E=-1,W=function(a){x--;a&&a.target&&L(a.target,W);(!a||0>x||!a.target)&&(x=0)},C=ba(function(){var a,f,h,k,m,p,t,u,v;if((r=d.loadMode)&&8>x&&(a=b.length)){f=0;E++;null==O&&("expand"in d||(d.expand=500<l.clientHeight?500:400),R=d.expand,O=R*d.expFactor);for(O>K&&1>x&&2<E&&2<r&&!g.hidden?(K=O,E=0):K=1<r&&1<E&&6>x?R:0;a>f;f++)if(b[f]&&!b[f]._lazyRace)if(B){(u=b[f].getAttribute("data-expand"))&&(p=1*u)||(p=K);v!==p&&(Z=innerWidth+p*S,aa=innerHeight+p,t=-1*p,v=p);h=b[f].getBoundingClientRect();var H;if(H=
(M=h.bottom)>=t)if(H=(N=h.top)<=aa)if(H=(z=h.right)>=t*S){if((h=(y=h.left)<=Z)&&(h=M||z||y||N)&&!(h=e&&3>x&&!u&&(3>r||4>E))){var G=b[f];h=p;H=void 0;var w=G,G="hidden"==(getComputedStyle(g.body,null)||{}).visibility||"hidden"!=(getComputedStyle(G,null)||{}).visibility;N-=h;M+=h;y-=h;for(z+=h;G&&(w=w.offsetParent)&&w!=g.body&&w!=l;)(G=0<((getComputedStyle(w,null)||{}).opacity||1))&&"visible"!=(getComputedStyle(w,null)||{}).overflow&&(H=w.getBoundingClientRect(),G=z>H.left&&y<H.right&&M>H.top-1&&N<
H.bottom+1);h=G}H=h}if(H){if(Y(b[f]),m=!0,9<x)break}else!m&&e&&!k&&4>x&&4>E&&2<r&&(c[0]||d.preloadAfterLoad)&&(c[0]||!u&&(M||z||y||N||"auto"!=b[f].getAttribute(d.sizesAttr)))&&(k=c[0]||b[f])}else Y(b[f]);k&&!m&&Y(k)}}),ca=function(a){w(a.target,d.loadedClass);P(a.target,d.loadingClass);L(a.target,ea)},ha=F(ca),ea=function(a){ha({target:a.target})},ia=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},ja=function(a){var b,c,e=a.getAttribute(d.srcsetAttr);(b=d.customMedia[a.getAttribute("data-media")||
a.getAttribute("media")])&&a.setAttribute("media",b);e&&a.setAttribute("srcset",e);b&&(c=a.parentNode,c.insertBefore(a.cloneNode(),a),c.removeChild(a))},ga=F(function(a,b,c,e,g){var k,l,n,p,r,q;(r=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?w(a,d.autosizesClass):a.setAttribute("sizes",e)),l=a.getAttribute(d.srcsetAttr),k=a.getAttribute(d.srcAttr),g&&(n=a.parentNode,p=n&&m.test(n.nodeName||"")),q=b.firesLoad||"src"in a&&(l||k||p),r={target:a},q&&(L(a,W,!0),clearTimeout(f),f=h(W,2500),w(a,d.loadingClass),
L(a,ea,!0)),p&&T.call(n.getElementsByTagName("source"),ja),l?a.setAttribute("srcset",l):k&&!p&&(D.test(a.nodeName)?ia(a,k):a.src=k),(l||p)&&A(a,{src:k}));J(function(){a._lazyRace&&delete a._lazyRace;P(a,d.lazyClass);q&&!a.complete||(q?W(r):x--,ca(r))})}),Y=function(a){var b,c=V.test(a.nodeName),f=c&&(a.getAttribute(d.sizesAttr)||a.getAttribute("sizes")),g="auto"==f;(!g&&e||!c||!a.src&&!a.srcset||a.complete||I(a,d.errorClass))&&(b=v(a,"lazyunveilread").detail,g&&U.updateElem(a,!0,a.offsetWidth),a._lazyRace=
!0,x++,ga(a,b,g,f,c))},X=function(){if(!e){if(999>k.now()-t)return void h(X,999);var a=Q(function(){d.loadMode=3;C()});e=!0;d.loadMode=3;C();p("scroll",function(){3==d.loadMode&&(d.loadMode=2);a()},!0)}};return{_:function(){t=k.now();b=g.getElementsByClassName(d.lazyClass);c=g.getElementsByClassName(d.lazyClass+" "+d.preloadClass);S=d.hFac;p("scroll",C,!0);p("resize",C,!0);a.MutationObserver?(new MutationObserver(C)).observe(l,{childList:!0,subtree:!0,attributes:!0}):(l.addEventListener("DOMNodeInserted",
C,!0),l.addEventListener("DOMAttrModified",C,!0),setInterval(C,999));p("hashchange",C,!0);"focus mouseover click load transitionend animationend webkitAnimationEnd".split(" ").forEach(function(a){g.addEventListener(a,C,!0)});/d$|^c/.test(g.readyState)?X():(p("load",X),g.addEventListener("DOMContentLoaded",C),h(X,2E4));C(0<b.length)},checkElems:C,unveil:Y}}(),U=function(){var a,b=F(function(a,b,c,d){var e,f;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),m.test(b.nodeName||""))for(b=b.getElementsByTagName("source"),
e=0,f=b.length;f>e;e++)b[e].setAttribute("sizes",d);c.detail.dataAttr||A(a,c.detail)}),c=function(a,c,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!c}),e.defaultPrevented||(d=e.detail.width,d&&d!==a._lazysizesWidth&&b(a,f,e,d)))},e=Q(function(){var b,d=a.length;if(d)for(b=0;d>b;b++)c(a[b])});return{_:function(){a=g.getElementsByClassName(d.autosizesClass);p("resize",e)},checkElems:e,updateElem:c}}(),z=function(){z.i||(z.i=!0,U._(),K._())};return function(){var b,
c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:0.8,loadMode:2};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b]);a.lazySizesConfig=d;h(function(){d.init&&z()})}(),{cfg:d,autoSizer:U,loader:K,init:z,uP:A,aC:w,rC:P,hC:I,fire:v,gW:y,rAF:J}}});