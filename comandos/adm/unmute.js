const Discord = require('discord.js')
const Cargo = require("../../util/muteCargos.js");
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Você não tem permissão para isso!")

  let member = message.mentions.members.first();
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  
        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
        if(!toMute) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`ERRO | ${message.author.tag}`).addField(`Usuário: [ERRO AO ENCONTRAR]`, `por favor mencione um usuário ou id para desmutar...`, true).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt));

        let role = message.guild.roles.cache.get('713538303642828872');
        //precisa puxar os cargos pra ca
  
        if(!role || !toMute.roles.cache.has(role.id)) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`ERRO | ${member.user.tag}`).addField(`Usuário: ${tomute.user.username}`, `este usuário não está mutado!`, true).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt))

  
        const cargos = await Cargo.findOne({ user_id: toMute.id })
        await tomute.roles.set(cargos.roles)
        await Cargo.deleteOne({ user_id: toMute.id })
         //aq vai executar o comando pra add os cargos...
          let unmute = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`desmutado | ${member.user.tag}`)
          .addField(`Usuário: ${tomute.user.username}`, `foi desmutado`, true)
          .addField("Moderador", message.author, true)
          .setTimestamp(`${message.createdAt}`)
          .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})) 

            message.channel.send(unmute)
        message.channel.send(`Usuário: <@${tomute.id}> foi desmutado!`);
        message.guild.channels.cache.get('713544537200394250').send(unmute)
  
        message.delete();

     }
    
        module.exports.help = {
            name: "unmute"
        }