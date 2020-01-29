import "phaser";
import {MainScene} from "./scenes/main-scene";
import "./styles/styles.scss";

export class Game extends Phaser.Game {
    constructor(_config: Phaser.Types.Core.GameConfig) {
        super(_config);
    }
}

// when the page is loaded, create our game instance
window.addEventListener("load", () => {
    const game = new Game({
        width: 800,
        height: 600,
        type: Phaser.AUTO,
        parent: "game",
        scene: MainScene
    });
});
