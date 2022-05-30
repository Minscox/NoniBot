const Discord = require("discord.js")
module.exports = {
	name: 'football',
	aliases: [],
    description: 'Permet de joueur au football',
	run: async (client, message, args) => {
		const positions = {
			left: '_ _                   :goal::goal::goal:\n_ _                   :levitate:\n      \n_ _                         :soccer:',
			middle: '_ _                   :goal::goal::goal:\n_ _                        :levitate:\n      \n_ _                         :soccer:',
			right: '_ _                   :goal::goal::goal:\n_ _                              :levitate:\n      \n_ _                         :soccer:',
		};
		let randomized = Math.floor(Math.random() * Object.keys(positions).length);
		let gameEnded = false;
		let randomPos = positions[Object.keys(positions)[randomized]];

		const componentsArray = [
			{
				type: 1,
				components: [
					{
						type: 2,
						style: 'SECONDARY',
						custom_id: 'left',
						label: 'Gauche',
					},
					{
						type: 2,
						style: 'PRIMARY',
						custom_id: 'middle',
						label: 'Milieu',
					},
					{
						type: 2,
						style: 'SECONDARY',
						custom_id: 'right',
						label: 'Droite',
					},
				],
			},
		];
		const msg = await message.channel.send({
			content: randomPos,
			components: componentsArray,
		});
		function update() {
			randomized = Math.floor(Math.random() * Object.keys(positions).length);
			randomPos = positions[Object.keys(positions)[randomized]];

			msg.edit({
				content: randomPos,
				components: componentsArray,
			});
		}
		setInterval(() => {
			if(gameEnded == false) return update();
		}, 1000);
		const filter = button => {
			return button.user.id === message.author.id;
		};
		const button = await msg.awaitMessageComponent({ filter: filter, componentType: 'BUTTON', max: 1 });

		if(button.customId !== Object.keys(positions)[randomized]) {
			gameEnded = true;
			return button.reply({ content: 'Tu as gagné!' });
		}
		else {
			gameEnded = true;
			return button.reply({ content: 'Tu as perdu...' });
		}
	},
};