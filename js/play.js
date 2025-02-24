let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#myvideo");


playButton.onclick = () => {
  video.classList.add("show-video");
  // auto play
  myvideo.play();
};