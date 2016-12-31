var tap = require('agraddy.test.tap')(__filename);
var path = require('path');

var original_dir = process.cwd();

process.chdir(path.join(original_dir, 'test', 'one'));

var mod = require('../');

tap.assert.equal(mod.first, 'first', 'Should be equal.');
tap.assert.equal(mod.second, 'second', 'Should be equal.');
tap.assert.equal(mod.third, 'third', 'Should be equal.');





delete require.cache[path.join(original_dir, 'index.js')];
delete require.cache[path.join(original_dir, 'lib', 'index.js')];
process.chdir(path.join(original_dir, 'test', 'two'));
var mod2 = require('../');

tap.assert.equal(mod2.first, 'first', 'Should be equal.');

mod2.on('loaded', function() {
	tap.assert.equal(mod2.delayed, 'delayed', 'Should be equal.');
});

