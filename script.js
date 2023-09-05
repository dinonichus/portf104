// sticky header
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY>100);
});

// hamburger active
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}

//active navlink on scroll
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('.navlist a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navlist .nav[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

//active navlink on click
var navContainer = document.getElementById("navbar");
var btns = navContainer.getElementsByClassName("nav");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


