    

    
    /* Remove transition on page load (flash) */

document.getElementsByTagName("body")[0].classList.add("remove-transition");
setTimeout(function(){
    document.getElementsByTagName("body")[0].classList.remove("remove-transition");
}, 20);



    /* Dark Mode */

// It's not in order to maximize the performance (don't flash light theme on page load)

let dmBtn = document.getElementsByClassName("dm-btn")[0];
let body = document.getElementsByTagName("body")[0];

// Set visit counter
var visit = localStorage.getItem('visit');

// If user's device is set to dark mode, set it on the first page visit
if (visit == null){
    visit = 0;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        dmBtn.checked = true;
        localStorage.setItem("dm-checkbox", dmBtn.checked);
    }
} 

// Get the dark mode state and set it to the dm toggle
let dmState = JSON.parse(localStorage.getItem("dm-checkbox"));    
if (dmState){
    body.classList.add("dark-mode");
}

// Check the dark-mode toggle
dmBtn.checked = dmState;

// Update the visit counter
visit++
localStorage.setItem('visit', visit);

// Set dark mode on toggle
dmBtn.addEventListener("click", function(){
    localStorage.setItem("dm-checkbox", dmBtn.checked);
    let dmState = JSON.parse(localStorage.getItem("dm-checkbox"));
    
    if (dmState){
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});



    /* Background gradient */

// Gradient speed (0.1 slow, 10 fast as F) - currently 0.5 in (window.pageYOffset * ->0.5<-)...
// Gradient direction (L-R = speed positive, CSS style left:0;)
// Gradient direction (R-L = speed negative, CSS style left:-100%;)

const grad:HTMLElement | null = document.getElementById('main-bg-grad');
const mblDevice:number = 768;
let position:number = 0;

// Calculate translate3D for the gradient image
function updateGradient(){
    position = (window.pageYOffset * 1) % grad!.clientWidth / 2;
    grad!.style.transform = `translate3d(${position}px, 0, 0)`;
}

window.addEventListener('load', updateGradient);

// Use this so the eventListener can be removed
let scrollListener = function(){
    requestIdleCallback(updateGradient);
}          
        
// If the screen is wider than 768px, add the updateGradient();
if (window.innerWidth > mblDevice){
    window.addEventListener("scroll", scrollListener, {passive: true});
}

// Add / remove the scroll eventListener
window.addEventListener("resize", function(){
    if (window.innerWidth > mblDevice){
        window.addEventListener("scroll", scrollListener, {passive: true});
    } else {
        grad!.style.transform = `translate3d(0, 0, 0)`;
        window.removeEventListener("scroll", scrollListener);
    }        
});



    /* Set the page to always load at the left - top side */

function scrollToTopLeft(){
    setTimeout(function(){
        window.scrollTo(0, 0);
    }, 0);
}

window.addEventListener('load', scrollToTopLeft);
window.addEventListener('resize', scrollToTopLeft);



    /* Scroll-to-top */

function scrollToTop(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
}

// Debouncing function
function debounce(func, wait){
    let timeout:number;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    }
}

let scrollTopBtn:HTMLElement | null = document.getElementById("scrolltop");

function scrollTopClass(){
    if (window.scrollY > window.innerHeight / 0.7){
        scrollTopBtn!.classList.add("scrolltop-displayed");
    } else {
        scrollTopBtn!.classList.remove("scrolltop-displayed");
    }
}

// When it doesn't detect this id on the page the nav isn't hiding after scroll
if (scrollTopBtn){ 
    scrollTopClass();
    window.addEventListener("scroll", debounce(scrollTopClass, 80));
}

// Embed the svg arrow icon
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".scrollarrow")!.innerHTML = arrowIcon;
});