import './modules/mobile_check.js';
import * as Module from './modules';

class App {
	constructor() {
		this.isMobile = window.mobileCheck();
		this.navBar = new Module.NavBar(this.isMobile);
		this.text = new Module.Text(this.isMobile);
		this.audio = new Module.Audio(this.isMobile);
		this.filter = new Module.Filter();
		this.sliders = new Module.Gallery();
		this.landing = new Module.LandingPage();
		this.insta = new Module.Insta();
	}
};

window.onload = () => {
	var app = new App();
};
