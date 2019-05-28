"use strict";

/**
 * Class
 * Holds the DOM <body>, because there is only one <body> on an entire page
 * we create a singleton
 * =============================================================================
 */
let instance = null;

class Root {

	/* ====================================================================== *
	 * Constructor
	 * ====================================================================== */
	constructor() {
		if (!instance) {
			instance = this;
		}

		this.init();

		return instance;
	}

	/* ====================================================================== *
	 * Inits
	 * ====================================================================== */

	/**
	 * general initialise of the main element
	 * ------------------------------------------------------
	 */
	init() {
		this.el = document.body;
	}

	/* ====================================================================== *
	 * Helpers
	 * ====================================================================== */

	/**
	 * check whether the body has a class or not
	 * ------------------------------------------------------
	 */
	hasClass(name) {
		return this.el.classList.contains(name);
	}

	/* ====================================================================== *
	 * Handlers
	 * ====================================================================== */

	/**
	 * add a class to the body
	 * ------------------------------------------------------
	 */
	handleAddClass(name) {
		if (this.hasClass(name)) {
			return;
		}

		this.el.classList.add(name);
	}

	/**
	 * remove a class from the body
	 * ------------------------------------------------------
	 */
	removeClass(name) {
		if (!this.hasClass(name)) {
			return;
		}

		this.el.classList.remove(name);
	}

	/**
	 * toggle a class on the body
	 * ------------------------------------------------------
	 */
	handleToggleClass(name) {
		const containsClass = this.hasClass(name);

		if (containsClass) {
			this.el.classList.remove(name);
		} else {
			this.el.classList.add(name);
		}
	}
}

export default new Root;
