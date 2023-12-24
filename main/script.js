//header & Navalist 
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

const sr = ScrollReveal({
  origin: 'top',
  distance:'85px',
  duration: 2500,
  reset: true
})

// scrollreveal
sr.reveal ('.home-text',{delay:300});
sr.reveal ('.home-img',{delay:400});
sr.reveal ('.Container',{delay:400});

sr.reveal ('.about-img',{});
sr.reveal ('.about-text',{delay:300});

sr.reveal ('.middle-text',{});
sr.reveal ('.row-btn,.shop-content',{delay:300});


sr.reveal ('.review-content,.contact',{delay:300});

// background blur 
function toggle(){
  var home = document.getElementById('home'); //for home
  home.classList.toggle('active')

  var container = document.getElementById('container'); //for container
  container.classList.toggle('active')

  var about = document.getElementById('about'); //for about
  about.classList.toggle('active')

  var shop = document.getElementById('shop'); //for shop
  shop.classList.toggle('active')

  var review = document.getElementById('review'); //for review
  review.classList.toggle('active')

  var contact = document.getElementById('contact'); //for contact
  contact.classList.toggle('active')
}


