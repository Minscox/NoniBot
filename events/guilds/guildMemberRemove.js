const { MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports = {
    run: async(client, member) => {
        const channel = member.guild.channels.cache.get('944358124649848945');
        const embedMemberRemove = new MessageEmbed()
            .setColor('2f3136')
            .setAuthor('Un membre nous quitte...', member.user.displayAvatarURL({dynamic: true}))
            .addField('Création du compte', moment(member.user.createdAt).format('L'))
            .addField('Rejoins le', moment(member.joinedAt).format('L'))
            .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
            .setDescription(`${member.user.tag} nous à quitté...`)
            .setFooter(`Nous sommes désormais ${member.guild.memberCount}`, member.user.displayAvatarURL({dynamic: true})).setTimestamp()

        channel.send({embeds: [embedMemberRemove]});
    },
    name: 'guildMemberRemove'
}