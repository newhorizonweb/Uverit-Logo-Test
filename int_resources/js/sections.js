/* Your Logo (bg color) */
// Elements
const stContentAll = document.querySelectorAll(".st-content");
const bgColorSlider = document.querySelector(".yl-bg-slider");
const colorSliderPercent = document.querySelector(".yl-slider-percent");
const bgResetBtn = document.querySelector(".yl-bg-reset");
bgColorSlider.addEventListener("input", function () {
    const sliderVal = 255 - parseInt(this.value);
    const sliderValPercent = Math.round(100 - (sliderVal / 255 * 100)) + "%";
    const bgColor = `rgb(${sliderVal}, ${sliderVal}, ${sliderVal})`;
    // change the percent value (0% = white, 100% = black)
    colorSliderPercent.innerHTML = sliderValPercent;
    // Add the color as a CSS variable
    document.body.style.setProperty("--changed-bg-color", bgColor);
    // Add the class to each scrollTo content element
    stContentAll.forEach((stContent) => {
        stContent?.classList.add("changed-bg-color");
    });
});
bgResetBtn.addEventListener("click", function () {
    bgColorSlider.value = "128";
    colorSliderPercent.innerHTML = "";
    stContentAll.forEach((stContent) => {
        stContent?.classList.remove("changed-bg-color");
    });
});
/* Balance Section */
const balanceContent = document.querySelector(".balance .st-content");
// Create the grid overlay element
const gridOverlay = document.createElement("div");
gridOverlay.classList.add("grid-overlay");
balanceContent?.appendChild(gridOverlay);
// Create grid overlay "cells" and append them
for (let i = 1; i <= 96; i++) {
    const gridOverlayElem = document.createElement("div");
    gridOverlayElem.classList.add("grid-overlay-elem");
    gridOverlay.appendChild(gridOverlayElem);
}
