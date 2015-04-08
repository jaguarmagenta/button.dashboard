var $ = require('jquery'),
	epoch = require('epoch'),
	Moment = require('moment');

var data = [{
	label: 'ppm',
	values: [{
		time: Moment().unix(),
		y: null
	}]
}];

var $userChart = $('#user-chart').epoch({
	type: 'time.line',
	data: data,
	axes: ['right', 'bottom'],
	ticks: { time: 10, right: 1 }
});

module.exports = function(message) {
	$userChart.push([{
		label: 'users',
		time: message.now_unix,
		y: message.participants
	}]);
};