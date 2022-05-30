const { MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports = {
    run: async(client, member, message) => {
        const channel = member.guild.channels.cache.get('944357593248313355');
        const embedNewMember = new MessageEmbed()
            .setColor('2f3136')
            .setDescription(`${member} nous à rejoins !`)
            .setAuthor('Un membre débarque !', member.user.displayAvatarURL({dynamic: true}))
            .addField('Création du compte', moment(member.user.createdAt).format('L'))
            .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
            .setFooter(`Nous sommes maintenant ${member.guild.memberCount} sur le serveur !`, member.user.displayAvatarURL({dynamic: true})).setTimestamp()

        channel.send({embeds: [embedNewMember]});
    },
    name: 'guildMemberAdd'
}