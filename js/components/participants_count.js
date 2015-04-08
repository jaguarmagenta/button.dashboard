var $ = require('jquery'),
	$participants,
	$pprogress;

module.exports = function(message) {
	$participants = $participants || $('#participants-count');
	$pprogress = $pprogress || $('#participants-count-progress');

	$participants.text(message.participants);

	$pprogress.val(message.participants);
};