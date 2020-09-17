module.exports = async (bot, membro) => {
  let server = bot.guilds.cache.get("754048441872810014");  
  let counter = server.memberCount;
  let memberCount = server.memberCount;
  
  let embed = new bot.Discord.MessageEmbed()
   .setTitle(`**Saiu...**`)
   .setImage("https://cdn.discordapp.com/attachments/752894282318479430/752962694960906241/giphy_1.gif")
   .setDescription(`${membro} foi em uma expedição ao reino do **Luci**, será que ele ira conseguir retornar? Atualmente temos ${counter} players no server`)
   .setColor(14296838)
   .setFooter(`Nome do Membro: ${membro.displayName}`)
 
  bot.channels.cache.get("754061313486880898").send(embed)
}