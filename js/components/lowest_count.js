var $ = require('jquery'),
	$lowestTime,
	lowestTime = 60;

module.exports = function(message) {
	$lowestTime = $lowestTime || $('#lowest-time');

	if(message.seconds_left < lowestTime) {
		lowestTime = message.seconds_left;

		$lowestTime.text(lowestTime);
		$lowestTime.removeClass();
		$lowestTime.addClass('flair-' + message.current_flair);
	}
};