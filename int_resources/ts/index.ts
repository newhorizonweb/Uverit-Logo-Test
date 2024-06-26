


// Arrow icon
const arrowIcon:string = "<svg class='scrollicon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 426.3 255.4' xmlns:v='https://vecta.io/nano'><path d='M414 12.2l-.3-.2a43.13 43.13 0 0 0-29.4-12C373-.1 362.1 4.4 354 12.4L213.6 153.6h0 0 0L73.2 12.4C65.1 4.4 54.2-.1 42.9 0a43.13 43.13 0 0 0-29.4 12l-.3.2C-3.3 29-3.1 56 13.5 72.6l170.7 170.6c8.2 8 18.8 12.1 29.3 12.2h.1 0 0 0c10.6-.1 21.2-4.2 29.4-12.2L413.7 72.6c16.6-16.6 16.8-43.6.3-60.4z'/></svg>";



document.addEventListener("DOMContentLoaded", function(){



        /* Program Settings */

    // Program Version
    const programVersion:string = "v1.0.5";

    // Uverit URL
    const uveritLink:string = "https://github.com/newhorizonweb";



        /* Embedded SVG */

    // Uverit Logo
    const uveritLogo:string = "<svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 604.944 172.884'><defs></defs><path class='cls-1' d='M204.528 236.239a12.641 12.641 0 0 1 9.46 3.85 13.2 13.2 0 0 1 3.74 9.57v55.88q0 23.322-12.98 36.96t-37.4 13.64q-24.42 0-37.29-13.64t-12.87-36.96v-55.88a13.191 13.191 0 0 1 3.74-9.57 13.547 13.547 0 0 1 18.92 0 13.2 13.2 0 0 1 3.74 9.57v55.88q0 13.421 5.94 19.909t17.82 6.49q12.1 0 18.04-6.49t5.94-19.909v-55.88a13.191 13.191 0 0 1 3.74-9.57 12.631 12.631 0 0 1 9.46-3.85zM251.606 236.239a14.831 14.831 0 0 1 7.7 2.09 12.851 12.851 0 0 1 5.28 6.27l32.34 73.92-4.84 2.2 33-75.9q3.738-8.8 11.66-8.36a12.064 12.064 0 0 1 8.91 3.41 11.511 11.511 0 0 1 3.41 8.47 11.165 11.165 0 0 1-.55 3.3 34.438 34.438 0 0 1-1.21 3.3l-41.14 90.64q-3.522 7.918-11.22 8.359a11.982 11.982 0 0 1-8.03-1.54 13.778 13.778 0 0 1-5.83-6.819l-40.92-90.64q-.444-1.1-.99-2.86a14.026 14.026 0 0 1-.55-4.18q0-3.96 3.52-7.81a12.193 12.193 0 0 1 9.46-3.85zM423.207 356.139q-18.7 0-32.45-7.81a53.9 53.9 0 0 1-21.12-21.23 61.99 61.99 0 0 1-7.369-30.36q0-19.8 8.029-33.77a56.786 56.786 0 0 1 21.011-21.45 54.247 54.247 0 0 1 27.5-7.48 50.063 50.063 0 0 1 21.228 4.62 58.1 58.1 0 0 1 17.711 12.65 61.556 61.556 0 0 1 12.209 18.59 56.546 56.546 0 0 1 4.512 22.44 11.3 11.3 0 0 1-4.182 8.58 13.99 13.99 0 0 1-9.238 3.3h-84.041l-6.6-22h80.74l-4.839 4.4v-5.94a20.116 20.116 0 0 0-4.51-11.44 29.51 29.51 0 0 0-10.121-8.03 28.833 28.833 0 0 0-12.869-2.97A41.735 41.735 0 0 0 406.487 260a23.635 23.635 0 0 0-9.9 5.94 28.836 28.836 0 0 0-6.6 11.22q-2.423 7.043-2.42 17.82 0 11.879 4.951 20.129a33.827 33.827 0 0 0 29.369 16.83 51.136 51.136 0 0 0 12.979-1.319 29.209 29.209 0 0 0 7.811-3.19q2.97-1.866 5.39-3.191a16.784 16.784 0 0 1 7.481-1.979 11.08 11.08 0 0 1 11.219 11q0 5.94-6.161 10.78-5.721 4.842-16.058 8.47a63.993 63.993 0 0 1-21.341 3.629zM509.664 353.938a12.623 12.623 0 0 1-9.46-3.849 13.177 13.177 0 0 1-3.74-9.57v-90.86a13.186 13.186 0 0 1 3.74-9.57 13.547 13.547 0 0 1 18.92 0 13.2 13.2 0 0 1 3.74 9.57v20.68l-1.54-14.74a34.257 34.257 0 0 1 6.27-9.35 37.237 37.237 0 0 1 8.69-6.82 39.467 39.467 0 0 1 10.34-4.07 46.963 46.963 0 0 1 11-1.32 16.832 16.832 0 0 1 11.11 3.74q4.506 3.743 4.51 8.8 0 7.26-3.74 10.45a12.292 12.292 0 0 1-8.14 3.19 18.2 18.2 0 0 1-7.59-1.54 18.847 18.847 0 0 0-7.81-1.54 19.163 19.163 0 0 0-8.03 1.87 22.111 22.111 0 0 0-7.48 5.83 30.7 30.7 0 0 0-5.5 9.79 40.733 40.733 0 0 0-2.09 13.75v52.14a13.193 13.193 0 0 1-3.74 9.57 12.631 12.631 0 0 1-9.46 3.849zM603.382 221.939q-7.482 0-10.561-2.42t-3.08-8.58v-4.18q0-6.378 3.41-8.69t10.451-2.31q7.7 0 10.78 2.42t3.08 8.58v4.18q0 6.384-3.3 8.69t-10.78 2.31zm13.42 118.58a13.193 13.193 0 0 1-3.74 9.57 13.55 13.55 0 0 1-18.92 0 13.178 13.178 0 0 1-3.741-9.57v-90.86a13.187 13.187 0 0 1 3.741-9.57 13.547 13.547 0 0 1 18.92 0 13.2 13.2 0 0 1 3.74 9.57zM645.18 238.439h52.139a12.032 12.032 0 0 1 12.321 12.32 11.317 11.317 0 0 1-3.521 8.47 12.137 12.137 0 0 1-8.8 3.41H645.18a12.032 12.032 0 0 1-12.321-12.32 11.318 11.318 0 0 1 3.521-8.47 12.143 12.143 0 0 1 8.8-3.41zm23.54-27.5a12.285 12.285 0 0 1 9.349 3.85 13.416 13.416 0 0 1 3.63 9.57v97.9a9.56 9.56 0 0 0 1.21 5.059 6.91 6.91 0 0 0 3.3 2.861 11.464 11.464 0 0 0 4.51.88 11.651 11.651 0 0 0 4.84-.991 12.217 12.217 0 0 1 5.059-.989 7.418 7.418 0 0 1 5.61 2.859q2.527 2.863 2.531 7.92 0 6.163-6.71 10.121a27.885 27.885 0 0 1-14.41 3.959 75.337 75.337 0 0 1-10.231-.769 27.629 27.629 0 0 1-10.559-3.74 22.881 22.881 0 0 1-8.25-9.13q-3.3-6.157-3.3-16.941v-99a13.152 13.152 0 0 1 13.42-13.42z' transform='translate(-104.696 -195.759)'/><path class='cls-2' d='M167.348 368.643c-19.785 0-35.391-5.91-46.386-17.564-10.412-11.035-15.881-25.686-16.257-43.554 0-.085-.008-.171-.009-.259a4 4 0 0 1 3.945-4.2h.053a4 4 0 0 1 4 4.087c.3 15.916 5.035 28.849 14.082 38.437 9.423 9.989 23.072 15.054 40.567 15.054s31.167-5.06 40.663-15.039c9.436-9.916 14.221-23.4 14.221-40.065v-55.88a17.866 17.866 0 0 0-5.02-12.715 16.9 16.9 0 0 0-11.261-5.16 4.008 4.008 0 1 1 .428-8 5.2 5.2 0 0 1 .627.061 24.994 24.994 0 0 1 15.944 7.526 25.719 25.719 0 0 1 7.282 18.29v55.88c0 18.79-5.526 34.126-16.425 45.58-11.061 11.625-26.692 17.521-46.454 17.521z' transform='translate(-104.696 -195.759)'/><path class='cls-2' d='M167.348 327.435c-6.66 0-11.4-1.646-14.5-5.03-3.156-3.446-4.757-9.121-4.757-16.866v-55.88a17.865 17.865 0 0 0-5.02-12.715 16.894 16.894 0 0 0-11.25-5.159 4.008 4.008 0 1 1 .43-8 4.886 4.886 0 0 1 .632.062 24.988 24.988 0 0 1 15.925 7.524 25.714 25.714 0 0 1 7.283 18.29v55.88c0 7.729 1.859 10.592 2.658 11.465 1.476 1.613 4.368 2.431 8.6 2.431 4.314 0 7.362-.839 8.815-2.427 1.511-1.651 2.471-5.267 2.635-9.923a4.005 4.005 0 1 1 8 .225c0 .135-.01.268-.023.4-.289 6.676-1.874 11.6-4.715 14.7-3.048 3.331-7.999 5.023-14.713 5.023z' transform='translate(-104.696 -195.759)'/></svg>";

    // Navigation Upload Icon
    const navUploadIcon:string = "<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><style>.cls-1{fill:none; stroke-linecap:round;stroke-linejoin:round;}</style></defs><path class='cls-1' d='M187.2,128.2v30.3a28.8,28.8,0,0,1-28.7,28.7H41.5a28.8,28.8,0,0,1-28.7-28.7V128.2'/><line class='cls-1' x1='100' y1='145.4' x2='100' y2='12.7'/><polyline class='cls-1' points='147.2 60 100 12.7 52.8 60'/></svg>";

    // Fiverr Icon
    const footerIcon:string = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path class='cls-1' d='M443.9,154c-3.4-24.1-10.1-46.4-28.4-63.6-2.4-2.2-2.9-4.2-1.5-7.4,11.1-26.1,9.7-52.2.2-78.5-1-3-2.6-4.2-6.4-3.8-9.2,1-17,5.3-24.5,9.9-15.5,9.4-27.4,22.7-37.8,37.3-2.3,3.1-4,3.1-6.4,1.3-3.1-2.3-6.4-4.2-10-5.5-15.5-5.7-31.7-7.9-48.1-8.2-23-.5-46.2-1.1-69.2,1.3-12.8,1.4-25.8,3.6-36.9,10.7-8.4,5.4-7.6,3.1-11.5-2.2-13.7-18.7-29.9-34.1-51.9-42.7-11.2-4.5-13.9-3.3-16.4,8.5-.1.8-.2,1.6-.5,2.3-7.2,23.1-6.4,46.2,2.1,68.7,1.7,4.4.7,6.4-2.1,9.1-8.9,8.4-15.2,18.6-19.6,29.7-7,18-9.5,37.1-10.5,56.4-.9,15.2-.2,30.6-.3,45.8-.1,8.7,2.3,17,4.4,25.2,3.8,15.1,10.4,29.2,19.9,41.8,19.8,26.5,47.1,41.8,78.1,51.2,11.2,3.4,23.1,4.4,34.9,7.3-2.5,5-5.8,9.2-7.9,14.1-4.6,11-7,22.5-7.8,34.3-.2,2.6-1.3,4.2-3.8,4.9-12.5,3.8-25,6.3-38.1,4.8-21.8-2.5-39.8-11.7-53.8-28.5-7-8.4-11.5-18.3-18.7-26.5-14.2-15.9-31.7-22.9-52.9-20.7-4.6.5-5.8,3.3-3.2,7.1,1,1.4,2.5,2.3,3.8,3.4,4.1,3.7,9.6,5.5,13.2,10,12.9,16.4,23.9,33.9,33.3,52.7,10.4,20.8,27.2,37.3,49.1,45.5,11.3,4.3,23.4,6.3,35.4,6.6,6,.1,12-.1,18-.7s6-.7,9-1.1,7-2.1,8.4-.1,1.2,6.8,1.4,9.1c1.1,13,7,25.5,16.6,34.5,6.6,6.2,14.9,10.6,23.7,12.8s16.3,1.5,24.5,1.5h19.8c15.3,0,30.2-6.9,40.2-18.5,7.9-9.3,12.3-21.2,12.6-33.3.1-5.6,0-11.2,0-16.8s0-9.6,0-14.5c0-11.1.3-22.2.2-33.3,0-7.6-1.1-15.3-3.2-22.6-1.3-4.5-3.2-8.7-5.3-12.9-1.1-2.1-2.2-4.1-3.3-6.2s-2.4-5.4-3.2-5.2c14.9-3.7,29.9-5,44.1-10.3,19.9-7.3,38.5-17,54-31.5,26.3-24.9,38.5-56,39.4-91.8.6-20.4-.2-40.8-3.1-61.1Z'/></svg>";



        /* Insert Uverit Logo into the HTML elements */

    const logoElements:NodeListOf<Element> = document.querySelectorAll(".uverit-logo");

    logoElements.forEach((logoElem) => {
        logoElem.innerHTML = uveritLogo;
    });



    //*--|*|--*\\_____// Footer \\_____//*--|*|--*\\



    const footerDate:number = new Date().getFullYear();

    const footerContent:string =  
    "<div class='wrapper'>" +
        "<div class='brand'>" +
            `<div class='brand-logo uverit-logo' onclick='scrollToTop()'>
                ${uveritLogo}
            </div>` +
    
            "<div class='socials'>" +
                "<h6>Uverit on GitHub</h6>" +
                `<a href='${uveritLink}' class='social-btn' target='_blank' rel='noreferrer' aria-label='GitHub Icon (link)'></a>`+
            "</div>" +
        "</div>" +

        "<div class='credits'>" +
            `<a href='${uveritLink}' target='_blank' rel='noreferrer'>` + 
                "© Uverit Logo Test " + programVersion + " - " + footerDate + 
            "</a>" +
        "</div>" +
    "</div>";

    const footer:HTMLElement = document.getElementsByTagName("footer")[0];
    footer.innerHTML = footerContent;



        /* Insert Fiverr Logo into the footer link */

    document.querySelector(".social-btn")!.innerHTML = footerIcon;



    //*--|*|--*\\_____// Navigation \\_____//*--|*|--*\\



        /* Nav */

    // Nav elements
    const nav:HTMLElement | null = document.querySelector("nav");
    const navigation:HTMLElement | null = document.querySelector(".navigation");
    const burger:HTMLElement | null = document.querySelector(".burger-btn");

    // Adjust the navigation when the page is scrolled down (stick it to the top)
    // + Hide the nav on scroll on mobile
    function navOnScroll(){
        if (window.scrollY > 0){
            nav!.classList.add("scrolled-nav");

            if (document.querySelector(".mobile-nav")){
                document.querySelector(".mobile-nav")!.classList.remove("nav-open");
            }
            
        } else {
            nav!.classList.remove("scrolled-nav");
        }
    }

    // Hide the nav on scroll on mobile
    function navHideOnScroll(){
        if (window.innerWidth <= 440){
            navigation!.classList.add("mobile-nav");
        } else {
            navigation!.classList.remove("mobile-nav");
        }
    }

    window.addEventListener("load", navOnScroll);
    window.addEventListener("scroll", navOnScroll);

    window.addEventListener("load", navHideOnScroll);
    window.addEventListener("resize", navHideOnScroll);



        /* Nav Upload Icon */

    const navUploadElem = document.querySelector(".upload-again");
    navUploadElem!.innerHTML = navUploadIcon;



        /* Nav Burger */

    // Open the navbar element on burger button click
    burger?.addEventListener("click", function(){
        navigation?.classList.toggle("nav-open");
    });

    // Close the navbar
    window?.addEventListener("click", function(e){
        const thisTarget:HTMLElement = e.target as HTMLElement;

        if (!thisTarget.closest(".navbar") &&
        !thisTarget.closest(".burger-btn") ||
        thisTarget.closest(".nav-link")){
            navigation?.classList.remove("nav-open");
        }
    });

    document.addEventListener('keyup', function(e){
        const eTarget:HTMLElement | null = e.target as HTMLElement;

        if (eTarget &&
        e.key === "Tab" &&
        document.body.classList.contains("hide-modal") &&
        eTarget!.classList.contains("nav-link-inner")){
            eTarget.focus();
            navigation?.classList.add("nav-open");
        } else {
            navigation?.classList.remove("nav-open");
        }
    });

        /* Navbar Elements + Scroll */

    // Elements
    const navbarInner:HTMLElement | null = document.querySelector(".navbar-inner");
    const scrolltoElements:NodeListOf<Element> = document.querySelectorAll(".scrollto");
    const stElementHeadings:NodeListOf<Element> = document.querySelectorAll(".st-heading");

    for (let i = 0; i < scrolltoElements.length; i++){

        // Add a class to the element
        const scrolltoElem:Element = scrolltoElements[i];
        const stElemHeading:Element = stElementHeadings[i];

        scrolltoElem.classList.add("nav-link"+i);
        scrolltoElem.setAttribute("data-link", "nav-link"+i);

        // Create nav-link element
        const navLink:HTMLElement = document.createElement("div");
        navLink.classList.add("nav-link");
        navLink.setAttribute("data-link", "nav-link"+i);

        // Create nav-link-inner element
        const navLinkInner:HTMLElement = document.createElement("p");
        navLinkInner.classList.add("nav-link-inner");
        navLinkInner.setAttribute("tabindex", "0");
        navLinkInner.innerHTML = stElemHeading.querySelector(".mh-title")!.innerHTML;
        navLink.appendChild(navLinkInner)

        // Append everything
        navbarInner?.appendChild(navLink);
    }

});