const swiperJobVacancy = document.querySelector('.swiper-job');

document.addEventListener(
    'DOMContentLoaded',
    () => {
        sliderJobV();
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
      // Responsive breakpoints
      
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-job',
      prevEl: '.swiper-button-prev-job',
    },
  });
}