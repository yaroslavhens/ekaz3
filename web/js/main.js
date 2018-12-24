$(function() {
    $('.slider').slick({
        infinite: true,
        dots:true,
    });
    $('.slider').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
});


$(function() {
    $('.slder__box').slick({
        infinite: true,
        dots:true,
    });
    $('.slider-box').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
});
var map;
var image = 'web/img/pin.png';
function initMap() {
    map = new google.maps.Map(document.querySelector('#map'), {
        center:  {lat:48.9117518, lng:24.647089},
        zoom: 14,
        scrollwheel: false,
    });


    var marker = new google.maps.Marker({
        position:  {lat:48.9187518, lng: 24.647000},
        map: map,
        icon: image
    });

}
document.addEventListener('DOMContentLoaded', initMap);
