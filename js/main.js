
/* 
   Solvra — MAIN JAVASCRIPT
    */

document.addEventListener("DOMContentLoaded", () => {

    /*
       MOBILE MENU
     */

    const menuButton =
        document.querySelector(".menu-button");

    const navLinks =
        document.querySelector(".nav-links");


    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-active");

        });


        /* Close menu after clicking a navigation link */

        navLinks
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener("click", () => {

                    navLinks.classList.remove(
                        "mobile-active"
                    );

                });

            });
    }


    /*
       SMOOTH ANCHOR NAVIGATION
     */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener("click", function (event) {

                const targetId =
                    this.getAttribute("href");


                /* Ignore href="#" */

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    event.preventDefault();

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });


    /*
       WEBSITE LOADED
     */

    console.log(
        "Solvra website loaded successfully."
    );

});

