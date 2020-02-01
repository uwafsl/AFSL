// Add ECMA262-5 method binding if not supported natively
//
if (!('bind' in Function.prototype)) {
	Function.prototype.bind= function(context) {
		var args = [].slice.call(arguments, 1),
			self = this;

		return function() {
			return self.apply(context || this, args.concat([].slice.call(arguments)));
		};
	};
}

//check if IE8
isIE = false;
var rv = -1;
var ua = navigator.userAgent;
var re = new RegExp("Trident\/([0-9]{1,}[\.0-9]{0,})");
if (re.exec(ua) != null) {
	isIE = true;
	rv = parseFloat(RegExp.$1);
}
isIE8 = (rv == 4);
isIE9 = (rv == 5);
isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

// HTML5 checks
hasHtml5Video = !!document.createElement('video').canPlayType;
hasHtml5Audio = !!document.createElement('audio').canPlayType;
hasHtml5Media = hasHtml5Video && hasHtml5Audio;

function hasFlash() {
	return (typeof swfobject !== 'undefined' && swfobject.getFlashPlayerVersion().major !== 0);
}

function isIphone() {
	return (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i));
}

function isChrome() {
	var isChromium = window.chrome;
	var winNav = window.navigator;
	var vendorName = winNav.vendor;
	var isOpera = typeof window.opr !== "undefined";
	var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
	var isIOSChrome = winNav.userAgent.match("CriOS");

	if (isIOSChrome) {
		return true;
	} else if (
		isChromium !== null &&
		typeof isChromium !== "undefined" &&
		vendorName === "Google Inc." &&
		isOpera === false &&
		isIEedge === false
	) {
		return true;
	} else {
		return false;
	}
}

function isMobile(){
	var check = false;
	 (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	 return check;
}

function getOS() {
	var OSName = "unknown";

	if (navigator.appVersion.indexOf("Win") != -1) {
		OSName = "Windows";
	} else if (navigator.appVersion.indexOf("Mac") != -1) {
		OSName = "MacOS";
	} else if (navigator.appVersion.indexOf("X11") != -1) {
		OSName = "UNIX";
	} else if (navigator.appVersion.indexOf("Linux") != -1) {
		OSName = "Linux";
	}

	return OSName;
}

// Add ECMA262-5 string trim if not supported natively
//
if (!('trim' in String.prototype)) {
	String.prototype.trim= function() {
		return this.replace(/^\s+/, '').replace(/\s+$/, '');
	};
}

// Add ECMA262-5 Array methods if not supported natively
//
if (!('indexOf' in Array.prototype)) {
	Array.prototype.indexOf= function(find, i /*opt*/) {
		if (i===undefined) i= 0;
		if (i<0) i+= this.length;
		if (i<0) i= 0;
		for (var n= this.length; i<n; i++)
			if (i in this && this[i]===find)
				return i;
		return -1;
	};
}
if (!('lastIndexOf' in Array.prototype)) {
	Array.prototype.lastIndexOf= function(find, i /*opt*/) {
		if (i===undefined) i= this.length-1;
		if (i<0) i+= this.length;
		if (i>this.length-1) i= this.length-1;
		for (i++; i-->0;) /* i++ because from-argument is sadly inclusive */
			if (i in this && this[i]===find)
				return i;
		return -1;
	};
}
if (!('forEach' in Array.prototype)) {
	Array.prototype.forEach= function(action, that /*opt*/) {
		for (var i= 0, n= this.length; i<n; i++)
			if (i in this)
				action.call(that, this[i], i, this);
	};
}
if (!('map' in Array.prototype)) {
	Array.prototype.map= function(mapper, that /*opt*/) {
		var other= new Array(this.length);
		for (var i= 0, n= this.length; i<n; i++)
			if (i in this)
				other[i]= mapper.call(that, this[i], i, this);
		return other;
	};
}
if (!('filter' in Array.prototype)) {
	Array.prototype.filter= function(filter, that /*opt*/) {
		var other= [], v;
		for (var i=0, n= this.length; i<n; i++)
			if (i in this && filter.call(that, v= this[i], i, this))
				other.push(v);
		return other;
	};
}
if (!('every' in Array.prototype)) {
	Array.prototype.every= function(tester, that /*opt*/) {
		for (var i= 0, n= this.length; i<n; i++)
			if (i in this && !tester.call(that, this[i], i, this))
				return false;
		return true;
	};
}
if (!('some' in Array.prototype)) {
	Array.prototype.some= function(tester, that /*opt*/) {
		for (var i= 0, n= this.length; i<n; i++)
			if (i in this && tester.call(that, this[i], i, this))
				return true;
		return false;
	};
}

function encodeParams(params) {
	//stolen from app/js/application/utils.js
	var queryArray = [];
	if(typeof params == 'object') {
		for(var k in params) {
			queryArray.push(k + '=' + encodeURIComponent(params[k]));
		}
	}
	return queryArray.join('&');
}


function can(object, method){
	return typeof(object[method]) == 'function';
}

function capitalize(str){
	return str.charAt(0).toUpperCase() + str.slice(1)
}

function formatNumber(number){
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function cm_date_to_timestamp(date) {
	var utcSeconds = (date.getTime() - 60000 * date.getTimezoneOffset());
	date = new Date(utcSeconds);
	return convert_date_obj_to_timestamp_string(date);
}

function normalize_date_to_utc(date) {
	date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
	return convert_date_obj_to_timestamp_string(date);
}

function convert_date_obj_to_timestamp_string(date) {
	//date = 'Tue Oct 29 2013 16:00:00 GMT-0400 (EDT)'
	var year = date.getFullYear() + '',
		month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
		day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate(),
		hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours(),
		minute = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes(),
		second = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
	//return '20131029160000'
	return year + month + day + hour + minute + second;
}

function convert_timestamp_string_to_date_obj(timestamp_string) {
	//API uses dates in the format timestamp_string='20131029160000'
	//convert that to a JS Date 'Tue Oct 29 2013 16:00:00 GMT-0400 (EDT)'
	return new Date(timestamp_string.substring(4,6) + '/' + timestamp_string.substring(6,8) + '/' + timestamp_string.substring(0,4) + ' ' + timestamp_string.substring(8,10) + ':' + timestamp_string.substring(10,12));
}
// should replace above method
function utcTimestampToDate(timestamp) {
	var isoFormat = timestamp.substring(0,4) + '-' + timestamp.substring(4,6) + '-' + timestamp.substring(6,8) + 'T' + timestamp.substring(8,10) + ':' + timestamp.substring(10,12) + ':00Z';

	dateObj = new Date(isoFormat);

	if(isNaN(dateObj)){
		return Date.fromISO(isoFormat);
	}
	return new Date(isoFormat);
}

function addMinutesToDate(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

// convert iso format to mm/dd/yyyy
function isoToFormattedDate(timestamp) {
	var date = new Date(timestamp);
	return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
}

// IE8 can't convert ISO timestamp to a date object, so use this shim
Date.fromISO= (function(){
	var diso= Date.parse('2011-04-26T13:16:50Z');
	if(diso=== 1303823810000) return function(s){
		return new Date(Date.parse(s));
	}
	else return function(s){
		var day, tz,
		rx= /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/,
		p= rx.exec(s) || [];
		if(p[1]){
			day= p[1].split(/\D/).map(function(itm){
				return parseInt(itm, 10) || 0;
			});
			day[1]-= 1;
			day= new Date(Date.UTC.apply(Date, day));
			if(!day.getDate()) return NaN;
			if(p[5]){
				tz= parseInt(p[5], 10)*60;
				if(p[6]) tz += parseInt(p[6], 10);
				if(p[4]== "+") tz*= -1;
				if(tz) day.setUTCMinutes(day.getUTCMinutes()+ tz);
			}
			return day;
		}
		return NaN;
	}
})()

function midnightOfDaysAgo(days) {
	var d = new Date();
	if(days == 1) {
		days = 0;
	}
	d.setDate(d.getDate() - parseInt(days));
	d.setHours(0);
	d.setMinutes(0);
	d.setSeconds(0);
	d.setMilliseconds(0);
	return d;
}
// both dates should be date objects
function daysBetween(date1, date2) {
	var oneDay = 24*60*60*1000;
	return Math.round(Math.abs((date1.getTime() - date2.getTime())/oneDay));
}
function formatDate(date) {
	var addZero = function(num) {
			return num < 10 ? '0' + num : num;
		},
		year = date.getFullYear(),
		month = addZero(date.getMonth() + 1),
		day = addZero(date.getDate()),
		hour = addZero(date.getHours()),
		minute = addZero(date.getMinutes()),
		second = addZero(date.getSeconds());

	return '' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}
function convert_ampm_to_military(str) {
	var addZero = function(num) {
			return num < 10 ? '0' + num : num;
		},
		hours = 0,
		minutes = 0,
		seconds = 0;

	hoursMinutes = str.replace(/...$/, '').split(':');
	hours = parseInt(hoursMinutes[0]);
	minutes = hoursMinutes[1];
	if(str.indexOf('PM') > -1 && hours < 12) {
		hours += 12;
	}
	else if(str.indexOf('AM') > -1 && hours == 12) {
		hours = 0;
	}
	return '' + addZero(hours) + ':' + minutes + ':' + addZero(seconds);
}
function dateToUtcTimestamp(date) {
	var addZero = function(num) {
			return num < 10 ? '0' + num : num;
		},
		year = date.getUTCFullYear(),
		month = addZero(date.getUTCMonth() + 1),
		day = addZero(date.getUTCDate()),
		hour = addZero(date.getUTCHours()),
		minute = addZero(date.getUTCMinutes()),
		second = addZero(date.getUTCSeconds());

	return '' + year + month + day + hour + minute + second;
}
function add_minutes(date, minutes) {
	return new Date(date.getTime() + minutes*60000);
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0)
			return c.substring(nameEQ.length,c.length);
	}
	return null;
}

Pacifier = (function () {
	var Pacifier = function () {
			var index = 0,
				total = 13,
				INTERVAL = 20,
				TIME_INTERVAL = 70;

			this.$el = $('<div class="loading-pacifier-container"/>');
			this.$pacifier = $('<div class="loading-pacifier"/>');
			if(!isIE8) this.$pacifier.appendTo(this.$el)


			this.$pacifier.css({
				backgroundImage: 'url(../../layout/img/pacifier_small.png)',
				height: '20px',
				width: '20px'
			});

			var shift = (function (self) {
				var shift = function () {
					index++;

					if (index == total) {
						index = 0;
					}

					//
					// Firefox doesn't support background-position-y so we need to split
					// background-position's position into a 2-member array, replace the
					// second member with the new y position value and join the array
					// back into a string which we then assign to the element's single
					// background-position style value.
					//
					var $pacifier = self.$pacifier,
						pos = isIE8 ? 0 : $pacifier.css("background-position").split(" "),
						newpos;

					pos[1] = (index * -INTERVAL) + "px";
					newpos = isIE8 ? 0 : pos.join(" ");

					$pacifier.css("background-position", newpos);

				};

				return shift;
			})(this);

			setInterval(shift, TIME_INTERVAL);
		},
		index = 0,
		total = 13;

	return Pacifier;
})();


function parseUrl(url) {
	var parser = document.createElement('a'),
		searchObject = {},
		queries, split, i;
	// Let the browser do the work
	parser.href = url;
	// Convert query string to object
	queries = parser.search.replace(/^\?/, '').split('&');
	for( i = 0; i < queries.length; i++ ) {
		split = queries[i].split('=');
		searchObject[split[0]] = split[1];
	}
	return {
		href: parser.href,
		protocol: parser.protocol,
		host: parser.host,
		hostname: parser.hostname,
		port: parser.port,
		pathname: parser.pathname,
		search: parser.search,
		searchObject: searchObject,
		hash: parser.hash
	};
}

function hasLocalStorage() {
	if (typeof localStorage === 'object') {
		try {
			localStorage.setItem('localStorage', 1);
			localStorage.removeItem('localStorage');
			return true;
		} catch (e) {
			// These will prevent future calls to .setItem from breaking.
			// Storage.prototype._setItem = Storage.prototype.setItem;
			// Storage.prototype.setItem = function() {};
			return false;
		}
	}

	return false;
}

function parentWindow() {
	var w = window,
		referrer_href = parseUrl(w.document.referrer)['host'],
		this_href = parseUrl(w.location.href)['host'];

	/*
	safari will break on the 'w.parent' statement below,
	so check to see if the iframe's referrer (the parent window) is the same domain as the iframe.
	window.document.referrer can be accessed safely even if it's cross-domain.
	*/
	while(referrer_href == this_href && w != w.parent) {
		var tmp = w;
		try {
			w = w.parent;
			referrer_href = parseUrl(w.document.referrer)['host'];
			this_href = parseUrl(w.location.href)['host'];
			w.location.href;
		}
		catch(e) {
			// do nothing.  Tried to Cross Domains.
			w = tmp;
			break;
		}
	}
	return w;
}

var confirm = function(arg) {
	var options = {
			confirmText: 'OK',
			cancelText: 'Cancel'
		},
		button = null,
		$ = parentWindow.$ || parentWindow().$,
		div = $('<div>'),
		$confirmed = El('div', {
			text: 'Deleted',
			addClass: 'confirmDeletion'
		}).click(function(){
			$(this).dialog('destroy');
			!options.noRemove && div.remove();
		}),
		$check = El('span').addClass('fa fa-check checkMarkMargin').prependTo($confirmed),
		copyInput = $('<input type="text" class="copy-field" />'),
		options = $.extend(options, arg),
		buttons = [{
				text: options.confirmText,
				click: function () {
					if(!options.copyText) {
						$('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only').hide();
						if(options.message.indexOf('Delete ') != -1){
							$('.ui-dialog-buttonset').append($confirmed.fadeIn(500));
							typeof options.callback == 'function' && options.callback();
							setTimeout(function() {$(this).dialog('destroy')}, 1500);
							setTimeout(function() {!options.noRemove && div.remove()}, 1500);
						}
						else{
							typeof options.callback == 'function' && options.callback();
							$(this).dialog('destroy');
							!options.noRemove && div.remove();
						}
					}
					else {
						button.text('Copied!');
						copyInput.select();
						document.execCommand("copy");
						setTimeout(function() {
							div.dialog('close');
						}, 3000);
					}
				}
			}, {
				text: options.cancelText,
				click: function() {
					$(this).dialog('destroy');
					div.remove();
					if(typeof options.onCancel == 'function') {
						options.onCancel();
					}
				},
				id: 'ui-cancel'
			}];

	if(arg.alert || arg.noCancel) {
		buttons.pop();
	}
	div.append($('<div class="title"></div>').text(options.title));
	if(options.copyText != null) {
		copyInput.val(options.copyText);
		div.append(copyInput);
	}
	div.append('<div class="message">' + options.message + '</div>')
		.css('zIndex', 3000000)
		.dialog({
			dialogClass: 'critical-dialog ' + (arg.className ? arg.className : ''),
			autoOpen: true,
			modal: true,
			draggable: false,
			resizable: false,
			buttons: buttons
		});
	$('.critical-dialog.ui-dialog .ui-dialog-titlebar-close').addClass('fa fa-close');

	if(options.copyText != null) {
		button = div.dialog('widget').find('.ui-dialog-buttonset button');
		button.attr('data-clipboard-text', options.copyText).addClass('copy-button');
	}

	if(options.css && options.css.width) {
		div.dialog('option', 'width', options.css.width);
	}

	if(options.openLink){
		var buttonSet = div.dialog('widget').find('.ui-dialog-buttonset'),
			$text = El('span', {
				text: 'Open Link',
				attr: {
					'class': 'ui-button-text'
				}
			}).appendTo(El('button', {
				attr: {
					'type': 'button',
					'class': 'open-link ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only'
				}
			}).appendTo(buttonSet));
		$('.open-link.ui-button').click(function(){
			var win=window.open(options.openLink, '_blank');
  			win.focus();
			$(this).dialog('destroy');
			div.remove();
		});
	}

};
var copyPopup = function(options) {
	options = options || {};
	options.copyText = options.copyText || '';
	options.css = options.css || {
		width: 390
	};
	options.noRemove = true;
	options.confirmText = options.confirmText || 'Copy Link';
	options.className = (options.className ? options.className : '') + ' critical-copy';
	confirm(options);
};

function alert(message,title) {
	confirm({
		message: message,
		title: title,
		alert: true
	});
}

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();


/*
	This is used to sort an array of objects by two properties.
	For example:
	arrayOfObjects.sort(sort_by('data_source_id', {name: 'sentiment', primer: parseInt}));
	Would sort by the sentiment property, and then re-sort by data_source_id.
	Stack overflow link:
	http://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields
*/
var sort_by = function() {
	var fields = [].slice.call(arguments),
		n_fields = fields.length;

	return function(A, B) {
		var a, b, field, key, primer, reverse, result;
		for (var i = 0, l = n_fields; i < l; i++) {
			result = 0;
			field = fields[i];

			key = typeof field === 'string' ? field : field.name;

			a = A[key];
			b = B[key];

			if (typeof field.primer !== 'undefined') {
				a = field.primer(a);
				b = field.primer(b);
			}

			reverse = (field.reverse) ? -1 : 1;

			if (a < b) result = reverse * -1;
			if (a > b) result = reverse * 1;
			if (result !== 0) break;
		}
		return result;
	}
}

function getUrlParameter(sParam)
{
	var parentWindow = Utils.parentWindow();
    // var sPageURL = window.top.location.hash.substring(2); // trim first 2 chars
	var sPageURL = parentWindow.location.hash.substring(2);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

var decodeEntities = (function() {
    // this prevents any overhead from creating the object each time
    var element = document.createElement('div');

    // regular expression matching HTML entities
    var entity = /&(?:#x[a-f0-9]+|#[0-9]+|[a-z0-9]+);?/ig;

    return function decodeHTMLEntities(str) {
        // find and replace all the html entities
        str = str.replace(entity, function(m) {
            element.innerHTML = m;
            return element.textContent;
        });

        // reset the value
        element.textContent = '';

        return str;
    }
})();
