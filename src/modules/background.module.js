import { Module } from "../core/module";
import { random } from "../utils.js";

export class BackgroundModule extends Module {
  #backgroundColorModule;

  constructor(type, text) {
    super(type, text);
  }

  #getRandomColor() {
    const random1 = random(0, 255);
    const random2 = random(0, 255);
    const random3 = random(0, 255);

    document.body.style.background = `rgb(${random1}, ${random2}, ${random3})`;
  }

  trigger() {
    this.#backgroundColorModule = document.querySelector(".menu-item");
    if (this.#backgroundColorModule.dataset.type === this.type) {
      this.#backgroundColorModule.addEventListener("click", (event) => {
        this.#getRandomColor();
      });
    }
  }
}
