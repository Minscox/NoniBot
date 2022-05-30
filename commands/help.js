const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async(client, message, args) => {
        const member = message.guild.members.cache.get(args[0]) || message.member;
        const embedHelp = new MessageEmbed()
            .setColor('2f3136')
            .setAuthor(`Liste des commandes de ${client.user.tag}`, client.user.displayAvatarURL({dynamic: true}))
            .setFooter(`ID: ${message.guild.id}`, client.user.displayAvatarURL({dynamic: true}))
            .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
            .addFields(
                { name: '%serverninfo', value: 'Donne les informations sur le serveur' },
                { name: "%userinfo", value: "Donne les informations d'un membre" },
                { name: '%ping', value: 'Donne le ping du bot' },
                { name: '%regle', value: 'Donne le règlement du serveur' },
                { name: '%roleinfo', value: 'Donne les permissions d\'un rôle' },
                { name: '%wiki', value: 'Permet de faire des recherches Wikipédia' },
                { name: '%suggest', value: 'Faire une suggestion' },
                { name: '%football', value: 'Permet de jouer au football' }
            )

        await message.channel.send({embeds: [embedHelp]});
    },
    name: "help",
    aliases: [],
    description: "Permet de récupérer les commandes du bot"
}