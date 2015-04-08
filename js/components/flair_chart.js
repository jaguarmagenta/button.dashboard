var $ = require('jquery'),
	epoch = require('epoch'),
	flair = require('../flair'),
	$table = {},
	table = {},
	previousTick,
	previousCount;

module.exports = function(message) {
	var count = message.participants - previousCount;

	if(message.seconds_left > previousTick) {
		var color = flair(previousTick);
		updateHistogram(color, 1);
		count--;
	}
	if(count > 0) {
		updateHistogram('purple', count);
	}

	previousTick = message.seconds_left;
	previousCount = message.participants;
};

function updateHistogram(color, count) {
	var flair = '.flair-' + color;
	var $el = $table[flair] = $table[flair] || $('td' + flair);

	table[flair] = table[flair] || 0;
	var value = table[flair] += count;

	$el.text(value);
}