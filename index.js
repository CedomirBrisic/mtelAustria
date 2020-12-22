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

        gsap.to('.whitesnake-start', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top bottom',
                endTrigger: '.trigger-3',
                end: 'top bottom',
                scrub: 1
            },
            right: "100%"
        })

        gsap.to('.icon-scroll', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top bottom',
                endTrigger: '.trigger-3',
                end: 'top bottom',
                scrub: 1
            },
            top: "120%"
        })


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
                start: 'top bottom',
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
                start: 'top bottom',
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
                start: 'top bottom',
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


        // gsap.to('.ppt1-viewport-img2', {
        //     scrollTrigger: {
        //         toggleActions: 'play pause resume reset',
        //         trigger: '.trigger-5',
        //         start: 'top bottom',
        //         endTrigger: '.trigger-6',
        //         end: 'top bottom',
        //         scrub: 1
        //     },
        //     right: "100%"
        // })
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

        // gsap.to('.ppt1-viewport-img3', {
        //     scrollTrigger: {
        //         toggleActions: 'play pause resume reset',
        //         trigger: '.trigger-5',
        //         start: 'top bottom',
        //         endTrigger: '.trigger-6',
        //         end: 'top bottom',
        //         scrub: 1
        //     },
        //     right: 0
        // })

        // gsap.to('.ppt1-viewport-img3', {
        //     scrollTrigger: {
        //         toggleActions: 'play pause resume reset',
        //         trigger: '.trigger-7',
        //         start: 'top bottom',
        //         endTrigger: '.trigger-8',
        //         end: 'top bottom',
        //         scrub: 1
        //     },
        //     xPercent: -100
        // })

        // gsap.to('.ppt1-viewport-img4', {
        //     scrollTrigger: {
        //         toggleActions: 'play pause resume reset',
        //         trigger: '.trigger-7',
        //         start: 'top bottom',
        //         endTrigger: '.trigger-8',
        //         end: 'top bottom',
        //         scrub: 1
        //     },
        //     xPercent: -100
        // })

        gsap.to('.ppt1-snake-blue', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top bottom',
                endTrigger: '.trigger-3',
                end: 'top 50%',
                scrub: 1,
            },
            left: "100%"
        })

        gsap.to('.ppt1-snake-red', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top bottom',
                endTrigger: '.trigger-3',
                end: 'top 50%',
                scrub: 1,
            },
            top: "120%"
        })

        gsap.to('.ppt1-snake-white', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-4',
                start: 'top bottom',
                endTrigger: '.trigger-6',
                end: 'top 50%',
                scrub: 1,
            },
            left: "100%"
        })

        gsap.to('.ppt1-snake-red-2', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-4',
                start: 'top 50%',
                endTrigger: '.trigger-6',
                end: 'top 50%',
                scrub: 1,
            },
            top: "120%"
        })

        gsap.to('.ppt1-snake-blue-2', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-5',
                start: 'top 50%',
                endTrigger: '.trigger-8',
                end: 'top 50%',
                scrub: 1,
            },
            right: "100%"
        })


        gsap.to('.ppt1-snake-red-3', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-6',
                start: 'top bottom',
                endTrigger: '.trigger-9',
                end: 'top 50%',
                scrub: 1,
            },
            bottom: "100%"
        })

        gsap.to('.ppt1-snake-white-2', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-6',
                start: 'top bottom',
                endTrigger: '.trigger-9',
                end: 'top 50%',
                scrub: 1,
            },
            right: "100%"
        })


        // ----------------------------- PPT1 part 2 ---------------------------------
        // ----------------------------- PPT1 part 2 ---------------------------------
        // ----------------------------- PPT1 part 2 ---------------------------------

        gsap.to('.ppt1-wrapper', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-6',
                start: 'top bottom',
                endTrigger: '.trigger-7',
                end: 'top bottom',
                scrub: 1,
            },
            opacity: 0
        })
        gsap.to('.ppt1-part2-container', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-6',
                start: 'top bottom',
                endTrigger: '.trigger-7',
                end: 'top bottom',
                scrub: 1,
            },
            top: 0
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
        gsap.to('.ppt1-part2-container', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-9',
                start: 'top bottom',
                end: 'top 50%',
                scrub: 1,
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
                trigger: '.trigger-10',
                start: 'top 25%',
                endTrigger: '.trigger-12',
                end: 'top bottom',
                scrub: 1
            },
            width: "106%",
            height: "71.25vw",
            top: "19.5%",
        })
        gsap.to('.ppt2-bluebackground', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-11',
                start: 'top 75%',
                endTrigger: '.trigger-11',
                end: 'top 25%',
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
                start: 'top bottom',
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
                start: 'top bottom',
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
                start: 'top bottom',
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
            top: '20%'
        })

        // gsap.to('.ppt2-telefon', {
        //     scrollTrigger: {
        //         toggleActions: 'play pause resume reset',
        //         trigger: '.trigger-14',
        //         start: 'top top',
        //         endTrigger: '.trigger-15',
        //         end: 'top top',
        //         scrub: 1,
        //     },
        //     right: '0'
        // })

        // gsap.to('.ppt2-stb', {
        //     scrollTrigger: {
        //         toggleActions: 'play pause resume reset',
        //         trigger: '.trigger-15',
        //         start: 'top 50%',
        //         endTrigger: '.trigger-16',
        //         end: 'top top',
        //         scrub: 1,
        //     },
        //     left: '3.5185185185185186VW'
        // })

        // gsap.to('.ppt2-offer-banner-1', {
        //     scrollTrigger: {
        //         toggleActions: 'play pause resume reset',
        //         trigger: '.trigger-15',
        //         start: 'top 50%',
        //         endTrigger: '.trigger-16',
        //         end: 'top top',
        //         scrub: 1,
        //     },
        //     left: '0'
        // })


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

        gsap.to('.ppt2-part2-wrapper', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-15',
                start: 'top top',
                endTrigger: '.trigger-16',
                end: 'top top',
                scrub: 1,
            },
            top: '0'
        })
        gsap.to('.ppt2-container', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-15',
                start: 'top top',
                endTrigger: '.trigger-16',
                end: 'top top',
                scrub: 1,
            },
            opacity: 0
        })




        gsap.to('.ppt2-part3-wrapper', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-18',
                start: 'top bottom',
                endTrigger: '.trigger-19',
                end: 'top top',
                scrub: 1
            },
            top: 0
        })
        gsap.to('.ppt2-part2-wrapper', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-18',
                start: 'top bottom',
                endTrigger: '.trigger-19',
                end: 'top top',
                scrub: 1
            },
            opacity: 0
        })

        // gsap.to('.ppt2-telefon', {
        //     scrollTrigger: {
        //         toggleActions: 'play pause resume reset',
        //         trigger: '.trigger-17',
        //         start: 'top top',
        //         endTrigger: '.trigger-18',
        //         end: 'top top',
        //         scrub: 1,
        //     },
        //     xPercent: 150
        // })

        // gsap.to('.ppt2-stb', {
        //     scrollTrigger: {
        //         toggleActions: 'play pause resume reset',
        //         trigger: '.trigger-17',
        //         start: 'top top',
        //         endTrigger: '.trigger-18',
        //         end: 'top top',
        //         scrub: 1,
        //     },
        //     xPercent: -150
        // })



        // gsap.to('.ppt2-tv-slide-2', {
        //     scrollTrigger: {
        //         toggleActions: 'play pause resume reset',
        //         trigger: '.trigger-18',
        //         start: 'top bottom',
        //         endTrigger: '.trigger-19',
        //         end: 'top top',
        //         scrub: 1,
        //     },
        //     left: 0
        // })
        // gsap.to('.ppt2-tv-slide-1', {
        //     scrollTrigger: {
        //         toggleActions: 'play pause resume reset',
        //         trigger: '.trigger-18',
        //         start: 'top bottom',
        //         endTrigger: '.trigger-19',
        //         end: 'top top',
        //         scrub: 1,
        //     },
        //     left: "-100%"
        // })


        // gsap.to('.ppt2-offer-banner-2', {
        //     scrollTrigger: {
        //         toggleActions: 'play pause resume reset',
        //         trigger: '.trigger-18',
        //         start: 'top bottom',
        //         endTrigger: '.trigger-19',
        //         end: 'top top',
        //         scrub: 1,
        //     },
        //     left: 0
        // })
        // gsap.to('.ppt2-offer-banner-1', {
        //     scrollTrigger: {
        //         toggleActions: 'play pause resume reset',
        //         trigger: '.trigger-18',
        //         start: 'top bottom',
        //         endTrigger: '.trigger-19',
        //         end: 'top top',
        //         scrub: 1,
        //     },
        //     xPercent: -102
        // })



        gsap.to('.ppt1-snake-red-4', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-13',
                start: 'top bottom',
                endTrigger: '.trigger-20',
                end: 'top 50%',
                scrub: 1,
            },
            top: "120%"
        })
        gsap.to('.ppt1-snake-red-4-ghost', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-13',
                start: 'top bottom',
                endTrigger: '.trigger-20',
                end: 'top 50%',
                scrub: 1,
            },
            top: "120%"
        })

        gsap.to('.ppt1-snake-blue-3', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-12',
                start: 'top bottom',
                endTrigger: '.trigger-18',
                end: 'top 50%',
                scrub: 1,
            },
            left: "100%"
        })

        // gsap.to('.ppt2-part2-button', {
        //     scrollTrigger: {
        //         toggleActions: 'play pause resume reset',
        //         trigger: '.trigger-14',
        //         start: 'top 50%',
        //         endTrigger: '.trigger-16',
        //         end: 'top bottom',
        //         scrub: 1,
        //     },
        //     left: "35%"
        // })


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
        gsap.to('.ppt2-part3-wrapper', {
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


        // ----------------------------- SIDEBAR ---------------------------
        // ----------------------------- SIDEBAR ---------------------------
        // ----------------------------- SIDEBAR ---------------------------

        gsap.to('.sidebar-icon-wrapper-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top 80%',
                end: 'top 75%',
                scrub: 1
            },
            top: 0
        })
        gsap.to('.sidebar-icon-wrapper-2', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top 75%',
                end: 'top 70%',
                scrub: 1
            },
            top: 0
        })
        gsap.to('.sidebar-icon-wrapper-3', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top 70%',
                end: 'top 65%',
                scrub: 1
            },
            top: 0
        })
        gsap.to('.sidebar-icon-wrapper-4', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top 65%',
                end: 'top 60%',
                scrub: 1
            },
            top: 0
        })
        gsap.to('.sidebar-icon-wrapper-5', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top 60%',
                end: 'top 55%',
                scrub: 1
            },
            top: 0
        })



        gsap.to('.sidebar-color-icon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-3',
                start: 'top 25%',
                endTrigger: '.trigger-4',
                end: 'top 75%',
                scrub: 1
            },
            opacity: 1
        })


        gsap.to('.sidebar-color-icon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-9',
                start: 'top 90%',
                end: 'top 88%',
                scrub: 1
            },
            opacity: 0
        })

        gsap.to('.sidebar-color-icon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-11',
                start: 'top 85%',
                end: 'top 80%',
                scrub: 1
            },
            opacity: 1
        })
        gsap.to('.sidebar-color-icon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-20',
                start: 'top 15%',
                end: 'top 10%',
                scrub: 1,
            },
            opacity: 0
        })


        // ----------------------------- SIDEBAR MARKERS ---------------------------
        // ----------------------------- SIDEBAR MARKERS ---------------------------
        // ----------------------------- SIDEBAR MARKERS ---------------------------

        gsap.to('.sidebar-marker-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top 75%',
                endTrigger: '.trigger-3',
                end: 'top bottom',
                scrub: 1
            },
            left: 0
        })
        gsap.to('.sidebar-marker-1-icon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top 75%',
                endTrigger: '.trigger-3',
                end: 'top bottom',
                scrub: 1
            },
            left: 0
        })


        // ------------------------------------------------------------------------


        gsap.to('.sidebar-marker-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-9',
                start: 'top bottom',
                endTrigger: '.trigger-10',
                end: 'top 50%',
                scrub: 1
            },
            xPercent: 101
        })
        gsap.to('.sidebar-marker-1-icon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-9',
                start: 'top bottom',
                endTrigger: '.trigger-10',
                end: 'top 50%',
                scrub: 1
            },
            xPercent: -197
        })


        gsap.to('.sidebar-marker-2', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-9',
                start: 'top bottom',
                endTrigger: '.trigger-10',
                end: 'top 50%',
                scrub: 1
            },
            left: 0
        })
        gsap.to('.sidebar-marker-2-icon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-9',
                start: 'top bottom',
                endTrigger: '.trigger-10',
                end: 'top 50%',
                scrub: 1
            },
            left: 0
        })



        // ------------------------------------------------------------------------

        gsap.to('.sidebar-marker-2', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-18',
                start: 'top bottom',
                end: 'top top',
                scrub: 1
            },
            xPercent: 101
        })
        gsap.to('.sidebar-marker-2-icon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-18',
                start: 'top bottom',
                end: 'top top',
                scrub: 1
            },
            xPercent: -109
        })

        gsap.to('.sidebar-marker-3', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-18',
                start: 'top bottom',
                endTrigger: '.trigger-19',
                end: 'top top',
                scrub: 1
            },
            left: 0
        })
        gsap.to('.sidebar-marker-3-icon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-18',
                start: 'top bottom',
                endTrigger: '.trigger-19',
                end: 'top top',
                scrub: 1
            },
            left: 0
        })




        // ------------------------------------------------------------------------

        gsap.to('.sidebar-marker-3', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-20',
                start: 'top 50%',
                endTrigger: '.trigger-21',
                end: 'top bottom',
                scrub: 1
            },
            xPercent: 101
        })
        gsap.to('.sidebar-marker-3-icon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-20',
                start: 'top 50%',
                endTrigger: '.trigger-21',
                end: 'top bottom',
                scrub: 1
            },
            xPercent: -200
        })

        gsap.to('.sidebar-marker-4', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-20',
                start: 'top 50%',
                endTrigger: '.trigger-21',
                end: 'top top',
                scrub: 1
            },
            left: 0
        })
        gsap.to('.sidebar-marker-4-icon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-20',
                start: 'top 50%',
                endTrigger: '.trigger-21',
                end: 'top top',
                scrub: 1
            },
            left: 0
        })

        // ------------------------------------------------------------------------

        gsap.to('.sidebar-marker-4', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-22',
                start: 'top top',
                endTrigger: '.trigger-24',
                end: 'top bottom',
                scrub: 1
            },
            xPercent: 101
        })
        gsap.to('.sidebar-marker-4-icon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-22',
                start: 'top top',
                endTrigger: '.trigger-24',
                end: 'top bottom',
                scrub: 1
            },
            xPercent: -136
        })

        gsap.to('.sidebar-marker-5', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-22',
                start: 'top top',
                endTrigger: '.trigger-24',
                end: 'top 50%',
                scrub: 1
            },
            left: 0
        })
        gsap.to('.sidebar-marker-5-icon', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-22',
                start: 'top top',
                endTrigger: '.trigger-24',
                end: 'top 50%',
                scrub: 1
            },
            left: 0
        })




        $(".sidebar-icon-wrapper-1").click(function () {
            gsap.to(window, {
                duration: 0,
                scrollTo: ".sidebar-target-1"
            });
        });
        $(".sidebar-icon-wrapper-2").click(function () {
            gsap.to(window, {
                duration: 0,
                scrollTo: ".sidebar-target-2"
            });
        });
        $(".sidebar-icon-wrapper-3").click(function () {
            gsap.to(window, {
                duration: 0,
                scrollTo: ".sidebar-target-3"
            });
        });
        $(".sidebar-icon-wrapper-4").click(function () {
            gsap.to(window, {
                duration: 0,
                scrollTo: ".sidebar-target-4"
            });
        });
        $(".sidebar-icon-wrapper-5").click(function () {
            gsap.to(window, {
                duration: 0,
                scrollTo: ".sidebar-target-5"
            });
        });



    } else {
        $(window).resize(function () {
            location.reload();
        });

        // ----------------------------- LANDSCAPE ---------------------------
        // ----------------------------- LANDSCAPE ---------------------------
        // ----------------------------- LANDSCAPE ---------------------------
        
        
        
        // ----------------------------- PPT 1 ---------------------------
        // ----------------------------- PPT 1 ---------------------------
        // ----------------------------- PPT 1 ---------------------------

        gsap.to('.whitesnake-start', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top bottom',
                endTrigger: '.trigger-3',
                end: 'top bottom',
                scrub: 1
            },
            right: "100%"
        })
        gsap.to('.icon-scroll', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top bottom',
                endTrigger: '.trigger-2',
                end: 'top bottom',
                scrub: 1
            },
            top: "120%"
        })

        gsap.to('.whitesnake-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-1',
                start: 'top bottom',
                endTrigger: '.trigger-2',
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
                endTrigger: '.trigger-2',
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
                endTrigger: '.trigger-2',
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
                endTrigger: '.trigger-2',
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
            width: "20.416666666666668VW",
            height: "42.34375VW",
            top: "9%"
        })
        gsap.to('.whitesnake-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-3',
                start: 'top 50%',
                endTrigger: '.trigger-4',
                end: 'top bottom',
                scrub: 1
            },
            xPercent: 100
        })
        gsap.to('.ppt1-title', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-3',
                start: 'top bottom',
                endTrigger: '.trigger-4',
                end: 'top bottom',
                scrub: 1
            },
            xPercent: 125
        })
        gsap.to('.ppt1-subtitle', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-3',
                start: 'top bottom',
                endTrigger: '.trigger-4',
                end: 'top bottom',
                scrub: 1
            },
            xPercent: 125
        })
        gsap.to('.ppt1-button-1', {
            scrollTrigger: {
                toggleActions: 'play pause resume reset',
                trigger: '.trigger-3',
                start: 'top bottom',
                endTrigger: '.trigger-4',
                end: 'top bottom',
                scrub: 1
            },
            xPercent: 150
        })

    }



})


// onEnter: () => animation.play(),
// onLeave: () => animation.pause(),
// onEnterBack: () => animation.reverse(),
// onLeaveBack: () => animation.pause()