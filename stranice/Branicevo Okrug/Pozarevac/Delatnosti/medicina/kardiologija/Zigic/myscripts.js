/* ================= SLIDESHOW JS ================*/

// Code for Auto/Manual slideshow

var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

//Function for changing images with time reset

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

//Function which provides info about current image

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

//Function for Auto/Manual changing of pictures

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 6000); //Image will be automaticly changed after 6 seconds
}

/* ===========================================*/


/* ================= MODAL JS ================*/
// Open modal function

function openModal() {
  document.getElementById('my-modal').style.display = "inline-flex";
}

// Close modal function

function closeModal() {
  document.getElementById('my-modal').style.display = "none";
}

// Declaration of Variables

var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next and previous button function

function changeSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

//Main function for operating slideshow or modal or image viewer

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("my-slides");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  slides2[slideIndex2-1].style.display = "block";
}

/* ===========================================*/
