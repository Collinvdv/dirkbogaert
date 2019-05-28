"use strict";

// -------------------------------------------------------------------
// :: IMPORTS
// -------------------------------------------------------------------
import { dom } from "../utils";

// -------------------------------------------------------------------
// :: GLOBALS
// -------------------------------------------------------------------
let instance = null;

// -------------------------------------------------------------------
// :: CLASS
// -------------------------------------------------------------------
class AnimationManager {

  constructor() {
    if (!instance) {
      instance = this;
    }

    this.initBinds();
    this.init();

    return instance;
  }

  init() {
    this.renderer = [];
  }

  initBinds() {
    this.draw = this.draw.bind(this);
  }

  add(el, func) {
    this.renderer.push({ el, func });
  }

  remove(el) {
    this.renderer = this.renderer.filter((item) => item.el !== el);
  }

  draw() {
    for (let i = 0; i < this.renderer.length; i++) {
      const item = this.renderer[i];

      if (!dom.isInView(item.el)) {
        continue;
      }

      if (item.func) {
        item.func();
      }
    }

    this.RAF = window.requestAnimationFrame(this.draw);
  }

  destroy() {
    cancelAnimationFrame(this.RAF);

    this.renderer = [];
  }
}

export default new AnimationManager;
