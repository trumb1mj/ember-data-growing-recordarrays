# Ember-data-growing-recordarrays

* When using the Ember.store.query() method I'm seeing the _internalModel._recordArrays.list array grow on each call.  
* Using the _internalModel._recordArrays.clear() will empty out that array but even when you do that, the heap still grows.  
* If you manually load into ember data store using push or pushPayload, the heap does NOT grow.
* The polling logic is in a "poller" service.


## Reproducing the issue

* Install dependencies: npm install; bower install
* Run the server: ember serve
* Open up the console and watch the array grow in the log message
* Periodically dump the heap and note the growing size

## Tracking the fix
https://github.com/emberjs/data/issues/4041
