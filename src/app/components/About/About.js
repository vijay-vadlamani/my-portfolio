import Component from '../Component/Component.js';

import template from './About.html!text';

import stylesheet from './About.css!';

export default class About extends Component{
  constructor(domNode) {
    super(domNode, template);
  }
}
