"use strict";

/**
 * Imports
 * =============================================================================
 */
import { Collapse } from "../../extends";

/**
 * Class
 * =============================================================================
 */
class Language extends Collapse {

	/* ====================================================================== *
	 * Constructor
	 * ====================================================================== */
	constructor(el) {
		super(el, {
			triggerClass: ".c-language__header"
		});
	}
}

export default Language;
