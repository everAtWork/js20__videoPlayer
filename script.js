const video = document.querySelector('video');
const play = document.querySelector('play');
const stop = document.querySelector('stop');
const progress = document.querySelector('progress');
const timestamp = document.querySelector('timestamp');


// play & paues

function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
// update play & pause icon!
function updatePlayIcon() {
    if (videp.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"';
    }

}
// update progress & timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minutes 
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }
    // Get seconds 
    let seconds = Math.floor(video.currentTime / 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    timestamp.innerHTML = `${minutes}:${seconds}`;
}

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);