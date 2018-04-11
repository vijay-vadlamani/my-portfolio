import Component from '../Component/Component.js';

import template from './Contact.html!text';
import stylesheet from './Contact.css!';

export default class Contact extends Component {
  constructor(domNode) {
    super(domNode, template);
  }
}
