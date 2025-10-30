// === SONG AND VIDEO DATA ===
const songs = [
    {
        audio: "song/song1.mp3",
        name: "Enak mele vaano - Irfan",
        video: "https://www.youtube.com/embed/d9qJDZZYKkU?autoplay=1&mute=1&controls=0&loop=1&playlist=d9qJDZZYKkU"
    },
    {
        audio: "song/song2.mp3",
        name: "Akacia - Electric [NCS Release]",
        video: "https://www.youtube.com/embed/jvXM5zPzAac?autoplay=1&mute=1&controls=0&loop=1&playlist=jvXM5zPzAac"
    },
    {
        audio: "song/song3.mp3",
        name: "Wiguez & Vizzen - Running Wild [NCS Release]",
        video: "https://www.youtube.com/embed/EA--OT9YUw8?autoplay=1&mute=1&controls=0&loop=1&playlist=EA--OT9YUw8"
    },
];


let currentSong = 0;

// === ELEMENTS ===
const audioElement = document.getElementById('loading');
const videoElement = document.getElementById('background-video');
const songnameElement = document.getElementById('songname');
const muteText = document.getElementById('text');

// === FUNCTIONS ===

// Set song and video
function setSong(index) {
    const song = songs[index];
    audioElement.src = song.audio;
    audioElement.play().catch(err => {
        console.log('Autoplay prevented:', err);
    });
    songnameElement.innerHTML = song.name;
    videoElement.src = song.video;
    muteText.innerHTML = "MUTE";
}

// Random welcome message
(function welcometext() {
    const welcomes = [
        'Begin your exciting new adventure.',
        'Discover the wonders of your new city.',
        'Open the door to a brand-new chapter.',
        'Step into a world of new possibilities.',
        'Embrace your fresh beginning.'
    ];
    const randomWelcome = Math.floor(Math.random() * welcomes.length);
    document.getElementById('welcomeDisplay').innerHTML = welcomes[randomWelcome];
})();

// Switch shaded loading texts
const shadedText = document.querySelector('.shaded-text');
const loadingTexts = ["JOINING SERVER", "PREPARING ASSETS", "ESTABLISHING CONNECTION"];
let currentLoadingText = 0;

setInterval(() => {
    currentLoadingText = (currentLoadingText + 1) % loadingTexts.length;
    shadedText.classList.remove('fade-out');
    void shadedText.offsetWidth;
    shadedText.classList.add('fade-out');
    setTimeout(() => {
        shadedText.textContent = loadingTexts[currentLoadingText];
    }, 1000);
}, 4000);

// Volume Control
audioElement.volume = 0.2;

window.addEventListener('keyup', function(e) {
    if (e.which == 38) { // Arrow UP
        audioElement.volume = Math.min(audioElement.volume + 0.025, 1);
    } else if (e.which == 40) { // Arrow DOWN
        audioElement.volume = Math.max(audioElement.volume - 0.025, 0);
    }
});

// Change Songs Left/Right
window.addEventListener('keyup', function(event) {
    if (event.which == 37) { // Arrow LEFT
        currentSong = (currentSong - 1 + songs.length) % songs.length;
        setSong(currentSong);
    } else if (event.which == 39) { // Arrow RIGHT
        currentSong = (currentSong + 1) % songs.length;
        setSong(currentSong);
    }
});

// Mute / Unmute on Space
window.addEventListener('keydown', function(event) {
    if (event.which === 32) { // Spacebar
        event.preventDefault();
        if (muteText.innerText === "MUTE") {
            audioElement.pause();
            muteText.innerText = "UNMUTE";
        } else {
            audioElement.play();
            muteText.innerText = "MUTE";
        }
    }
});

// Set random song and video when page loads
document.addEventListener('DOMContentLoaded', function () {
    currentSong = Math.floor(Math.random() * songs.length);
    setSong(currentSong);
});
