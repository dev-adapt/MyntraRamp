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

men_section.onmouseenter = () => {
    men_section_items.classList.remove('visibility');
}
men_section.onmouseleave = () => {
    men_section_items.classList.add('visibility');
} /* men section ends here */

women_section.onmouseenter = () => {
    women_section_items.classList.remove('visibility');
}
women_section_items.onmouseleave = () => {
    women_section_items.classList.add('visibility');
} /* women section ends here */


kids_section.onmouseenter = () => {
    kids_section_items.classList.remove('visibility');
}
kids_section.onmouseleave = () => {
    kids_section_items.classList.add('visibility');
} /* kids section ends here */

home_section.onmouseenter = () => {
    home_section_items.classList.remove('visibility');
}
home_section.onmouseleave = () => {
    home_section_items.classList.add('visibility');
} /* home and living ends here */

beauty_section.onmouseenter = () => {
    beauty_section_items.classList.remove('visibility');
}
beauty_section.onmouseleave = () => {
    beauty_section_items.classList.add('visibility');
}
ramp_section.onmouseenter = () => {
    ramp_section_items.classList.remove('visibility');
}
ramp_section_items.onmouseleave =() =>{
    ramp_section_items.classList.add('visibility');
}

function openPage() {
    // Redirect to another page
    window.location.href = 'ramp.html';
  }