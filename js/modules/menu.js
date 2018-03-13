class Menu {
  constructor() {
    $('.menu-button').on('click', () => { this.toggleMenu(); });
    $('.menu__inner__list a').on('click', () => { this.toggleMenu(); });
    $(document).on('scroll', () => { this.onScroll(); });
  }

  onScroll() {
    $('.menu-button, .menu').removeClass('active');
  }

  toggleMenu() {
    $('.menu-button, .menu').toggleClass('active');
  }
}

export { Menu };
