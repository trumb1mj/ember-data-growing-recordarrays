export default function() {
  this.get('/marketdata', function() {
    return {
      marketdata: [
        {id: 1, instrument_id: 1, side: 'Bid'},
        {id: 2, instrument_id: 1, side: 'Ask'},
        {id: 3, instrument_id: 1, side: 'Last'},
      ]
    }
  });
}
