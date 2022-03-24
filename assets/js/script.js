
/*-------------------------------- Typed------------------------------------------------*/
var typed = new Typed(".typedJs", {
    strings: ['console.log("Hello World")'],
    typeSpeed:60,
    backSpeed:60,
    loop:true,
  });

var typed = new Typed(".typedHtml", {
    strings: ['&lth1&gt Olá!!! &lt/h1&gt '],
    typeSpeed:60,
    backSpeed:60,
    loop:true,
  });

  var typed = new Typed(".typedCss", {
    strings: ['.container {color: red; }'],
    typeSpeed:60,
    backSpeed:60,
    loop:true,
  });

/*----------------------------------- Owl -------------------------------------------*/
$('.certificates__owl').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  center: true,
  margin:10,
  autoWidth:true,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})


$('.owl-carousel').owlCarousel({
  loop:false,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

