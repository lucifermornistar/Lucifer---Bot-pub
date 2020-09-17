const Discord = require('discord.js')
exports.run = (bot, message, args) => {
  
  if (message.deletable) message.delete()
  
  message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`PING | ${message.member.displayName}`).addField(`Meu ping esta em`, `${bot.ws.ping}**ms**`, true).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt))
  //message.channel.send(`**O meu ping é de \`${bot.ws.ping}\` ms, ${message.author}**`)
  
}
exports.help = {
  name: "ping"
}