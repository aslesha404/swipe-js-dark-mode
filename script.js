var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,  // Show 3 cards at a time
  spaceBetween: 20,  // Space between slides
  slidesPerGroup: 3, // Move 3 slides at a time
  loop: true,        // Infinite loop
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});



// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");


});

