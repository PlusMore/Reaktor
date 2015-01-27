var frontend = function() {

    $(function() {

        stickyNav();
        oneNav();
        wow();
        parallax();
        carousel();

    });


    var stickyNav = function() {
        $(".navbar").sticky({
            topSpacing: 0
        });

    };

    var oneNav = function() {
        $("#main-menu").onePageNav({
            currentClass: "active",
            changeHash: !1,
            scrollThreshold: .5,
            scrollSpeed: 750,
            scrollOffset: 40,
            filter: "",
            easing: "swing"
        });

    };

    var wow = function() {
        new WOW().init();
    }

    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    var parallax = function() {
        $('#testimonials').parallax("50%", 0.3);
    }

    var carousel = function() {
        var owl = $("#testimonial-wrapper");
        owl.owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true
        });
    }


    //return functions
    return {

    };
}();
