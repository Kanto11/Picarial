let burger = document.querySelector(".burger__menu");
let navList = document.querySelector(".nav__list");


burger.addEventListener("click",()=>{
    navList.classList.toggle('open')
})

const track = document.querySelector('.temoignages__body');
const cards = document.querySelectorAll('.temoignages__card');
const dots = document.querySelectorAll('.carousel_dot .dot');


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = [...cards].indexOf(entry.target);
        dots.forEach((dot, i) => {
          dot.classList.toggle('is-active', i === index);
        });
      }
    });
  },
  { root: track, threshold: 0.6 }
);

cards.forEach((card) => observer.observe(card));


dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    cards[i].scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest'
    });
  });
});