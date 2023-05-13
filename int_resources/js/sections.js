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
    // Add the class the body element
    document.body.classList.add("changed-bg-color");
});
bgResetBtn.addEventListener("click", function () {
    bgColorSlider.value = "128";
    colorSliderPercent.innerHTML = "";
    document.body.classList.remove("changed-bg-color");
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
/* Scalability */
document.addEventListener("DOMContentLoaded", function () {
    const csContent = document.querySelector(".si-change .si-insert-logo");
    const csSlider = document.querySelector(".cs-slider");
    const csTxtWidth = document.querySelector(".cs-slider-width");
    const csTxtMin = document.querySelector(".cs-slider-min");
    const csTxtMax = document.querySelector(".cs-slider-max");
    // Minimum width value in pixels
    const minSize = 24;
    // Check if the logo was resized (to set it to a width between min and max on load)
    let wasResized = false;
    function csLogoSize() {
        const logoImgParent = document.querySelector(".si-insert-logo");
        const logoImg = document.querySelector(".si-change .insert-logo-img");
        // Get the logo aspect ratio
        const csContentRatio = parseFloat(window.getComputedStyle(csContent).aspectRatio.slice(0, -4));
        // Logo parent width and height
        const logoImgParWidth = logoImgParent.offsetWidth;
        const logoImgParHeight = logoImgParent.offsetHeight;
        // Calculate the max logo size 
        // Based on the logo aspect ratio or parent width
        const maxSize = Math.round(Math.min(logoImgParWidth, Math.round(logoImgParHeight * csContentRatio)));
        // Set the slider min and max values
        csSlider.setAttribute("min", minSize.toString());
        csSlider.setAttribute("max", maxSize.toString());
        // Set the logo and slider txt info to a width between min and max on load
        if (!wasResized) {
            csSlider.value = ((maxSize + minSize) / 2).toString();
        }
        // Get the slider value
        const csSliderVal = parseFloat(csSlider.value);
        // Set the slider txt info current width
        csTxtWidth.innerHTML = csSliderVal + "px";
        // Set the slider txt info min size
        csTxtMin.innerHTML = minSize + "px";
        // Set the slider txt info max size
        csTxtMax.innerHTML = maxSize + "px";
        // Set the logo width
        logoImg.style.width = csSliderVal + "px";
        // Mark the width as resized
        wasResized = true;
    }
    // Logo resize event listeners
    csSlider?.addEventListener("input", csLogoSize);
    let resizeTimer;
    ;
    window.addEventListener("resize", function () {
        csLogoSize();
        // Call the function once more after resizing
        // If not, the max width wouldn't be accurate, since the resize event isn't called for every pixel when resizing fast
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            csLogoSize();
        }, 50);
    });
    // Logo parent element
    const logoParent = document.querySelector(".si-insert-logo");
    // Check for any logo updates
    const config = {
        childList: true
    };
    const callback = function (mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Reset the logo size
                wasResized = false;
                // Delay the function call to wait for the aspect ratio function call
                setTimeout(csLogoSize, 250);
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(logoParent, config);
});
/* Background Color */
// Section (element that changes the bg color)
const bgColorSection = document.querySelector(".bgc-section");
// Color items (buttons)
const colorItems = document.querySelectorAll(".bgc-item");
// Reset color button
const bgColorReset = document.querySelector(".bgc-reset");
// Color picker (user picks the color)
const bgColorPicker = document.querySelector("#bgc-input");
function rgbToHex(rgb) {
    const rgbArray = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    let hex = "#";
    if (!rgbArray) {
        return rgb;
    }
    for (var i = 1; i <= 3; i++) {
        hex += ("0" + parseInt(rgbArray[i], 10).toString(16)).slice(-2);
    }
    return hex;
}
// Change the bg color based on the clicked color item
colorItems.forEach(function (colorItem) {
    colorItem.addEventListener("click", function () {
        // Get the computed style
        const cItem = colorItem;
        const getStyle = window.getComputedStyle(cItem);
        // Get the bg color
        const colorItemColor = getStyle.backgroundColor;
        // Add the changed section color class
        bgColorSection?.classList.add("changed-section-color");
        // Change the bg color for items with that class (css variable)
        document.body.style.setProperty("--changed-section-color", colorItemColor);
        // Get the color in HEX and set the color picker value
        // So if the user clicks on the color item first, the color picker will get that color (so the user can change that color instead of some random one)
        const hexcolor = rgbToHex(colorItemColor);
        bgColorPicker.value = hexcolor;
    });
});
// Change the bg color from the color picker
bgColorPicker?.addEventListener("input", function () {
    // Get the color picker value
    const colorPickerVal = bgColorPicker.value;
    // Add the changed section color class
    bgColorSection?.classList.add("changed-section-color");
    // Change the bg color for items with that class (css variable)
    document.body.style.setProperty("--changed-section-color", colorPickerVal);
});
// Reset the section bg color
bgColorReset?.addEventListener("click", function () {
    bgColorSection?.classList.remove("changed-section-color");
    bgColorPicker.value = "#FFFFFF";
});
/* App Icons */
const phones = document.querySelectorAll(".ai-phone-div");
const iconArray = [
    { url: "USER_LOGO", color: "#FFF" },
    { url: "brush-icon.svg", color: "#88D62F" },
    { url: "clock-icon.svg", color: "#40455D" },
    { url: "facebook-icon.svg", color: "#0a81ed" },
    { url: "google-drive-icon.svg", color: "#FFFFFF" },
    { url: "google-play-icon.svg", color: "#FFFFFF" },
    { url: "list-icon.svg", color: "#C7AE58" },
    { url: "mail-icon.svg", color: "#8F8CEA" },
    { url: "note-icon.svg", color: "#E73271" },
    { url: "pin-icon.svg", color: "#F3F3F3" },
    { url: "settings-icon.svg", color: "#78A8BD" },
    { url: "spotify-icon.svg", color: "#1CCC5B" }
];
// Generate a random icon
function insertRandomIcon(phone) {
    // Create a copy of the iconArray
    // so the items are not removed from the original array causing problems
    const copiedIconArray = iconArray.slice();
    for (let icon = 0; icon < iconArray.length; icon++) {
        // Generate a random index
        const randIndex = Math.floor(Math.random() * copiedIconArray.length);
        const thisIcon = copiedIconArray[randIndex].url;
        // Create the icon HTML element
        const newIconDiv = document.createElement("div");
        newIconDiv.classList.add("ai-phone-icon");
        // Create a background-color element
        const iconBg = document.createElement("div");
        iconBg.classList.add("ai-phone-icon-bg");
        newIconDiv.appendChild(iconBg);
        // Check if it's a pre-defined icon or the uploaded logo
        if (thisIcon !== "USER_LOGO") {
            // Set the icon bg color
            iconBg.style.backgroundColor = copiedIconArray[randIndex].color;
            const newIcon = document.createElement("img");
            newIcon.src = `int_resources/img/app_icons/${thisIcon}`;
            newIconDiv.appendChild(newIcon);
        }
        else {
            newIconDiv.classList.add("insert-logo");
        }
        // Append the icon
        phone.querySelector(".ai-phone-icons").appendChild(newIconDiv);
        // Remove the item from the array, so it won't repeat
        copiedIconArray.splice(randIndex, 1);
    }
}
// Insert the current time
function currentTime(phone) {
    const now = new Date();
    const hours = now.getHours().toString();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const date = now.toLocaleString('en-US', { month: 'short', day: 'numeric' });
    const weekDay = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(now);
    phone.querySelector(".ai-time-bar").innerHTML = hours + ":" + minutes;
    phone.querySelector(".ai-time").innerHTML = hours.padStart(2, '0') + ":" + minutes;
    phone.querySelector(".ai-day").innerHTML = `${weekDay}, ${date}`;
}
// Call the functions for each phone
phones.forEach((phone) => {
    insertRandomIcon(phone);
    currentTime(phone);
});
