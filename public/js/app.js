// astro a js
const title = document.querySelector(".player-meta__title");
const artist = document.querySelector(".player-meta__artist");
const progress = document.querySelector(".player-progress__range");
const song = document.querySelector(".song");
const controls = document.querySelectorAll(".player-controls__btn");

const songs = [
  {
    title: 'Tough',
    artist: 'NEFFEX',
    source: '/songs/Tough - NEFFEX.mp3'
  }
];

let indexCurrentSong = 0;

function updateInfoSong() {
  title.textContent = songs[indexCurrentSong].title;
};

updateInfoSong();