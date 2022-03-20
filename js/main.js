"use strict";

console.log('global');
"use strict";

AOS.init({
    once: true,
    offset: 120,
    // offset (in px) from the original trigger point
    delay: 0,
    // values from 0 to 3000, with step 50ms
    duration: 800
});
"use strict";

var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');
var menuLine = document.querySelector('.menu__line');
var menuItems = document.querySelectorAll('.menu__item');
var menuLink = document.querySelectorAll('.menu__link');
var body = document.querySelector('.body');
burger.addEventListener('click', function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('menu--active');
    body.classList.toggle('body--hidden');
});
menuLink.forEach(function (item, idx) {
    item.addEventListener('click', function () {
        burger.classList.remove('burger--active');
        menu.classList.remove('menu--active');
        body.classList.remove('body--hidden');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    menuLine.style.width = "".concat(menuItems[0].offsetWidth, "px");
    menuItems.forEach(function (el) {
        el.addEventListener('mouseenter', function (e) {
            menuLine.style.width = "".concat(e.currentTarget.offsetWidth, "px");
            menuLine.style.left = "".concat(e.currentTarget.offsetLeft, "px");
            menuLine.style.opacity = "1";
        });
        el.addEventListener('mouseleave', function () {
            menuLine.style.width = "0px";
            menuLine.style.left = "0px";
        });
    });
});
"use strict";

var modal = new GraphModal({
    isOpen: function isOpen(modal) {
        console.log(modal);
        console.log('opened');
    }
});
"use strict";

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
"use strict";

// const defaultSelect = () => {
//     const element = document.querySelector('.about-form__item');
//     const choices = new Choices(element, {
//         searchEnabled: true,
//     });
// };
// defaultSelect();
var multiDefault = function multiDefault() {
    var elements = document.querySelectorAll('.about-form__item');
    elements.forEach(function (el) {
        var choices = new Choices(el, {
            searchEnabled: false,
            allowHTML: true
        });
    });
};

multiDefault();
"use strict";

var tripSwiper = new Swiper('.trip-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlidesBounds: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false
        },
        350: {
            slidesPerView: 1.1,
            spaceBetween: 10,
            centeredSlides: false
        },
        380: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            centeredSlides: false
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            centeredSlides: false
        },
        730: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false
        },
        850: {
            slidesPerView: 2.3,
            spaceBetween: 20,
            centeredSlides: false
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});
var dealSwiper = new Swiper('.deal-slider', {
    loop: true,
    slidesPerView: 4.25,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false
        },
        350: {
            slidesPerView: 1.1,
            spaceBetween: 10,
            centeredSlides: false
        },
        380: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            centeredSlides: false
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            centeredSlides: false
        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 20,
            centeredSlides: false
        },
        900: {
            slidesPerView: 2.5,
            spaceBetween: 20,
            centeredSlides: false
        },
        1100: {
            slidesPerView: 3.1,
            spaceBetween: 20
        },
        1250: {
            slidesPerView: 3.5,
            spaceBetween: 30
        },
        1450: {
            sliderPerView: 4.25,
            spaceBetween: 30
        }
    }
});
/**
* название функции
*
* @param {number} first - первое число
* @returns {number}
*/
"use strict";
//# sourceMappingURL=main.js.map
