let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2200); // Change image every 2 seconds
}
function openPage() {
    // Redirect to another page
    window.location.href = './theme.html';
  }




const men_section = document.querySelector('.men');
const women_section = document.querySelector('.women');
const kids_section = document.querySelector('.kids');
const home_section = document.querySelector('.homeliving');
const beauty_section = document.querySelector('.beauty');
const ramp_section = document.querySelector('.ramp');

const men_section_items = document.querySelector('.men-section-items');
const women_section_items = document.querySelector('.women-section-items');
const kids_section_items = document.querySelector('.kids-section-items');
const home_section_items = document.querySelector('.home-section-items');
const beauty_section_items = document.querySelector('.beauty-section-items');
const ramp_section_items = document.querySelector('.ramp-section-items');
const exploreRamp = document.querySelector('.exploreRamp');

const container_ele = document.querySelector('.container');
var bodyele = document.getElementsByTagName("BODY");

men_section.onmouseover = () => {
    men_section_items.classList.remove('visibility');
}
men_section.onmouseout = () => {
    men_section_items.classList.add('visibility');
} /* men section ends here */

women_section.onmouseover = () => {
    women_section_items.classList.remove('visibility');
}
women_section_items.onmouseleave = () => {
    women_section_items.classList.add('visibility');
} /* women section ends here */


kids_section.onmouseover = () => {
    kids_section_items.classList.remove('visibility');
}
kids_section.onmouseout = () => {
    kids_section_items.classList.add('visibility');
} /* kids section ends here */

home_section.onmouseover = () => {
    home_section_items.classList.remove('visibility');
}
home_section.onmouseout = () => {
    home_section_items.classList.add('visibility');
} /* home and living ends here */

beauty_section.onmouseover = () => {
    beauty_section_items.classList.remove('visibility');
}
beauty_section.onmouseout = () => {
    beauty_section_items.classList.add('visibility');
}
document.getElementById('toggle').addEventListener('change', function() {
  if (this.checked) {
      window.location.href = '../Structure/competition.html';
  }

});