import Component from '../Component/Component.js';

import template from './Welcome.html!text';
import stylesheet from './Welcome.css!';

export default class Welcome extends Component {
  constructor(domNode) {
    super(domNode, template);
    this.toggleMoreInfo = this.toggleMoreInfo.bind(this);
    this.toggleMoreInformation = document.getElementById("special_link");
    this.welcomeNode = document.getElementById("welcome_content");
    this.moreInfoNode = document.getElementById("more_info");
    this.toggleMoreInformation.addEventListener('click', this.toggleMoreInfo);
  }

  toggleMoreInfo (e) {
    e.preventDefault();
    console.log("what does this say");
    if(document.getElementById("welcome_content").style.display === "block") {
      this.moreInfoNode.style.display = "block";
      this.welcomeNode.style.display = "none";
    } else {
      document.getElementById("welcome_content").style.display = "block";
      document.getElementById("more_info").style.display = "none";
    }
  }
}
