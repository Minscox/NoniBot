const Discord = require("discord.js")

module.exports = new Event("guildMemberUpdate", async (bot, oldMember, newMember) => {

    const oldStatus = oldMember.premiumSince;
    const newStatus = newMember.premiumSince;

    if(!oldStatus && newStatus) {
        let Boost = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setTitle("Merci du boost")
        .setDescription(`Merci de ton boost ${newMember.user} ! 🚀`)
        .setImage('https://cdn.discordapp.com/attachments/897595945531867146/906185101933686794/5fc1f8cf89ea4cfa8bbc77eb1ba2ce31.jpeg')

        await bot.channels.cache.get("980202571861991435").send({embeds: [Boost]})
    }
})