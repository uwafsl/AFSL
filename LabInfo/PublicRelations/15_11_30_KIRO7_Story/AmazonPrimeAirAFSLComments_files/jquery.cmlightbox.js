cmlightbox = cmg.query.extend({}, cmg.query.ui.dialog.prototype, {
    _init: function(){
        var $element = cmg.query(this.element);
        var extendedStructure = '<div class="cmLboxHeader cmClearfix"><h5 class="cmLboxTitle"><a href="' + $element.data('detail_url') + '" class="cmLboxDetailLink">' + $element.data('title') + '</a></h5><span class="cmLboxClose sprite iconClose"><a href="javascript:void(0);">CLOSE</a></span></div><div class="cmLboxBody cmClearfix"><div class="cmLboxContent"><a href="javascript:void(0);" class="cmLboxNavPrev" title="Previous Image"><span class="cmLboxPrevIcon">&nbsp;</span></a><a class="cmLboxDetailLink" href="' + $element.data('detail_url') + '"><img alt="' + $element.data('title') + '" class="cmLboxImage" src="" title="' + $element.data('caption') + '" /></a><a href="javascript:void(0);" class="cmLboxNavNext" title="Next Image"><span class="cmLboxNextIcon">&nbsp;</span></a></div><div class="cmLboxPreload"><img src="' + cmg.mediaurl + 'images/loading_150x150.gif' + '"></a></div></div><div class="cmLboxFooter cmClearfix"><p><span class="cmLboxCredit"><span class="cmLboxCreditPhotographer">' + $element.data('credit_photographer') + '</span><span class="cmLboxCreditSep"> / </span><a href="' + $element.data('source_url') + '" class="cmLboxCreditSource">' + $element.data('credit_source') + '</a></span></p><p class="cmLboxBuyLink sprite iconBuy"><a>Buy this photo</a></p><p class="cmLboxCaption cmClearfix"><span class="cmLboxCapText">' + $element.data('caption') + '</span> <span class="cmLboxCapMore"><a href="' + $element.data('detail_url') + '" class="cmLboxDetailLink">More Info</a></span></p><p class="cmLboxComments">' + $element.data('comment_block') + '</p></div>';
        $element.html(extendedStructure);
        cmg.query.ui.dialog.prototype._init.call(this);
        $element.find('.cmLboxPreload').show();
        if(num_photos == 1){
            $element.find('.cmLboxNavNext, .cmLboxNavPrev').hide();
        } else {
            $element.data('is_next', $element.data('next_ptr'));
            $element.data('is_prev', $element.data('prev_ptr'));
        }
        $element.find('.cmLboxClose').click(function(){
            $element.cmlightbox('close');
        });
        $element.find('.cmLboxNavNext').bind('click', function(){
            $element.cmlightbox('cycle',$element.data('is_next'));
            return false;
        });
        $element.find('.cmLboxNavPrev').bind('click', function(){
            $element.cmlightbox('cycle',$element.data('is_prev'));
            return false;
        });
    },
    destroy: function(){
        cmg.query.ui.dialog.prototype.destroy.call(this);
    },
    open: function(){
        var $element =  cmg.query(this.element);
        if (!flipper.is_active('DTMmetrics_Enable')) {
            fire_omniture_event(cmg.s_coxnews, 'event40', 'LightBox Photo');
        }
        cmg.query.ui.dialog.prototype.open.call(this);
        if($element.data('photo_url') != $element.find('img.cmLboxImage').attr('src')){
            $element.find('.cmLboxContent').hide();
            $element.find('.cmLboxPreload').show();
            $element.find('img.cmLboxImage').load(function(){
                $element.find('.cmLboxTitle a').text($element.data('title'));
                $element.find('.cmLboxCapText').text($element.data('caption'));
                if($element.data('get_mycapture_url') === "") {
                    $element.find('.cmLboxBuyLink').hide();
                } else {
                    $element.find('.cmLboxBuyLink').show();
                    $element.find('.cmLboxBuyLink a').attr({'href': $element.data('get_mycapture_url')});
                    if (!flipper.is_active('DTMmetrics_Enable')) {
                        $element.find('.cmLboxBuyLink a').attr({onClick: "cmg.s_coxnews.linkTrackVars='events';cmg.s_coxnews.linkTrackEvents='event11';cmg.s_coxnews.events='event11';cmg.s_coxnews.tl(this,'o','Buy this photo');"});
                    }
                }
                $element.find('.cmLboxCreditPhotographer').text($element.data('credit_photographer'));
                var cs = $element.find('.cmLboxCreditSource');
                if ($element.data('source_url')) {
                    cs.replaceWith(
                        cmg.query('<a/>', {
                            'href': $element.data('source_url'),
                            'class': cs.attr('class'),
                            'target': '_tab',
                            'rel': 'nofollow'
                        })
                    );
                } else {
                    cs.replaceWith(
                        cmg.query('<span/>', {'class': cs.attr('class')})
                    );
                }
                cs = $element.find('.cmLboxCreditSource');
                cs.text($element.data('credit_source') || '');
                if (!!$element.data('credit_photographer') && !!$element.data('credit_source')) {
                    $element.find('.cmLboxCreditSep').show();
                } else {
                    $element.find('.cmLboxCreditSep').hide();
                }

                $element.find('a.cmLboxDetailLink').attr('href',$element.data('detail_url'));
                $element.find('.cmLboxComments').html($element.data('comment_block'));
                $element.find('.cmLboxPreload').hide();
                $element.find('.cmLboxContent').show();
                if(num_photos > 1){
                    $element.find('.cmLboxNavNext, .cmLboxNavPrev').height($element.find('img.cmLboxImage').height());
                }
                $element.dialog( "option", "width", $element.data('photo_width') + 50 ).dialog( "option", "position", "center" );
                $element.data('is_next',$element.data('next_ptr'));
                $element.data('is_prev',$element.data('prev_ptr'));
            }).attr('src',$element.data('photo_url'));
        }
        cmg.query('.ui-widget-overlay').bind('click', function(){
            $element.cmlightbox('close');
            return false;
        });
        cmg.query(document).bind('keydown',function(e){
            if(num_photos > 1){
                switch (e.which) {
                    case 37:
                        $element.cmlightbox('cycle',$element.data('is_prev'));
                    break;
                    case 39:
                        $element.cmlightbox('cycle',$element.data('is_next'));
                    break;
                }
                return false;
            }
        });
    },
    cycle: function(value){
        var newNodeKey = related_photos_ids[value];
        var $element =  cmg.query(this.element);
        var newNode = related_photos[newNodeKey];
        $element.find('.cmLboxPreload').show();
        $element.find('.cmLboxContent').hide();
        $element.find('img.cmLboxImage').load(function(){
            $element.find('.cmLboxTitle a').text(newNode['title']);
            if(newNode['get_mycapture_url'] === "") {
                $element.find('.cmLboxBuyLink').hide();
            } else {
                $element.find('.cmLboxBuyLink').show();
                $element.find('.cmLboxBuyLink a').attr({'href': $element.data('get_mycapture_url')});
                if (!flipper.is_active('DTMmetrics_Enable')) {
                    $element.find('.cmLboxBuyLink a').attr({
                        onClick: "cmg.s_coxnews.linkTrackVars='events';cmg.s_coxnews.linkTrackEvents='event11';cmg.s_coxnews.events='event11';cmg.s_coxnews.tl(this,'o','Buy this photo');"
                    });
                }
            };
            $element.find('.cmLboxCapText').text(newNode['caption']);
            $element.find('.cmLboxCredit span').text(newNode['credit']);
            $element.find('a.cmLboxDetailLink').attr('href',newNode['detail_url']);
            $element.find('.cmLboxComments').html(newNode['comment_block']);
            $element.find('.cmLboxPreload').hide();
            $element.find('.cmLboxContent').show();
            $element.dialog( "option", "width", newNode['photo_width'] + 50 ).dialog( "option", "position", "center" );
            $element.data('is_next',newNode['next_ptr']);
            $element.data('is_prev',newNode['prev_ptr']);
        }).attr({src: newNode['photo_url'],alt: newNode['title'], title: newNode['caption']});
    },
    close: function(){
        cmg.query('.ui-widget-overlay').unbind('click');
        cmg.query(document).unbind('keydown');
        cmg.query.ui.dialog.prototype.close.call(this);
    },
    options: {
        width: 'auto',
        height: 'auto',
        modal: true,
        closeOnEscape: true,
        resizable: false,
        position: 'center',
        draggable: false,
        autoOpen: false,
        closeText: '',
        dialogClass: 'cmLboxDialog',
        zIndex: 10000
    }
});
cmg.query.widget("ui.cmlightbox", cmlightbox);
