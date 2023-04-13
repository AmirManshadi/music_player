let tracks = [
	{
		title: "miss you",
		artist: "W.A.S.P",
		cover: "./assets/images/miss-you.jpg",
		audio: new Audio("./assets/audios/miss you.mp3"),
	},
	{
		title: "the idol",
		artist: "W.A.S.P",
		cover: "./assets/images/the-idol.jpg",
		audio: new Audio("./assets/audios/the idol.mp3"),
	},
	{
		title: "the prophet",
		artist: "garry moore",
		cover: "./assets/images/the-prophet.jpg",
		audio: new Audio("./assets/audios/the prophet.mp3"),
	},
]

let title = document.querySelector("#music-title")
let artist = document.querySelector("#music-artist")
let cover = document.querySelector("#music-cover")
let timeline = document.querySelector("#music-time")
let currentTime = document.querySelector("#min-time")
let maxTime = document.querySelector("#max-time")
let prev = document.querySelector("#prev-btn")
let play = document.querySelector("#play-btn")
let next = document.querySelector("#next-btn")

let track = tracks[0]
cover.src = track.cover
title.innerText = track.title
artist.innerText = track.artist
timeline.value = 0

function changeTrack(index) {
	track.audio.pause()
	timeline.value = 0
	track.audio.currentTime = 0
	track = tracks[index]
	cover.src = track.cover
	title.innerText = track.title
	artist.innerText = track.artist
	timeline.value = 0
	track.audio.play()
	cover.style.animationPlayState = "running"
	play.classList.replace("fa-play", "fa-pause")
}
track.audio.addEventListener("canplay", () => {
	timeline.max = track.audio.duration
})
track.audio.addEventListener("timeupdate", () => {
	timeline.value = track.audio.currentTime
})
timeline.addEventListener("input", e => {
	track.audio.currentTime = timeline.value
})

play.addEventListener("click", () => {
	if (play.classList.contains("fa-play")) {
		track.audio.play()
		cover.style.animationPlayState = "running"
		play.classList.replace("fa-play", "fa-pause")
	} else {
		track.audio.pause()
		cover.style.animationPlayState = "paused"
		play.classList.replace("fa-pause", "fa-play")
	}
})
prev.addEventListener("click", () => {
	let index = tracks.indexOf(track)
	if (track != tracks[0]) changeTrack(index - 1)
	else changeTrack(tracks.length - 1)
})
next.addEventListener("click", () => {
	let index = tracks.indexOf(track)
	if (track != tracks[tracks.length - 1]) changeTrack(index + 1)
	else changeTrack(0)
})
