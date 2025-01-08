import * as THREE from 'three';


export class Box extends THREE.Object3D {
    constructor({x = 0, y = 0, z = 0, width, height, depth, color = 'black'}) {
        super()
        this.position.set(x, y, z)

        const material = new THREE.MeshBasicMaterial( {color: color });
        const geometry = new THREE.BoxGeometry(width, height, depth)
        const item = new THREE.Mesh( geometry, material )
        this.add(item)
    }
}

export class Sphere extends THREE.Object3D {
    constructor({x = 0, y = 0, z = 0, radius, width_segment, height_segment, color = 'black'}) {
        super();
        this.position.set(x, y, z)

        const material = new THREE.MeshBasicMaterial( {color: color });
        const geometry = new THREE.SphereGeometry( radius, width_segment, height_segment ); 
        const item = new THREE.Mesh( geometry, material )
        this.add(item)
    }
}


