/**
 * @module src/app
 */

import Dashboard from './components/dashboard/dashboard.js';
import Welcome from './components/Welcome/Welcome.js';
/**
 * This class is called by the app entry point.
 * It holds the logic initiation.
 * @class main
 */
export default class main {
  /**
   * Inits the whole logic of the app
   * @method init
   * @static
   */
  static init() {
    this.initDashboard();
  }

  /**
   * Inits the {{#crossLink "components.Geolocation.Geolocation"}}Geolocation{{/crossLink}} component
   * @method initGeolocation
   * @static
   */

  static initDashboard() {
    (new Dashboard('dashboard')).init();
    (new Welcome('content').init().show());
  }
}
