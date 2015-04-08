var $ = require('jquery'),
	$clock,
	$progress;

module.exports = function(message) {
	$clock = $clock || $('#timer');
	$progress = $progress || $('#timer-progress');

	$clock.text(message.seconds_left);
	$clock.removeClass();
	$clock.addClass('flair-' + message.current_flair);

	$progress.val(message.seconds_left);
};