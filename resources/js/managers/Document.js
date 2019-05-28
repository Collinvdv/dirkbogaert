"use strict";

/**
 * Class
 * ============================================================================
 */
let instance = null;

class Document {

	/* ======================================================================= *
	 * Constructor
	 * ======================================================================= */
	constructor() {
		if (!instance) {
			instance = this;
		}

		this.initBinds();
		this.init();

		return instance;
	}

	/* ======================================================================= *
	 * Inits
	 * ======================================================================= */
	init() {
		this.isReady = document.readyState;
	}

	initBinds() {
		this.handleReadyState = this.handleReadyState.bind(this);
	}

	/* ======================================================================= *
	 * Handlers
	 * ======================================================================= */
	handleReadyState(cb) {
		this.isReady = document.readyState === "complete";

		if (!this.isReady) {
			this.handleIsNotReady(cb);
		} else {
			this.handleIsReady(cb);
		}
	}

	handleIsReady(cb) {
		clearInterval(this.readyTimeout);

		if (cb) {
			cb();
		}
	}

	handleIsNotReady(cb) {
		this.readyTimeout = setTimeout(() => this.handleReadyState(cb), 1);
	}
}

export default new Document;
