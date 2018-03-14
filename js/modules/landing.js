class Landing {
  constructor() {
    // landing page
    if ($(".landing-page").length) {
      this.initLandingPage();
		}

    this.video();
    this.removeLoadingScreen();
  }

  removeLoadingScreen() {
    // rm loading
    $(".loading-screen").remove();
		$("html").removeClass("freeze");
  }

  initLandingPage() {
    $(".landing-page__prompt, .landing-page__image").on("click", () => { this.removeLandingPage(); });

    if (window.location.hash == "") {
      $("html").addClass("freeze");
      $(".menu-button, .nav").addClass("hidden");
      $(".landing-page").removeClass("disabled");
      //$(".collection").addClass("hidden");

      //delete video on mobile
      if (this.isMobile) {
        $('#landing-video').remove();
        $('.landing-background').addClass('mobile');
      } else {
        $('#landing-video')[0].play();
      }
    } else {
      $(".landing-page, .landing-background, #landing-video").remove();
      this.showCollectionGrid();
    }
  }

  showCollectionGrid() {
    $('.columns__column').each((i, e) => {
      $(e).children('.collection.hidden').each((j, f) => {
        setTimeout(() => {
          $(f).removeClass("hidden");
        }, (j * 3 + i) * 200);
      });
    });
  }

  removeLandingPage() {
    var $targets = $('.landing-page, .landing-background, #landing-video');

		$("html").removeClass("freeze");
		$targets.addClass("hidden");
		$('#landing-video').remove();
		$(".landing-page__image").css({display: "none"});

		setTimeout(() => {
			$targets.remove()
		}, 1000);

		$(".menu-button, .nav").each((i, e) => {
			setTimeout(() => {
				$(e).removeClass("hidden");
			}, (i + 1) * 200);
		});

    this.showCollectionGrid();
		window.location.hash = "#collections";
  }

  video() {
    // get video frames
    if ($("iframe").length > 0) {
      $("iframe").each((i, e) => {
        if ($(e).attr("src").indexOf("vimeo") != -1) {
          $(e).remove();
          $(".wrthiser").prepend($(e));
          $(e).css({ width: "100%" });
        }
      });
    }
  }
}

export { Landing };
