flipper = new Object();
flipper.active_flags = {"active_flags": ["GoogleAnalytics_Enable", "CMSTC-969", "CMSAP-1119-visible", "CMSSAI-858", "twitter_card", "disable_auth_recovery", "mobile_image_slider", "JANUS-141", "CMSTC-1011", "new_event_urls", "MaxMapRadar_Enable", "JANUS-1244", "CMSSAI-1343", "Chartbeat_Enable", "HYBRID_LISTS", "JANUS-4777", "CMSAM-408", "B-06517", "ComScore_Enable", "image_slider", "CMSTSBC-169", "CMSWTA-416", "qualtrics_enable", "Quantcast_Enable", "VisualRevenue_Enable", "CMSIMPG-409", "CMSPD-415", "JANUS-4778", "B-01154", "app_notifications", "CMSTSBC-165", "JANUS-4779", "CMSTSBC-163", "CMSTSBC-166", "SchoolClosingsKeywordSearch_Disable", "jquery-2", "B-03876", "B-02762", "B-03926", "AppMeasurement_Enable", "MaxMapRadarWired_Enable", "B-11042", "CMSWTA-443", "CMSWTA-417"]}.active_flags;
flipper.is_active = function(key) {
    for (var i = 0; i < flipper.active_flags.length; i++) {
        if ( flipper.active_flags[i] == key ) return true;
    }
    return false;
}
