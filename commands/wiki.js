const Discord = module.require("discord.js");

module.exports = {
  name: "wiki",
  aliases: [],
  description: "Obtenir les résultats de recherche de Wikipedia",
  run: async (client, message, args) => {
    const search = args.join("_");
    const msg = args.join(" ");
    if (!msg) {
      return message.channel.send('Veuillez entrer un texte !');
    }
    const link = `https://www.wikipedia.org/w/index.php?search=${search}&ns0=1`;
    const embed = new Discord.MessageEmbed()
      .setTitle("〃 Wikipédia")
      .addField(`Vous avez cherché: `, `${msg}`)
      .addField(`Resultats ➜ `, `[Ce que j'ai trouvé](${link})`)
      .setColor('#caa413'); 

    message.channel.send({ embeds: [embed] });
  },
};