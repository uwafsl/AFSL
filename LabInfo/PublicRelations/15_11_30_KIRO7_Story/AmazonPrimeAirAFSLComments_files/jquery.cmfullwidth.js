/**
  * Plugin: jQuery Full-width Distribution, jquery.cmfullwidth.js
  * Copyright: Copyright (c) 2011 CMGdigital
  * Version: 1.0.0
  * Author: David A. Enete
  * Date: 15 April 2011
  * Description: jQuery Full-width Distribution plugin - spreads an element's children across the width of that parent container
  */

 (function($) {

    // public methods
    var methods = {
        init: function(options) {
            return this.each(function() {
                var $this = $(this); /* save subsequent queries */
                fwdata = $this.data('cmfullwidth'); /* assign the data from this element to a variable */
                if (!fwdata) { /* if we don't have that data, then we have not yet applied this plugin to this element */
                    opts = $.extend({}, $.fn.cmfullwidth.defaults, options); /* extend the default callback */
                    $this.data('cmfullwidth', opts); /* add the object's options to the cmfullwidth data value */

                    var $thisParent = $this.parent(); /* save subsequent queries */
                    var $children = $this.children(); /* save subsequent queries */
                    var childMarginComp = $children.first().outerWidth(true) - $children.first().innerWidth(); /* compensate for the difference between the inner width and the outerwidth; this is for IE browsers that do not report accurate widths despite returning true when tested for boxmodel */

                    var browserComp = (cmg.query.browser.msie) ? childMarginComp : 0; /* but if we're not using IE, don't worry about that compensation */

                    var parentWidth = $thisParent.innerWidth(); /* this is the element's parent container and represents the available space to use for distributing our child elements */
                    var cTotal = 0; /* total of the child element's inner widths */
                    var cOuterTotal = 0; /*total of the child element's outer widths */

                    $children.each(function() { /* iterate over the members of the children jquery object */
                        cOuterTotal += $(this).outerWidth(true); /* sum the outer widths */
                        cTotal += $(this).innerWidth(); /* sum the inner widths */
                    });
                    var cDiff = cOuterTotal - cTotal; /* the difference represents an accurate count of the child element's boxmodel styling: padding, margins, borders */
                    var remaining = parentWidth - cTotal - (cDiff * 2) - browserComp; /* get the remaining widths from the parent container once we remove all the "stuff" */
                    var equalMargins = remaining / $children.length; /* divide that remainder equally among the children */

                    var runningTotal = 0; /* total of the elements outer widths */
                    $children.each(function() { /* iterate over the children elements */
                        var newWidth = Math.floor($(this).outerWidth(true) + equalMargins); /* get the new width, which is the child element plus their share of the space remainder, round down to an interger */
                        $(this).width(newWidth); /* set the width of the element */
                        runningTotal += $(this).outerWidth(true); /* sum what has been handed out to the elements so far */
                    });
                    if(runningTotal > parentWidth){ /* if we ended up somehow giving out more than we had available */
                        $this.children(':last').width($this.children(':last').width() - (runningTotal - parentWidth + browserComp)); /* take the debt off the last element */
                    } else if(runningTotal < parentWidth){ /* if we ended up with a surplus */
                        $this.children(':last').width($this.children(':last').outerWidth(true) + (parentWidth - runningTotal - browserComp)); /* give the surplus to the last child */
                    }
                    opts.onDistribute.call(this); /* execute the callback */
                }
            });
        },
        destroy: function() { /* function to remove the plugin object assignment, but not the effects of the plugin */
            return this.each(function() {
                var $this = $(this); /* save subsequent queries */
                fwdata = $this.data('cmfullwidth'); /* assign the data from this element to a variable */
                if (fwdata) {/* if we have that data, then we have already applied this plugin to this element */
                    $this.removeData('cmfullwidth'); /* remove the object's cmfullwidth data value */
                }
            })
        }
    };

    // passing public method calls
    $.fn.cmfullwidth = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1)); /* call the methods that are available */
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments); /* no method called, so initialize */
        } else {
            console.log('Method ' + method + ' does not exist on jQuery.cmfullwidth'); /* bogus situation probably caused by calling a non existent method */
        }
    };

    // setting defaults for the plugin
    $.fn.cmfullwidth.defaults = {
        onDistribute: function() {} /* an empty callback function; could have also used cmg.query.noop() */
    };

})(cmg.query);