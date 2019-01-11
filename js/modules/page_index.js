/**
 ** page_index.js
 ** - index page specific
 **/

class PageIndex {
  constructor() {
    if (document.querySelector('.landing-page')) {
      this.initLandingPage();
    }
    this.removeLoadingScreen();
  }

  removeLoadingScreen() {
    document.querySelector('html').classList.remove('freeze');
    this.removeElement(document.querySelector('.loading-screen'));
  }

  removeElement(el) {
    if (el) {
      el.parentNode.removeChild(el);
    }
  }

  initLandingPage() {
    // bind events
    const selectors = ['.landing-page__prompt', '.landing-page__image'];
    selectors.forEach(key => {
      const el = document.querySelector(key);
      if (el) {
        el.addEventListener('touchstart', evt => {
          evt.preventDefault();
          this.removeLandingPage();
        });
        el.addEventListener('mousedown', evt => {
          this.removeLandingPage();
        });
      }
    });

    // targets
    const video = document.querySelector('#landing-video');
    const page = document.querySelector('.landing-page');
    const background = document.querySelector('.landing-background');

    if (window.location.hash == "") {
      document.querySelector('html').classList.add('freeze');
      page.classList.remove('disabled');

      //delete video on mobile
      if (this.isMobile) {
        this.removeElement(video);
        background.classList.add('mobile');
      } else {
        video.play();
      }
    } else {
      this.removeElement(video);
      this.removeElement(page);
      this.removeElement(background);
    }
  }

  removeLandingPage() {
    document.querySelector('html').classList.remove('freeze');

    // targets
    const video = document.querySelector('#landing-video');
    const page = document.querySelector('.landing-page');
    const background = document.querySelector('.landing-background');
    const image = document.querySelector('.landing-page__image');

    // hide elements (begins transitions)
    video.classList.add('hidden');
    page.classList.add('hidden');
    background.classList.add('hidden');
    this.removeElement(video);
    if (image) {
      image.style.display = 'none';
    }

    // remove after fade out
		setTimeout(() => {
      this.removeElement(video);
      this.removeElement(page);
			this.removeElement(background);
		}, 1000);

		window.location.hash = "#home";
  }
}

export { PageIndex };
