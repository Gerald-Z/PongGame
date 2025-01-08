import * as THREE from 'three';

class Object {
    constructor(x = 0, y = 0, z = 0, color = 'black') {
        this.x = x;
        this.y = y;
        this.z = z;
        this.color = color;
    }

    move_to(x=this.x, y=this.y, z=this.z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

export class Box extends Object {
    constructor({x = 0, y = 0, z = 0, width, height, depth, color = 'black'}) {
        super(x, y, z, color);
        this.width = width;
        this.height = height;
        this.depth = depth;
    }

    create_mesh() {
        const material = new THREE.MeshBasicMaterial( {color: this.color });
        const geometry = new THREE.BoxGeometry(this.width, this.height, this.depth)
        const item = new THREE.Mesh( geometry, material )
        item.position.x = this.x;
        item.position.y = this.y;
        item.position.z = this.z;
        return item;
    }
}

export class Sphere extends Object {
    constructor({x = 0, y = 0, z = 0, radius, width_segment, height_segment, color = 'black'}) {
        super(x, y, z, color);
        this.radius = radius;
        this.width_segment = width_segment;
        this.height_segment = height_segment;
    }

    create_mesh() {
        const material = new THREE.MeshBasicMaterial( {color: this.color });
        const geometry = new THREE.SphereGeometry( this.radius, this.width_segment, this.height_segment ); 
        const item = new THREE.Mesh( geometry, material )
        item.position.x = this.x;
        item.position.y = this.y;
        item.position.z = this.z;
        return item;
    }
}


