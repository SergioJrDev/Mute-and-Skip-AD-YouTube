// html5-video-player ytp-hide-info-bar ad-created playing-mode iv-module-loaded ad-showing ytp-ad-overlay-open ytp-autohide

// html5-video-player ad-created ad-showing ad-interrupting videoAdUiRedesign ytp-video-ad-learn-more-ui ytp-title-extra-info ytp-iv-drawer-enabled iv-module-loaded paused-mode


// html5-video-player ad-created ad-showing ad-interrupting videoAdUiRedesign ytp-video-ad-learn-more-ui ytp-title-extra-info ytp-iv-drawer-enabled iv-module-loaded playing-mode ytp-autohide


(function() {
    const button = document.querySelector('.ytp-mute-button.ytp-button');
    const skip = document.querySelector('.videoAdUiSkipButton');
    const ad = document.querySelector('.ad-interrupting');
    
    if(ad) {
        button.click();
        setTimeout(() => {
            skip.click();
            button.click();
        }, 6000);
    }
})();