import { Model } from './class/model';
import { View } from './class/view';
import { Controller } from './class/controller';


const model = new Model();
const view = new View(model);
const controller = new Controller(model, view);

controller.view.renderer.setAnimationLoop(() => controller.render());

