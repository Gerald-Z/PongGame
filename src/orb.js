import * as THREE from 'three';
import { Box, Sphere } from './class/object';
import { CONSTANTS } from './const/objects';

const CAMERA_POSITION_Z = 50


let drop_speed = -1
let paused = false;

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
const sphere = objects.ball
const bottom_box = objects.bottom_box
let key_status = 'None'

function animate() {
   // sphere.rotation.x += 0.01
    const {x, y, z} = sphere.position;
    sphere.rotation.y += 0.1
    if (objects.bottom_box.contact(x, y, z)
         || objects.top_box.contact(x, y, z)) { 
        sphere.bounce()
    }
    sphere.move_relative()
    if (key_status == 'Left') {
        bottom_box.move_relative(-1, 0, 0); 
    } else if (key_status == 'Right') { 
        bottom_box.move_relative(1, 0, 0); 
    } else if (key_status == 'Up') { 
        bottom_box.rotate(true); 
    } else if (key_status == 'Down') { 
        bottom_box.rotate(false); 
    }
    renderer.render( scene, camera )
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        key_status = 'Left';
    } else if (event.key === 'ArrowRight') {
        key_status = 'Right';
    } else if (event.key === 'ArrowUp') {
        key_status = 'Up';
    } else if (event.key === 'ArrowDown') {
        key_status = 'Down';
    } else if (event.key === ' ') {
        if (paused) { 
            renderer.setAnimationLoop( animate )
        } else { 
            renderer.setAnimationLoop( null )
        }
        paused = !paused
    }
});

document.addEventListener('keyup', (event) => {
    key_status = 'None'
});

