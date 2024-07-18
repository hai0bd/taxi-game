import { _decorator, BoxCollider, Component, ICollisionEvent, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {
    start() {
        const collider = this.node.getComponent(BoxCollider);
        collider.on('onCollisionEnter', this.onCollisionEnter, this);
    }
    onCollisionEnter(event: ICollisionEvent) {
        console.log(event);
    }
}


