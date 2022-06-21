$('#courses-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true
            }
        }
    ]
});