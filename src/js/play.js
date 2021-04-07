var nameVideo = undefined,
    value,
    currentTime,
    duration,
    resultTime,
    percent,
    progress = document.getElementById('progress')

window.onload = function () {
    currentTime = player.getCurrentTime(), duration = player.getDuration()
    setInterval(updateName, 1000)
    setInterval(updateTime, 500)
}

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        playerVars:
        {
            listType: 'playlist',
            list: 'PLe_sOLUv9qfuGAjO96WFXc5bgVaF46IjQ'
        },
    });
}

// function onPlayerReady(event) {
//     event.target.playVideo()
// }

// var done = false;
// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//         setTimeout(stopVideo, 6000);
//         done = true;
//     }
// }
// function stopVideo() {
//     player.stopVideo();
// }

// function onPlayerReady(event) {
//     event.target.playVideo();
// }

function updateName() {
    if (nameVideo != player.getVideoData().title) {
        nameVideo = player.getVideoData().title
        document.getElementById('name-music').innerText = player.getVideoData().title
    }
}

function updateTime() {
    if (player.getPlayerState() == 1) {
        currentTime = player.getCurrentTime()
        percent = duration/100
        resultTime = currentTime/percent
        progress.style.width = resultTime+'%'
    }

}

document.getElementById("previous").addEventListener("click", function () {
    player.previousVideo()
});

document.getElementById("play").addEventListener("click", function () {
    player.playVideo()
    document.getElementById('pause').style.display = "flex"
    document.getElementById('play').style.display = "none"
});

document.getElementById("pause").addEventListener("click", function () {
    player.pauseVideo()
    document.getElementById('pause').style.display = "none"
    document.getElementById('play').style.display = "flex"

});
document.getElementById("next").addEventListener("click", function () {
    player.nextVideo()
});

