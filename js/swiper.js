const swiper = new Swiper(".swiper",{
    slidePerview: 1,
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: [0, 0 -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    Loop: true,
    direction: "horizontal",

    autoplay: {
        delay: 5000,
    },

    speed: 400,
    spaceBetween: 100,
});

const swiper2 = new Swiper(".swiper2",{
    slidesPerView: 3,
    spaceBetween: 35,
    slidesPerGroup: 1,
    Loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    loopfillGroupWithBlank: true,

    autoplay: {
        delay: 5000,
    },

    speed: 400,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
});

const swiper3 = new Swiper(".swiper3",{
    slidesPerView: 3,
    spaceBetween: 95,
    slidesPerGroup: 1,
    Loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    loopfillGroupWithBlank: true,

    autoplay: {
        delay: 5000,
    },

    speed: 400,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        968: {
            slidesPerView: 1,
        },
    },
});