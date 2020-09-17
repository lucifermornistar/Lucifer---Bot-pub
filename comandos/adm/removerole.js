const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`ERRO | ${message.member.displayName}`).addField(`[ERRO]`, `**Você não tem permissão para fazer isto!**`, true).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt))

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`ERRO | ${message.member.displayName}`).addField(`[ERRO]`, `**Por favor forneça um membro.**`, true).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt))
    let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`ERRO | ${message.member.displayName}`).addField(`[ERRO]`, `**Por favor forneça um cargo.**`, true).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt)) 

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`ERRO | ${message.member.displayName}`).addField(`[ERRO]`, `**Eu não tenho permissão para fazer isto!**`, true).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt))
   
   let removerole = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp(`${message.createdAt}`)
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))   
    .setTitle(`REMOVEROLE | ${member.user.tag}`)
    .addField(`O cargo: ${role.name}`, `Foi removido de ${member.displayName}` )
    .addField("Moderador:", message.author.username)
   
    if(!member.roles.cache.has(role.id)) {
        return message.channel.send(`${member.displayName}, não tem este cargo!`)
    } else {
        await member.roles.remove(role.id).catch(e => console.log(e.message))
        message.channel.send (removerole)
    }


    
        let sChannel =  message.guild.channels.cache.get('713544537200394250')// coloca o canal de punições aq
        sChannel.send(removerole)
}
