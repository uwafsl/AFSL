cmg.query(document).ready(function(){
    cmg.query("body").delegate(".cmMedia .cmLeadPhoto a,.cmMedia .cmRelatedImage a,.cmMedia .cmElementEnlarge a", "click", function(event){
        event.preventDefault();
        var assetID = cmg.query(this).data('asset_id');
        if(!cmg.query("#dialog_" + assetID).length){
            var $dialog = cmg.query('<div></div>').data(related_photos["photo_" + assetID]).cmlightbox();
            $dialog.attr('id',"dialog_" + assetID).cmlightbox("open");
        } else {
            cmg.query("#dialog_" + assetID).cmlightbox("open");
        }
    });
});
