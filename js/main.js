let headerMobile = document.querySelector(".header-mobile");
let headerMobileBurger = document.querySelector(".header-mobile__burger");



headerMobileBurger.onclick = function() {
  headerMobileBurger.classList.toggle("active-menu") 
  headerMobile.classList.toggle("active-menu") 
};


window.onscroll = function() {
  stickyHeader()
};

function stickyHeader() {
  if (document.body.scrollTop > headerMobile.offsetHeight || document.documentElement.scrollTop > headerMobile.offsetHeight) {
    headerMobile.classList.add('sticky');
  } else {
    headerMobile.classList.remove('sticky');
  }
}




