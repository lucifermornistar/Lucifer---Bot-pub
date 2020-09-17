const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

var list = [
  'https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif',
  'https://media.tenor.com/images/a12113877cf8e37bc03c29a8346b125a/tenor.gif',
  'https://media.tenor.com/images/b6d0903e0d54e05bb993f2eb78b39778/tenor.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para Abraçar  !');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} acaba de dar um abraço em ${user}`)
        .setImage(rand)
  await message.channel.send(embed);
}