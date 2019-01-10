/**
 ** menu.js
 ** - hook up the website menu
 **/

class NavBar {
  constructor(isMobile) {
    this.isMobile = isMobile;
    this.navThreshold = 50;
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
    if (y === 0) {
      this.target.nav.classList.remove('active');
      this.target.promo.classList.remove('active');
    } else if (y <= this.navThreshold) {
      if (!this.isMobile) {
        this.target.nav.classList.remove('active');
        this.target.nav.style.transform = `translateY(${-y}px)`;
      }
    } else {
      this.target.nav.classList.add('active');
      this.target.promo.classList.add('active');
    }
  }
}

export { NavBar };
