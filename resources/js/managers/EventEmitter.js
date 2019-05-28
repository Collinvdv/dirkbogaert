"use strict";

/**
 * Class
 * =============================================================================
 */

let instance = null;

class EventEmitter {

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
	init() {
		this.listeners = {};
	}

	/* ====================================================================== *
	 * Helpers
	 * ====================================================================== */
	hasListener(label) {
		return this.listeners[label] ? true : false;
	}

	getListener(label) {
		return this.listeners[label] || null;
	}

	isFunction(obj) {
		return typeof obj == "function" || false;
	}

	/* ====================================================================== *
	 * Handlers
	 * ====================================================================== */
	handleAdd(label, func) {
		const callbacks = this.hasListener(label) ? (
			this.getListener(label)
		) : (
			new Array()
		);

		callbacks.push(func);

		this.listeners[label] = callbacks;
	}

	handleRemove(label, func) {
		const callbacks = this.getListener(label);
		let index = null;

		if (!callbacks || !callbacks.length) {
			return false;
		}

		index = callbacks.reduce((i, callback, index) => {
			return (this.isFunction(callback) && callback === func) ? i = index : i;
		}, -1);

		if (index > -1) {
			callbacks.splice(index, 1);
			this.listeners[label] = callbacks;
		}

		return true;
	}

	handleEmit(label, ...args) {
		const callbacks = this.getListener(label);

		if (!callbacks || !callbacks.length) {
			return false;
		}

		for (let i = 0; i < callbacks.length; i++) {
			const cb = callbacks[i];

			cb(...args);
		}

		return true;
	}
}

export default new EventEmitter;
