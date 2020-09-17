exports.run = async (bot, message) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
  return message.reply(
    "você é fraco, lhe falta permissão de `Gerenciar Mensagens` para usar esse comando"
 );

 // message.delete()
  try {
    const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`Teste`)
message.guild.members.cache.forEach(e => e.send(embed))

} catch(e) {
console.log(e)
}

}