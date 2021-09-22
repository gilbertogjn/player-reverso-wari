function VideoPlayer(id) {
    this.video = document.getElementById(id)
    this.mainButton = document.querySelector(`[w-play=${id}]`)
    this.source = document.getElementById('source')
    this.src = source.getAttribute("src")
    this.playlist = document.getElementsByTagName("li")

    this.mainButton.onclick = function(){playPause()};
}

function playPause() {
    if(wari.video.paused) {
        wari.mainButton.innerHTML = '<img src="./imgs/pause.svg" width="35" alt="pause" id="pause">'
        wari.video.play()
    } else {
        wari.mainButton.innerHTML = '<img src="./imgs/play.svg" width="35" alt="play" id="play">'
        wari.video.pause()
    }
}

const wari =  new VideoPlayer('playerVideo')
