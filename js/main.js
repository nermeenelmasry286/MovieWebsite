

var swiper = new Swiper(".popular-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  
  autoplay: {
      delay: 755500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      280: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      320: {
          slidesPerView: 2,
          spaceBetween: 10,
      },
      758: {
          slidesPerView: 3,
          spaceBetween: 10,
      },
      900: {
          slidesPerView: 4,
          spaceBetween: 20,
      },
  }
});

let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#myvideo");


playButton.onclick = () => {
  video.classList.add("show-video");
  // auto play
  myvideo.play();
};

