$(function() {

    /* Fixed HEADER */

    let header = $("#header");
    let intro = $('#intro');
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH ) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    });

    /* Smooth Scroll */

    $("[data-scroll]").on('click', function (event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700)

        console.log(elementOffset);

        console.log(elementID);
    });


});