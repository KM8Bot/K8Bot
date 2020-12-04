module.exports = {
	name: 'version',
	description: 'Tell the user what version we are on',
	execute(message, args) {
		message.channel.send('K8Bot is on version 0.0.2 right now.');
	},
};