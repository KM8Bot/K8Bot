module.exports = {
	name: 'online',
	description: 'check if the bot is online',
	execute(message, args) {
		message.channel.send('K8Bot is online!');
	},
};