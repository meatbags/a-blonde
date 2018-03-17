class Menu {
  constructor(isMobile) {
    this.navThreshold = 55;
    $('.menu-button').on('click', () => { this.toggleMenu(); });
    $('.menu .list-item a').on('click', () => { this.toggleMenu(); });
    $('.close-menu').on('click', () => { this.closeMenu(); });

    this.$doc = $(document);
    if (!isMobile) {
      $(document).on('scroll', () => { this.onScroll(); });
    } else {
      $(document).on('scroll', () => { this.mobileScroll(); });
    }
    this.onScroll();
  }

  onScroll() {
    // close menu
    var y = $(document).scrollTop();
    this.closeMenu();

    // snap nav to top
    if (y == 0) {
      $('.nav').removeClass('active').css({transform: `translateY(0px)`});
      $('.promo').removeClass('active');
    } else if (y <= this.navThreshold) {
      $('.nav').removeClass('active').css({transform: `translateY(${-y}px)`});
    } else {
      $('.promo').addClass('active');
      $('.nav').addClass('active');
    }
  }

  mobileScroll() {
    // close menu
    this.closeMenu();

    // snap nav immediately on mobile
    if (this.$doc.scrollTop() > this.navThreshold) {
      $('.promo').addClass('active');
      $('.nav').addClass('active');
    } else {
      $('.nav').removeClass('active').css({transform: `translateY(0px)`});
      $('.promo').removeClass('active');
    }
  }

  closeMenu() {
    // force close
    if ($('.menu').hasClass('active')) {
      this.toggleMenu();
    }
  }

  toggleMenu() {
    // toggle menu state
    var y = $(document).scrollTop();
    y = $('.nav').outerHeight() - ((y <= this.navThreshold) ? y : this.navThreshold);
    $('.menu').css({paddingTop: `${y}px`});
    $('.menu-button, .menu').toggleClass('active');

    if ($('.menu').hasClass('active')) {
      $('.menu .list-item').each((i, e) => {
        const $e = $(e);
        setTimeout(() => {
          $e.addClass('active');
        }, i * 100);
      });
    } else {
      $('.menu .list-item').each((i, e) => {
        const $e = $(e);
        setTimeout(() => {
          $e.removeClass('active');
        }, i * 100);
      });
    }
  }
}

export { Menu };
