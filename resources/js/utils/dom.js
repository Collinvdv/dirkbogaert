"use strict";

/**
 * Intialise all the DOM elements based on the selector
 * ============================================================================
 */
const initAll = (selector, jsClass, params) => {
	const els = document.querySelectorAll(selector);

	if (!els || els.length <= 0) {
		return null;
	}

	return [...els].map((el) => {
		return new jsClass(el, params);
	});
};

/**
 * Intialise just one element based on the selector
 * ============================================================================
 */
const init = (selector, jsClass, params) => {
	const el = document.querySelector(selector);

	if (!el) {
		return;
	}

	return new jsClass(el, params);
};

/**
 * Check whether the dom element is in viewport or not
 * ============================================================================
 */
const isInView = (el) => {
	const bounding = el.getBoundingClientRect();

	return (
		bounding.top <= window.innerHeight &&
		bounding.top + bounding.height > 0
	);
};

export default {
	initAll,
	init,
	isInView
};
