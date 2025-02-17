import * as THREE from "three";
import { Water } from "three/addons/objects/Water2.js";

// based on https://threejs.org/examples/?q=water#webgl_water

export class Terra_Water {
    constructor() {
        this.water;

        this.waterConfig = {
            renderOrder: 40,
            width: 2000.0,
            height: 2000.0,
            x: 0,
            y: 0
        };
    }

    // Create Water Mesh
    createWater(scene, waterLevel) {
        const params = {
            color: "#caf0fe",
            scale: 2,
            flowX: 0.1,
            flowY: 0.1,
        };

        const waterGeometry = new THREE.PlaneGeometry(this.waterConfig.width, this.waterConfig.height);

        this.water = new Water(waterGeometry, {
            color: params.color,
            scale: params.scale,
            flowDirection: new THREE.Vector2(params.flowX, params.flowY),
            textureWidth: 1024,
            textureHeight: 1024,
            reflectivity: 0.75
        });

        this.water.position.x = this.waterConfig.x;;
        this.water.position.y = this.waterConfig.y;
        this.water.position.z = 55;//waterLevel;

        this.water.renderOrder = this.waterConfig.renderOrder;
        scene.add(this.water);
        console.log("done " + waterLevel );
    }
}
