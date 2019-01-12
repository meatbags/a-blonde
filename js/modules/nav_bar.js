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
      promo: document.querySelector('.promo'),
      items: document.querySelectorAll('.nav__item'),
      dropdowns: document.querySelectorAll('.nav-dropdown'),
      mobileMenuButton: document.querySelector('#mobile-menu-button'),
      closeMenuButton: document.querySelector('#close-mobile-menu'),
      mobileMenu: document.querySelector('#mobile-menu')
    };

    // bind events
    window.addEventListener('scroll', () => { this.onScroll() });
    this.target.items.forEach(el => {
      el.addEventListener('mouseover', evt => {
        this.onHover(evt.currentTarget);
      });
    });
    this.target.dropdowns.forEach(el => {
      el.addEventListener('mouseleave', evt => {
        evt.currentTarget.classList.remove('active');
      });
    });
    this.target.mobileMenuButton.addEventListener('touchstart', evt => {
      evt.preventDefault();
      this.toggleMenu();
    });
    this.target.mobileMenuButton.addEventListener('mousedown', evt => {
      this.toggleMenu();
    });
    this.target.closeMenuButton.addEventListener('touchstart', evt => {
      evt.preventDefault();
      this.toggleMenu();
    });
    this.target.closeMenuButton.addEventListener('mousedown', evt => {
      this.toggleMenu();
    });

    // init scroll
    this.onScroll();
  }

  onHover(el) {
    // nav item hover event
    this.target.dropdowns.forEach(e => { e.classList.remove('active'); });
    if (el.dataset.target) {
      const target = document.querySelector(el.dataset.target);
      if (target) {
        // position dropdown under item and activate
        const rectNav = this.target.nav.getBoundingClientRect();
        const y = rectNav.top + rectNav.height;
        const rectItem = el.getBoundingClientRect();
        const x = window.innerWidth - (rectItem.left + rectItem.width) - 8;
        target.style.top = `${y}px`;
        target.style.right = `${x}px`;
        target.classList.add('active');
      }
    }
  };

  onScroll() {
    const doc = document.documentElement;
    const y = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    // close dropdown navs
    this.target.dropdowns.forEach(e => { e.classList.remove('active'); })

    // slide nav up and then snap
    if (y < 1) {
      this.target.nav.classList.remove('active');
      this.target.mobileMenu.classList.remove('menu-active');
      if (!this.isMobile) {
        this.target.nav.style.transform = `translateY(0px)`;
      }
      if (this.target.promo) {
        this.target.promo.classList.remove('active');
      }
    } else if (y <= this.navThreshold) {
      this.target.nav.classList.remove('active');
      this.target.mobileMenu.classList.remove('menu-active');
      if (!this.isMobile) {
        this.target.nav.style.transform = `translateY(${-y}px)`;
      }
    } else {
      this.target.nav.classList.add('active');
      this.target.mobileMenu.classList.add('menu-active');
      if (this.target.promo) {
        this.target.promo.classList.add('active');
      }
    }
  }

  toggleMenu() {
    this.target.mobileMenuButton.classList.toggle('active');
    if (this.target.mobileMenuButton.classList.contains('active')) {
      this.target.mobileMenu.classList.add('active');
    } else {
      this.target.mobileMenu.classList.remove('active');
    }
  }
}

export { NavBar };
