/* Embedded SVG */
// Modal Upload Icon
const modUploadIcon = "<svg class='modal-icon lm-upload-icon' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><style>.cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;}</style></defs><circle class='cls-1' cx='100' cy='100' r='90'/><path class='cls-1 lm-upload-inner' d='M145.6,116.6v15.9a15,15,0,0,1-15,15H69.4a15,15,0,0,1-15-15V116.6'/><line class='cls-1 lm-upload-inner lm-upload-arrow lm-upload-arrowshaft' x1='100' y1='121.9' x2='100' y2='52.5'/><polyline class='cls-1 lm-upload-inner lm-upload-arrow' points='124.7 77.2 100 52.5 75.3 77.2'/></svg>";
// Modal Checkmark Icon
const modCheckmarkIcon = "<svg class='modal-icon lm-check-icon' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><style>.cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;}</style></defs><circle class='cls-1 lm-check-circle' cx='100' cy='100' r='90'/><polyline class='cls-1 lm-checkmark' points='51.9 103 84.1 135.3 148.1 71.3'/></svg>";
// Modal Wrong Icon
const modWrongIcon = "<svg class='modal-icon lm-wrong-icon' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><style>.cls-1{fill:none; stroke-linecap:round;stroke-linejoin:round;}</style></defs><circle class='cls-1' cx='100' cy='100' r='90'/><line class='cls-1 lm-wrong-inner' x1='61.3' y1='61.3' x2='138.7' y2='138.7'/><line class='cls-1 lm-wrong-inner' x1='138.7' y1='61.3' x2='61.3' y2='138.7'/></svg>";
// Scroll page to the top
function topPageScroll() {
    window.scrollTo(0, 0);
}
document.addEventListener("DOMContentLoaded", function () {
    /* Section fade-in/out */
    const sectionElements = document.querySelectorAll(".scrollto");
    function sectionFade() {
        sectionElements.forEach((section) => {
            // Section position
            const sectionPos = section.getBoundingClientRect();
            // Section heading element height
            const secHeadHeight = section.querySelector(".st-heading")?.offsetHeight;
            // window height
            const windowHeight = window.innerHeight;
            // Section fade in when it's at the bottom of the page
            if (sectionPos.top < windowHeight * 0.9 - secHeadHeight) {
                section.classList.add("fade-in");
            }
            else {
                section.classList.remove("fade-in");
            }
            // Section fade out when it's at the top of the page
            if (sectionPos.bottom < windowHeight * 0.1) {
                section.classList.remove("fade-in");
            }
        });
    }
    window.addEventListener("load", sectionFade);
    window.addEventListener("scroll", sectionFade);
    window.addEventListener("resize", sectionFade);
    /* Upload Again Button */
    const body = document.querySelector("body");
    const uploadAgainBtn = document.querySelector(".upload-again");
    // Temporary (delete later, I don't want to hide this element every time i refresh the page)
    //body!.classList.add("hide-modal");
    // Upload the logo again (show the modal after the first logo upload)
    uploadAgainBtn?.addEventListener("click", function () {
        // Scroll to the top of the page (async)
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
        // Show the logo upload modal again
        body?.classList.remove("hide-modal");
    });
    /* File Upload */
    // Drop zone element
    const dropZone = document.querySelector(".drop-zone");
    // File input
    const fileInput = document.querySelector(".lm-file");
    // Go back to the page button
    const goToPageBtn = document.querySelector(".to-page");
    // Insert the image into these elements
    const insertLogoElements = document.querySelectorAll(".insert-logo");
    // Accepted file types
    const fileTypes = ['image/png', 'image/svg+xml'];
    // TEMPORARY
    insertLogoElements.forEach((logoElem) => {
        // Create an image element
        const logoImg = document.createElement("img");
        logoImg.src = "int_resources/img/uverit-favicon-bbg.svg";
        logoImg.classList.add("insert-logo-img");
        // Remove previous content from the logo elements
        logoElem.innerHTML = "";
        // Append logo to the elements
        logoElem.appendChild(logoImg);
    });
    // Calculate the AVG image color
    function imgAvgColors(url) {
        // Scaled down image width (in px) - improve performance
        const imgScaledWidth = 140;
        // Create a new image element
        const img = document.createElement("img");
        img.src = url;
        // When the image is loaded
        img.onload = function () {
            // Image ratio
            const imgRatio = img.width / img.height;
            // Image new height
            const imgScaledHeight = Math.round(imgScaledWidth / imgRatio);
            // Create a canvas element
            const canvas = document.createElement('canvas');
            canvas.width = imgScaledWidth;
            canvas.height = imgScaledHeight;
            // Draw the image on the canvas
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            // Get the image data
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            // Loop through each pixel
            let totR = 0;
            let totG = 0;
            let totB = 0;
            let totA = 0;
            // Max and min color values
            let maxVal = 0;
            let minVal = 0;
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                const a = data[i + 3];
                totR += r;
                totG += g;
                totB += b;
                totA += a;
                maxVal += Math.max(r, g, b);
                minVal += Math.min(r, g, b);
            }
            const lightnessSum = (maxVal + minVal) / 2;
            // Number of pixels
            const pixelCount = data.length / 4;
            // Calculate the average color
            const avgR = Math.round(totR / pixelCount);
            const avgG = Math.round(totG / pixelCount);
            const avgB = Math.round(totB / pixelCount);
            const avgColor = `rgb(${avgR}, ${avgG}, ${avgB})`;
            console.log(avgColor);
            // Calculate the lightness
            const transparency = 100 - Math.round(totA / pixelCount / 255 * 100) + "%";
            console.log(transparency);
            // Calculate the lightness
            const lightness = Math.round(lightnessSum / pixelCount / 255 * 100);
            console.log(`Lightness: ${lightness}`);
            // Add a class to the body based on the image lightness
            if (lightness >= 95) {
                body.classList.add("dark-logo-bg");
            }
            if (lightness <= 10) {
                body.classList.add("light-logo-bg");
            }
        };
    }
    // Insert logo function
    function insertLogo(url) {
        insertLogoElements.forEach((logoElem) => {
            // Create an image element
            const logoImg = document.createElement("img");
            logoImg.src = url;
            logoImg.classList.add("insert-logo-img");
            // Remove previous content from the logo elements
            logoElem.innerHTML = "";
            // Append logo to the elements
            logoElem.appendChild(logoImg);
        });
    }
    // Insert upload icon
    function insertUploadIcon() {
        dropZone.innerHTML = modUploadIcon;
    }
    insertUploadIcon();
    // Remove upload icon active class
    function uploadIconActive() {
        dropZone?.classList.remove("modal-icon-active");
    }
    // Insert "wrong" icon
    function insertWrongIcon() {
        dropZone.innerHTML = modWrongIcon;
    }
    // Checkmark icon
    function successfulUpload() {
        dropZone.innerHTML = modCheckmarkIcon;
        setTimeout(function () {
            // Hide the logo upload modal
            body.classList.add("hide-modal");
            // Fade in the sections
            // Call the function multiple times to make sure every section gets a chance to fade in
            // 500ms would be too much delay, no content would look bad
            let intervalId = setInterval(sectionFade, 100);
            // Stop the interval after 1s
            setTimeout(() => {
                clearInterval(intervalId);
            }, 700);
            // Insert the upload icon and remove the classes
            setTimeout(function () {
                insertUploadIcon();
                dropZone?.classList.remove("modal-icon-active");
                dropZone?.classList.remove("modal-drop");
                goToPageBtn?.classList.add("uploaded-logo");
            }, 1000);
        }, 1500);
    }
    /* Go back to the page */
    goToPageBtn.innerHTML = "<p>Go Back</p>" + arrowIcon;
    goToPageBtn.addEventListener("click", function () {
        body.classList.add("hide-modal");
    });
    /* Document drag events */
    document.documentElement.addEventListener('dragover', function (e) {
        e.preventDefault();
        // Get the file dragged over the document
        const file = e.dataTransfer?.items[0];
        if (file && fileTypes.includes(file.type)) {
            dropZone?.classList.add("modal-icon-active");
        }
        else if (file &&
            !fileTypes.includes(file.type) &&
            !dropZone?.contains(document.querySelector(".lm-wrong-icon"))) {
            // Insert "wrong" icon
            insertWrongIcon();
        }
    });
    document.body.addEventListener('dragleave', function (e) {
        // If the mouse is within the window - do nothing
        if (e.clientX > 0 && e.clientY > 0 && e.clientX < window.innerWidth && e.clientY < window.innerHeight) {
            return;
        }
        // Insert upload icon
        insertUploadIcon();
        // Remove the active class
        uploadIconActive();
    });
    /* File on document drop */
    document.documentElement.addEventListener('drop', function (e) {
        // Prevent from opening the file in another tab
        e.preventDefault();
        const eTarget = e.target;
        if (!eTarget.closest(".drop-zone")) {
            // Insert upload icon
            insertUploadIcon();
            // Remove the active class
            uploadIconActive();
        }
    });
    /* Drop zone drag events */
    dropZone?.addEventListener('dragover', function (e) {
        // Get the file dragged over the document
        const file = e.dataTransfer?.items[0];
        if (file && fileTypes.includes(file.type)) {
            dropZone?.classList.add("modal-drop");
        }
    });
    dropZone?.addEventListener('dragleave', function (e) {
        dropZone?.classList.remove("modal-drop");
    });
    /* Drop zone drop event */
    dropZone?.addEventListener('drop', function (e) {
        // Prevent from opening the file in another tab
        e.preventDefault();
        // Get the dropped file
        const file = e.dataTransfer?.files[0];
        if (file && fileTypes.includes(file.type)) {
            // Create an URL object
            const url = URL.createObjectURL(file);
            // Insert images into the page elements
            insertLogo(url);
            // Successful Upload
            successfulUpload();
            // Calculate the AVG color values (async)
            setTimeout(() => {
                imgAvgColors(url);
            }, 0);
        }
        else {
            // Insert upload icon
            insertUploadIcon();
        }
    });
    /* File upload via input */
    fileInput?.addEventListener("change", function () {
        const file = fileInput.files[0];
        if (file && fileTypes.includes(file.type)) {
            // Create an URL object
            const url = URL.createObjectURL(file);
            // Insert images into the page elements
            insertLogo(url);
            // Successful Upload
            successfulUpload();
            // Calculate the AVG color values (async)
            setTimeout(() => {
                imgAvgColors(url);
            }, 0);
        }
        else if (file && !fileTypes.includes(file.type)) {
            // Input (in HTML) excludes undesired file types, but just in case
            // Insert "wrong" icon
            insertWrongIcon();
            // Insert ipload icon after some time
            setTimeout(function () {
                insertUploadIcon();
            }, 1000);
        }
    });
    // Make sure to scroll the page to X = 0 && Y = 0 on load 
    setTimeout(() => {
        topPageScroll();
    }, 50);
    // Add a body class (set page content to top -110vh)
    body?.classList.add("page-ready");
});
