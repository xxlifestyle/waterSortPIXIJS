import {Application, Assets, Graphics,} from "./pixi.mjs";
import {Menu} from "./containers/Menu.js";
import {assetsMap} from "./assets/assetsMap.js";

const app = new Application({width: window.innerWidth, height: window.innerHeight, backgroundColor: '0x0600BA', view: document.getElementById("canvas"),})


document.body.appendChild(app.view)
    const sheet = await Assets.load('assets/spritesheet.json');

    app.stage.position.set(window.innerWidth / 2, window.innerHeight / 2)

    const marker = new Graphics();
    marker.beginFill(0xff0000, 1);
    marker.drawCircle(0, 0, 5);
    marker.endFill();

    const menu = new Menu({texture:sheet.textures.menu})
    app.stage.addChild(menu.view)

