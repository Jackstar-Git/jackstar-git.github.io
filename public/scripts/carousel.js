const carouselItems = document.querySelectorAll('.carousel-item');

const slideIndicator = document.getElementById("slide-indicator");
slideIndicator.innerHTML = "<span class='indicator'></span>".repeat(carouselItems.length)
const slideIndicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });

  carouselItems[index].style.display = 'block';

  slideIndicators.forEach(item => {
    item.classList.remove("active-indicator");
  });
  slideIndicators[index].classList.add("active-indicator")

}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);

document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', previousSlide);

