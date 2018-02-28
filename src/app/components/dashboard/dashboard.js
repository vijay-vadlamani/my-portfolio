/**
 * @module src/app
 */
import Component from '../Component/Component.js';

import template from './dashboard.html!text';

// import stylesheet from './dashboard.scss!';

export default class Dashboard extends Component{
  constructor(domNode) {
    super(domNode, template);
  }
}
