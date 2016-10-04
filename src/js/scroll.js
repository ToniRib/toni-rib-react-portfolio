import $ from 'jquery';

const Scroll = {
  toTop: () => {
    $(() => {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });
  },

  toBio: () => {
    $(() => {
      $('html, body').animate({
        scrollTop: $('#bio-title').offset().top
      }, 1000);
    });
  },

  toPortfolio: () => {
    $(() => {
      $('html, body').animate({
        scrollTop: $('#portfolio-title').offset().top
      }, 1000);
    });
  },

  toContact: () => {
    $(() => {
      $('html, body').animate({
        scrollTop: $('#contact-title').offset().top
      }, 1000);
    });
  }
};

module.exports = Scroll;
