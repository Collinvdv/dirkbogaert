"use strict";

/**
 * Class
 * =============================================================================
 */
class More {

	/* ====================================================================== *
	 * Constructor
	 * ====================================================================== */
	constructor(el, { clickCb }) {
		this.el = el;
		this.clickCb = clickCb;

		this.initEvents();
	}

	/* ====================================================================== *
	 * Inits
	 * ====================================================================== */
	initEvents() {
		this.el.addEventListener("click", this.handleClick.bind(this));
	}

	/* ====================================================================== *
	 * Handlers
	 * ====================================================================== */
	handleClick(e) {
		if (e) {
			e.preventDefault();
		}

		if (this.clickCb) {
			this.clickCb();
		}
	}
}

export default More;
