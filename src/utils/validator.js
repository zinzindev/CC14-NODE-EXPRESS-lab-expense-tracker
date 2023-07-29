const { VaidationError } = require('./err');

exports.validateCategory = (title, type) => {
	if (!title || !title.trim()) {
		throw new VaidationError('title is required ');
	}

	if (!type || !['expense', 'income'].includes(type.toLowerCase())) {
		throw new VaidationError('type must be expense or income');
	}
};
