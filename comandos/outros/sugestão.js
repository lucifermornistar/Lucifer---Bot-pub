/*const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "main",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send(" Ops,Você esqueceu de colocar a sugestão.")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "〘📓〙sᴜɢᴇsᴛᴏᴇs" || x.name === "suggestions"))
    
    
    if(!channel) {
      return message.channel.send(" Não tem canal de sugestões  com esse nome.")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("                                                                                       👥 Autor: " + message.author.tag,message.author.avatarURL())
    .setThumbnail(message.author.avatarURL()) 
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    .setFooter(' reaja com os emojis para dar seu veredito.')
    .setTitle("                           <a:pin:732816943538503762> Sugestão:")
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send(" Sugestão Enviada com sucesso! " + channel)
    
  }
} */ 


const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, escreva a sugestão após o comando`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, forneça uma sugestão de no máximo 1000 caracteres.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "754396890795212823");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("✍Sugestão✍")
    .addField("👤 Autor:", message.author)
    
    .addField("📥 Sugestão:", content)
    
    
    .setFooter("Deixe sua opinião sobre ")
    .setTimestamp()
  );
  await message.channel.send(`${message.author} a mensagem foi enviada com sucesso!`);

  const emojis = ["754717169706860545", "754717213583474739" ];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}