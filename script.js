const video = document.querySelector('video');
const play = document.querySelector('play');
const stop = document.querySelector('stop');
const progress = document.querySelector('progress');
const timestamp = document.querySelector('timestamp');


// play & paues

function toggleVideoStatus() {
    return true;
}
// update play & pause icon!
function updatePlayIcon() {
    return true;

}
// update progress & timestamp
function updateProgress() {
    return true;
}

function setVideoProgress() {
    return true;
}

function stopVideo() {
    return true;
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);