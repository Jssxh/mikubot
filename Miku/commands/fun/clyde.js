const Discord = require('discord.js');
const config = require('../../config.json');
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch');

module.exports = {
    config: {
        name: 'clyde',
        description: 'Muestra tu texto como los mensajes de Clyde',
        aliases: ["clyde"],
        usage: '<text>',
        category: 'fun',
    },
    run: async (bot, message, args) => {
    
        const text = args.slice().join(' ');
		if (!text) {
			return message.channel.send(
				'❎ Pon un texto valido.',
			);
		}

		const url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`;

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send('❎ Jo un error en la base de datos intenta otra vez JIJIJA');
		}
		const attachment = new MessageAttachment(response.message, 'clyde.png');
		return message.channel.send(attachment);
  
    }
};