const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../config.json")
module.exports.run = async (client, message, args) =>{
     let prefix = db.get(`prefix_${message.guild.id}`)
     if(prefix === null) {
         prefix = config.prefix
     }
     if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Me parece que você não tem permissão <:neg:746785984443842603>");
    
    let embederro = new Discord.MessageEmbed()
    .setTitle("💼 Cargo de silenciado:")
    .setDescription(`com esse comando você pode personalizar o cargo de mutado no seu servidor!`)
    .addField(`📝 exemplo:`, `${prefix}muterole @cargo`)
    .addField(`outros modos:`, `**list - diz qual cargo está definido atualmente\ndel - remove o cargo definido no seu servidor**`)
    .addField(`✋ Permissão:`, `**ADMINISTRADOR**`)
    .setFooter(`você pode mudar o nome do cargo depois dele ser definido sem problemas!`)
    let role = message.mentions.roles.first();
    var rolemute = db.get(`muterole_${message.guild.id}`)
    if(!args[0]) return message.reply(embederro)
    if(args[0] === "del") {
    if(rolemute === null) return message.reply("não há nenhum cargo definido nesse servidor pra eu tirar <:neg:746785984443842603>")
    let muterole = db.delete(`muterole_${message.guild.id}`) 
    message.reply("<:setaazul:746785672022720523> cargo removido com sucesso!")
    }
    if(args[0] === "list") {
        if(rolemute === null) return message.reply("não há um cargo definido nesse servidor! <:neg:746785984443842603>")
        return message.reply(`o cargo atual usado para mutar aqui é "<@&${rolemute}>"!`)
    }
    let muterole = db.set(`muterole_${message.guild.id}`, role.id)
    message.channel.send(`<:setaazul:746785672022720523> apartir de agora "${role}" será o cargo usado para mutar membros deste servidor`)
    
}
