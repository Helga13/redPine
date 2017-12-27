$(document).ready(function () {
  
  'use strict'
  
  // search header
  
  $('.js-search').on('click', function(){
    console.log(true);
    $(this).css({'display': 'none'}).parent('.header_search').find('input').addClass('visible');
  });
  
  // slider
  
  $('.main_slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
  });
  
  $('.suppliers_slider .suppliers').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
     responsive: [
//    {
//      breakpoint: 1367,
//      settings: {
//        slidesToShow: 5,
//        slidesToScroll: 5
//      }
//    },
//    {
//      breakpoint: 993,
//      settings: {
//        slidesToShow: 4,
//        slidesToScroll: 4
//      }
//    },
//    {
//      breakpoint: 768,
//      settings: {
//        slidesToShow: 3,
//        slidesToScroll: 3
//      }
//    },
//    {
//      breakpoint: 601,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 2
//      }
//    }
  ]
  });
  
  // phone mask
  
  $("#phone").mask("+375 (99) 999 - 99 - 99");
  
  
})