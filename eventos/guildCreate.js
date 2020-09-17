client.on("guildCreate", async guild => {
  
  let nserver = `\`Estou em um novo servidor:\`\n\n  Nome: **${guild.name}**\n  ID: __**${guild.id}**__\n  Membros: __**${guild.memberCount}**__ \n\nAgora eu estou em __**${client.guilds.size}**__ servidores.`;
  client.guilds
    .get("id do servidor dos logs")
    .channels.get("id do canal dos logs")
    .send(nserver);
  console.log(`Entrei no servidor ${guild.name}`);
});