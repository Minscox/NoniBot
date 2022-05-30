const { MessageEmbed } = require('discord.js');
const moment = require("moment")
moment.locale('fr')
const Discord = require("discord.js");

module.exports = {
    name: 'userinfo',
    aliases: [],
    description: '',

    run: async(client, message, args) => {

        async function getUserBannerUrl(userId) {
            const user = await client.api.users(userId).get();
            return user.banner ? `https://cdn.discordapp.com/banners/${userId}/${user.banner}?size=512` : null;
        }
            let mentionedUser = message.mentions.users.first() || client.users.resolve(args[0]) || message.author;
            const bannerUrl = await getUserBannerUrl(mentionedUser.id, { size: 4096 });
            const member = await message.guild.members.fetch((message.mentions.members.first() || message.member)?.id).catch(() => {});
            if (!member) return;
            const boostDate = member.premiumSince ? moment.utc(member.premiumSince).format(`[Le] DD/MM/YYYY [à] HH:mm:ss`) : 'Aucun boost'

    const embed = new MessageEmbed()
        .setTitle('Page d\'informations')
        .setColor('#2f3136')
        .setThumbnail(member.displayAvatarURL({dynamic: true}))
        .setDescription(`
        >  **Utilisateur:** 
        \n** Pseudo:** \`${member.user.username}\`
        ** Hashtag:** \`${member.user.discriminator}\`
        ** ID:** \`${member.user.id}\`
        ** Avatar:** [Lien](${member.user.displayAvatarURL({dynamic: true, size: 512})})
        ** Compte créé:** \`${moment.utc(member.user.createdAt).startOf('day').fromNow()}\`
        ** Boosts:** \`${boostDate}\`
        ** Bot / Humain:** \`${member.user.bot ? 'Bot' : 'Humain'}\`
        \n>  **Membre:** 
        \n** A rejoint:** \`${moment.utc(member.joinedAt).format('LLLL')}\`
        ** Plus haut rôle:** \`${member.roles.highest.name}\``)
        .setImage(bannerUrl)
        .setFooter(`ID: ${member.user.id}`, member.user.displayAvatarURL({dynamic: true})).setTimestamp()
    
    message.channel.send({embeds: [embed]})
    }
}