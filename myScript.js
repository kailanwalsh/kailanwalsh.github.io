$(window).scroll(function(){
    $(".sub").css("opacity", 1 - $(window).scrollTop() / 250);
  });


  // Execute something when DOM is ready:
  $(document).ready(function(){
     // Delay the action by 10000ms
     setTimeout(function(){
        // Display the div containing the class "bottomdiv"
        $("#main2").show();
     }, 5000);
  });


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const about = entry.target.querySelector('.about');

      if (entry.isIntersecting) {
        about.classList.add('about-animation');
  	  return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      about.classList.remove('about-animation');
    });
  });

  observer.observe(document.querySelector('.about-wrapper'));





  function isScrolledIntoView(elem)
  {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(".list").scroll(function(e) {
      var $list = $(this);

      $list.find("div")
          .filter(function(i, d) {
              return isScrolledIntoView(d);
          })
          .each(function() {
              var eTop = $(this).offset().top;
              var center = $list.height() / 2;

              var dif = center - eTop;
              if (dif < 0) dif *= -1;

              var pc = 1 - (dif / center);

              $(this).css("opacity", pc);
          });
  });

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
