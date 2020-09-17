const Discord = require('discord.js')

   module.exports = async (bot, oldMessage, newMessage) => { //cuida do evento de mensagens enviadas em chat
     if(oldMessage.author.bot || newMessage.author.bot)
    return;

 let teste = new Discord.MessageEmbed()
    .setColor("RED")
     .setTitle(oldMessage.author.tag)
   .setDescription("📝**Menssagem de texto editada**\n\n**Canal de texto:<#"+oldMessage.channel.id+">\n\n **Antiga mensagem\n`"+oldMessage.content+"`\nNova Mensagem\n `"+newMessage.content+"`")
 bot.channels.cache.get("754408279890853929").send(teste)

}