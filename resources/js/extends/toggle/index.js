"use strict";

/**
 * Class
 * Used to hold a state and switch between a class on the main element
 * =============================================================================
 */
class Toggle {

	/* ====================================================================== *
	 * Constructor
	 * ====================================================================== */
	constructor(toggleClass) {
		this.toggleClass = toggleClass;
	}

	/* ====================================================================== *
	 * Inits
	 * ====================================================================== */

	/**
	 * initialise the toggle state
	 * ------------------------------------------------------
	 */
	init() {
		this.isToggled = this.el.classList.contains(this.toggleClass);
	}

	/* ====================================================================== *
	 * Handlers
	 * ====================================================================== */

	/**
	 * switch between toggled state
	 * ------------------------------------------------------
	 */
	handleToggle(e) {
		if (e) {
			e.preventDefault();
		}

		this.isToggled = !this.isToggled;

		if (this.isToggled) {
			this.handleEnable();
		} else {
			this.handleDisable();
		}
	}

	/**
	 * add a class to the main element
	 * ------------------------------------------------------
	 */
	handleEnable() {
		this.el.classList.add(this.toggleClass);

		this.isToggled = true;
	}

	/**
	 * remove class on the main element
	 * ------------------------------------------------------
	 */
	handleDisable() {
		this.el.classList.remove(this.toggleClass);

		this.isToggled = false;
	}
}

export default Toggle;
