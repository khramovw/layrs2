;(function ($) {

    //scrol to tab menu
    $('a[href^="#"]').on('click',function(event){
        event.preventDefault();
        var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
        //change this number to create the additional off set
        var customoffset = 20;
        $('html, body').animate({scrollTop:target_offset - customoffset}, 800);
    });

    //show btn go to up
    $(window).scroll(function(){
        if ($(window).scrollTop()>400){
            $('.page_up').css("opacity", "1");
        } else {
            $('.page_up').css("opacity", "0");
        }
    });

    //go to up
    $('.page_up').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);
    });

    //init mobile menu
    $(function(){
        $('.header_nav').slicknav({
            label: '',
            appendTo: '.header',
            closedSymbol:  '[&#xf05c;]',
            easingOpen: 'linear'
        });
    });

    //slick-slider
    $('.header-slick-js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
        // dots: true
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    //mouse wheel
    slickCarousel.mousewheel(function(e) {
        e.preventDefault();
        if (e.deltaY < 0) {
            $(this).slick('slickNext');
        }
        else {
            $(this).slick('slickPrev');
        }
    });






})(jQuery);

