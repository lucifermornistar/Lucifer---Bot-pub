module.exports = async (bot) => { //faz algo qdo o bot liga
  const Discord = require("discord.js")
  console.log('!!! estou pronto para ser usado !!!\n  To de olho em '+bot.channels.cache.size+' canais (chats + calss)');  
  
  
  
  
  const status = [
    "dnd",
  ]
  
  
  
  
  const atividades = [
   ["Inferno","PLAYING"], 
  ];
  setInterval(async () => { //controla o intervalo pra trocar a atividade
    let i = Math.floor(Math.random() * atividades.length + 1) - 1;
    //if(i == atividades.length-1)
      //await bot.user.setActivity(" os "+bot.precisa da var do grupo aqui.memberCount+" usuários no grupo", { type: atividades[i][1] });
    //else
      await bot.user.setActivity(atividades[i][0], { type: atividades[i][1] });
  }, 5000);//intervalo
  
  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
      await bot.user.setStatus(status[b])
  }, 20000)
  
   /* 
  var content3 = "**<a:certificado:732816840493105214>  Olá, Primeiramente Antes de Tudo, peço que leiam as regras em <#750758001564057642> , para saber se aquilo que Irá fazer será permitido.**";
  var channel3 = bot.guilds.cache
    .get("750113711343271976") // Id do Servidor
    .channels.cache.get("750771329267138630"); //Id do canal onde a mensagem será enviada
  setInterval(function() {
    channel3.send(content3); 
  }, 1000 * 1200 * 1200 * 1); 
  channel3.send(content3);
  console.log("É para se inscrever mesmo! Saco pela.");
  
     var content2 = " **Bom, Qualquer Dúvidas Chamem um dos staffs do servidor  em pois iremos respoder o mais Rápido Possível,Ou abra um ticket em <#753079218006523964> **";
  var channel2 = bot.guilds.cache
    .get("750113711343271976") // Id do Servidor
    .channels.cache.get("750771329267138630"); //Id do canal onde a mensagem será enviada
  setInterval(function() {
    channel2.send(content2); 
  }, 1000 * 1200 * 1200 * 1); 
  channel2.send(content2);
  console.log("É para se inscrever mesmo! Saco pela.");

  const content = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField(`https://www.youtube.com/channel/UCP-bTjZAl-L5l8ldfbDLvPA?view_as=subscriber`,`Se inscrevam no canal do tfoa! lá enviaremos novidades`)
    .setFooter(`Mensagem automática por LordLuch`);
  var channel = bot.guilds.cache.get("516341039158788106").channels.cache.get("707670858675781684");//server id e canal id
  setInterval(function() {
    channel.send(content); // envia após o tempo definido
  }, 1000 * 60 * 60 * 1); // tempo definido 1 hora
  console.log("mensagem com timer enviada...");*/
}