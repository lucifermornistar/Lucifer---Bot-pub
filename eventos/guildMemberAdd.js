module.exports = async (bot, membro) => {
  let server = bot.guilds.cache.get("754048441872810014");  
  let counter = server.memberCount;
  let memberCount = server.memberCount;
  
  membro.roles.add(['754049396923957308']);
  
  let embed = new bot.Discord.MessageEmbed()
   .setTitle(`**INVOCAÇÃO!**`)
   .setImage("https://cdn.discordapp.com/attachments/752894282318479430/752962719237275659/tenor_3.gif")
   .setDescription(`${membro} foi invocado, será ele o membro mais top do servidor? Atualmente temos ${counter} player no server`)
   .setColor('#00FF00')
   .setFooter(`Nome do Membro: ${membro.displayName}`);

  bot.channels.cache.get("754061256545140756").send(embed)

  membro.send(`Seja bem vindo ao discord oficial Do SapecaJunho.
  https://cdn.discordapp.com/attachments/723690948365647932/753067588682252338/desconhecido.gif `);
}
