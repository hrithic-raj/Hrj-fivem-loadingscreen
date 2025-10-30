// // === SONG AND IMAGE DATA ===
// const songs = [
//     {
//         audio: "song/song1.mp3",
//         name: "Enak mele vaano - Irfan",
//         image: "img/bg/bg1.jpg"
//     },
//     {
//         audio: "song/song7.mp3",
//         name: "God Mode - Karuppu - Sai Abhyankkar",
//         image: "img/bg/bg2.jpg"
//     },
//     {
//         audio: "song/song6.mp3",
//         name: "Vazhithunaiye - Dragon",
//         image: "img/bg/bg4.png"
//     },
//     {
//         audio: "song/song8.mp3",
//         name: "Suryangam (Malayalam) - Salaar",
//         image: "img/bg/bg5.jpg"
//     },
//     {
//         audio: "song/song5.mp3",
//         name: "Powerhouse - Coolie - Music By Anirudh",
//         image: "img/bg/bg6.jpg"
//     },
// ];

// let currentSong = 0;

// // === ELEMENTS ===
// const audioElement = document.getElementById('loading');
// const songnameElement = document.getElementById('songname');
// const muteText = document.getElementById('text');

// // === CROSSFADE BACKGROUND SETUP ===
// const bgContainer = document.querySelector('.image-background');

// // Two image layers for crossfade
// const bg1 = document.createElement('img');
// const bg2 = document.createElement('img');

// [bg1, bg2].forEach(img => {
//     img.classList.add('bg-fade');
//     bgContainer.appendChild(img);
// });

// let showingBg1 = true;

// // === FUNCTIONS ===
// function setSong(index) {
//     const song = songs[index];
//     audioElement.src = song.audio;
//     audioElement.play().catch(err => console.log('Autoplay prevented:', err));
//     songnameElement.innerHTML = song.name;
//     muteText.innerHTML = "MUTE";
// }

// // === CROSSFADE FUNCTION ===
// let currentBgIndex = 0;

// function changeBackground() {
//     const nextImage = songs[currentBgIndex].image;
//     const visible = showingBg1 ? bg1 : bg2;
//     const hidden = showingBg1 ? bg2 : bg1;

//     hidden.src = nextImage;
//     hidden.style.opacity = 0;
//     hidden.onload = () => {
//         visible.style.opacity = 0;
//         hidden.style.opacity = 1;
//         showingBg1 = !showingBg1;
//     };

//     currentBgIndex = (currentBgIndex + 1) % songs.length;
// }

// // === SLIDESHOW INTERVAL (Change every 10s) ===
// const slideInterval = 7000;
// setInterval(changeBackground, slideInterval);

// // === RANDOM WELCOME TEXT ===
// (function welcometext() {
//     const welcomes = [
//         'Begin your exciting new adventure.',
//         'Discover the wonders of your new city.',
//         'Open the door to a brand-new chapter.',
//         'Step into a world of new possibilities.',
//         'Embrace your fresh beginning.'
//     ];
//     const randomWelcome = Math.floor(Math.random() * welcomes.length);
//     document.getElementById('welcomeDisplay').innerHTML = welcomes[randomWelcome];
// })();

// // === LOADING TEXTS SWITCH ===
// const shadedText = document.querySelector('.shaded-text');
// const loadingTexts = ["JOINING SERVER", "PREPARING ASSETS", "ESTABLISHING CONNECTION"];
// let currentLoadingText = 0;

// setInterval(() => {
//     currentLoadingText = (currentLoadingText + 1) % loadingTexts.length;
//     shadedText.classList.remove('fade-out');
//     void shadedText.offsetWidth;
//     shadedText.classList.add('fade-out');
//     setTimeout(() => {
//         shadedText.textContent = loadingTexts[currentLoadingText];
//     }, 1000);
// }, 4000);

// // === VOLUME CONTROL ===
// audioElement.volume = 0.2;

// window.addEventListener('keyup', function(e) {
//     if (e.which == 38) {
//         audioElement.volume = Math.min(audioElement.volume + 0.025, 1);
//     } else if (e.which == 40) {
//         audioElement.volume = Math.max(audioElement.volume - 0.025, 0);
//     }
// });

// // === SONG CHANGE (LEFT / RIGHT ARROW) ===
// window.addEventListener('keyup', function(event) {
//     if (event.which == 37) {
//         currentSong = (currentSong - 1 + songs.length) % songs.length;
//         setSong(currentSong);
//     } else if (event.which == 39) {
//         currentSong = (currentSong + 1) % songs.length;
//         setSong(currentSong);
//     }
// });

// // === MUTE / UNMUTE ON SPACE ===
// window.addEventListener('keydown', function(event) {
//     if (event.which === 32) {
//         event.preventDefault();
//         if (muteText.innerText === "MUTE") {
//             audioElement.pause();
//             muteText.innerText = "UNMUTE";
//         } else {
//             audioElement.play();
//             muteText.innerText = "MUTE";
//         }
//     }
// });

// // === INITIAL SETUP ===
// document.addEventListener('DOMContentLoaded', function () {
//     currentSong = Math.floor(Math.random() * songs.length);
//     setSong(currentSong);

//     // initial backgrounds
//     bg1.src = songs[currentSong].image;
//     bg1.style.opacity = 1;
//     bg2.style.opacity = 0;
// });



// === SONG DATA ===
const songs = [
  { audio: "song/song1.mp3", name: "Enak mele vaano - Irfan" },
  { audio: "song/song7.mp3", name: "God Mode - Karuppu - Sai Abhyankkar" },
  { audio: "song/song6.mp3", name: "Vazhithunaiye - Dragon" },
  { audio: "song/song8.mp3", name: "Suryangam (Malayalam) - Salaar" },
  { audio: "song/song5.mp3", name: "Powerhouse - Coolie - Music By Anirudh" },
];

// === IMAGE DATA ===
const images = [
  "img/bg/bg1.jpg",
  "img/bg/bg2.jpg",
  "img/bg/bg3.jpg",
  "img/bg/bg4.png",
  "img/bg/bg5.jpg",
  "img/bg/bg6.jpg",
  "img/bg/bg7.jpg",
  "img/bg/bg8.jpg",
  "img/bg/bg9.jpg",
  "img/bg/bg10.jpg",
];

let currentSong = 0;
let currentBgIndex = 0;

// === ELEMENTS ===
const audioElement = document.getElementById('loading');
const songnameElement = document.getElementById('songname');
const muteText = document.getElementById('text');

// === CROSSFADE BACKGROUND SETUP ===
const bgContainer = document.querySelector('.image-background');
const bg1 = document.createElement('img');
const bg2 = document.createElement('img');

[bg1, bg2].forEach(img => {
  img.classList.add('bg-fade');
  bgContainer.appendChild(img);
});

let showingBg1 = true;

// === FUNCTIONS ===
function setSong(index) {
  const song = songs[index];
  audioElement.src = song.audio;
  songnameElement.innerHTML = song.name;
  audioElement.play().catch(err => console.log('Autoplay prevented:', err));
  muteText.innerHTML = "MUTE";
}

// === CROSSFADE FUNCTION ===
function changeBackground() {
  const nextImage = images[currentBgIndex];
  const visible = showingBg1 ? bg1 : bg2;
  const hidden = showingBg1 ? bg2 : bg1;

  hidden.src = nextImage;
  hidden.style.opacity = 0;
  hidden.onload = () => {
    visible.style.opacity = 0;
    hidden.style.opacity = 1;
    showingBg1 = !showingBg1;
  };

  currentBgIndex = (currentBgIndex + 1) % images.length;
}

// === SLIDESHOW INTERVAL (Change every 10s) ===
const slideInterval = 7000; // 10 seconds
setInterval(changeBackground, slideInterval);

// === RANDOM WELCOME TEXT ===
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

// === LOADING TEXTS SWITCH ===
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

// === VOLUME CONTROL ===
audioElement.volume = 0.2;
window.addEventListener('keyup', function(e) {
  if (e.which == 38) audioElement.volume = Math.min(audioElement.volume + 0.025, 1);
  else if (e.which == 40) audioElement.volume = Math.max(audioElement.volume - 0.025, 0);
});

// === SONG CHANGE (LEFT / RIGHT ARROW) ===
window.addEventListener('keyup', function(event) {
  if (event.which == 37) {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    setSong(currentSong);
  } else if (event.which == 39) {
    currentSong = (currentSong + 1) % songs.length;
    setSong(currentSong);
  }
});

// === MUTE / UNMUTE ON SPACE ===
window.addEventListener('keydown', function(event) {
  if (event.which === 32) {
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

// === INITIAL SETUP ===
document.addEventListener('DOMContentLoaded', function () {
  currentSong = Math.floor(Math.random() * songs.length);
  currentBgIndex = Math.floor(Math.random() * images.length);

  setSong(currentSong);

  bg1.src = images[currentBgIndex];
  bg1.style.opacity = 1;
  bg2.style.opacity = 0;
});
