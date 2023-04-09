let slideIndex = 1;
function currentSlide(n) {
  console.log(n);
  showSlide((slideIndex = n));
}
showSlide(slideIndex);

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hide-slide");
  }
  slides[slideIndex - 1].classList.remove("hide-slide");
  dots[slideIndex - 1].className += " active";
}
