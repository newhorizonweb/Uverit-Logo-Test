


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

    // Add the class the body element
    document.body.classList.add("changed-bg-color");
});

bgResetBtn!.addEventListener("click", function(){
    bgColorSlider!.value = "128";
    colorSliderPercent!.innerHTML = "";
    document.body.classList.remove("changed-bg-color");
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



    /* Scalability */

document.addEventListener("DOMContentLoaded", function(){

    const csContent:HTMLElement | null = document.querySelector(".si-change .st-content");

    const csSlider:HTMLInputElement | null = document.querySelector(".cs-slider");

    const csTxtWidth:HTMLElement | null = document.querySelector(".cs-slider-width");

    const csTxtMin:HTMLElement | null = document.querySelector(".cs-slider-min");

    const csTxtMax:HTMLElement | null = document.querySelector(".cs-slider-max");

    // Minimum width value in pixels
    const minSize:number = 24;

    // Check if the logo was resized (to set it to a width between min and max on load)
    let wasResized:boolean = false;

    function csLogoSize(){
        const logoImgParent:HTMLImageElement | null = document.querySelector(".si-insert-logo");
        const logoImg:HTMLImageElement | null = document.querySelector(".si-change .insert-logo-img");



        // Get the logo aspect ratio
        const csContentRatio:number = parseFloat(window.getComputedStyle(csContent as Element).aspectRatio.slice(0, -4));

        // Logo parent width and height
        const logoImgParWidth:number = logoImgParent!.offsetWidth;
        const logoImgParHeight:number = logoImgParent!.offsetHeight;

        // Calculate the max logo size 
        // Based on the logo aspect ratio or parent dimensions
        let maxSize:number = 0;

        if (csContentRatio <= 1){
            maxSize = Math.round(logoImgParHeight * csContentRatio);
        } else {
            maxSize = Math.round(Math.max(logoImgParWidth, logoImgParHeight));
        }

        // Set the slider min and max values
        csSlider!.setAttribute("min", minSize.toString());
        csSlider!.setAttribute("max", maxSize.toString());



        // Set the logo and slider txt info to a width between min and max on load
        if (!wasResized){
            csSlider!.value = ((maxSize + minSize) / 2).toString();
        }

        // Get the slider value
        const csSliderVal:number = parseFloat(csSlider!.value);

        // Set the slider txt info current width
        csTxtWidth!.innerHTML = csSliderVal + "px";

        // Set the slider txt info min size
        csTxtMin!.innerHTML = minSize + "px";

        // Set the slider txt info max size
        csTxtMax!.innerHTML = maxSize + "px";


        
        // Set the logo width
        logoImg!.style.width = csSliderVal+"px";

        // Mark the width as resized
        wasResized = true;
    }

    // Logo resize event listeners
    csSlider?.addEventListener("input", csLogoSize);
    window.addEventListener("resize", csLogoSize);

    // Logo parent element
    const logoParent:Element | null = document.querySelector(".si-insert-logo");

    // Check for any logo updates
    const config = {
        childList:true
    };

    const callback = function (mutationsList){
        for (const mutation of mutationsList){
            if (mutation.type === 'childList'){

                // Reset the logo size
                wasResized = false;

                // Delay the function call to wait for the aspect ratio function call
                setTimeout(csLogoSize, 250);
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(logoParent!, config);

});