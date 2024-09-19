const audio = new Audio();
let isPlay = false;
const player = document.querySelector('.player');
const playButton = document.querySelector('.play');
const playButtonImg = document.querySelector('.play-button');
const tracks = ['assets/audio/dontstartnow.mp3', 'assets/audio/beyonce.mp3'];
const covers = ['assets/img/dontstartnow.png', 'assets/img/lemonade.png'];
const singers = ['Dua Lipa', 'Beyonce'];
const songs = ["Don't Start now", "Lemonade"];
playNum = 0;
const backwardButton = document.querySelector('.backward');
const forwardButton = document.querySelector('.forward');
const progressBar = document.getElementById('progress');
progressBar.value = 0;

function playAudio() {
    audio.src = tracks[playNum];
    audio.currentTime = 0;
  audio.play();
  isPlay = true;
  playButtonImg.src = 'assets/svg/pause.png';
}

function pauseAudio() {
    audio.pause();
    isPlay = false;
    playButtonImg.src = 'assets/svg/play.png';
}

function playPauseAudio() {
    if(!isPlay) {
        playAudio();
    } else {
        pauseAudio()
    }
}

function changeCover() {
    document.querySelector('.container').style.backgroundImage=`url(${covers[playNum]})`;
    document.querySelector('.player-img').style.backgroundImage=`url(${covers[playNum]})`;
}

function changeText() {
    document.getElementById('singer-name').innerHTML=`${singers[playNum]}`;
    document.getElementById('song-name').innerHTML=`${songs[playNum]}`;
}

function currentSongTime () {
    player.querySelector('.current-time').innerHTML = formatSongDuration(audio.currentTime);
}

function formatSongDuration(number) {
    let minutes = number / 60;
    let seconds = number % 60;
    return (Math.round(minutes) + ":" + Math.round(seconds));
}

function playNext() {
    (playNum === tracks.length - 1) ? playNum = 0 : playNum += 1;
    playAudio();
    changeCover();
    changeText();
    audio.addEventListener('canplay', updateDuration);
}

function playPrev() {
    (playNum > 0) ? playNum -=1 : playNum = tracks.length - 1;
    playAudio();
    changeCover();
    changeText();
    audio.addEventListener('canplay', updateDuration);
}

playButton.addEventListener('click', playPauseAudio);
backwardButton.addEventListener('click', playPrev);
forwardButton.addEventListener('click', playNext);


audio.addEventListener('timeupdate', handleProgress);

function handleProgress () {
    progressBar.value = audio.currentTime / audio.duration * 100;
}


function scrub (event) {
    const scrubTime = (event.offsetX / progressBar.offsetWidth) * audio.duration;
    audio.currentTime = scrubTime;
    }

progressBar.addEventListener('click', scrub);
