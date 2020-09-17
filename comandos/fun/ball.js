const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
   var fortunes = [
        "Sim",
        "Não",
        "Talvez",
        "Eu não sei, tente de novo",
        "Quem sabe?",
        "Irineu, você não sabe nem eu.",
        "Isso é um mistério",
        "Não posso te contar",
        "Meu informante disse que não",
        "Provavelmente",
        "Me pergunte mais tarde!",
        "Claro que não!",
        "Não conte comigo para isso",
        "Dúvido muito",
        "Óbvio",
        "Não sei."

      ];
  
      if(!args[0]){
        return message.channel.send(":x: | Por favor insira uma pergunta!")
      }

      let adiantando = args.join(" ").toLowerCase()

      if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);


      else message.channel.send(":x: | Não foi possível ler sua pergunta! :(");
};