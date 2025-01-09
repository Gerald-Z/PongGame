export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view; 
        this.paused = false;
        this.keys = {};
        this.add_event_listeners();
    }

    add_event_listeners() {
        document.addEventListener('keydown', (event) => {
            if (event.key === ' ') {
                if (this.paused) { 
                    this.view.renderer.setAnimationLoop( () => this.render()) 
                } else { 
                    this.view.renderer.setAnimationLoop( null )
                }
                this.paused = !this.paused
            } else {
                this.keys[event.key] = true
            }
        });

        document.addEventListener('keyup', (event) => {
            this.keys[event.key] = false
        });
    }


    handle_changes() {
        const sphere = this.model.get_object_by_name('ball')
        const player_one = this.model.get_object_by_name('player_one')

        sphere.rotation.y += 0.1

        if (this.model.is_sphere_collided()) { 
            sphere.bounce()
        }

        sphere.move_relative()
        if (this.keys['ArrowUp']) {
            player_one.move_relative(0, 1, 0); 
        } else if (this.keys['ArrowDown']) { 
            player_one.move_relative(0, -1, 0); 
        } else if (this.keys['ArrowLeft']) { 
            player_one.rotate(true); 
        } else if (this.keys['ArrowRight']) { 
            player_one.rotate(false);
        } else if (this.keys['Escape']) {
            this.model.initialize_objects();
            this.view.refresh_scene()
        }
    }

    render() {
        this.handle_changes();

        this.view.render();
    }
}
