var video = document.querySelector("#myVideo");

    var playButton = document.querySelector("#playButton");
    
    var pauseButton = document.querySelector("#pauseButton");

    playButton.addEventListener("click", function() {
        video.play();
    });

    pauseButton.addEventListener("click", function() {
        video.pause();
    });
