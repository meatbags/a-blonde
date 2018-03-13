class Menu {
  constructor() {
    $('.menu-button').on('click', () => { this.toggleMenu(); });
    $('.menu .list-item a').on('click', () => { this.toggleMenu(); });
    $(document).on('scroll', () => { this.onScroll(); });
    this.onScroll();
  }

  onScroll() {
    var y = $(document).scrollTop();
    if ($('.menu').hasClass('active')) {
      this.toggleMenu();
    }
    if (y == 0) {
      $('.nav').css({transform: `translateY(0px)`});
    } else if (y <= 45) {
      $('.nav').removeClass('active').css({transform: `translateY(${-y}px)`});
    } else {
      $('.nav').addClass('active');
    }
  }

  toggleMenu() {
    var y = $(document).scrollTop();
    y = $('.nav').outerHeight() - ((y <= 45) ? y : 45);
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
