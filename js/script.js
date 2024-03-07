const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

//  code for media query , while clicking on burger icon on small devices "navlist will appear"

/*-------------------------toggle icon navbar--------------------------------- */

let menu= document.querySelector('#menu-icon');
let navlist = document.querySelector(".navlist");

menu.onclick =()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');

}

// this fuction will remove the side navlist after clicking 
/*-------------------------remove toggle icon and navbar when click navbar link (scroll)----------------------------- */

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

/*----------------------------*/
