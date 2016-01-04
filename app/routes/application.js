import Ember from 'ember';

export default Ember.Route.extend({
  // poller: Ember.inject.service('poller'),
  // init: function(){
  //   this.get("poller").poll();
  // },
  actions: {
    queryData: function(){
      this.get("store").query("marketdatum", {}).then(function(records){
        records.destroy();
      });
    }
  }
});
