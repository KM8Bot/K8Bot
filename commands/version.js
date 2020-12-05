module.exports = {
	name: 'version',
	description: 'Tell the user what version we are on',
	execute(message, args) {
		message.channel.send('Bot is on version 0!');
	},
};