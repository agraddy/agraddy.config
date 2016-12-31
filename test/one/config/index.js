var events = require('events');

var mod = {};

mod.first = 'first';

mod.second = require('./second.js');

var temp = require('./third.json');

mod.third = temp.third;

module.exports = mod;
