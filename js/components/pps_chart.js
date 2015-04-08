var $ = require('jquery'),
	epoch = require('epoch'),
	Moment = require('moment'),
	previous;

var data = [{
	label: 'ppm',
	values: [{
		time: Moment().unix(),
		y: null
	}]
}];

var $chart = $('#pps-chart').epoch({
	type: 'time.line',
	data: data,
	axes: ['right', 'bottom', 'left'],
	ticks: { time: 10, right: 1, left: 1 }
});

module.exports = function(message) {
	var delta = message.participants - (previous || message.participants );
	previous = message.participants;

	$chart.push([{
		label: 'ppm',
		time: message.now_unix,
		y: delta
	}]);
};