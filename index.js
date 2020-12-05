const fs = require('fs'); //Require fs

const Discord = require('discord.js'); //Require discord.js

const { prefix, token } = require('./config.json'); //prefix and token will be stored in the config.json file

const client = new Discord.Client(); //client will mean the new discord client we create
client.commands = new Discord.Collection(); // the commands file is a new collection where we store our commands

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // command files must be a .js file


client.on('ready', () => {
    console.log(client.user.username + ' Is now online!'); // log to console that the bot is online
});




for (const file of commandFiles) {
	const command = require(`./commands/${file}`); // command requires our commands file
	client.commands.set(command.name, command);
}




client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return; // ignore messages that dont start with our prefix

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase(); //shift command to all lowercase

    if (command === 'online') // if a user uses the online command
    {
        client.commands.get('online').execute(message, args); //grab the code from online.js in commands folder and execute it
    }
    if (command ==='version') // if a user uses the version command
    {
        client.commands.get('version').execute(message, args); //execute the version.js command under commands folder
    }
    if (command === 'kick') // if the command is kick
    {
        client.commands.get('kick').execute(message, args); // grab the code from kick.js and execute it.
    }








    //issue finding & executing the command
    if (!client.commands.has(command)) return; //if the command folder does not have the command do the following

    try {
        client.commands.get(command).execute(message, args); //try to take the command from the command folder and execute it
    } catch (error) { //catch the error
        console.error(error); // send the error to console
        message.reply('Error trying to execute that command!'); // tell the user there was an error using that command
    }
}
);
client.login(token); //login