class Gallery {
  constructor() {
    // image galleries
    $('.gallery-button').on('click', (e) => {
      $('.gallery-button.active').removeClass('active');
      var $e = $(e.currentTarget);
      $e.addClass('active');
      var target = $e.data('target');
      $('.product-page__image__inner .list-item.active').removeClass('active');
      $(target).addClass('active');
    });
  }
}

export { Gallery };
