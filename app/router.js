import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('calendar');
  this.route('about-nullify');
  this.route('contact');
});

export default Router;
