const swiperJobVacancy = document.querySelector('.swiper-job');
const swiperMenuNewTovar1 = document.querySelector('.menu-new1');
const swiperMenuNewTovar2 = document.querySelector('.menu-new2');
const swiperMenuNewTovar3 = document.querySelector('.menu-new3');
const swiperMenuNewTovar4 = document.querySelector('.menu-new4');
const swiperMenuNewTovar5 = document.querySelector('.menu-new5');
const swiperMenuNewTovar6 = document.querySelector('.menu-new6');
const swiperMenuNewTovar7 = document.querySelector('.menu-new7');
const swiperMenuNewTovar8 = document.querySelector('.menu-new8');

document.addEventListener(
    'DOMContentLoaded',
    () => {
        sliderJobV();
        sliderMenuNew();
        sliderMenuNew2();
        sliderMenuNew3();
        sliderMenuNew4();
        sliderMenuNew5();
        sliderMenuNew6();
        sliderMenuNew7();
        sliderMenuNew8();
    },
    true
)


const sliderJobV = () => {
  if (!swiperJobVacancy) {
      return ;
  };

const swiperJob = new Swiper(swiperJobVacancy, {
    direction: 'horizontal',
    loop: true,

      slidesPerView: 3,
      spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next-job',
      prevEl: '.swiper-button-prev-job',
    },
  });
}

const sliderMenuNew = () => {
  if (!swiperMenuNewTovar1) {
      return ;
  };

const swipermenu = new Swiper(swiperMenuNewTovar1, {
    direction: 'horizontal',
    loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination-menu-new',
      },

    navigation: {
      nextEl: '.swiper-button-next-menu-new',
      prevEl: '.swiper-button-prev-menu-new',
    },
  });
}

const sliderMenuNew2 = () => {
  
  if (!swiperMenuNewTovar2) {
      return ;
  };

const swipermenu = new Swiper(swiperMenuNewTovar2, {
    direction: 'horizontal',
    loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination-menu-new2',
      },

    navigation: {
      nextEl: '.swiper-button-next-menu-new2',
      prevEl: '.swiper-button-prev-menu-new2',
    },
  });
}

const sliderMenuNew3 = () => {
  
  if (!swiperMenuNewTovar3) {
      return ;
  };

const swipermenu = new Swiper(swiperMenuNewTovar3, {
    direction: 'horizontal',
    loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination-menu-new3',
      },

    navigation: {
      nextEl: '.swiper-button-next-menu-new3',
      prevEl: '.swiper-button-prev-menu-new3',
    },
  });
}

const sliderMenuNew4 = () => {
  
  if (!swiperMenuNewTovar4) {
      return ;
  };

const swipermenu = new Swiper(swiperMenuNewTovar4, {
    direction: 'horizontal',
    loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination-menu-new4',
      },

    navigation: {
      nextEl: '.swiper-button-next-menu-new4',
      prevEl: '.swiper-button-prev-menu-new4',
    },
  });
}

const sliderMenuNew5 = () => {
  
  if (!swiperMenuNewTovar5) {
      return ;
  };

const swipermenu = new Swiper(swiperMenuNewTovar5, {
    direction: 'horizontal',
    loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination-menu-new5',
      },

    navigation: {
      nextEl: '.swiper-button-next-menu-new5',
      prevEl: '.swiper-button-prev-menu-new5',
    },
  });
}

const sliderMenuNew6 = () => {
  
  if (!swiperMenuNewTovar6) {
      return ;
  };

const swipermenu = new Swiper(swiperMenuNewTovar6, {
    direction: 'horizontal',
    loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination-menu-new6',
      },

    navigation: {
      nextEl: '.swiper-button-next-menu-new6',
      prevEl: '.swiper-button-prev-menu-new6',
    },
  });
}

const sliderMenuNew7 = () => {
  
  if (!swiperMenuNewTovar7) {
      return ;
  };

const swipermenu = new Swiper(swiperMenuNewTovar7, {
    direction: 'horizontal',
    loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination-menu-new7',
      },

    navigation: {
      nextEl: '.swiper-button-next-menu-new7',
      prevEl: '.swiper-button-prev-menu-new7',
    },
  });
}
const sliderMenuNew8 = () => {
  
  if (!swiperMenuNewTovar8) {
      return ;
  };

const swipermenu = new Swiper(swiperMenuNewTovar8, {
    direction: 'horizontal',
    loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination-menu-new8',
      },

    navigation: {
      nextEl: '.swiper-button-next-menu-new8',
      prevEl: '.swiper-button-prev-menu-new8',
    },
  });
}

