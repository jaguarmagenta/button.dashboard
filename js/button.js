var emitter = require('./emitter'),
	flair = require('./flair'),
	Moment = require('moment');

var socket = new WebSocket('wss://wss.redditmedia.com/thebutton?h=81647d3b78a1c00dfc2f534d067ca7249dfd060d&e=1428517123');

socket.onmessage = function(evt) {
	var data = JSON.parse(evt.data).payload;
	var seconds = parseFloat(data.seconds_left);
	var now = Moment(data.now_str + " 0000", "YYYY-MM-DD-HH-mm-ss Z");

	var message = {
		current_flair: flair(seconds),
		seconds_left: seconds,
		now: now,
		now_unix: now.unix(),
		participants: parseInt(data.participants_text.replace(/,/g, ''))
	};

	emitter.emitEvent('tick', [message]);
};