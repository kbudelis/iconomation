// add icons
$('.playspace').append('<i class="em em-scream_cat"></i>');
$('.playspace').append('<i class="em em-mouse"></i>');



// set the initial positions

$('.em-scream_cat').css({
  top: 200,
  left: 300
});

$('.em-mouse').css({
  top: 210,
  left: 100
});


// play!

$('.em-mouse').animate({
  left: 50
}, 1000);

// after 660ms...
setTimeout(function() {
  // ...move the ball
  $('.fa-futbol-o').animate({
    left: 0
  }, 800, 'easeOutQuart');
}, 660);