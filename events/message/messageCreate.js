module.exports = {
    run: async(client, message) => {
        if (!message.author || !message.member || !message.guild || !message.guild.id) return;
        if (message.author.bot) return;

        const [command, ...args] = message.content.slice(client.config.prefix.length).split(" ");
        const cmd = client.commands.get(command || client.aliases.get(command));
        if (!cmd) return;
        cmd.run(client, message, args);

    },
    name: 'messageCreate',
}