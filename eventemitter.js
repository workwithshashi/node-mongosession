var events = require('events');
var eventEmitter = new events.eventEmitter();

// creating event Handler:
var myEventHandler = function(){
    console.log('I am with you');
}

//assing eventhandler to event
eventEmitter.on('hear', myEventHandler);

// firing the event
eventEmitter.emit('hear');