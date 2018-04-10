// Wrap every letter in a span
$('.ml16').each(function() {
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml16 .letter',
    translateY: [-100, 0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: function(el, i) {
      return 30 * i;
    }
  }).add({
    targets: '.ml16',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// To display record animation
$(document).ready(function() {
  $(".record").click(function() {
    $(".recording").fadeIn(500);
    $(".searching").fadeOut(700);
  });
  $(".stop").click(function() {
    $(".recording").fadeOut(500);
    $(".searching").fadeIn(700);
  });
});

// Search animation
$('.ml9 .letters').each(function() {
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: function(el, i) {
      return 45 * (i + 1)
    }
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
