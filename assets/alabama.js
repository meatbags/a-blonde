var App = {
	init : function() {
		// mobile check

		App.isMobile = window.mobileAndTabletcheck();

		// hook up menu
		$(".menu-button").on("click", App.toggleMenu);
		$(".menu__inner__list a").on("click", App.toggleMenu);
		$(document).on("scroll", App.scroll);

		// freeze for landing page
		if ($(".landing-page").length > 0) {
			$(".landing-page__prompt, .landing-page__image").on("click", App.removeLandingPage);

			if (window.location.hash == "") {
				$("html").addClass("freeze");
				$(".menu-button, .nav").addClass("hidden");
				$(".landing-page").removeClass("disabled");
				$(".collection").addClass("hidden");

				//delete video on mobile
				if (App.isMobile) {
					$('#landing-video').remove();
					$('.landing-background').addClass('mobile');
				} else {
					$('#landing-video')[0].play();
				}
			} else {
				$(".landing-page, .landing-background, #landing-video").remove();
			}
		}

		// make long titles smaller
		$(".nav__inner__title-main").each(function(i,e) {
			if ($(e).text().length > 20) {
				$(e).addClass("font-smaller");
			}
		});

		// get video frames
		if ($("iframe").length > 0) {
			$("iframe").each(function(i, e){
				var $f = $(e);

				if ($f.attr("src").indexOf("vimeo") != -1) {
					$(e).remove();
					$(".wrapper").prepend($(e));
					$(e).css({
						width: "100%"
					})
				}
			});
		}

		// get audio frames
		App.checkAudio();

		$(window).on('hashchange', function() {
			App.checkAudio();
		});

		// slick sliders
		$('.slick-slider').slick({
			infinite: true,
		  	slidesToShow: 1,
		  	slidesToScroll: 1,
			dots: true,
			arrows: false,
			centerMode: true,
			variableWidth: true,

		  	responsive: [{
      			breakpoint: 960,
      			settings: {
        			slidesToShow: 1,
        			slidesToScroll: 1,
        			infinite: true
      			}
    		}]
		});

		// animated text
		App.setupAnimatedText();

		// remove loading screen
		App.removeLoadingScreen();
	},

	setupAnimatedText: function() {
		// animated text

		App.textIn = function(e) {
			// animate in text

			var target = e.find('.collection__name__inner');

			if (target.find('.letter').length < 1) {
				// create spans

				var html = target.html().replace(/ /g, '_').split('');
				target.data('length', html.length);
				target.html("<span class='letter'>" + html.join("</span><span class='letter'>") + "</span>");
			}

			var length = parseInt(target.data('length'));
			var threshold = {
				max: 40,
				min: 13
			};

			// animate in spans

			target.find('.letter').css({display: 'none'});
			target.find('.letter').each(function(i, e) {
				if ($(e).html() == '_') {
					// show spaces, line-breaks immediately

					if ((length > threshold.min && length < threshold.max) || (length >= threshold.max && i % 4 == 0)) {
						$(e).html($(e).html().replace('_', '<br />'));
					} else {
						$(e).html($(e).html().replace('_', '&nbsp;'));
					}
					$(e).css({display: 'inline'});
				} else {
					// cut in other letters

					var t = Math.floor(Math.random() * 50 * length);

					setTimeout(function(){
						$(e).css({display: 'inline'});
					}, t);
				}
			});
		};

		App.textOut = function(e) {

		};

		$('.collection__name').on('mouseenter', function() {
			App.textIn($(this));
		});

		$('.collection__name').on('mouseleave', function() {
			App.textOut($(this));
		});
	},

	removeLoadingScreen: function() {
		$(".loading-screen").remove();
		$("html").removeClass("freeze");
	},

	checkAudio: function() {
		// audio on home/collections
		var autoplay = true;

		if (App.isMobile) {
			autoplay = false;
		}

		if (window.location.hash === '#collections' || window.location.hash === '#collections/') {
			if (!$('#jquery_jplayer_1').hasClass('loaded-audio')) {
				$('#jquery_jplayer_1').addClass('loaded-audio');

				$("#jquery_jplayer_1").jPlayer({
					ready: function (event) {
						$(this).jPlayer("setMedia", {
							title: "",
							mp3: audioTrackURLAlt
						});
						if (autoplay) {
							$(this).jPlayer("play", 1);
						}
					},
					playlistOptions: {
						autoPlay: autoplay
					},
					swfPath: shopifyAssetURL,
					supplied: "mp3",
					wmode: "window",
					useStateClassSkin: true,
					autoBlur: false,
					smoothPlayBar: true,
					keyEnabled: true,
					remainingDuration: true,
					toggleDuration: true,
					volume: 0.3,
					loop: true
				});
			}

			$('.jp-pause, .jp-play').on('click', function(){
				$('.jp-pause, .jp-play').toggleClass('active');
			});
			$(".jp-jplayer, .jp-audio").removeClass("display-none");
			$('.jp-audio').addClass('active');
		} else if (window.location.pathname === '/' || window.location.pathname === '') {
			$('#jquery_jplayer_1').addClass('loaded-audio');
			$("#jquery_jplayer_1").jPlayer({
				ready: function (event) {
					$(this).jPlayer("setMedia", {
						title: "",
						mp3: audioTrackURLAlt
					});
					if (autoplay) {
						$(this).jPlayer("play", 1);
					}
				},
				playlistOptions: {
					autoPlay: autoplay
				},
				swfPath: shopifyAssetURL,
				supplied: "mp3",
				wmode: "window",
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true,
				remainingDuration: true,
				toggleDuration: true,
				volume: 0.5,
				loop: true
			});
		}

		// audio embedded in collections
		$("p").each(function(i, e){
			var $p, text;

			$p = $(e);
			text = $(e).text();

			if (text.indexOf("http") != -1 && text.indexOf(".mp3") != -1) {
				$(e).remove();

				$("#jquery_jplayer_1").jPlayer({
					ready: function (event) {
						$(this).jPlayer("setMedia", {
							title: "",
							mp3: text
						});
						$(this).jPlayer("play", 1);
					},
					playlistOptions: {
						autoPlay: true
					},
					swfPath: shopifyAssetURL,
					supplied: "mp3",
					wmode: "window",
					useStateClassSkin: true,
					autoBlur: false,
					smoothPlayBar: true,
					keyEnabled: true,
					remainingDuration: true,
					toggleDuration: true,
					volume: 0.5,
					loop: true
				});

				//$("#jquery_jplayer_1").jPlayer("play");
				$(".jp-jplayer, .jp-audio").removeClass("display-none");
			}

		});
	},

	removeLandingPage: function() {
		var $landing = $('.landing-page, .landing-background, #landing-video');

		$("html").removeClass("freeze");
		$landing.addClass("hidden");
		$('#landing-video').remove();
		$(".landing-page__image").css({display: "none"});

		setTimeout(function() {
			$landing.remove()
		}, 1000);

		$(".menu-button, .nav").each(function(i, e){
			setTimeout(function(){
				$(e).removeClass("hidden");
			}, (i + 1) * 200);
		});

		$(".collection.hidden").each(function(i, e){
			setTimeout(function(){
				$(e).removeClass("hidden");
			}, 400 + Math.floor(Math.random() * 1000));
		});

		window.location.hash = "collections";
	},

	toggleMenu : function() {
		if ($(".menu-button").hasClass("active")) {
			$(".menu-button").removeClass("active");
			$(".menu").removeClass("active");
		} else {
			$(".menu-button").addClass("active");
			$(".menu").addClass("active");
		}
	},

	scroll : function() {
		if ($(".menu-button").hasClass("active")) {
			App.toggleMenu();
		}

		if ($(document).scrollTop() > $('.footer').offset().top - window.innerHeight) {
			if (!$('.jp-audio').hasClass('hover-disabled')) {
				$('.jp-audio').addClass('hover-disabled');
			}
		} else {
			if ($('.jp-audio').hasClass('hover-disabled')) {
				$('.jp-audio').removeClass('hover-disabled');
			}
		}
	}
};

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

window.onload = function() {
	App.init();
}
