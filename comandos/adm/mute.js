const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");
 
module.exports.run = async (client, message, args) =>{
     if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Ops Me parece que você não tem permissão <:neg:746785984443842603>");
        let embederro = new Discord.MessageEmbed()
            .setTitle(`🔇 Comando de Mute:`)
            .setThumbnail("")
            .setDescription(`Mute para aquela pessoa que desobece as regras`)           
            .addField(`📝 Exemplo`, `h.mute <@user> 1h <motivo>`)
            .addField(`🕓 tempos`, `<S/M/H/D> S=Segunndos M=Minutos H=Horas D=Dias`)
            .addField(`✋ Permissão`, `**GERENCIAR CARGOS**`)
            .setFooter("você precisa definir um cargo de mutado antes de usar isso!")
            .setColor('#bb00ff')
     const permission = message.channel.permissionsFor(message.client.user);
        if(!permission.has("MANAGE_ROLES")){
            return message.reply("Pra executar esse comando eu preciso da permissão ```gerenciar mensagens```");
        }
    let mute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!mute) return message.reply(embederro)
 
let motivo = args.slice(2).join(" ")
  if(!motivo) motivo = "nenhum"
 
let muterole = db.get(`muterole_${message.guild.id}`)
if(muterole === null) return message.reply("<:setaazul:746785672022720523> antes de usar esse comando você precisa configurar um cargo para dar pra pessoa, **Para isso use o comando: h.muterole <@cargomute>**")
let role = message.guild.roles.cache.find(role => role.id === muterole)
 
let tempo = args[1]
        if(!tempo) return message.reply("<:setaazul:746785672022720523> Por favor coloque o tempo.");
        if(!tempo.match(/^\d/)) return message.reply("o tempo que você forneceu não é um número <:neg:746785984443842603>");
 
        await(mute.roles.add(role.id));
        message.reply(`**<:player:746785960292778034> ${mute.displayName}** foi mutado(a) por: ${ms(ms(tempo))},\n<:setaazul:746785672022720523> Motivo: "**${motivo}**"`);
setTimeout(function(){
            mute.roles.remove(role.id);
            message.channel.send(`**<:setaazul:746785672022720523> Apos muito tempo silenciado(a) ${mute.displayName} aprendeu a falar novamente!**`);
        }, ms(tempo));
}
