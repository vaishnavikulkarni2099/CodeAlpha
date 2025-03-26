const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');
const progressBar = document.getElementById('progress-bar');
const playPauseBtn = document.querySelector('.controls button:nth-child(2)');

const songs = [
    {
        title: 'Song 1',
        artist: 'Artist 1',
        src: 'c:\Users\Admin\Music\Kesariya(PagalWorld.com.se).mp3'
    },
    {
        title: 'Song 2',
        artist: 'Artist 2',
        src: 'c:\Users\Admin\Music\Teri Baaton Mein Aisa Uljha Jiya(PagalWorld.com.cm).mp3'
    },
    {
        title: 'Song 3',
        artist: 'Artist 3',
        src: 'c:\Users\Admin\Music\Tu Chahiye.mp3'
    }
];

let currentSongIndex = 0;

function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
}

audio.addEventListener('timeupdate', () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
});

progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Load the first song initially
loadSong(currentSongIndex);
