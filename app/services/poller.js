import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),

  // poller setup for 800ms
  poll: function(){
    this.get("store").query("marketdatum", {}).then(function(records){
      records.destroy();
    });
    Ember.run.later(this, this.poll.bind(this), 800);
  }
});
