var stk =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _modules = __webpack_require__(2);

var Module = _interopRequireWildcard(_modules);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
	_classCallCheck(this, App);

	this.isMobile = window.mobileCheck();
	this.menu = new Module.Menu();
	this.text = new Module.Text(this.isMobile);
	this.audio = new Module.Audio(this.isMobile);
	this.sliders = new Module.Sliders();
	this.landing = new Module.Landing();
	this.insta = new Module.Insta();
};

;

window.onload = function () {
	var app = new App();
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.mobileCheck = function () {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = __webpack_require__(3);

Object.keys(_menu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _menu[key];
    }
  });
});

var _audio = __webpack_require__(4);

Object.keys(_audio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _audio[key];
    }
  });
});

var _text = __webpack_require__(5);

Object.keys(_text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _text[key];
    }
  });
});

var _landing = __webpack_require__(6);

Object.keys(_landing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _landing[key];
    }
  });
});

var _sliders = __webpack_require__(7);

Object.keys(_sliders).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sliders[key];
    }
  });
});

var _insta = __webpack_require__(8);

Object.keys(_insta).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _insta[key];
    }
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
  function Menu() {
    var _this = this;

    _classCallCheck(this, Menu);

    $('.menu-button').on('click', function () {
      _this.toggleMenu();
    });
    $('.menu .list-item a').on('click', function () {
      _this.toggleMenu();
    });
    $('.close-menu').on('click', function () {
      _this.closeMenu();
    });
    $(document).on('scroll', function () {
      _this.onScroll();
    });
    this.onScroll();
  }

  _createClass(Menu, [{
    key: 'onScroll',
    value: function onScroll() {
      var y = $(document).scrollTop();
      if ($('.menu').hasClass('active')) {
        this.toggleMenu();
      }
      if (y == 0) {
        $('.nav').removeClass('active').css({ transform: 'translateY(0px)' });
        $('.promo').removeClass('active');
      } else if (y <= 45) {
        $('.nav').removeClass('active').css({ transform: 'translateY(' + -y + 'px)' });
      } else {
        $('.promo').addClass('active');
        $('.nav').addClass('active');
      }
    }
  }, {
    key: 'closeMenu',
    value: function closeMenu() {
      if ($('.menu').hasClass('active')) {
        this.toggleMenu();
      }
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      var y = $(document).scrollTop();
      y = $('.nav').outerHeight() - (y <= 45 ? y : 45);
      $('.menu').css({ paddingTop: y + 'px' });
      $('.menu-button, .menu').toggleClass('active');

      if ($('.menu').hasClass('active')) {
        $('.menu .list-item').each(function (i, e) {
          var $e = $(e);
          setTimeout(function () {
            $e.addClass('active');
          }, i * 100);
        });
      } else {
        $('.menu .list-item').each(function (i, e) {
          var $e = $(e);
          setTimeout(function () {
            $e.removeClass('active');
          }, i * 100);
        });
      }
    }
  }]);

  return Menu;
}();

exports.Menu = Menu;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Audio = function () {
	function Audio(isMobile) {
		var _this = this;

		_classCallCheck(this, Audio);

		this.isMobile = isMobile;
		this.initAudio();
		$(window).on('hashchange', function () {
			_this.initAudio();
		});
	}

	_createClass(Audio, [{
		key: 'initAudio',
		value: function initAudio() {
			var autoplay = false;

			if (window.location.hash == '#collections' || window.location.hash == '#collections/') {
				if (!$('#jquery_jplayer_1').hasClass('loaded-audio')) {
					$('#jquery_jplayer_1').addClass('loaded-audio');
					$("#jquery_jplayer_1").jPlayer({
						ready: function ready(event) {
							$("#jquery_jplayer_1").jPlayer("setMedia", {
								title: "",
								mp3: audioTrackURLAlt
							});
							if (autoplay) {
								$("#jquery_jplayer_1").jPlayer("play", 1);
							}
						},
						playlistOptions: { autoPlay: autoplay },
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
				$('.jp-pause, .jp-play').on('click', function () {
					$('.jp-pause, .jp-play').toggleClass('active');
				});
				$(".jp-jplayer, .jp-audio").removeClass("display-none");
				$('.jp-audio').addClass('active');
			} else if (window.location.pathname == '/' || window.location.pathname == '') {
				$('#jquery_jplayer_1').addClass('loaded-audio');
				$("#jquery_jplayer_1").jPlayer({
					ready: function ready(event) {
						$(this).jPlayer("setMedia", { title: "", mp3: audioTrackURLAlt });
						if (autoplay) {
							$(this).jPlayer("play", 1);
						}
					},
					playlistOptions: { autoPlay: autoplay },
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
			$("p").each(function (i, e) {
				var $p = $(e);
				var text = $(e).text();
				if (text.indexOf("http") != -1 && text.indexOf(".mp3") != -1) {
					$(e).remove();
					$("#jquery_jplayer_1").jPlayer({
						ready: function ready(event) {
							$("#jquery_jplayer_1").jPlayer("setMedia", { title: "", mp3: text });
							$("#jquery_jplayer_1").jPlayer("play", 1);
						},
						playlistOptions: { autoPlay: true },
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
		}
	}]);

	return Audio;
}();

exports.Audio = Audio;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Text = function () {
	function Text(isMobile) {
		_classCallCheck(this, Text);

		this.isMobile = isMobile;
		this.titleResizeThreshold = 20;
		this.formatTitles();
		//this.animatedText();
	}

	_createClass(Text, [{
		key: "formatTitles",
		value: function formatTitles() {
			var _this = this;

			// resize longer titles
			$(".nav__inner__title-main").each(function (i, e) {
				if ($(e).text().length > _this.titleResizeThreshold) {
					$(e).addClass("font-smaller");
				}
			});
		}
	}, {
		key: "animatedText",
		value: function animatedText() {
			var _this2 = this;

			// animated text
			this.textIn = function ($e) {
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
				target.find('.letter').css({ display: 'none' });
				target.find('.letter').each(function (i, e) {
					var $e = $(e);
					if ($e.html() == whitespaceFlag) {
						// show spaces, line-breaks immediately
						var isBreak = length > threshold.min && length < threshold.max || length >= threshold.max && i % 4 == 0;
						$e.html($e.html().replace(whitespaceFlag, isBreak ? '<br />' : '&nbsp;'));
						$e.css({ display: 'inline' });
					} else {
						// cut in other letters randomly
						setTimeout(function () {
							$e.css({ display: 'inline' });
						}, Math.floor(Math.random() * 50 * length));
					}
				});
			};

			// destop/ mobile versions
			if (!this.isMobile) {
				$('.collection__name').on('mouseenter', function (e) {
					_this2.textIn($(e.currentTarget));
				});
			} else {
				// mobile -- on scroll
				$(document).on('scroll', function () {
					var docTop = $(document).scrollTop();
					var y = docTop + window.innerHeight / 2;
					var docBottom = docTop + window.innerHeight;

					$('.collection__name').each(function (i, e) {
						var top = $(e).offset().top;
						var centre = top + $(e).outerHeight() / 2;
						var bottom = top + $(e).outerHeight();

						if (y >= top && y <= bottom || centre >= docTop && centre <= docBottom) {
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
	}]);

	return Text;
}();

exports.Text = Text;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Landing = function () {
  function Landing() {
    _classCallCheck(this, Landing);

    // landing page
    if ($(".landing-page").length) {
      this.initLandingPage();
    }

    this.video();
    this.removeLoadingScreen();
  }

  _createClass(Landing, [{
    key: "removeLoadingScreen",
    value: function removeLoadingScreen() {
      // rm loading
      $(".loading-screen").remove();
      $("html").removeClass("freeze");
    }
  }, {
    key: "initLandingPage",
    value: function initLandingPage() {
      var _this = this;

      $(".landing-page__prompt, .landing-page__image").on("click", function () {
        _this.removeLandingPage();
      });

      if (window.location.hash == "") {
        $("html").addClass("freeze");
        $(".menu-button, .nav").addClass("hidden");
        $(".landing-page").removeClass("disabled");
        $(".collection").addClass("hidden");

        //delete video on mobile
        if (this.isMobile) {
          $('#landing-video').remove();
          $('.landing-background').addClass('mobile');
        } else {
          $('#landing-video')[0].play();
        }
      } else {
        $(".landing-page, .landing-background, #landing-video").remove();
      }
    }
  }, {
    key: "removeLandingPage",
    value: function removeLandingPage() {
      var $targets = $('.landing-page, .landing-background, #landing-video');

      $("html").removeClass("freeze");
      $targets.addClass("hidden");
      $('#landing-video').remove();
      $(".landing-page__image").css({ display: "none" });

      setTimeout(function () {
        $targets.remove();
      }, 1000);

      $(".menu-button, .nav").each(function (i, e) {
        setTimeout(function () {
          $(e).removeClass("hidden");
        }, (i + 1) * 200);
      });

      $(".collection.hidden").each(function (i, e) {
        setTimeout(function () {
          $(e).removeClass("hidden");
        }, 400 + Math.floor(Math.random() * 1000));
      });

      window.location.hash = "#collections";
    }
  }, {
    key: "video",
    value: function video() {
      // get video frames
      if ($("iframe").length > 0) {
        $("iframe").each(function (i, e) {
          if ($(e).attr("src").indexOf("vimeo") != -1) {
            $(e).remove();
            $(".wrthiser").prepend($(e));
            $(e).css({ width: "100%" });
          }
        });
      }
    }
  }]);

  return Landing;
}();

exports.Landing = Landing;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sliders = function () {
  function Sliders() {
    _classCallCheck(this, Sliders);

    // slick sliders
    this.createSliders();
  }

  _createClass(Sliders, [{
    key: 'createSliders',
    value: function createSliders() {
      var _this = this;

      var $SS = $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
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

      // force move to slide
      $('.slick-slide').click(function () {
        $SS.slick('slickGoTo', parseInt($(_this).data('slickIndex')));
      });
    }
  }]);

  return Sliders;
}();

exports.Sliders = Sliders;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Insta = function () {
  function Insta() {
    _classCallCheck(this, Insta);

    // ajax get instagram feed and inject it into doc
    if (isHome) {
      this.target = $('.grid-instagram__inner');
      this.href = 'https://www.instagram.com/alabamablonde/';
      /*
      TODO: fix
      $.ajax({
        url: this.href,
        type:'GET',
      success: (data) => {
          this.inject(data);
      },
      error: (jqXHR, textStatus, errorThrown) => {
      console.warn(jqXHR, textStatus, errorThrown);
      }
      });
      */
    }
  }

  _createClass(Insta, [{
    key: 'inject',
    value: function inject(data) {
      // inject pulled images into page
      var body = '<div id="body-mock">' + data.replace(/^[\s\S]*<body.*?>|<\/body>[\s\S]*$/ig, '') + '</div>';
      var $body = $(body);

      // parse child nodes
      for (var i = 0; i < $body[0].children.length; i += 1) {
        var node = $body[0].children[i];

        // parse node text
        if (node.innerHTML.indexOf('window._sharedData') != -1) {
          var text = node.innerHTML.split('=');
          text.shift();

          console.log(text);

          text = text.join('=');

          text = text.replace(/;/g, '');
          var feed = JSON.parse(text);

          console.log(feed);
          /*
          var images = feed.entry_data.ProfilePage[0].user.media.nodes;
          images = images.map(item => item.thumbnail_src);
          // add to doc
          for (let j=0, len=images.length; j<len; ++j) {
            this.target.append(
              $('<div />', {class: 'grid__sixth responsive item'}).append(
                $('<div />', {
                  class: 'item__inner clickable',
                  html: '<a target="_blank" href="${this.href}"><img src="${images[j]}" /></a>'
                })
              )
            );
          }
          */
        }
      }
    }
  }]);

  return Insta;
}();

exports.Insta = Insta;

/***/ })
/******/ ]);