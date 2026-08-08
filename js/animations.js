/* 
   Solvra — GSAP ANIMATIONS
    */


/* 
   MAKE SURE GSAP IS AVAILABLE
   */

if (typeof gsap === "undefined") {

    console.error("GSAP is not loaded.");

} else {

    // Register ScrollTrigger

    gsap.registerPlugin(ScrollTrigger);


    /*
       1. INITIAL PAGE LOAD
     */

    const pageTimeline = gsap.timeline({

        defaults: {
            ease: "power3.out"
        }

    });


    pageTimeline

        .from(".navbar", {

            y: -40,

            opacity: 0,

            duration: 0.8

        })


        .from(".hero-label", {

            y: 30,

            opacity: 0,

            duration: 0.7

        }, "-=0.4")


        .from(".hero h1", {

            y: 80,

            opacity: 0,

            duration: 1.1

        }, "-=0.5")


        .from(".hero-description", {

            y: 30,

            opacity: 0,

            duration: 0.8

        }, "-=0.6")


        // .from(".hero-buttons", {

        //     y: 25,

        //     opacity: 0,

        //     duration: 0.7

        // }, "-=0.5")


        .from(".hero-stats .stat", {

            y: 25,

            opacity: 0,

            stagger: 0.15,

            duration: 0.6

        }, "-=0.3")


        .from(".solar-3d-container", {

            scale: 0.75,

            opacity: 0,

            duration: 1.5,

            ease: "power3.out"

        }, "-=1");



    /*
       2. NAVBAR SCROLL EFFECT
     */

    // ScrollTrigger.create({

    //     start: "top -80",

    //     onEnter: () => {

    //         document
    //             .querySelector(".navbar")
    //             ?.classList.add("scrolled");

    //     },

    //     onLeaveBack: () => {

    //         document
    //             .querySelector(".navbar")
    //             ?.classList.remove("scrolled");

    //     }

    // });



    /*
       3. SOLUTIONS HEADING
     */

    gsap.from(".solutions .section-label", {

        scrollTrigger: {

            trigger: ".solutions",

            start: "top 80%",

            toggleActions:
                "play none none reverse"

        },

        y: 30,

        opacity: 0,

        duration: 0.8

    });



    gsap.from(".solutions h2", {

        scrollTrigger: {

            trigger: ".solutions",

            start: "top 78%",

            toggleActions:
                "play none none reverse"

        },

        y: 70,

        opacity: 0,

        duration: 1,

        ease: "power3.out"

    });



    /*
       4. SOLUTION CARDS
     */

    gsap.from(".solution-card", {

        scrollTrigger: {

            trigger: ".solution-grid",

            start: "top 78%",

            toggleActions:
                "play none none reverse"

        },

        y: 80,

        opacity: 0,

        stagger: {

            each: 0.15

        },

        duration: 0.9,

        ease: "power3.out"

    });



    /*
       5. SOLUTION CARD NUMBER
     */

    gsap.from(".card-number", {

        scrollTrigger: {

            trigger: ".solution-grid",

            start: "top 70%"

        },

        scale: 0,

        opacity: 0,

        stagger: 0.15,

        duration: 0.5,

        ease: "back.out(1.7)"

    });



    /*
       6. IMPACT — PREMIUM REVEAL
     */


    // Left content

    gsap.from(".impact-content", {

        scrollTrigger: {

            trigger: ".impact",

            start: "top 72%",

            toggleActions:
                "play none none reverse"

        },

        x: -70,

        opacity: 0,

        duration: 1.1,

        ease: "power3.out"

    });



    // Statistics

    gsap.from(".impact-stat", {

        scrollTrigger: {

            trigger: ".impact-stats",

            start: "top 78%",

            toggleActions:
                "play none none reverse"

        },

        x: 60,

        opacity: 0,

        stagger: 0.18,

        duration: 0.9,

        ease: "power3.out"

    });



    /*
       7. IMPACT STATISTICS COUNTER
     */

    const counters =
        document.querySelectorAll(".counter");


    counters.forEach((counter, index) => {


        const values = [

            85,

            70,

            60

        ];


        const suffixes = [

            "%",

            "%",

            "%"

        ];


        const counterObject = {

            value: 0

        };


        gsap.to(counterObject, {

            value: values[index],

            duration: 2,

            ease: "power2.out",


            scrollTrigger: {

                trigger: counter,

                start: "top 85%",

                once: true

            },


            onUpdate: () => {

                counter.textContent =

                    Math.floor(
                        counterObject.value
                    )

                    +

                    suffixes[index];

            }

        });

    });



    /*
       8. IMPACT NUMBER ENTRANCE
     */

    gsap.from(".impact-stat strong", {

        scrollTrigger: {

            trigger: ".impact-stats",

            start: "top 80%",

            once: true

        },

        scale: 0.7,

        opacity: 0,

        stagger: 0.18,

        duration: 1,

        ease: "back.out(1.5)"

    });



    /*
       9. ABOUT IMAGE
    */

    gsap.from(".about-image", {

        scrollTrigger: {

            trigger: ".about",

            start: "top 75%"

        },

        x: -100,

        opacity: 0,

        scale: 0.92,

        duration: 1.2,

        ease: "power3.out"

    });



    /*
       10. ABOUT CONTENT
     */

    gsap.from(".about-content", {

        scrollTrigger: {

            trigger: ".about",

            start: "top 75%"

        },

        x: 80,

        opacity: 0,

        duration: 1.1,

        ease: "power3.out"

    });



    /*
       11. ABOUT IMAGE PARALLAX
     */

    gsap.to(".about-image", {

        y: -60,

        ease: "none",

        scrollTrigger: {

            trigger: ".about",

            start: "top bottom",

            end: "bottom top",

            scrub: 1

        }

    });



    /*
       12. ORIGINAL CTA ANIMATION
     */

    gsap.from(".cta .section-label", {

        scrollTrigger: {

            trigger: ".cta",

            start: "top 80%"

        },

        y: 30,

        opacity: 0,

        duration: 0.7

    });



    gsap.from(".cta h2", {

        scrollTrigger: {

            trigger: ".cta",

            start: "top 78%"

        },

        y: 80,

        opacity: 0,

        duration: 1.1,

        ease: "power3.out"

    });

    /*
       13. HERO PARALLAX
     */

    gsap.to(".solar-3d-container", {

        y: 120,

        ease: "none",

        scrollTrigger: {

            trigger: ".hero",

            start: "top top",

            end: "bottom top",

            scrub: 1

        }

    });



    /*
       14. HERO BACKGROUND PARALLAX
     */

    // gsap.to(".hero::before", {

    //     y: 100,

    //     ease: "none",

    //     scrollTrigger: {

    //         trigger: ".hero",

    //         start: "top top",

    //         end: "bottom top",

    //         scrub: 1

    //     }

    // });



    /*
       15. BUTTON HOVER EFFECT
     */

    const buttons =
        document.querySelectorAll(".primary-button");


    buttons.forEach((button) => {


        button.addEventListener(

            "mouseenter",

            () => {

                gsap.to(button, {

                    scale: 1.04,

                    duration: 0.25,

                    ease: "power2.out"

                });

            }

        );



        button.addEventListener(

            "mouseleave",

            () => {

                gsap.to(button, {

                    scale: 1,

                    duration: 0.25,

                    ease: "power2.out"

                });

            }

        );

    });



    /*
       16. NEW CTA DESCRIPTION
     */

    gsap.from(".cta-description", {

        scrollTrigger: {

            trigger: ".cta",

            start: "top 72%",

            once: true

        },

        y: 30,

        opacity: 0,

        duration: 0.8,

        delay: 0.15,

        ease: "power3.out"

    });



    /*
       17. NEW CTA BUTTON
     */

    gsap.from(".cta-button", {

        scrollTrigger: {

            trigger: ".cta",

            start: "top 68%",

            once: true

        },

        y: 35,

        opacity: 0,

        scale: 0.82,

        duration: 0.9,

        delay: 0.25,

        ease: "back.out(1.7)"

    });



    /*
       18. CTA CONTACT
     */

    gsap.from(".cta-contact", {

        scrollTrigger: {

            trigger: ".cta",

            start: "top 63%",

            once: true

        },

        y: 20,

        opacity: 0,

        duration: 0.7,

        delay: 0.35,

        ease: "power3.out"

    });



    /*
       19. CTA ORBIT ONE
     */

    gsap.to(".cta-orbit-one", {

        rotation: 360,

        duration: 18,

        repeat: -1,

        ease: "none"

    });



    /*
       20. CTA ORBIT TWO
    */

    gsap.to(".cta-orbit-two", {

        rotation: -360,

        duration: 28,

        repeat: -1,

        ease: "none"

    });



    /*
       21. CTA BACKGROUND GLOW
     */

    gsap.to(".cta-background-glow", {

        scale: 1.08,

        opacity: 0.8,

        duration: 3,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });



    /*
       22. FOOTER BRAND REVEAL
     */

    gsap.from(".site-footer .footer-brand", {

        scrollTrigger: {

            trigger: ".site-footer",

            start: "top 90%",

            once: true

        },

        y: 30,

        opacity: 0,

        duration: 0.8,

        ease: "power3.out"

    });



    /*
       23. FOOTER COLUMNS REVEAL
     */

    gsap.from(".site-footer .footer-column", {

        scrollTrigger: {

            trigger: ".site-footer",

            start: "top 90%",

            once: true

        },

        y: 25,

        opacity: 0,

        stagger: 0.12,

        duration: 0.7,

        ease: "power3.out"

    });



    /*
       24. FOOTER STATUS
    */

    gsap.from(".site-footer .footer-status", {

        scrollTrigger: {

            trigger: ".site-footer",

            start: "top 90%",

            once: true

        },

        x: -15,

        opacity: 0,

        duration: 0.7,

        delay: 0.25,

        ease: "power3.out"

    });



    /*
       25. FOOTER BOTTOM
     */

    gsap.from(".site-footer .footer-bottom", {

        scrollTrigger: {

            trigger: ".site-footer",

            start: "top 95%",

            once: true

        },

        opacity: 0,

        y: 15,

        duration: 0.8,

        delay: 0.2

    });



    /*
       26. FOOTER LOGO HOVER
     */

    const footerLogo =
        document.querySelector(".site-footer .footer-logo");


    if (footerLogo) {

        footerLogo.addEventListener(

            "mouseenter",

            () => {

                gsap.to(footerLogo, {

                    x: 4,

                    duration: 0.25,

                    ease: "power2.out"

                });

            }

        );


        footerLogo.addEventListener(

            "mouseleave",

            () => {

                gsap.to(footerLogo, {

                    x: 0,

                    duration: 0.25,

                    ease: "power2.out"

                });

            }

        );

    }



    /*
       27. FOOTER LINK HOVER
     */

    const footerLinks =
        document.querySelectorAll(
            ".site-footer .footer-column a"
        );


    footerLinks.forEach((link) => {

        link.addEventListener(

            "mouseenter",

            () => {

                gsap.to(link, {

                    x: 5,

                    duration: 0.25,

                    ease: "power2.out"

                });

            }

        );


        link.addEventListener(

            "mouseleave",

            () => {

                gsap.to(link, {

                    x: 0,

                    duration: 0.25,

                    ease: "power2.out"

                });

            }

        );

    });



    /*
       28. REFRESH SCROLLTRIGGER
    */

    window.addEventListener(

        "load",

        () => {

            ScrollTrigger.refresh();

        }

    );

}