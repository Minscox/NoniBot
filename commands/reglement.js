const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async(client, message, args) => {
        const embedRegle = new MessageEmbed()
            .setColor('2f3136')
            .setAuthor(`Règlement du serveur ${message.guild.name}`, message.guild.iconURL({dynamic: true}))
            .setThumbnail(message.guild.iconURL({dynamic: true}))
            .setFooter(`ID: ${message.guild.id}`, message.guild.iconURL({dynamic: true}))
            .setDescription("**Acte 1 : comportement**\n• pas de violence verbale\n• les menaces son lourdement sanctionnées\n• La pub par message privé est strictement défendu\n•Le racisme , l'antisémitisme,le sexisme etc est strictement interdit\n• Manquer de respect à un membre du staff ou au serveur sera sévèrement sanctionné\n**Acte 2 : Vocal**\n• Les screamers sont interdit\n• Les soundbords sont sanctionné\n• Le spam de join un salon vocal est strictement interdit\n• Le harcèlement que ce soit en vocal ou dans un salon textuel est strictement interdit\n**Acte 3 : Votre compte**\n• Votre pseudo ne doit jamais tenir des propos raciste, homophobe, pornographique, sexuel, insulte...\n• Votre photo de profile ne doit en aucun cas contenir une image sensé heurter la sensibilité d'autres personnes : pornographie, raciste, homophobe...\n• Les doubles comptes sont interdit\n")

        message.channel.send({embeds: [embedRegle]});
    },
    name: 'regle',
    aliases: [],
    description: 'Permet d\'afficher le règlement'
}