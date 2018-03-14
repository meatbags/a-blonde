import './modules/mobile_check.js';
import * as Module from './modules';

class App {
	constructor() {
		this.isMobile = window.mobileCheck();
		this.menu = new Module.Menu();
		this.text = new Module.Text(this.isMobile);
		this.audio = new Module.Audio(this.isMobile);
		this.sliders = new Module.Sliders();
		this.landing = new Module.Landing();
		this.insta = new Module.Insta();
	}
};

window.onload = () => {
	var app = new App();
};
