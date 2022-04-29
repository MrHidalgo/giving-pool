import Common from "./common/common";

import Hamburger from "./macros/hamburger";
import Countdown from "./macros/countdown";

const initHeaderFixed = () => {

  let countScroll = $(window).scrollTop(),
    headerElement = $('.header');

  if (countScroll > 10) {
    headerElement.addClass("is-fixed");
  } else {
    headerElement.removeClass("is-fixed");
  }

};

// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  Hamburger.init()
  if($('.landing__timer').length > 0) Countdown.init();

  $('[popup-js]').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'is-show',
    callbacks: {
      beforeOpen: function() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      close: function() {}
    }
  });
  // $('a[href="#welcomeModal"][popup-js]').click();
  $('[popup-close-js]').on('click', (ev) => {
    $.magnificPopup.close();
  })

  initHeaderFixed();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {
  initHeaderFixed();
}, false);
