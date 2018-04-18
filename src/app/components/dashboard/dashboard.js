/**
 * @module src/app
 */
import Component from '../Component/Component.js';
import Welcome from '../Welcome/Welcome.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';

import template from './dashboard.html!text';

import stylesheet from './dashboard.css!';

export default class Dashboard extends Component{
  constructor(domNode) {
    super(domNode, template);
    //Binding because of the instance of this not being pointed correctly
    this.welcomePage = this.welcomePage.bind(this);
    this.aboutPage = this.aboutPage.bind(this);
    this.contactPage = this.contactPage.bind(this);
    this.welcome = document.getElementById("welcome");
    this.elm = document.getElementById("about");
    this.logo = document.getElementById("logo");
    this.con = document.getElementById("contact");
    this.welcome.addEventListener('click', this.welcomePage);
    this.logo.addEventListener('click', this.welcomePage);
    this.elm.addEventListener('click', this.aboutPage);
    this.con.addEventListener('click', this.contactPage);
  }

  welcomePage() {
    if(this.welcomePage || this.logo) {
      let content = (new Welcome('content').init().show());
    }
  }
  aboutPage() {
    if(this.elm) {
      let content = (new About('content').init().show());
    }
  }

  contactPage() {
    if(this.con) {
      let content = (new Contact('content').init().show());
    }
  }
}
