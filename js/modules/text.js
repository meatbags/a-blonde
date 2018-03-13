class Text {
  constructor(isMobile) {
    this.isMobile = isMobile;
    this.titleResizeThreshold = 20;
    this.formatTitles();
    this.animatedText();
  }

  formatTitles() {
    // resize longer titles
    $(".nav__inner__title-main").each((i,e) => {
			if ($(e).text().length > this.titleResizeThreshold) {
				$(e).addClass("font-smaller");
			}
		});
  }

  animatedText() {
    // animated text
    this.textIn = ($e) => {
			var target = $e.find('.collection__name__inner');
			var whitespaceFlag = '_';

      if (target.find('.letter').length < 1) {
				var html = target.html().replace(/ /g, whitespaceFlag).split('');
				target.data('length', html.length);
				target.html("<span class='letter'>" + html.join("</span><span class='letter'>") + "</span>");
			}

      var length = parseInt(target.data('length'));
			var threshold = { max: 40, min: 13 };

			// animate spans
			target.find('.letter').css({display: 'none'});
			target.find('.letter').each(function(i, e) {
        var $e = $(e);
        if ($e.html() == whitespaceFlag) {
					// show spaces, line-breaks immediately
          var isBreak = (length > threshold.min && length < threshold.max) || (length >= threshold.max && i % 4 == 0);
          $e.html($e.html().replace(whitespaceFlag, isBreak ? '<br />' : '&nbsp;'));
					$e.css({display: 'inline'});
				} else {
					// cut in other letters randomly
					setTimeout(() => {
						$e.css({display: 'inline'});
					}, Math.floor(Math.random() * 50 * length));
				}
			});
		}

		// destop/ mobile versions
		if (!this.isMobile) {
			$('.collection__name').on('mouseenter', (e) => {
				this.textIn($(e.currentTarget));
			});
		} else {
			// mobile -- on scroll
			$(document).on('scroll', () => {
				var docTop = $(document).scrollTop();
				var y = docTop + window.innerHeight / 2;
				var docBottom = docTop + window.innerHeight;

				$('.collection__name').each(function(i, e) {
					var top = $(e).offset().top;
					var centre = top + $(e).outerHeight() / 2;
					var bottom = top + $(e).outerHeight();

					if ((y >= top && y <= bottom) || (centre >= docTop && centre <= docBottom)) {
						// check flag
						$parent = $(e).closest('.collection, .product');
						if (!$parent.hasClass('scrolled')) {
							$parent.addClass('scrolled');
							this.textIn($(e));
						}
					} else {
						// reset
						$(e).closest('.collection, .product').removeClass('scrolled');
					}
				});
			});

			// fire once to initialise
			$(document).scroll();
		}
  }
}

export { Text };
