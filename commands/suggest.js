const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async(client, message, args) => {

        const suggest = args.join(" ")

        if(!suggest || !message.channel.name.startsWith('💡•suggestion-discord')) return message.delete()

        const Embed = new MessageEmbed()
            .setAuthor({name: 'Nouvelle suggestion', iconURL: `${message.author.displayAvatarURL({dynamic: true})}`})
            .setColor('#3e6ad4')
            .addFields(
                {
                    name: ' • Utilisateur',
                    value: `\`\`\`${message.author.tag}\`\`\``
                },
                {
                    name: ' • Suggestion',
                    value: `\`\`\`${suggest}\`\`\``
                }
            )
            .setTimestamp()
            .setFooter({text: `Exécutée par ${message.author.username}`, iconURL: `${message.guild.iconURL({dynamic: true})}`})

        await message.channel.send(
            {
                embeds: [Embed]
            }
        ).then(async msg => {
            msg.react('✔️')
            msg.react('➖')
            msg.react('❌')

            msg.startThread({name: `Suggestion de ${message.author.username}`})
        })

    },
    name: 'suggest',
    aliases: [],
    description: 'Permet de faire une suggestion'
}