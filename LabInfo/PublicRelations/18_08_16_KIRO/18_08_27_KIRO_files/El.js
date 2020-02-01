var El = (function() {
	var El = function(tag, attribs){
	    var e = $(document.createElement(tag));
	    for (k in attribs) e[k](attribs[k])
	    for (var i = 2; i < arguments.length; ++i) e.append(arguments[i])
	    e.draw = function() { /*document.querySelector( arguments.length ? arguments[0] : 'body').appendChild(this)*/ $('body').append(this); }
	    return e;
	    };
	    
	return function(tag, attribs){
		return El.apply(this, arguments);
	};
})();