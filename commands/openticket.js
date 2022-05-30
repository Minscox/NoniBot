const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
    run: async(client, message, args) => {
        const embedOpenTicket = new MessageEmbed()
            .setColor('2f3136')
            .setTitle('Noniko | Ticket')
            .setDescription("Si vous rencontrez un problème sur le serveur, vous pouvez ouvrir un ticket.\n Le staff s'occupera de vous dès que possible")
            .setThumbnail(message.guild.iconURL({dynamic: true}))
            .setFooter('Tout abus sera sanctionné !', message.guild.iconURL({dynamic: true}))

        const buttonOpenTicket = new MessageActionRow()
            .addComponents($=
                new MessageButton()
                    .setCustomId('open-ticket')
                    .setLabel('✉️ Ouvrir un ticket')
                    .setStyle('PRIMARY')
            );

        return message.channel.send({embeds: [embedOpenTicket], components: [buttonOpenTicket]})
    },
    name: 'secretticket',
    aliases: [],
    description: 'Permet de créer un message de ticket'
}