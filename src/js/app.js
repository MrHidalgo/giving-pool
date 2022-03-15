import Common from "./common/common";

import Hamburger from "./macros/hamburger";

// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  Hamburger.init()

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
  $('a[href="#welcomeModal"][popup-js]').click();
  $('[popup-close-js]').on('click', (ev) => {
    $.magnificPopup.close();
  })

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
