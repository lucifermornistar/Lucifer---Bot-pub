const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: 'daily',
    aliases: ['daily', 'diario', 'recompensa'],
    category: 'Economia',
    description: 'Pegue sua recompensa diária',
    usage: `diario`,
//
run: async (client, message, args) => {
        let user = message.author;
        
        let delay = 86400000; //Aqui você coloca o tempo em milisegundos
        let author = await db.fetch(`delay_daily_${message.guild.id}_${user.id}`);

        if(author !== null && delay - (Date.now() - author) > 0){
            let tempo = ms(delay - (Date.now() - author));
            return message.channel.send(
            new MessageEmbed()
            .setAuthor(`${user.tag}`, user.displayAvatarURL({ dynamic: true }))
            .setDescription(`${user} Você já pegou sua recompensa, para pegar novamente volte em ${tempo.hours}h, ${tempo.minutes}m, ${tempo.seconds}s`)
            .setColor("#36393F"))
        } else {
            let diario = Math.floor(Math.random() * 555);
            db.add(`economia_maos_${message.guild.id}_${user.id}`, diario)
            db.set(`delay_diario_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send(
            new MessageEmbed()
            .setAuthor(`${user.tag}`, user.displayAvatarURL({ dynamic: true }))
            .setDescription(`${user} Você pegou sua recoempnsa diária e recebeu ${diario} coins.`)
            .setColor("#36393F")
            .setTimestamp())
        }
    }
}