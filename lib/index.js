//console.log('LOADED');
var events = require('events');
var path = require('path');

var mod = new events.EventEmitter();


var config = require(path.join(process.cwd(), 'config'));

if(config instanceof events.EventEmitter) {
	module.exports = config;
} else {
	for(var item in config) {
		mod[item] = config[item];
	}

	module.exports = mod;

	setImmediate(function() {
		mod.emit('loaded');
	});
}	

