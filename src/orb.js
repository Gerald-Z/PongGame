import * as THREE from 'three';
import { Box, Sphere } from './class/object';
import { CONSTANTS } from './const/objects';

const CAMERA_POSITION_Z = 50


let drop_speed = -1


const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate )
document.body.appendChild( renderer.domElement )


const objects = {}

CONSTANTS.forEach((item) => {
    const object = 
        (item.type === 'box') 
        ? new Box(item)
        : new Sphere(item)

    objects[item.name] = object
    scene.add(object)
})



camera.position.z = CAMERA_POSITION_Z

function animate() {
   // sphere.rotation.x += 0.01
   const sphere = objects.ball
    const {x, y, z} = sphere.position;
    sphere.rotation.y += 0.1
    if (objects.bottom_box.contact(x, y, z)
         || objects.top_box.contact(x, y, z)) { 
        drop_speed *= -1
    }
    sphere.position.y += drop_speed

    renderer.render( scene, camera )
}

