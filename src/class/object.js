import * as THREE from 'three';


export class Box extends THREE.Object3D {
    constructor({x = 0, y = 0, z = 0, width, height, depth, color = 'black'}) {
        super()
        this.position.set(x, y, z)

        const material = new THREE.MeshBasicMaterial( {color: color });
        const geometry = new THREE.BoxGeometry(width, height, depth)
        this.material = material
        this.geometry = geometry
        const item = new THREE.Mesh( geometry, material )
        this.add(item)
        this.geometry.computeBoundingBox();
        const box = this.geometry.boundingBox;
    }

    contact(x, y, z) {
        this.geometry.computeBoundingBox();
        const box = this.geometry.boundingBox;
        return (
            x < this.position.x + box.min.x || 
            x > this.position.x + box.max.x ||
            y < this.position.y + box.min.y ||
            y > this.position.y + box.max.y ||
            z < this.position.z + box.min.z ||
            z > this.position.z + box.max.z 
        ) ? false : true
    }
}

export class Sphere extends THREE.Object3D {
    constructor({x = 0, y = 0, z = 0, radius, width_segment, height_segment, color = 'black'}) {
        super();
        this.position.set(x, y, z)

        const material = new THREE.MeshBasicMaterial( {color: color });
        const geometry = new THREE.SphereGeometry( radius, width_segment, height_segment ); 
        this.material = material
        this.geometry = geometry
        const item = new THREE.Mesh( geometry, material )
        this.add(item)
    }
}


