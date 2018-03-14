class Menu {
  constructor() {
    this.navThreshold = 55;
    $('.menu-button').on('click', () => { this.toggleMenu(); });
    $('.menu .list-item a').on('click', () => { this.toggleMenu(); });
    $('.close-menu').on('click', () => { this.closeMenu(); });
    $(document).on('scroll', () => { this.onScroll(); });
    this.onScroll();
  }

  onScroll() {
    // close menu
    var y = $(document).scrollTop();
    if ($('.menu').hasClass('active')) {
      this.toggleMenu();
    }

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
