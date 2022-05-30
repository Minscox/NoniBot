module.exports = {
    run: async(client) => {
        client.user.setPresence({
            status: "online",
            activities: [
                {
                    name: "avec tes parents",
                    type: "PLAYING"
                }
            ]
        });
        return console.log(`${client.user.tag} est prêt !`);
    },
    name: 'ready'
}