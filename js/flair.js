module.exports = function(seconds) {
	if (seconds > 51) {
		return 'purple';
	}
	if (seconds > 41) {
		return 'blue';
	}
	if (seconds > 31) {
		return 'green';
	}
	if (seconds > 21) {
		return 'yellow';
	}
	if (seconds > 11) {
		return 'orange';
	}

	return 'red';
};