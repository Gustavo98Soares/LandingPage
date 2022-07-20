const button = document.querySelector('.button-theme')
if (button){
  button.addEventListener('click',event =>{
    event.preventDefault()
    document.body.setAttribute('data-theme','t-playstation')
  })
}


/*-------------------------------- Typed------------------------------------------------*/
var typed = new Typed(".typedMyName", {
  strings: [' Gustavo'],
  typeSpeed:150,
  backSpeed:200,
  loop:true,
});

/*----------------------------------- Owl -------------------------------------------*/
$('.certificates__owl').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:5000,
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

