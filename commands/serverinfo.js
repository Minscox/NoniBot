const { MessageEmbed } = require('discord.js');
const moment = require('moment')

module.exports = {
    run: async(client, message, args) => {
        const x = Date.now() - message.guild.createdTimestamp;
        const created = Math.floor(x / 86400000);
        const embedServerInfo = new MessageEmbed()
            .setColor('2f3136')
            .setAuthor(`Information sur ${message.guild.name}`, message.guild.iconURL({dynamic: true}))
            .setFooter(`ID: ${message.guild.id}`, message.guild.iconURL({dynamic: true}))
            .setThumbnail(message.guild.iconURL({dynamic: true}))
            .addField('Création du serveur', `Le ${moment(message.guild.createdAt).format('L')} (Il y a ${created} jour${created <= 1 ? "": "s"})`, true)
            .addField('Nombre de membre', `${message.guild.memberCount} membre${message.guild.memberCount <= 1 ? "":"s"}`, true)

        message.channel.send({embeds: [embedServerInfo]})
    },
    name: 'serverinfo',
    aliases: ['si'],
    description: "Permet de connaître les informations du serveur"
}