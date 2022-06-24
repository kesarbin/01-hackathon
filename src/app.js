import "./styles.css";
import { ContextMenu } from "../src/menu.js";
import { BackgroundModule } from "./modules/background.module.js";

const contextMenu = new ContextMenu(".menu");
const backgroundModule = new BackgroundModule(
  "background_module",
  "Поменять цвет"
);

contextMenu.add(backgroundModule);
contextMenu.open();
backgroundModule.trigger();
