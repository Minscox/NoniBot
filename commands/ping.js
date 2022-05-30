const { Message } = require('discord.js');

module.exports = {
    run: async(client, message, args) => {
        message.reply(`Pong ! \nLatence du bot: ${client.ws.ping}ms`)
    },
    name: 'ping',
    aliases: [],
    description: 'Permet de connaître le ping du bot'
}