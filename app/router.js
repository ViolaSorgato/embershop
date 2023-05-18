/**Detta var redan inbyggd i installationen*/

import EmberRouter from '@ember/routing/router';
import config from 'embershop/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about'); /**Här lägger vi till routes till våra sidor */
  this.route('contact', { path: '/getting-in-touch' });
});
