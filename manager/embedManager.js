const { MessageEmbed } = require('discord.js');

module.exports = class embedManager {
    embedPermissionMissing(member, type_command) {
        const embedPermissionMissing = new MessageEmbed()
            .setColor('2f3136')
            .setAuthor('Permission manquante')
            .setDescription(`Vous n'avez pas la permission pour exécuter la commande ${type_command} !`)
            .setFooter('Echec de l\'exécution de la commande', member.guild.iconURL({dynamic: true}))

        return embedPermissionMissing;
    }
    embedTicketOpened(user, guild) {
        const embedTicketOpened = new MessageEmbed()
            .setColor('2f3136')
            .setAuthor(`Bienvenue ${user.tag} dans ton ticket !`, user.displayAvatarURL({dynamic: true}))
            .setDescription(`Vous pouvez déjà expliquer votre problème, le staff vous répondra dès que possible.`)
            .setFooter('Merci de patienter', guild.iconURL({dynamic: true}))

        return embedTicketOpened;
    }
}