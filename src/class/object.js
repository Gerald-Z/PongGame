import * as THREE from 'three';


export class Box extends THREE.Object3D {
    constructor({x = 0, y = 0, z = 0, name, width, height, depth, color = 'black'}) {
        super()
        this.position.set(x, y, z)
        this.name = name
        const material = new THREE.MeshBasicMaterial( {color: color });
        const geometry = new THREE.BoxGeometry(width, height, depth)
        this.material = material
        this.geometry = geometry
        const item = new THREE.Mesh( geometry, material )
        this.add(item)
        this.geometry.computeBoundingBox();
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

    move_relative(x, y, z) {
        this.position.x += x 
        this.position.y += y
        this.position.z += z
    }

    rotate(is_up = true) {
        if (is_up) {
            if (this.rotation.z > 0.5) return
            this.rotation.z += 0.05
        } else {
            if (this.rotation.z < -0.5) return
            this.rotation.z -= 0.05
        }
    }

}

export class Sphere extends THREE.Object3D {
    constructor({x = 0, y = 0, z = 0, name, radius, width_segment, height_segment, color = 'black'}) {
        super();
        this.position.set(x, y, z)

        const material = new THREE.MeshBasicMaterial( {color: color });
        const geometry = new THREE.SphereGeometry( radius, width_segment, height_segment ); 
        this.material = material
        this.geometry = geometry
        const item = new THREE.Mesh( geometry, material )
        this.vector = {x: Math.random() * 2 - 1, y: Math.random() * 2 - 1, z: 0}
        this.name = name
        this.add(item)
    }

    move_relative() {
        this.position.x += this.vector.x
        this.position.y += this.vector.y
        this.position.z += this.vector.z
    }

    bounce() {
        this.vector = {
            x : this.vector.x,
            y: this.vector.y * -1,
            z: this.vector.z 
        }
    }
}


