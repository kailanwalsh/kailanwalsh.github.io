$(window).scroll(function(){
    $(".sub").css("opacity", 1 - $(window).scrollTop() / 250);
  });



  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
