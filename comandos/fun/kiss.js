const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://i.pinimg.com/originals/b0/37/a0/b037a0d27fc2fce28cd279561ec89825.gif','https://i.pinimg.com/originals/a7/4a/bf/a74abfc0fa25c35353066b37443e74ae.gif',
  'https://78.media.tumblr.com/258150e0ec251466cc845a258bce892f/tumblr_p6gnlhHm021v6bs4yo4_500.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const comandos = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} acaba de beijar ${user}`)
        .setImage(rand)
  message.channel.send(comandos).then(msg => { 
   msg.react('🔁').then(r => { // retribuirFilter
  })
   
    const retribuirFilter = (reaction, user) => reaction.emoji.name === '🔁'  && message.author.id === user.id;
    const retb = msg.createReactionCollector(retribuirFilter);
    
   retb.on('collect', r2 => {
           msg.reactions.removeAll()

            comandos.setColor("BLACK")
           comandos.setDescription(`${message.author} acaba de beijar ${user}`)
           comandos.setImage(rand)
           
           msg.edit(comandos).then(msg => {

            msg.react("🔁").then(r => {
            msg.channel.send(comandos)
            })
          })
        })
})
}