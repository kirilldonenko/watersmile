$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    },
    navText : ['<i id="arrow-left" class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i id="arrow-right" class="fa fa-angle-right" aria-hidden="true"></i>']
})
