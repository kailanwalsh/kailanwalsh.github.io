$(window).scroll(function(){
    $(".sub").css("opacity", 1 - $(window).scrollTop() / 250);
  });
