;(function ($) {

    //scrol to tab menu
    $('a[href^="#"]').on('click',function(event){
        event.preventDefault();
        var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
        //change this number to create the additional off set
        var customoffset = 85;
        $('html, body').animate({scrollTop:target_offset - customoffset}, 800);
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


    //google maps
    function init_map(){
        var myOptions = {zoom:10,center:new google.maps.LatLng(50.4501,30.523400000000038),
            mapTypeId: google.maps.MapTypeId.ROADMAP, scrollwheel: false};
        map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(50.4501,30.523400000000038)});
        infowindow = new google.maps.InfoWindow({content:'<strong>Hello , World!</strong><br>Kyiv, Ukraine<br>'});
        google.maps.event.addListener(marker, 'click', function(){
            infowindow.open(map,marker);
        });
        infowindow.open(map,marker);
    }
    // google.maps.event.addDomListener(window, 'load', init_map);


})(jQuery);

