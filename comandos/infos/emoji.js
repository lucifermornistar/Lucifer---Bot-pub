const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete();
  if (!args[0])
    return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`ERRO | ${message.author.tag}`).addField(`[ERRO AO EXECUTAR O COMANDO]`, ` O uso correto é ex.: a.emoji aquarindo`, true).addField(`**Observação**`, `Não é necessário colocar o emoji dentro de :emoji: simplesmente escreva o nome do emoji \n exemplo: .emoji aquarindo`).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt));
  let emoji = message.guild.emojis.cache.find(emoji => emoji.name === args[0]);

  if (!emoji) {
    message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`ERRO | ${message.author.tag}`).addField(`[ERRO AO ENCONTRAR EMOJI]`, ` ${args[0]} Não é um emoji deste servidor`, true).addField(`**Observação**`, `Não é necessário colocar o emoji dentro de :emoji: simplesmente escreva o nome do emoji \n exemplo: .emoji aquarindo`).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt));
  } else if (emoji.animated === true) {
    message.channel.send(`<a:${args[0]}:${emoji.id}>`); console.log(emoji.id)
  } else {
    message.channel.send(`<:${args[0]}:${emoji.id}>`); console.log(emoji.id)
  }
};