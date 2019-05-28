"use strict";

/**
 * Imports
 * =============================================================================
 */

import Trigger from "./Trigger";
import More from "./More";

/**
 * Class
 * =============================================================================
 */
class Collapse {

	/* ====================================================================== *
	 * Constructor
	 * ====================================================================== */
	constructor(el, {
		triggerClass,
		triggerMoreClass
	}) {
		this.openClass = "is-open";
		this.moreClass = "is-more";

		this.el = el;
		this.triggerClass = triggerClass;
		this.triggerMoreClass = triggerMoreClass;

		this.initBinds();
		this.init();
	}

	/* ====================================================================== *
	 * Inits
	 * ====================================================================== */
	init() {
		const more = this.el.querySelector(this.triggerMoreClass);

		this.isOpen = this.el.classList.contains(this.openClass);
		this.isMore = this.el.classList.contains(this.moreClass);

		this.trigger = new Trigger(this.el.querySelector(this.triggerClass), {
			clickCb: this.handleToggleOpen,
		});

		this.more = more && new More(more, {
			clickCb: this.handleToggleMore
		});
	}

	initBinds() {
		this.handleToggleOpen = this.handleToggleOpen.bind(this);
		this.handleToggleMore = this.handleToggleMore.bind(this);

		this.handleEnable = this.handleEnable.bind(this);
		this.handleDisable = this.handleDisable.bind(this);
	}

	/* ====================================================================== *
	 * Handlers
	 * ====================================================================== */
	handleToggleOpen(e) {
		if (e) {
			e.preventDefault();
		}

		this.isOpen = !this.isOpen;

		if (this.isOpen) {
			this.handleEnable();
		} else {
			this.handleDisable();
		}
	}

	handleToggleMore(e) {
		if (e) {
			e.preventDefault();
		}

		if (!this.more) {
			return;
		}

		this.isMore = !this.isMore;

		if (this.isMore) {
			this.handleExpand();
		} else {
			this.handleCompress();
		}
	}

	handleEnable() {
		this.el.classList.add(this.openClass);

		this.isOpen = true;
	}

	handleDisable() {
		this.el.classList.remove(this.openClass);

		if (this.isMore) {
			this.handleCompress();
		}

		this.isOpen = false;
	}

	handleExpand() {
		if (!this.more) {
			return;
		}

		this.el.classList.add(this.moreClass);

		this.isMore = true;
	}

	handleCompress() {
		if (!this.more) {
			return;
		}

		this.el.classList.remove(this.moreClass);

		this.isMore = false;
	}
}

export default Collapse;
