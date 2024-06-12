$(document).ready(function () {
    // Initialize OwlCarousel only when the element is visible
    $('.carousel3').owlCarousel({
      loop: true,
      margin: 20,
      autoplay: false,
      responsive: {
        0: {
          items: 1.1,
        },
        768: {
          items: 1.4, // This breakpoint won't be used as carousel is hidden on larger screens
        },
        992: {
          items: 2,
        },
        1024: {
          items: 2.5,
        }
      }
    });
  });