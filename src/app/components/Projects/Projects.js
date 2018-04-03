import Component from '../Component/Component.js';

import template from './Projects.html!text';

export default class Projects extends Component {
  constructor(domNode) {
    super(domNode, template);
    this.onInit = this.onInit.bind(this);
    this.onInit();
  }

  onInit() {
    console.log("ok so projects loaded");
  }
}
