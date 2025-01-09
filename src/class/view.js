import * as THREE from 'three';
const CAMERA_POSITION_Z = 80

export class View {
    constructor(model) {
        this.model = model;
    
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.camera.position.z = CAMERA_POSITION_Z
        this.camera.position.y = -50

        this.camera.rotation.x = 0.5

        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.shadowMap.enabled = true
        document.body.appendChild( this.renderer.domElement )

        this.refresh_scene();
    }

    refresh_scene() {
        while (this.scene.children.length > 0) {
            this.scene.remove(this.scene.children[0]);
        }
        this.model.get_objects().forEach(item => {
            this.scene.add(item);
        });
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

}