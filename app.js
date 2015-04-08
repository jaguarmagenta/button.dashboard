var $ = require('jquery'),
	d3 = require('d3'),
	emitter = require('./js/emitter'),
	Moment = require('moment');

$('#start-time').text(new Moment());

require('./js/button');
emitter.on('tick', require('./js/components/timer'));
emitter.on('tick', require('./js/components/participants_count'));
emitter.on('tick', require('./js/components/presses_count'));
emitter.on('tick', require('./js/components/lowest_count'));
emitter.on('tick', require('./js/components/pps_chart'));
emitter.on('tick', require('./js/components/presses_chart'));
emitter.on('tick', require('./js/components/flair_chart'));