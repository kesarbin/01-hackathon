import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  #menu;

  constructor(selector) {
    super(selector);
    this.#menu = document.querySelector(".menu");
  }

  add(module) {
    this.#menu.insertAdjacentHTML("afterbegin", module.toHTML());
  }

  open() {
    document.body.addEventListener("contextmenu", (event) => {
      event.preventDefault();

      this.#menu.classList.add("open");
      this.#menu.style.position = "absolute";
      this.#menu.style.left = `${event.x}px`;
      this.#menu.style.top = `${event.y}px`;
    });
  }

  close() {
    document.body.addEventListener("click", (event) => {
      this.#menu.classList.remove("open");
    });
  }
}
