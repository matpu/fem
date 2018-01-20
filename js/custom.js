/*=====================================
            Services
=======================================*/

$(function () {

    // animate on scroll
    new WOW().init();
});

/*=====================================
            Services
=======================================*/
$(function () {

    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/*=====================================
            Team Display
=======================================*/
$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            },
        }
    });

});

/*=====================================
            Testimonial
=======================================*/

$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

});

/*=====================================
            Clients
=======================================*/

$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 3
            },
            // breakpoint from 768 up
            768 : {
                items: 5
            },
            // breakpoint from 992 up
            992: {
                items: 6
            }
        }
    });

});

/*=======================================
             Stats
=========================================*/
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 3000
    });

});


/*=======================================
           Navigation  MENU background
=========================================*/
//Show or Hide Black background for the NAV
$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();

        }
    })

});

// Smooth Scrolling 
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //get/return id like #about  #work etc ...
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");

    });
});

// Close Mobile Menu on Click 
$(function () {
    
    $(".navbar-collapse ul li a").on("click touch", function(){
        $(".navbar-toggle").click();
    })

});