var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player, name = undefined
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

function onPlayerReady(event) {
    event.target.playVideo()
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

setInterval(function () {
    if (name != player.getVideoData().title) {
        name = player.getVideoData().title
        document.getElementById('name-music').innerText = player.getVideoData().title
    }
}, 1000)

function onPlayerReady(event) {
    event.target.playVideo();
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