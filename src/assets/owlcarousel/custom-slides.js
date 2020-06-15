/* JS SLIDER */
function slides() {
    $('.owl-carousel-slides').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        autoplay: true,
        // autoWidth:true,
        autoHeight: true,
        autoplayTimeout: 5000,
        nav: false,
        dots: false
    })
}
function slidesproducts() {
    $('.owl-carousel-products').owlCarousel({
        loop: false,
        margin: 10,
        autoplay: true,
        nav: false,
        dots: true,
        navigation: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items:6
            }
        }
    })
}


function slidespages() {
    $('.owl-carousel-slidespages').owlCarousel({
        loop: false,
        margin: 10,
        autoplay: true,
        nav: false,
        dots: false,
        navigation: false,
        autoplayTimeout: 5000,
        items: 3
    })
}

