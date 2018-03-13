class Menu {
  constructor() {
    $('.menu-button').on('click', () => { this.toggleMenu(); });
    $('.menu__inner__list a').on('click', () => { this.toggleMenu(); });
    $(document).on('scroll', () => { this.onScroll(); });
    this.onScroll();
  }

  onScroll() {
    var y = $(document).scrollTop();
    $('.menu-button, .menu').removeClass('active');
    if (y == 0) {
      $('.nav').css({transform: `translateY(0px)`});
    } else if (y <= 85) {
      $('.nav').removeClass('active').css({transform: `translateY(${-y}px)`});
    } else {
      $('.nav').addClass('active');
    }
  }

  toggleMenu() {
    $('.menu-button, .menu').toggleClass('active');
  }
}

export { Menu };
