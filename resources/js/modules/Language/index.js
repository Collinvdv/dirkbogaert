"use strict";

class Language {

	constructor(el) {
		this.el = el;

		this.init();
	}

	init() {
		console.log(this.el);
	}
}

export default Language;
