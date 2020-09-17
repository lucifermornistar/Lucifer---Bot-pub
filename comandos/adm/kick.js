const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "291221132256870400") return message.channel.send("Você não tem permissão para fazer isso!");
    
  let xdemb = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Comando de kick")
  .addField(`Usado para`,`kickar um membro`, true)
  .addField("Use:", ".kick [usuário] [motivo]", true)
  .addField("Exemplo:" ,".kick @LordLuch spam")
  .setTimestamp(`${message.createdAt}`)
  .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))   

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send("Eu não posso kickar este usuário!");
   if(member.user.id === "291221132256870400") return message.channel.send("Eu não posso kickar meu dono!")

    
    let motivo = args.slice(1).join(' ');
    if(!motivo) {
     return message.channel.send("Não especificou o motivo");
    } else {
     var res = `${motivo}`
    }
    
    await member.kick(motivo)
      .catch(error => message.reply(`Desculpe, eu não consegui kicka-lo por : ${error}`));

      
  
      let kick = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Kick | ${member.user.tag}`)
      .addField("Usuário", member, true)
      .addField("Moderador", message.author, true)
      .addField("Motivo", res)
      .setTimestamp(`${message.createdAt}`)
      .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))   

      message.channel.send(kick)
      message.guild.channels.cache.get('713544537200394250').send(kick)
   //   message.guild.channels.cache
      //  .get(713544537200394250)
        //.send('test')
     // let embedkick = new Discord.Message.Embed
          
         // .send('a')
  
    message.delete();
    
}
      module.exports.help = {
        name: "kick"
      }