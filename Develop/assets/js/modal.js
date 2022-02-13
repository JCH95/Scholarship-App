let totalImages = 10;
let y = $("<div>").addClass("xyz");
for (let i = 1; i < totalImages + 1; i++) {
  x = `<div class="column">
  <img
    src="./Develop/assets/images/modal/pic${i}.jpeg"
     class="imageSize"
    onclick="openModal();currentSlide(${i})"
  />
</div>`;
  y.append(x);
  $("#imageCarousel").html(y);
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
