var Overlay = (function() {
	var Overlay = function(opts) {
			var $parent = opts.$parent;
			if( !$parent ) {
				try {
					parent.location.href;
					$parent = parent.document;
				}
				catch(e) {
					$parent = document;
				}
			}
			$parent = $($parent);
	    $overlayAdd = opts.$overlayAdd ? $(opts.$overlayAdd) : $parent;

	    if (!opts.name)
	    	opts.name = "overlay";

	    var $wrap = El('div', {attr: { id: opts.name + 'Wrap'},
	    	css: {
	    		zIndex: (opts.zIndex*10 || 1000),
	    		width: '100%',
	    		position: opts.position || 'fixed',
	    		top: (opts.top !== undefined ? opts.top : '50') + 'px',
	    		textAlign: 'center'
	    	}}).appendTo($parent.find('body'));

	    //add the iframe id src exists
	    if(opts.src) {
	    	$iframe = El('iframe', {attr: {
	    		src: opts.src,
	    		width: opts.width + 'px',
	    		height: opts.height + 'px',
	    		marginWidth: '0',
				marginHeight: '0',
				onload: opts.onload,
				margin: '0',
	    		name: 'overlayIframe'
	    	}, css: {
				backgroundColor: opts.backgroundColor || 'white',
				borderTopWidth: '0px',
				borderTopStyle: 'none',
				borderLeftWidth: '0px',
				borderLeftStyle: 'none',
				borderRightWidth: '0px',
				borderRightStyle: 'none',
				borderBottomWidth: '0px',
				borderBottomStyle: 'none'

	    	}});

	    	if(opts.id)
	    		$iframe.attr('id', opts.id);

	    	if(!opts.backgroundColor) {
	    		addRoundBorders($iframe,
	    						opts.width,
	    						opts.height,
	    						opts.addCloseButton,
	    						opts.name,
	    						opts.closeFunction).appendTo($wrap);
	    	}
	    	else {
	    		$iframe.appendTo($wrap);
	    	}
	    }

	    var $overlay = El('div', {
	    	attr: { id: opts.name },
		    css: {
		    	backgroundColor: 'black',
		    	opacity: .75,
		    	width: '100%',
		    	height: '100%',
		    	position: 'fixed',
		    	top: '0px',
		    	left: '0px',
		    	zIndex: (opts.zIndex * 10 - 1 || 999),
		    	textAlign: 'center'
		    }}).click(function() {
		    	//$(this).remove();
		    	//$wrap.remove();
		    }).appendTo($overlayAdd.find('body'));

	    if(opts.$el) {
	    	$divWrap  = El('div');
	    	renderPopupCloseButton(opts.name, $overlay, $wrap).appendTo($divWrap);

	    	$divWrap.css({
	    		backgroundColor: 'white',
	    		width: opts.width + 'px',
	    		margin: '0 auto',
	    		zIndex: ((opts.zIndex*10 || 999) + 1)
	    	});

	    	if(opts.overlayId) {
	    		$divWrap.attr('id', opts.overlayId);
	    	}

	    	opts.$el.appendTo($divWrap);

	    	addRoundBorders($divWrap.css({float: 'left'}), opts.width, opts.height - 60, opts.addCloseButton, opts.name).css({
	    		zIndex: ((opts.zIndex*10 || 999) + 1)
	    	}).appendTo($wrap);

	    }



	    //if a closing element is passed, bind it to an overlay close here.
	    if(opts.$closers) {
	    	$.each(opts.$closers, function(i, $closer) {
		    	$closer.click(function() {
		    		$overlay.remove();
		    		$wrap.remove();
		    	});
		    })
	    }

		return $overlay;
	};

	return function(opts){
		return new Overlay(opts);
	};
})();

//create a parent div, place in here, then append this parent to the provided parent
function addRoundBorders($contentDiv, width, height, addCloseButton, name, closeFunction) {
	var $outerDiv = El('div');

	if(addCloseButton)
		height = height + 20;

	$topFrame = El('div', {css: {
		width: (width + 60) + 'px',
		margin: '0 auto',
		backgroundColor: 'white'
	}}).appendTo($outerDiv);

	$midFrame = El('div', {css: {width: (width + 60) + 'px', margin: '0 auto'}}).appendTo($outerDiv);

	if(addCloseButton) {
		var closePopup = function() {
			$(window.parent.document).find("#" + name).remove();
			$(window.parent.document).find("#" + name + "Wrap").remove();


			if(closeFunction)
				closeFunction();
		};

		El('div', {
			css: {
				width: width,
				height: '16px',
				margin: '0 auto',
				backgroundColor: 'white',
				position: 'relative',
				top: '30px',
				zIndex: 100010
			}
		},
			El('a', {text: 'CLOSE', css: {
				cursor: 'pointer',
				color: '#696969',
				fontWeight: 'bold',
				size: '1em',
				height: '10px',
				position: 'relative',
				top: '-34px',
				left: '160px'
			}}).click(closePopup),
			El('div', {
				css: {
					cursor: 'pointer',
					left: '385px',
					top: '-46px',
					position: 'relative'
				},
				addClass: 'icon-close'
			}).click(closePopup)
		).appendTo($midFrame);

		$contentDiv.css({position: 'relative', top: '16px'});
	}

	$contentDiv.css({
		backgroundColor: 'white',
		padding: '20px',
		borderRadius: '0px',
		marginTop: '10px'
	}).appendTo($midFrame);

	$contentDiv.bind('change', function(){
		var height = $contentDiv.height();
	});

	return $outerDiv;
}

function renderPopupCloseButton(name, overlay, wrap) {
	if (!name) name = "overlay";

	var closePopup = function() {
		if (overlay) overlay.remove();
		if (wrap) wrap.remove();
		$(window.parent.document).find("#" + name).remove();
		$(window.parent.document).find("#" + name + "Wrap").remove();
	};

	return El('div',{
		css: {
			zIndex: 1009
		}, html: '', attr: {id: 'generic_popup_close_div_' + name}},

			El('div', {
				css: {
					cursor: 'pointer',
					position: 'relative',
					float: 'right',
					zIndex: 1001
				},
				addClass: 'icon-close'
			}).click(closePopup)
	);


}
