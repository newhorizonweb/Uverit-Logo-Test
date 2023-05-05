/* Embedded SVG */
// Modal Upload Icon
const modUploadIcon = "<svg class='modal-icon lm-upload-icon' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><style>.cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;}</style></defs><circle class='cls-1' cx='100' cy='100' r='90'/><path class='cls-1 lm-upload-inner' d='M145.6,116.6v15.9a15,15,0,0,1-15,15H69.4a15,15,0,0,1-15-15V116.6'/><line class='cls-1 lm-upload-inner lm-upload-arrow lm-upload-arrowshaft' x1='100' y1='121.9' x2='100' y2='52.5'/><polyline class='cls-1 lm-upload-inner lm-upload-arrow' points='124.7 77.2 100 52.5 75.3 77.2'/></svg>";
// Modal Checkmark Icon
const modCheckmarkIcon = "<svg class='modal-icon lm-check-icon' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><style>.cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;}</style></defs><circle class='cls-1 lm-check-circle' cx='100' cy='100' r='90'/><polyline class='cls-1 lm-checkmark' points='51.9 103 84.1 135.3 148.1 71.3'/></svg>";
// Modal Wrong Icon
const modWrongIcon = "<svg class='modal-icon lm-wrong-icon' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><style>.cls-1{fill:none; stroke-linecap:round;stroke-linejoin:round;}</style></defs><circle class='cls-1' cx='100' cy='100' r='90'/><line class='cls-1 lm-wrong-inner' x1='61.3' y1='61.3' x2='138.7' y2='138.7'/><line class='cls-1 lm-wrong-inner' x1='138.7' y1='61.3' x2='61.3' y2='138.7'/></svg>";
document.addEventListener("DOMContentLoaded", function () {
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
    // Insert logo function
    function insertLogo(url) {
        insertLogoElements.forEach((logoElem) => {
            // Create an image element
            const logoImg = document.createElement("img");
            logoImg.src = url;
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
});
