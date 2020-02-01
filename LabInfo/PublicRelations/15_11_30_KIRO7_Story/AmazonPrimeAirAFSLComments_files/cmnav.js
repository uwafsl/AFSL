cmg.query(document).ready(function(){
    /* set drop-down nav listeners, etc. */
    dropNav();
});

function dropNav(){
    /* drop-down sub-navigation */
    var pageWidth = cmg.query(document).width(); /* get the document window width */
    cmg.query('.cmSiteNav li').hover( /* hover listener */
        function() {
            var $this = cmg.query(this); /* save subsequent queries */
            var $childMenu = $this.children('.cmSubNav:first'); /* save subsequent queries */

            if($this.hasClass('cmPrimaryNavMenu')){ /* if this is a primary nav element */
                $this.addClass('cmPrimaryNavHover'); /* give the primary nav the hover class */
                if($this.find('.cmSubNav').length && typeof $this.data('navdir') == "undefined"){ /* if we have sub-navs and haven't set navdir */
                    var $lastSub = $this.find('.cmSubNav').show().last(); /* show all sub-nav children and set var to the last one */
                    $this.data({navdir:($lastSub.offset().left + $lastSub.outerWidth() > pageWidth) ? 'left' : 'right'}); /* set navdir based on the right side of the last sub-nav's relation to the width of the document window */
                    $this.find('.cmSubNav').hide(); /* hide all the sub-nav children, somebody's coming! */
                }
            }
            $childMenu.show(); /* show the sub-nav element */
            if($this.parents('li.cmPrimaryNavMenu').data('navdir') == 'left'){ /* all children of this stack will go left */
                $childMenu.css('margin-left',-$childMenu.outerWidth());
            }
        },
        function() { /* blur listener */
            var $this = cmg.query(this); /* save subsequent queries */
            $this.children('.cmSubNav:first').hide(); /* hide sub-nav child */
            $this.removeClass('cmPrimaryNavHover'); /* only applies to blur of primary nav, but it is okay to remove from any */
        }
    );
}
