const Discord = require('discord.js')

module.exports = async (bot, message) => { //cuida do evento de mensagens enviadas em chat 
bot.guilds.cache.get("668964840102035487")

 let embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
      .setTitle(message.author.tag)
    .setDescription("📝**Menssagem de texto deletada**\n\n**Canal de texto:**<#"+message.channel.id+">\n\n Menssagem\n `"+message.content+"`")  
 bot.channels.cache.get("754408279890853929").send(embed)

}