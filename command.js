const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!'
    },
    {
        name: 'beep',
        description: 'Replies with Boop!'
    },
    {
        name: 'server',
        description: 'Replies with server info!'
    },
]; 

const rest = new REST({ version: '10' }).setToken('token');

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands('client_id'),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();