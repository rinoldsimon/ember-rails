import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberrailsENV.locationType
});

Router.map(function() {
	this.route('about');
	this.resource('notes', function() {
    this.route('show', {path: ':note_id'});
});
});

export default Router;
