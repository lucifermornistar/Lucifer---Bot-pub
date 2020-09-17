/*const Discord = require("discord.js")
exports.run = async (bot, message, argumentos, arg_texto, chat) => {  
  
  let bot_ingame = await bot.users.fetch("713133985512816672"); 
  let descrição;
  if(bot_ingame.presence.status == "online")
    descrição = "<:mine_on:713761109638905896> Estamos com "+bot.channels.cache.get("712838235222442014").topic.split('|')[0];
  else
    descrição = "<:mine_off:713761109319876669> O server está offline no momento!";
  
  const embed = new Discord.MessageEmbed()
  .setColor(14296838)
  .setTimestamp(`${message.createdAt}`)
  .setFooter (`Comando solicitado por ${message.member.displayName}`)
  .setDescription(descrição)
  .setThumbnail("https://www.dropbox.com/s/97ci8jkqn0a7vvw/Dragon.png?dl=1")
  .setImage("https://media0.giphy.com/media/pUp9Nb1czvHMY/giphy.gif")
  .addField("Instagram", "https://www.instagram.com/tfoarpg/")
  .addField("Youtube", "https://www.youtube.com/channel/UCP-bTjZAl-L5l8ldfbDLvPA?view_as=subscriber")
  .addField("Modpack", "http://api.technicpack.net/modpack/projetorpg2020")  
  .addField("Dropbox", "https://www.dropbox.com/s/d7biqwluaxx9i88/Pasta%20TFOA.rar?dl=1")
  .addField("Site", "https://thefateofadventurer.wixsite.com/website")
  
  message.channel.send(embed)
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "modpack",
}*/
  /*
  chat.send({embed:
    {
      color: 14296838,//12920615,7583837
      "timestamp": message.createdAt,
      author: {
        name: "TFOA - The Fate Of Adventurer"
      },
      description: descrição,
      thumbnail: {
        url: "https://www.dropbox.com/s/97ci8jkqn0a7vvw/Dragon.png?dl=1"
      },
      image: {
        url: "https://media0.giphy.com/media/pUp9Nb1czvHMY/giphy.gif"
      },
      fields: [
        {
          name: "Instagram",
          value: "Nos siga! https://www.instagram.com/tfoarpg/"
        },
        {
          name: "Youtube",
          value: "[Se inscreva no nosso canal!](https://www.youtube.com/channel/UCP-bTjZAl-L5l8ldfbDLvPA?view_as=subscriber)"
        },
        {
          name: "Technic",
          value: "http://api.technicpack.net/modpack/projetorpg2020"

        },
        {
          name: "Dropbox",
          value: "https://www.dropbox.com/s/a0dps0zogrny9gc/TFOA.zip?dl=1"
        }
      ],
      footer: {
        icon_url: message.author.displayAvatarURL({size: 32}),//"https://www.dropbox.com/s/97ci8jkqn0a7vvw/Dragon.png?dl=1",
        text: "Comando solicitado por "+message.member.displayName
      }
    }
  });
  //message.reply( bot.channels.cache.get("712838235222442014").topic.split('|')[0] );//" " +
}*/