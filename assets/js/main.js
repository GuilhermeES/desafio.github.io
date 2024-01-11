const menuButton = document.querySelectorAll('.menu-button');
const headerNav = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');

new Swiper('.swiper', {
    spaceBetween: 20,
    loop: true,
    
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },  

        768: {
            slidesPerView: 3,
        },  

        1200: {
            slidesPerView: 3,
        },  

        1270: {
            slidesPerView: 4,
        },

        1440: {
            slidesPerView: 5,
        },
    }

});

new Swiper('.swiper-banner', {
    slidesPerView: 1,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
      },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});

function toggleMenu() {
    headerNav.classList.toggle('open');
    overlay.classList.toggle('active');
}

menuButton.forEach(item => {
    item.addEventListener('click', toggleMenu);
})


let myModal = new bootstrap.Modal(document.getElementById('modal'), {})
myModal.toggle()

function toggleLinkFooter(element) {
    let menu = element.nextElementSibling;

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
}