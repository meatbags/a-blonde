/**
 ** menu.js
 ** - hook up the website menu
 **/

class NavBar {
  constructor(isMobile) {
    this.isMobile = isMobile;
    this.navThreshold = 32;
    this.target = {
      nav: document.querySelector('.nav'),
      promo: document.querySelector('.promo')
    };

    // bind document scroll
    window.addEventListener('scroll', () => { this.onScroll() });

    // init
    this.onScroll();
  }

  onScroll() {
    const doc = document.documentElement;
    const y = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    // slide nav up and then snap
    if (y < 1) {
      this.target.nav.classList.remove('active');
      if (!this.isMobile) {
        this.target.nav.style.transform = `translateY(0px)`;
      }
      if (this.target.promo) {
        this.target.promo.classList.remove('active');
      }
    } else if (y <= this.navThreshold) {
      if (!this.isMobile) {
        this.target.nav.classList.remove('active');
        this.target.nav.style.transform = `translateY(${-y}px)`;
      }
    } else {
      this.target.nav.classList.add('active');
      if (this.target.promo) {
        this.target.promo.classList.add('active');
      }
    }
  }
}

export { NavBar };
