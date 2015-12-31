import DS from 'ember-data';

export default DS.Model.extend({
  instrument_id: DS.attr('number'),
  side: DS.attr('string')
});
