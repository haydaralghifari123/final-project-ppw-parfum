$('.multiple-card-slider .carousel').each(function(){
  var currentCarouselId = '#' + $(this).attr('id');
  const multipleItemCarousel = document.querySelector(currentCarouselId);

  if(window.matchMedia("(min-width:576px)").matches){
      const carousel = new bootstrap.Carousel(multipleItemCarousel, {
          interval: false,
          wrap: false
      })
      var carouselWidth = $(currentCarouselId + ' .carousel-inner')[0].scrollWidth;
      var cardWidth = $(currentCarouselId + ' .carousel-item').width();
      var scrollPosition = 0;    
      $(currentCarouselId + ' .carousel-control-next').on('click', function(){
          if(scrollPosition < (carouselWidth - (cardWidth * 4))){
              console.log('next');
              scrollPosition = scrollPosition + cardWidth;
              $(currentCarouselId + ' .carousel-inner').animate({scrollLeft: scrollPosition},600);
          }
      });
      $(currentCarouselId + ' .carousel-control-prev').on('click', function(){
          if(scrollPosition > 0){
              console.log('prev');
              scrollPosition = scrollPosition - cardWidth;
              $(currentCarouselId + ' .carousel-inner').animate({scrollLeft: scrollPosition},600);
          }
      });
  }else{
      $(multipleItemCarousel).addClass('slide');
  }
});


      const navEl = document.querySelector('.navbar');

      window.addEventListener("scroll", () => {
        if (window.scrollY >= 56) {
          navEl.classList.add('navbar-scrolled');
        }
      });

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


