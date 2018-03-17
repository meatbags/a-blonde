class Gallery {
  constructor() {
    // image galleries, product page events
    if ($('.gallery-button').length) {
      this.events();
    }
  }

  events() {
    // hook up
    $('.gallery-button').on('click', (e) => {
      $('.gallery-button.active').removeClass('active');
      var $e = $(e.currentTarget);
      $e.addClass('active');
      var target = $e.data('target');
      $('.product-page__image__inner .list-item.active').removeClass('active');
      $(target).addClass('active');
    });

    $('select').change((e) => {
      //var $e = $(e.currentTarget);
      var $ref = $('#productSelect').find('option:selected');
      var id = $ref.data('img');
      if (id != '') {
        $('.image-id-' + id).click();
      }
    })
  }
}

export { Gallery };
