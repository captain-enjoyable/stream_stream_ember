import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch('mad-march-runs-api').catch(function() {
      // no op is fine here
    });
  },
  actions: {
    signInViaFacebook(){
      this.get('session').open('facebook-oauth2').then(function(){
      }, function(){});
    },
    logout() {
      this.get('session').close();
    }
  }
});
