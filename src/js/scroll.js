import $ from 'jquery';

const Scroll = {
  toTop: () => {
    $(() => {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });
  }
};

module.exports = Scroll;
