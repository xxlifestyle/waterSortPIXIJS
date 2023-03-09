import {Assets, Container, Sprite} from "../pixi.mjs";

export class Menu{
      constructor({texture}) {
          console.log(texture)
          this._view = new Container()
          console.log(texture)
          const btn = Sprite.from(texture['start_btn']);

          btn.anchor.set(0.5)
          this._view.addChild(btn);
    }

    get view(){
        return this._view
    }

}