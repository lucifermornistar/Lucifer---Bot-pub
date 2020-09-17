const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`apenas usuários com a permissão \`ADEMIR\` podem utilizar este comando!`)

  const embed = new Discord.MessageEmbed()
        .setTitle('** <a:pin:732816943538503762> NOTIFICAR  <a:pin:732816943538503762> **')
        .setColor('#000000')
        .setDescription(`
__📢 -> PARA NOTÍCIAS DO SERVIDOR
(<@&754432232789245962>)

🎁 -> PARA EVENTOS DO SERVIDOR
(<@&754441109874147340>)

<a:party:754451223574216774> -> PARA SORTEIOS E DROPS DO SERVIDOR 
(<@&754440776750202922>)

 ⛔ -> PARA AS PARCERIAS DO SERVIDOR 
(<@&754433318984089744>)

🔎-> PARA O JORNAL DO SERVIDOR
(<@&754437969921835040>)

🔔 -> PARA TODAS AS NOTIFICAÇÕES__ `)
        .setTimestamp()
  await message.channel.send(embed);
}