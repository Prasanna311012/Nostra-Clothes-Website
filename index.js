//selecting side navbar,menuicon,closenav
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

const closeBtn = document.getElementById("close");
const offerBar = document.getElementById("offerbar");

  closeBtn.addEventListener("click",function(){
    offerBar.style.display = "none";
  });

  const sliderImages = [
    "./images/slider-one.jpg",
    "./images/slider-two.jpg",
    "./images/slider-three.jpg"
  ];

  let currentSlide = 0;
  const sliderImage = document.getElementById("slider-image");

  function showSlide(index) {
    if (index < 0) {
      currentSlide = sliderImages.length - 1;
    } else if (index >= sliderImages.length) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    sliderImage.src = sliderImages[currentSlide];
  }

  // Button event listeners
  document.getElementById("next-slide").addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  document.getElementById("prev-slide").addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

