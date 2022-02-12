const Hamburger = (function() {
  const initHamburger = () => {

    if(!document.querySelector("[hamburger-js]")) return;

    const btn = document.querySelector("[hamburger-js]"),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

    /**
     * @description
     */
    btn.addEventListener("click", (ev) => {
      ev.currentTarget.classList.toggle("is-active");
      mobileContainer.classList.toggle("is-open");

      hideScrollContainer.forEach((val, idx) => {
        val.classList.toggle("is-hideScroll");
      });
    });

  };

  const init = function() {
    initHamburger();
  };
  return {
    init: init
  };

})();

export default Hamburger;
