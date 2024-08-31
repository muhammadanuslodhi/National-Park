$(document).ready(function () {
    var $slider = $('.slider');

    // Initialize Slick slider
    $slider.slick({
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000, // Set autoplay speed to 0.5 seconds
        infinite: true, // Enable infinite looping
        prevArrow: false, // Disable previous button
        nextArrow: false, // Disable next button
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }
        ]
    });

    // Remove slide when button is clicked
    $('.remove-slide-button').on('click', function() {
        // Get the current slide index
        var currentIndex = $slider.slick('slickCurrentSlide');
        
        // Remove the slide based on the current index
        $slider.slick('slickRemove', currentIndex);
    });
});
