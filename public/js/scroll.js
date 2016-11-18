$(function() {
  $('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 2000, 'swing');
    event.preventDefault();
  });
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.cover').css('top',(scrolled*0.2)+'px');
}

$(window).scroll(function(e){
  parallax();
});
