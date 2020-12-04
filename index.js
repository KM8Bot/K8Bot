const fs = require('fs'); //Require fs

const Discord = require('discord.js'); //Require discord.js

const { prefix, token } = require('./config.json'); //prefix and token will be stored in the config.json file

const client = new Discord.Client(); //client will mean the new discord client we create
client.commands = new Discord.Collection(); // the commands file is a new collection where we store our commands

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // command files must be a .js file


client.on('ready', () => {
    console.log(client.user.username + ' Is now online!');
});




for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}




client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return; // ignore messages that dont start with our prefix

	const args = message.content.slice(prefix.length).split(/ +/);
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if (command === 'online') // if a user uses the online command
    {
        client.commands.get('online').execute(message, args); //grab the code from online.js in commands folder and execute it
    }



}
);