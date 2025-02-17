// LICENSE: MIT
// Copyright (c) 2016 by Mike Linkovich

"use strict";

import * as THREE from "three";

export class Terra_Skydome {
    static createMesh(tex, radius, lats, lngs) {
        if (lats === void 0) {
            lats = 16;
        }
        if (lngs === void 0) {
            lngs = 32;
        }
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        return new THREE.Mesh(
            new THREE.SphereGeometry(radius, lngs, lats, 0, Math.PI * 2.0, 0, Math.PI / 2.0)
                .rotateX(Math.PI / 2.0)
                .rotateZ(Math.PI),
            new THREE.MeshBasicMaterial({
                color: 0xffffff,
                side: THREE.BackSide,
                map: tex,
                fog: false,
            })
        );
    }
}
