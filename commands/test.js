const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async(client, message, args) => {
        const embedTest = new MessageEmbed()
            .setColor('2f3136')
            .setTitle('test')

        await message.channel.send({embeds: [embedTest]})
    },
    name: 'test',
    aliases: ['test'],
    description: 'Commande de test'
}