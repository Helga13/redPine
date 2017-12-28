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
    responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false
      }
    }
  ]
  });
  
  $('.suppliers_slider .suppliers').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
     responsive: [
    {
      breakpoint: 1121,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
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
  
  // burger_menu
  
  $('.burger_menu').click(function () {
    $('.main_nav').fadeIn(300).addClass('opened');
    $('body').css('overflow', 'hidden');  
  });
  $('.main_nav').click(function (e) {
    $(this).fadeOut(200).removeClass('opened');
    $('body').css('overflow', 'auto'); 
  });
  $('.icon_close').click(function (e) {
    e.preventDefault();
    $(this).parents('.main_nav').fadeOut(200).removeClass('opened');
    $('body').css('overflow', 'auto'); 
  });
  $('.main_nav nav').click(function(e) {
    e.stopPropagation();
  });
  
  
})