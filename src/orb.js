import * as THREE from 'three';
import { Box, Sphere } from './class/object';
import { CONSTANTS } from './const/objects';

const CAMERA_POSITION_Z = 50

const SPHERE_RADIUS = 1
const SPHERE_WIDTH_SEGMENTS = 32
const SPHERE_HEIGHT_SEGMENTS = 16
let drop_speed = -1

const BOX_WIDTH = 100
const BOX_HEIGHT = 10
const BOX_DEPTH = 5
const BOX_X = 0
const BOX_Y = -40
const BOX_TOP_Y = BOX_Y + BOX_HEIGHT / 2

const TOP_BOX_WIDTH = 100
const TOP_BOX_HEIGHT = 10
const TOP_BOX_DEPTH = 5
const TOP_BOX_X = 0
const TOP_BOX_Y = 40
const TOP_BOX_BOTTOM_Y = TOP_BOX_Y - TOP_BOX_HEIGHT / 2


const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate )
document.body.appendChild( renderer.domElement )

// Create the falling sphere
const geometry = new THREE.SphereGeometry( SPHERE_RADIUS, SPHERE_WIDTH_SEGMENTS, SPHERE_HEIGHT_SEGMENTS ); 
const material = new THREE.MeshBasicMaterial( {color: 'white' })
const sphere = new THREE.Mesh( geometry, material )
// scene.add( sphere )

// Create the desk
const box_geometry = new THREE.BoxGeometry(BOX_WIDTH, BOX_HEIGHT, BOX_DEPTH)
const box_material = new THREE.MeshBasicMaterial( {color: 0x00ff00 })
const box = new THREE.Mesh( box_geometry, box_material )
box.position.x = BOX_X
box.position.y = BOX_Y
// scene.add( box )



// Create the desk
const top_box_geometry = new THREE.BoxGeometry(TOP_BOX_WIDTH, TOP_BOX_HEIGHT, TOP_BOX_DEPTH)
const top_box_material = new THREE.MeshBasicMaterial( {color: 'red' })
const top_box = new THREE.Mesh( top_box_geometry, top_box_material )
top_box.position.x = TOP_BOX_X
top_box.position.y = TOP_BOX_Y
//scene.add( top_box )


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
    sphere.rotation.y += 0.1
    if (sphere.position.y < BOX_TOP_Y || sphere.position.y > TOP_BOX_BOTTOM_Y) { 
        drop_speed *= -1
    }
    sphere.position.y += drop_speed

   // console.log(MINIMUM_Y_COORDINATE)
   // console.log(sphere.position.y)
    renderer.render( scene, camera )
}

