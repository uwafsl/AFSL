function rotator_init(thisRotator) {
    var rotatorNumToShow = cmg.query(thisRotator).find('.cmRotator').data('numtoshow');
    var rotatorListItemCount = cmg.query(thisRotator).find('.cmRotatorList').children().length;
    var rotatorListIndicator = (Math.ceil(rotatorListItemCount/rotatorNumToShow));
    rotatorListIndicator = (rotatorListIndicator > 4) ? 4 : rotatorListIndicator;
    var rotatorCurrentSet = 0;
    //IE7 issue - we have to hide the controls so the css can apply display:inline-block
    cmg.query(thisRotator).find('.cmRotatorControls').hide();

    function findCurrentSet(){
        rotatorCurrentSet = cmg.query(thisRotator).find('ul.cmRotatorControls li a span.cmRotatorIndicatorActive').parent().data('set');
        return rotatorCurrentSet;
    }

    if (rotatorNumToShow < rotatorListItemCount) {
        var rotatorControlsClone ='';
        for(var i=0;i<rotatorListIndicator;i++){
            var rotatorControlsPiece = '<li><a class="cmRotatorListIndicator cmSet' + i + '" data-set="' +
                i + '"><span class="sprite cmRotatorIndicatorInactive">&nbsp;</span></a></li>';
            rotatorControlsClone += rotatorControlsPiece;
        }
        cmg.query(thisRotator).find('.cmRotatorPrevArrow').after(rotatorControlsClone);
        cmg.query(thisRotator).find('.cmRotatorControls').find('li a.cmSet0 span').toggleClass('cmRotatorIndicatorInactive cmRotatorIndicatorActive');
        cmg.query(thisRotator).find('.cmRotatorControls').show();
    }

    function rotatorSlide(rotatorCurrentSet){
        var newRotatorPosition = -(cmg.query(thisRotator).find('ul.cmRotatorList').children('li:eq(' + (rotatorCurrentSet*rotatorNumToShow) + ')').position().left);
        if((rotatorCurrentSet == (rotatorListIndicator -1)) && (rotatorListItemCount < (rotatorListIndicator*rotatorNumToShow))){
            newRotatorPosition = -(cmg.query(thisRotator).find('ul.cmRotatorList').children('li:eq(' + (rotatorListItemCount - rotatorNumToShow) + ')').position().left);
        }
        cmg.query(thisRotator).find('ul.cmRotatorList').animate({left: newRotatorPosition}, {duration: 500});

        if(rotatorCurrentSet != 0){
            cmg.query(thisRotator).find('li.cmRotatorPrevArrow a span').removeClass('cmRotatorPreviousInactive').addClass('cmRotatorPreviousActive');
        } else {
            cmg.query(thisRotator).find('li.cmRotatorPrevArrow a span').removeClass('cmRotatorPreviousActive').addClass('cmRotatorPreviousInactive');
        }
        if(rotatorCurrentSet != (rotatorListIndicator -1)){
            cmg.query(thisRotator).find('li.cmRotatorNextArrow a span').removeClass('cmRotatorNextInactive').addClass('cmRotatorNextActive');
        } else {
            cmg.query(thisRotator).find('li.cmRotatorNextArrow a span').removeClass('cmRotatorNextActive').addClass('cmRotatorNextInactive');
        }
    }

    cmg.query(thisRotator).find('ul.cmRotatorControls li a.cmRotatorListIndicator').click(
        function(){
            cmg.query(thisRotator).find('ul.cmRotatorControls').find('li a span.cmRotatorIndicatorActive').toggleClass('cmRotatorIndicatorActive cmRotatorIndicatorInactive');
            cmg.query(this).find('span.sprite').toggleClass('cmRotatorIndicatorInactive cmRotatorIndicatorActive');
            rotatorCurrentSet = findCurrentSet();
            rotatorSlide(rotatorCurrentSet);
        }
    );

    cmg.query(thisRotator).find('.cmRotatorPrevArrow').click(
        function(){
            if (rotatorCurrentSet != 0) {
                cmg.query(thisRotator).find('ul.cmRotatorControls li a.cmSet' + rotatorCurrentSet + ' span').toggleClass('cmRotatorIndicatorActive cmRotatorIndicatorInactive');
                cmg.query(thisRotator).find('ul.cmRotatorControls li a.cmSet' + (rotatorCurrentSet - 1) + ' span').toggleClass('cmRotatorIndicatorInactive cmRotatorIndicatorActive');
                rotatorCurrentSet -= 1;
                rotatorSlide(rotatorCurrentSet);
            }
        }
    )

    cmg.query(thisRotator).find('.cmRotatorNextArrow').click(
        function(){
            if (rotatorCurrentSet != (rotatorListIndicator -1)) {
                cmg.query(thisRotator).find('ul.cmRotatorControls li a.cmSet' + rotatorCurrentSet + ' span').toggleClass('cmRotatorIndicatorActive cmRotatorIndicatorInactive');
                cmg.query(thisRotator).find('ul.cmRotatorControls li a.cmSet' + (rotatorCurrentSet + 1) + ' span').toggleClass('cmRotatorIndicatorInactive cmRotatorIndicatorActive');
                rotatorCurrentSet += 1;
                rotatorSlide(rotatorCurrentSet);
            }
        }
    )
}

cmg.query(document).ready(function() {
    cmg.query('.cmTeaseListRotate').each(function() {
        rotator_init(this);
    });
});
