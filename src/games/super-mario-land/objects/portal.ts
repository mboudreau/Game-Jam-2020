/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Super Mario Land: Portal
 * @license      Digitsensitive
 */

export class Portal extends Phaser.GameObjects.Zone {
    // variables
    private currentScene: Phaser.Scene;
    private portalDestinationForMario: any;

    constructor(params) {
        super(params.scene, params.x, params.y, params.width, params.height);

        // variables
        this.currentScene = params.scene;
        this.portalDestinationForMario = params.spawn;
        this.initZone();
        this.currentScene.add.existing(this);
    }

    public getPortalDestination(): {} {
        return this.portalDestinationForMario;
    }

    update(): void {
    }

    private initZone() {
        this.setOrigin(0, 0);

        // physics
        this.currentScene.physics.world.enable(this);
        this.body.setSize(this.height, this.width);
        this.body.setOffset(0, 0);
        this.body.setAllowGravity(false);
        this.body.setImmovable(true);
    }
}
