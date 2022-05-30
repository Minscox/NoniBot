const { Permissions, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
    run: async(client, interaction) => {
        const ButtonsID = ['open-ticket', 'close-ticket'];
        if (!ButtonsID.includes(interaction.customId)) return;
        const guild = client.guilds.cache.get('944354192695361556');
        if (interaction.customId === "open-ticket") {
            if(guild.channels.cache.find((c) => c.topic === interaction.user.id)) return;
            const channel = await guild.channels.create(`ticket-${interaction.user.username}`, {
                type: 'text', 
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guild.roles.everyone.id,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guild.roles.cache.get('944360662967136349'),
                        allow: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                ],
                topic: interaction.user.id,
                parent: '979852707919704226'
            });

            const buttonCloseTicket = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('close-ticket')
                        .setLabel('Fermer le ticket')
                        .setStyle('DANGER'),
                );

            channel.send({embeds: [client.embedManager.embedTicketOpened(interaction.user, guild)], components: [buttonCloseTicket]});
            return interaction.reply({content: 'Le ticket a été créé', ephemeral: true});
        }
        if (interaction.customId === "close-ticket") {
            if (!interaction.channel.name.startsWith('ticket')) return;
            return interaction.channel.delete();
        }
    },
    name: 'interactionCreate'
}