var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });

  $(document).ready(function(){
      $(".gnb .m").hover(function(){
        $(this).find(".subMenus").stop().fadeToggle(200);
      });
  });