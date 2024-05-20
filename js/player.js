let track_na = document.querySelector(".track-na")

let playpause_btn = document.querySelector(".playpause-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let updateTimer;

const music_list = [
    {
        na: "xxx - teeth",
        music: "content/music/xxx - teeth.mp3"
    },
    {
        na: "FT 52 - Lost Angeles",
        music: "content/music/FT 52 - Lost Angeles.mp3"
    },
    {
        na: "Slowboy - ASTRO",
        music: "content/music/Slowboy - ASTRO.mp3"
    },
    {
        na: "Freddie Dredd - Opaul",
        music: "content/music/Freddie Dredd - Opaul.mp3"
    },
    {
        na: "MadeinTYO - HUNNIDDOLLA",
        music: "content/music/MadeinTYO - HUNNIDDOLLA.mp3"
    },
    {
        na: "Cash! - 1mmortal",
        music: "content/music/Cash! - 1mmortal.mp3"
    },
    {
        na: "Montana99 - I Can't",
        music: "content/music/Montana99 - I Can't.mp3"
    },
    {
        na: "Lquish - The Grinch",
        music: "content/music/Lquish - The Grinch.mp3"
    },
    {
        na: "Playboi Carti - Pussy Pamper",
        music: "content/music/Playboi Carti - Pussy Pamper.mp3"
    },
    {
        na: "Radreen - You Don't Care",
        music: "content/music/Radreen - You Don't Care.mp3"
    },
    {
        na: "Scally Millano - Вампир",
        music: "content/music/Scally Millano - Вампир.mp3"
    },
    {
        na: "Fleurnothappy - Больно",
        music: "content/music/Fleurnothappy - Больно.mp3"
    },
];

loadTrack(track_index);

function loadTrack(track_index) {
    clearInterval(updateTimer);

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_na.textContent = music_list[track_index].na;

    updateTimer = setInterval(setUpdate, 1);

    curr_track.addEventListener("ended", nextTrack);
}

function playpauseTrack() {
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<img src="content/icons/player/new/pause.svg">';
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<img src="content/icons/player/new/play.svg">';
}

function nextTrack() {
    if (track_index < music_list.length - 1) {
        track_index += 1;
    } else if (track_index < music_list.length - 1) {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    } else {
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    if (track_index > 0) {
        track_index -= 1;
    } else {
        track_index = music_list.length - 1;
    }
    loadTrack(track_index);
    playTrack();
}

function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}

function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}