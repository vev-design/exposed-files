videojs.registerPlugin('listenForParent', function () {
    var myPlayer = this;
    // This method called when postMessage sends data into the iframe
    function controlVideo(evt) {
        console.log('listenForParent: ', evt.data);
        if (evt.data === "playVideo") {
            myPlayer.play();
        } else if (evt.data === 'pauseVideo') {
            myPlayer.pause();
        } else if (evt.data === 'ToggleStartPause') {
            myPlayer.paused() ? myPlayer.play() : myPlayer.pause()
        } else if (evt.data === 'mutePlay') {
            myPlayer.muted(true);
            myPlayer.play();
        } else if (evt.data === 'umutePause') {
            myPlayer.muted(false);
            myPlayer.paused();
        }   
    };
    // Listen for the message, then call controlVideo() method when received
    window.addEventListener("message", controlVideo);
});