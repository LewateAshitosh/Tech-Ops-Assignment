document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var mySwiper = new Swiper('.swiper-container', {

            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },

            loop: true, 
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
    }, 500); // Adjust the delay as needed
});
