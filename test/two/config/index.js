var events = require('events');

var mod = new events.EventEmitter();

mod.first = 'first';

setTimeout(function() {
	mod.delayed = 'delayed';
	mod.emit('loaded');
}, 1000);

module.exports = mod;
