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

      if (event.x > event.view.outerWidth - 150) {
        this.#menu.style.left = `${event.x - 150}px`;
        this.#menu.style.top = `${event.y}px`;
      } else if (event.y > event.view.outerHeight - 100) {
        this.#menu.style.top = `${event.y - 35}px`;
        this.#menu.style.left = `${event.x}px`;
      } else {
        this.#menu.style.left = `${event.x}px`;
        this.#menu.style.top = `${event.y}px`;
      }
    });
  }

  close() {
    document.body.addEventListener("click", (event) => {
      this.#menu.classList.remove("open");
    });
  }
}
