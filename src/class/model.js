import { Box, Sphere } from './object';
import { CONSTANTS } from '../const/objects';


export class Model {
    constructor() {
        this.objects = []
        this.initialize_objects()
    }

    initialize_objects() {
        this.objects = []
        CONSTANTS.forEach((item) => {
            const object = 
                (item.type === 'box') 
                ? new Box(item)
                : new Sphere(item)
        
            this.objects.push(object)
        })
    }

    get_objects() {
        return this.objects;
    }

    get_object_by_name(name) {
        for (const item of this.objects) {
            if (item.name === name) return item 
        }
    }

    is_sphere_collided() {
        const {x, y, z} = this.get_object_by_name('ball').position;

        for (const item of this.objects) {
            if (item.name != 'ball') {
                if (item.contact(x, y, z)) {
                    return true;
                }
            }
        }
        return false;
    }


}

