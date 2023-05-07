


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