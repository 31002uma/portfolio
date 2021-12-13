$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 0) {
      $('.header').addClass('header-active');
    } else {
      $('.header').removeClass('header-active');
    }
  });

  $('a[href^="#"]').on('click', function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  $('.nav-menu').on('click', function() {
    hamburger();
  });

  $('.nav-menu a').on('click', function() {
    hamburger();
  });
});

function hamburger() {
  $('.nav-menu').toggleClass('nav-active');

  if ($('.nav-menu').hasClass('nav-active')) {
    $('.header-nav').addClass('nav-active');
  } else {
    $('.header-nav').removeClass('nav-active');
  }
}

const mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay:4000,
  },
  speed: 500,
  loop: true,
  effect: 'fade',

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

