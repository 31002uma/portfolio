$(function() {
  $('.hamburger').on('click', function() {
    hamburger();
  });

  $('.nav-menu a').on('click', function() {
    hamburger();
  });

  $('a[href^="#"]').click(function() {
    let href = $(this).attr('href');
    let target = $(href == '#' || href == '' ? 'html' : href);
    let position = target.offset().top;
    $('html, body').animate({scrollTop:position}, 600, 'swing');
    return false;
  });

  $('.inview').on('inview', function(event, isInview) {
    if (isInview) {
      $(this).stop().addClass('show');
    }
  });

  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    
    if (scroll > 700) {
      $('.hamburger').fadeIn(500);
    } else {
      $('.hamburger').fadeOut(500);
    }
  });
});

function hamburger() {
  $('.hamburger').toggleClass('active');

  if ($('.hamburger').hasClass('active')) {
    $('.nav-menu').addClass('active');
  } else {
    $('.nav-menu').removeClass('active');
  }
}
