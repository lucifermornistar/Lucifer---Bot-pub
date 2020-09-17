const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`ERRO | ${message.member.displayName}`).addField(`[ERRO]`, `**Você não tem permissão para isso!**`, true).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt))

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`ERRO | ${message.member.displayName}`).addField(`[ERRO]`, `**Por favor forneça um usuário**`, true).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt))
    let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`ERRO | ${message.member.displayName}`).addField(`[ERRO]`, `**Por favor forneça um cargo.**`, true).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt)) 

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`ERRO | ${message.member.displayName}`).addField(`[ERRO]`, `**Eu não tenho permissão para fazer isto!**`, true).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt))
    
   let giverole = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp(`${message.createdAt}`)
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))   
    .setTitle(`ADDROLE | ${member.user.tag}`)
    .addField("Moderador:", message.author.username)
    .addField(`O cargo: ${role.name}`, `Foi dado a ${member.displayName}`)
    
    if(member.roles.cache.has(role.id)) {
        return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle(`ERRO | ${message.member.displayName}`).addField(`[ERRO] ${member.displayName}`, `**Já tem este cargo!**`, true).setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})).setTimestamp(message.createdAt))
    } else {
        await member.roles.add(role.id).catch(e => console.log(e.message))
        message.channel.send(giverole)
    }


  
    
        let sChannel =  message.guild.channels.cache.get('753037780711505990')//coloca o canal de punições aq
        sChannel.send(giverole)
}