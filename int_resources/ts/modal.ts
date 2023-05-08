


    /* Embedded SVG */

// Modal Upload Icon
const modUploadIcon:string = "<svg class='modal-icon lm-upload-icon' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><style>.cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;}</style></defs><circle class='cls-1' cx='100' cy='100' r='90'/><path class='cls-1 lm-upload-inner' d='M145.6,116.6v15.9a15,15,0,0,1-15,15H69.4a15,15,0,0,1-15-15V116.6'/><line class='cls-1 lm-upload-inner lm-upload-arrow lm-upload-arrowshaft' x1='100' y1='121.9' x2='100' y2='52.5'/><polyline class='cls-1 lm-upload-inner lm-upload-arrow' points='124.7 77.2 100 52.5 75.3 77.2'/></svg>";

// Modal Checkmark Icon
const modCheckmarkIcon:string = "<svg class='modal-icon lm-check-icon' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><style>.cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;}</style></defs><circle class='cls-1 lm-check-circle' cx='100' cy='100' r='90'/><polyline class='cls-1 lm-checkmark' points='51.9 103 84.1 135.3 148.1 71.3'/></svg>";

// Modal Wrong Icon
const modWrongIcon:string = "<svg class='modal-icon lm-wrong-icon' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><style>.cls-1{fill:none; stroke-linecap:round;stroke-linejoin:round;}</style></defs><circle class='cls-1' cx='100' cy='100' r='90'/><line class='cls-1 lm-wrong-inner' x1='61.3' y1='61.3' x2='138.7' y2='138.7'/><line class='cls-1 lm-wrong-inner' x1='138.7' y1='61.3' x2='61.3' y2='138.7'/></svg>";



// Scroll page to the top
function topPageScroll(){
    window.scrollTo(0, 0);
}

// Toggle between logo modal and page content
function pageToggle(){
    document.addEventListener('keydown', function(e) {
        if (e.key === "Enter") {
            document.body.classList.toggle("hide-modal");
            topPageScroll();
        }
        if (e.key === "ArrowLeft") {
            document.body.classList.remove("hide-modal");
            topPageScroll();
        }
        if (e.key === "ArrowRight") {
            document.body.classList.add("hide-modal");
            topPageScroll();
        }
    });
}



document.addEventListener("DOMContentLoaded", function(){



        /* Section fade-in/out */

    const sectionElements:NodeListOf<Element> = document.querySelectorAll(".scrollto");

    function sectionFade(){
        
        sectionElements.forEach((section) => {

            // Section position
            const sectionPos:DOMRect = section.getBoundingClientRect();

            // Section heading element height
            const secHeadHeight:number = (section.querySelector(".st-heading") as HTMLElement)?.offsetHeight;

            // window height
            const windowHeight:number = window.innerHeight;

            // Section fade in when it's at the bottom of the page
            if (sectionPos.top < windowHeight * 0.9 - secHeadHeight){
                section.classList.add("fade-in");
            } else {
                section.classList.remove("fade-in");
            }

            // Section fade out when it's at the top of the page
            if (sectionPos.bottom < windowHeight * 0.15){
                section.classList.remove("fade-in");
            }

        });
        
    }

    window.addEventListener("load", sectionFade);
    window.addEventListener("scroll", sectionFade);
    window.addEventListener("resize", sectionFade);


    
        /* Upload Again Button */
        
    const body:HTMLElement | null = document.querySelector("body");
    const uploadAgainBtn:HTMLElement | null = document.querySelector(".upload-again");

    // Temporary (delete later, I don't want to hide this element every time i refresh the page)
   // body!.classList.add("hide-modal");

    // Upload the logo again (show the modal after the first logo upload)
    uploadAgainBtn?.addEventListener("click", function(){

        // Scroll to the top of the page (async)
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 0);

        // Show the logo upload modal again
        body?.classList.remove("hide-modal");
    });

    

        /* File Upload */
    
    // Drop zone element
    const dropZone:HTMLElement | null = document.querySelector(".drop-zone");

    // File input
    const fileInput:HTMLInputElement | null = document.querySelector(".lm-file");

    // Go back to the page button
    const goToPageBtn:HTMLInputElement | null = document.querySelector(".to-page");

    // Insert the image into these elements
    const insertLogoElements:NodeListOf<Element> = document.querySelectorAll(".insert-logo");

    // Accepted file types
    const fileTypes = ['image/png', 'image/svg+xml'];





    // TEMPORARY
    insertLogoElements.forEach((logoElem) => {

        // Create an image element
        const logoImg:HTMLImageElement = document.createElement("img");
        logoImg.src = "int_resources/img/uverit-favicon-bbg.svg";
        logoImg.classList.add("insert-logo-img");

        // Remove previous content from the logo elements
        logoElem.innerHTML = "";

        // Append logo to the elements
        logoElem.appendChild(logoImg);
    });









    // Calculate the AVG image color
    function imgAvgColors(url){

        // Scaled down image width (in px) - improve performance
        const imgScaledWidth:number = 200;

        // Create a new image element
        const img:HTMLImageElement = document.createElement("img");
        img.src = url;

        // When the image is loaded
        img.onload = function(){

            // Image ratio
            const imgRatio:number = img.width / img.height;

            // Image new height
            const imgScaledHeight:number = Math.round(imgScaledWidth / imgRatio);
            
            // Create a canvas element
            const canvas:HTMLCanvasElement = document.createElement('canvas');
            canvas.width = imgScaledWidth;
            canvas.height = imgScaledHeight;

            // Draw the image on the canvas
            const ctx:CanvasRenderingContext2D | null = canvas.getContext('2d');
            ctx!.drawImage(img, 0, 0, canvas.width, canvas.height);

            // Get the image data
            const imageData:ImageData = ctx!.getImageData(0, 0, canvas.width, canvas.height);
            const data:Uint8ClampedArray = imageData.data;
        
            // Loop through each pixel
            let totR:number = 0;
            let totG:number = 0;
            let totB:number = 0;
            let totA:number = 0;

            // Max and min color values
            let maxVal:number = 0;
            let minVal:number = 0;

            // total number of non-transparent pixels
            let totAlpha:number = 0;
            console.time("loop")
            for (let i = 0; i < data.length; i += 4){
                const r:number = data[i];
                const g:number = data[i + 1];
                const b:number = data[i + 2];
                const a:number = data[i + 3];

                totA += a;

                if (a > 0){
                    totR += r;
                    totG += g;
                    totB += b;

                    maxVal += Math.max(r, g, b);
                    minVal += Math.min(r, g, b);
                    totAlpha++
                }
            }
            console.timeEnd("loop")
            // Calculate the average color
            const avgR:number = Math.round(totR / totAlpha);
            const avgG:number = Math.round(totG / totAlpha);
            const avgB:number = Math.round(totB / totAlpha);

            const avgColor:string = `rgb(${avgR}, ${avgG}, ${avgB})`;

            console.log(avgColor)

            // Calculate transparency
            const transparency:string = 100 - Math.round(totA / (data.length / 4) / 255 * 100) + "%";
            console.log(`Transparency: ${transparency}`)

            // Calculate lightness
            const lightnessSum:number = (maxVal + minVal) / 2;
            const lightness:number = Math.round(lightnessSum / totAlpha / 255 * 100);
            console.log(`Lightness: ${lightness}`);

            // Add a class to the body based on the image lightness
            if (lightness >= 90){
                body!.classList.add("dark-logo-bg");
            }

            if (lightness <= 18){
                body!.classList.add("light-logo-bg");
            }

        }
    }

    // Insert logo function
    function insertLogo(url){
        insertLogoElements.forEach((logoElem) => {

            // Create an image element
            const logoImg:HTMLImageElement = document.createElement("img");
            logoImg.src = url;
            logoImg.classList.add("insert-logo-img");

            // Remove previous content from the logo elements
            logoElem.innerHTML = "";

            // Append logo to the elements
            logoElem.appendChild(logoImg);
        });
    }

    // Insert upload icon
    function insertUploadIcon(){
        dropZone!.innerHTML = modUploadIcon;
    }
    insertUploadIcon();

    // Remove upload icon active class
    function uploadIconActive(){
        dropZone?.classList.remove("modal-icon-active");
    }

    // Insert "wrong" icon
    function insertWrongIcon(){
        dropZone!.innerHTML = modWrongIcon;
    }

    // Checkmark icon
    function successfulUpload(){
        dropZone!.innerHTML = modCheckmarkIcon;

        setTimeout(function(){

            // Hide the logo upload modal
            body!.classList.add("hide-modal");
            
            // Fade in the sections
            // Call the function multiple times to make sure every section gets a chance to fade in
            // 500ms would be too much delay, no content would look bad
            let intervalId = setInterval(sectionFade, 100);

            // Stop the interval after 1s
            setTimeout(() => {
                clearInterval(intervalId);
            }, 700);


            // Insert the upload icon and remove the classes
            setTimeout(function(){
                insertUploadIcon();
                
                dropZone?.classList.remove("modal-icon-active");
                dropZone?.classList.remove("modal-drop");
                
                goToPageBtn?.classList.add("uploaded-logo");
            }, 1000);

        }, 1500);

    }



        /* Go back to the page */

    goToPageBtn!.innerHTML = "<p>Go Back</p>" + arrowIcon;

    goToPageBtn!.addEventListener("click", function(){
        body!.classList.add("hide-modal");
    });



        /* Document drag events */

    document.documentElement.addEventListener('dragover', function(e){
        e.preventDefault();

        // Get the file dragged over the document
        const file:DataTransferItem | undefined = e.dataTransfer?.items[0];

        if (file && fileTypes.includes(file.type)){
            dropZone?.classList.add("modal-icon-active");
        } else if (file &&
        !fileTypes.includes(file.type) &&
        !dropZone?.contains(document.querySelector(".lm-wrong-icon"))){

            // Insert "wrong" icon
            insertWrongIcon();
        }
    });

    document.body.addEventListener('dragleave', function(e){

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

    document.documentElement.addEventListener('drop', function(e){
    
        // Prevent from opening the file in another tab
        e.preventDefault();

        const eTarget:HTMLElement | null = e.target as HTMLElement | null;

        if (!eTarget!.closest(".drop-zone")){
            // Insert upload icon
            insertUploadIcon();

            // Remove the active class
            uploadIconActive();
        }
    });



        /* Drop zone drag events */

    dropZone?.addEventListener('dragover', function(e){

        // Get the file dragged over the document
        const file:DataTransferItem | undefined = e.dataTransfer?.items[0];

        if (file && fileTypes.includes(file.type)){
            dropZone?.classList.add("modal-drop");
        }

    });

    dropZone?.addEventListener('dragleave', function(e){
        dropZone?.classList.remove("modal-drop");

    });



        /* Drop zone drop event */

    dropZone?.addEventListener('drop', function(e){

        // Prevent from opening the file in another tab
        e.preventDefault();

        // Get the dropped file
        const file = e.dataTransfer?.files[0];

        if (file && fileTypes.includes(file.type)){

            // Create an URL object
            const url:string = URL.createObjectURL(file);

            // Insert images into the page elements
            insertLogo(url);

            // Successful Upload
            successfulUpload();

            // Calculate the AVG color values (async)
            setTimeout(() => {
                imgAvgColors(url);
            }, 0);

            pageToggle();

        } else {

            // Insert upload icon
            insertUploadIcon();
        }

    });


    
        /* File upload via input */

    fileInput?.addEventListener("change", function(){

        const file:File = fileInput.files![0];

        if (file && fileTypes.includes(file.type)){

            // Create an URL object
            const url:string = URL.createObjectURL(file);

            // Insert images into the page elements
            insertLogo(url);

            // Successful Upload
            successfulUpload();

            // Calculate the AVG color values (async)
            setTimeout(() => {
                imgAvgColors(url);
            }, 0);

            pageToggle();

        } else if (file && !fileTypes.includes(file.type)){
            // Input (in HTML) excludes undesired file types, but just in case

            // Insert "wrong" icon
            insertWrongIcon();

            // Insert ipload icon after some time
            setTimeout(function(){
                insertUploadIcon();
            }, 1000);

        }

    });


    
    setTimeout(() => {
        
        // Make sure to scroll the page to X = 0 && Y = 0 on load 
        topPageScroll();

        // Add a body class (set page content to top -110vh)
        body?.classList.add("page-ready");
    }, 50);

});

