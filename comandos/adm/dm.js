const Discord = require("discord.js");
const c = require("./config.json")

    const member = message.mentions.members.first()
    const role = message.mentions.roles.first()
    const content = message.content.substring(26)
    message.guild.roles.cache.get(role.id).members.forEach(member => member.send(content))
    message.channel.send(`Message has been send to everyone with **${role.name}**`)
