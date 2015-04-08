var $ = require('jquery'),
	$usersSession,
	initial = null;

module.exports = function(message) {
	$usersSession = $usersSession || $('#presses-count');
	initial = initial || message.participants;

	$usersSession.text(message.participants - initial);
};