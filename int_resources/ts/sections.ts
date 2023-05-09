


    /* Your Logo (bg color) */

// Elements
const stContentAll:NodeListOf<Element> = document.querySelectorAll(".st-content");
const bgColorSlider:HTMLInputElement | null = document.querySelector(".yl-bg-slider");
const colorSliderPercent:HTMLElement | null = document.querySelector(".yl-slider-percent");
const bgResetBtn:HTMLElement | null = document.querySelector(".yl-bg-reset");

bgColorSlider!.addEventListener("input", function(){
    
    const sliderVal:number = 255 - parseInt(this.value);
    const sliderValPercent:string = Math.round(100 - (sliderVal / 255 * 100)) + "%";
    const bgColor:string = `rgb(${sliderVal}, ${sliderVal}, ${sliderVal})`;

    // change the percent value (0% = white, 100% = black)
    colorSliderPercent!.innerHTML = sliderValPercent;

    // Add the color as a CSS variable
    document.body.style.setProperty("--changed-bg-color", bgColor);

    // Add the class to each scrollTo content element
    stContentAll!.forEach((stContent) => {
        stContent?.classList.add("changed-bg-color");
    });

});

bgResetBtn!.addEventListener("click", function(){

    bgColorSlider!.value = "128";
    colorSliderPercent!.innerHTML = "";

    stContentAll!.forEach((stContent) => {
        stContent?.classList.remove("changed-bg-color");
    });

});



    /* Balance Section */

const balanceContent:HTMLElement | null = document.querySelector(".balance .st-content");

// Create the grid overlay element
const gridOverlay:HTMLElement = document.createElement("div");
gridOverlay.classList.add("grid-overlay");
balanceContent?.appendChild(gridOverlay);

// Create grid overlay "cells" and append them
for (let i = 1; i <= 96; i++){
    const gridOverlayElem:HTMLElement = document.createElement("div");
    gridOverlayElem.classList.add("grid-overlay-elem");
    gridOverlay.appendChild(gridOverlayElem);
}