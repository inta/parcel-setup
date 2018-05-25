export default {
	hello: function(name) {
		let greeter = 'Hello';
		if (Number.isInteger(name)) {
			greeter += ' Number';
		}
		return `${greeter} ${name}`;
	}
};
