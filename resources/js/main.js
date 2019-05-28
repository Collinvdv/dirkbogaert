"use strict";

/**
 * Imports
 * =============================================================================
 */

import {
	Language,
} from "./styleguides/general/modules";

import { dom } from "./styleguides/general/utils";

/**
 * Main initialise
 * initialise the different components for the general styleguide
 * =============================================================================
 */
init = () => {
	dom.initAll(".js-language", Language);
};

init();
