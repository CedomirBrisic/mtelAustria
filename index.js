$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

    $(window).on('orientationchange', function (event) {
        location.reload();
    });


    // ----------------------------- PORTRAIT ---------------------------
    // ----------------------------- PORTRAIT ---------------------------
    // ----------------------------- PORTRAIT ---------------------------
    if (window.innerWidth < innerHeight) {


        // ----------------------------- PPT 1 ---------------------------
        // ----------------------------- PPT 1 ---------------------------
        // ----------------------------- PPT 1 ---------------------------
        gsap.to('.whitesnake-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top bottom',
                endTrigger: '.trigger-3',
                end: 'top bottom',
                scrub: 1
            },
            right: 0
        })
        gsap.to('.ppt1-title', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top bottom',
                endTrigger: '.trigger-3',
                end: 'top bottom',
                scrub: 1
            },
            right: "5.833333333333333vw"
        })
        gsap.to('.ppt1-subtitle', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top bottom',
                endTrigger: '.trigger-3',
                end: 'top bottom',
                scrub: 1
            },
            right: "5.833333333333333vw"
        })
        gsap.to('.ppt1-button-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top bottom',
                endTrigger: '.trigger-3',
                end: 'top bottom',
                scrub: 1
            },
            right: "5.833333333333333vw"
        })





        gsap.to('.phone-container', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-3',
                start: 'top bottom',
                endTrigger: '.trigger-5',
                end: 'top bottom',
                scrub: 1
            },
            width: "64.81481481481481VW",
            height: "130.83333333333334VW",
            top: 0
        })

        gsap.to('.whitesnake-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-4',
                start: 'top 50%',
                endTrigger: '.trigger-5',
                end: 'top bottom',
                scrub: 1
            },
            xPercent: 100
        })
        gsap.to('.ppt1-title', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-4',
                start: 'top 50%',
                endTrigger: '.trigger-5',
                end: 'top bottom',
                scrub: 1
            },
            xPercent: 125
        })
        gsap.to('.ppt1-subtitle', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-4',
                start: 'top 50%',
                endTrigger: '.trigger-5',
                end: 'top bottom',
                scrub: 1
            },
            xPercent: 125
        })
        gsap.to('.ppt1-button-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-4',
                start: 'top 50%',
                endTrigger: '.trigger-5',
                end: 'top bottom',
                scrub: 1
            },
            xPercent: 150
        })

        gsap.to('.ppt1-viewport-img1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-4',
                start: 'top 50%',
                endTrigger: '.trigger-5',
                end: 'top bottom',
                scrub: 1
            },
            opacity: 0
        })


        gsap.to('.ppt1-viewport-img2', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-5',
                start: 'top bottom',
                endTrigger: '.trigger-6',
                end: 'top bottom',
                scrub: 1
            },
            right: "100%"
        })
        gsap.to('.ppt1-button-2 ', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-5',
                start: 'top bottom',
                end: 'top top',
                scrub: 1
            },
            opacity: 1
        })

        gsap.to('.ppt1-viewport-img3', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-5',
                start: 'top bottom',
                endTrigger: '.trigger-6',
                end: 'top bottom',
                scrub: 1
            },
            right: 0
        })

        gsap.to('.ppt1-viewport-img3', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-7',
                start: 'top bottom',
                endTrigger: '.trigger-8',
                end: 'top bottom',
                scrub: 1
            },
            xPercent: -100
        })

        gsap.to('.ppt1-viewport-img4', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-7',
                start: 'top bottom',
                endTrigger: '.trigger-8',
                end: 'top bottom',
                scrub: 1
            },
            xPercent: -100
        })


        // ----------------------------- PPT 2 ---------------------------
        // ----------------------------- PPT 2 ---------------------------
        // ----------------------------- PPT 2 ---------------------------

        gsap.to('.ppt2-container', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-9',
                start: 'top bottom',
                end: 'top 50%',
                scrub: 1
            },
            top: 0
        })
        gsap.to('.ppt1-wrapper', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-9',
                start: 'top bottom',
                end: 'top 50%',
                scrub: 1
            },
            opacity: 0
        })

        gsap.to('.whitesnake-2', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-9',
                start: 'top 80%',
                endTrigger: '.trigger-10',
                end: 'top 80%',
                scrub: 1
            },
            right: 0
        })
        gsap.to('.ppt2-title', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-9',
                start: 'top 70%',
                endTrigger: '.trigger-10',
                end: 'top 70%',
                scrub: 1
            },
            right: '5.833333333333333vw'
        })
        gsap.to('.ppt2-subtitle', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-9',
                start: 'top 60%',
                endTrigger: '.trigger-10',
                end: 'top 60%',
                scrub: 1
            },
            right: '5.833333333333333vw'
        })
        gsap.to('.ppt2-button-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-9',
                start: 'top 50%',
                endTrigger: '.trigger-10',
                end: 'top 50%',
                scrub: 1
            },
            right: '5.833333333333333vw'
        })

        gsap.to('.ppt2-bluebackground-after', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-10',
                start: 'top 50%',
                end: 'top 25%',
                scrub: 1
            },
            opacity: 0,
        })
        gsap.to('.ppt2-bluebackground-after', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-11',
                start: 'top 50%',
                end: 'top top',
                scrub: 1
            },
            scale: 0
        })


        gsap.to('.ppt2-bluebackground', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-11',
                start: 'top 50%',
                endTrigger: '.trigger-12',
                end: 'top top',
                scrub: 1
            },
            width: "120%",
            height: "71.25vw",
            bottom: "38%",
        })
        gsap.to('.ppt2-bluebackground', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-12',
                start: 'top 25%',
                endTrigger: '.trigger-12',
                end: 'top top',
                scrub: 1
            },
            opacity: 0
        })


        gsap.to('.whitesnake-2', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-11',
                start: 'top top',
                endTrigger: '.trigger-12',
                end: 'top 50%',
                scrub: 1
            },
            xPercent: 150
        })
        gsap.to('.ppt2-title', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-11',
                start: 'top top',
                endTrigger: '.trigger-12',
                end: 'top 50%',
                scrub: 1
            },
            xPercent: 150
        })
        gsap.to('.ppt2-subtitle', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-11',
                start: 'top top',
                endTrigger: '.trigger-12',
                end: 'top 50%',
                scrub: 1
            },
            xPercent: 150
        })
        gsap.to('.ppt2-button-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-11',
                start: 'top top',
                endTrigger: '.trigger-12',
                end: 'top 50%',
                scrub: 1
            },
            xPercent: 150
        })

        gsap.to('.ppt2-tv-container', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-13',
                start: 'top top',
                endTrigger: '.trigger-14',
                end: 'top top',
                scrub: 1,
            },
            width: '96.38888888888889VW',
            height: '63.14814814814815VW',
            left: '1.8VW',
            bottom: '52%'
        })

        gsap.to('.ppt2-telefon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-14',
                start: 'top top',
                endTrigger: '.trigger-15',
                end: 'top top',
                scrub: 1,
            },
            right: '0'
        })

        gsap.to('.ppt2-stb', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-15',
                start: 'top 50%',
                endTrigger: '.trigger-16',
                end: 'top top',
                scrub: 1,
            },
            left: '3.5185185185185186VW'
        })

        gsap.to('.ppt2-offer-banner-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-15',
                start: 'top 50%',
                endTrigger: '.trigger-16',
                end: 'top top',
                scrub: 1,
            },
            left: '0'
        })


        gsap.to('.ppt2-tv-slide1-column1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-14',
                start: 'top top',
                endTrigger: '.trigger-15',
                end: 'top 50%',
                scrub: 1,
            },
            top: '0'
        })
        gsap.to('.ppt2-tv-slide1-column2', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-15',
                start: 'top 75%',
                endTrigger: '.trigger-15',
                end: 'top 25%',
                scrub: 1,
            },
            top: '0'
        })
        gsap.to('.ppt2-tv-slide1-column3', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-15',
                start: 'top 50%',
                endTrigger: '.trigger-15',
                end: 'top top',
                scrub: 1,
            },
            top: '0'
        })
        gsap.to('.ppt2-tv-slide1-column4', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-15',
                start: 'top 25%',
                endTrigger: '.trigger-16',
                end: 'top 75%',
                scrub: 1,
            },
            top: '0'
        })

        gsap.to('.ppt2-bluebackground', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-15',
                start: 'top 25%',
                end: 'top 25%',
                scrub: 1,
            },
            scale: 0
        })

        gsap.to('.ppt2-telefon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-17',
                start: 'top top',
                endTrigger: '.trigger-18',
                end: 'top top',
                scrub: 1,
            },
            xPercent: 150
        })

        gsap.to('.ppt2-stb', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-17',
                start: 'top top',
                endTrigger: '.trigger-18',
                end: 'top top',
                scrub: 1,
            },
            xPercent: -150
        })



        gsap.to('.ppt2-tv-slide-2', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-18',
                start: 'top bottom',
                endTrigger: '.trigger-19',
                end: 'top top',
                scrub: 1,
            },
            left: 0
        })
        gsap.to('.ppt2-tv-slide-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-18',
                start: 'top bottom',
                endTrigger: '.trigger-19',
                end: 'top top',
                scrub: 1,
            },
            left: "-100%"
        })


        gsap.to('.ppt2-offer-banner-2', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-18',
                start: 'top bottom',
                endTrigger: '.trigger-19',
                end: 'top top',
                scrub: 1,
            },
            left: 0
        })
        gsap.to('.ppt2-offer-banner-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-18',
                start: 'top bottom',
                endTrigger: '.trigger-19',
                end: 'top top',
                scrub: 1,
            },
            xPercent: -102
        })



        // ----------------------------- PPT 3 ---------------------------
        // ----------------------------- PPT 3 ---------------------------
        // ----------------------------- PPT 3 ---------------------------

        gsap.to('.ppt3-container', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-20',
                start: 'top 50%',
                endTrigger: '.trigger-21',
                end: 'top top',
                scrub: 1,
            },
            top: 0
        })
        gsap.to('.ppt2-container', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-20',
                start: 'top 50%',
                endTrigger: '.trigger-21',
                end: 'top top',
                scrub: 1,
            },
            opacity: 0
        })

        gsap.to('.whitesnake-3', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-20',
                start: 'top top',
                endTrigger: '.trigger-22',
                end: 'top 50%',
                scrub: 1,
            },
            right: 0
        })
        
        gsap.to('.ppt3-button', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-20',
                start: 'top 50%',
                endTrigger: '.trigger-22',
                end: 'top 50%',
                scrub: 1,
            },
            right: "5.8333vw"
        })
        
        // ----------------------------- PPT 4 ---------------------------
        // ----------------------------- PPT 4 ---------------------------
        // ----------------------------- PPT 4 ---------------------------

        gsap.to('.ppt4-container', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-22',
                start: 'top top',
                endTrigger: '.trigger-24',
                end: 'top 50%',
                scrub: 1,
            },
            top: 0
        })
        gsap.to('.ppt3-container', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-22',
                start: 'top top',
                endTrigger: '.trigger-24',
                end: 'top 50%',
                scrub: 1,
            },
            opacity: 0
        })

        gsap.to('.whitesnake-4', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-23',
                start: 'top 50%',
                endTrigger: '.trigger-24',
                end: 'top top',
                scrub: 1,
            },
            right: 0
        })
        
        gsap.to('.ppt4-button', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-22',
                start: 'top top',
                endTrigger: '.trigger-24',
                end: 'top 50%',
                scrub: 1,
            },
            right: "5.8333vw"
        })
        


    } else {
        $(window).resize(function () {
            location.reload();
        });

        // ----------------------------- LANDSCAPE ---------------------------
        // ----------------------------- LANDSCAPE ---------------------------
        // ----------------------------- LANDSCAPE ---------------------------
    }

})


// onEnter: () => animation.play(),
// onLeave: () => animation.pause(),
// onEnterBack: () => animation.reverse(),
// onLeaveBack: () => animation.pause()