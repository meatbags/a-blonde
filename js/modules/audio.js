/**
 ** audio.js
 ** - initialise audio player
 **/

class Audio {
  constructor(isMobile) {
    this.isMobile = isMobile;
    this.initAudio();
		$(window).on('hashchange', () => { this.initAudio(); });
  }

  initAudio() {
		var autoplay = false;

		if (window.location.hash == '#collections' || window.location.hash == '#collections/') {
			if (!$('#jquery_jplayer_1').hasClass('loaded-audio')) {
				$('#jquery_jplayer_1').addClass('loaded-audio');
				$("#jquery_jplayer_1").jPlayer({
					ready: (event) => {
						$("#jquery_jplayer_1").jPlayer("setMedia", {
							title: "",
							mp3: audioTrackURLAlt
						});
						if (autoplay) {
              $("#jquery_jplayer_1").jPlayer("play", 1);
						}
					},
					playlistOptions: {autoPlay: autoplay},
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
			$('.jp-pause, .jp-play').on('click', () => { $('.jp-pause, .jp-play').toggleClass('active'); });
			$(".jp-jplayer, .jp-audio").removeClass("display-none");
			$('.jp-audio').addClass('active');
		} else if (window.location.pathname == '/' || window.location.pathname == '') {
			$('#jquery_jplayer_1').addClass('loaded-audio');
			$("#jquery_jplayer_1").jPlayer({
				ready: function (event) {
					$(this).jPlayer("setMedia", {title: "", mp3: audioTrackURLAlt});
					if (autoplay) {
						$(this).jPlayer("play", 1);
					}
				},
				playlistOptions: {autoPlay: autoplay},
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
			var $p = $(e);
			var text = $(e).text();
			if (text.indexOf("http") != -1 && text.indexOf(".mp3") != -1) {
				$(e).remove();
				$("#jquery_jplayer_1").jPlayer({
					ready: (event) => {
						$("#jquery_jplayer_1").jPlayer("setMedia", {title: "", mp3: text});
						$("#jquery_jplayer_1").jPlayer("play", 1);
					},
					playlistOptions: {autoPlay: true},
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
}

export { Audio };
