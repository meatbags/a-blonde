class Filter {
  constructor() {
    // product filter
    this.tags = [];
    this.pathname = window.location.pathname;
    if (this.pathname.indexOf('/all') != -1) {
      this.highlightTags();
    } else {
      this.prefix = this.pathname;
    }
    this.events();
    $('.filters-list').removeClass('hidden');
    // show tax notice
    $('.tax-notice').removeClass('hidden');
  }

  events() {
    $('.filter').on('click', (e) => {
      $(e.currentTarget).toggleClass('active');
      this.parseTag($(e.currentTarget).data('tag'));
    });
    $('.clear-tags').on('click', (e) => {
      this.clearTags();
    });
  }

  highlightTags() {
    // get tags from URL and highlight on page
    var p = this.pathname.split('/all/');

    if (p.length > 1) {
      var tagString = p[1];
      this.tags = tagString.split('+');
      this.prefix = p[0] + '/all';
      this.sanitiseTags();
      for (var i=0; i<this.tags.length; i++) {
        $('.tag-' + this.tags[i]).addClass('active');
      }
    } else {
      // reset
      this.prefix = this.pathname;
    }
  }

  sanitiseTags() {
    // remove naughty, dirty tags
    for (var i=this.tags.length; i>-1; --i) {
      if (this.tags[i] === '') {
        this.tags.splice(i, 1);
      }
    }
  }

  parseTag(tag) {
    // add or remove tag from list, apply to url
    var unique = true;
    for (var i=0; i<this.tags.length; ++i) {
      if (this.tags[i] == tag) {
        this.tags.splice(i, 1);
        unique = false;
        break;
      }
    }
    if (unique) {
      this.tags.push(tag);
    }

    // TODO -- refactor
    if (unique) {
      this.tags = [tag];
    } else {
      this.tags = [];
    }

    this.constructURL();
  }

  clearTags() {
    // remove all tag filters
    this.tags = [];
    this.constructURL();
  }

  constructURL() {
    // construct URL from tags, go there
    var tagString = this.tags.join('+');
    var href = window.location.origin + this.prefix + '/' + tagString;
    window.location.href = href;
  }
}

export { Filter };
