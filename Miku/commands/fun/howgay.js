const db = require("old-wio.db");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  config: {
  name: "howgay",
  aliases: [""],
  category: "fun",
  description: "Muestra que tan gay es el usuario",
  usage: "howgay <@userr>",
  },
  run: async (bot, message, args) => {
    //Start

    let Member =
      message.mentions.users.first() ||
      message.guild.member(args[0]) ||
      message.author;

    let Result = Math.floor(Math.random() * 101);

    let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Ja que gay`)
      .setDescription(`${Member.username} Is ${Result}% Gay 🏳️‍🌈`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
 