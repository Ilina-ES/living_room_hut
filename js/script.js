const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-rigth',
        prevEl: '.swiper-button-left',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },
});


const swiper_events = new Swiper('.swiper_events', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-rigth',
        prevEl: '.swiper-button-left',
    },
    breakpoints: {
        700: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1224: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1324: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});


document.addEventListener('DOMContentLoaded', () => {
    const modal = new GraphModal({
      isOpen: (modal) => {
        console.log('opened');
      },
      isClose: () => {
        console.log('closed');
      }
    });

    // new GraphModal().open('second');
  });

  // Удалить CSS-класс square-transition
const square = document.querySelector('.none__transition');
square.classList.remove('__transition');

// Добавить наблюдение за появлением элемента
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('__transition');
      return;
    }
    square.classList.remove('__transition');
  });
});
observer.observe(document.querySelector('.container'));