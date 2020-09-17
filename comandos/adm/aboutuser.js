var discord = require("discord.js");

exports.run = async (bot, message, argumentos, arg_texto, chat) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply("VOCÊ NÃO É ADM!");

  const userMention = message.mentions.users.first() || message.author;
  const memberMention = message.mentions.members.first() || message.member;

  let userinfo = {};
  userinfo.bot = userMention.bot;
  userinfo.createdat = userMention.createdAt;
  userinfo.discrim = userMention.discriminator;
  userinfo.id = userMention.id;
  userinfo.mfa = userMention.mfaEnabled;
  userinfo.pre = userMention.premium;
  userinfo.presen = userMention.presence;
  userinfo.tag = userMention.tag;
  userinfo.uname = userMention.username;
  userinfo.verified = userMention.verified;

  userinfo.avatar = userMention.avatarURL;

  const rolesOfTheMember = memberMention.roles.cache
    .filter(r => r.name !== "@everyone")
    .map(role => role.name)
    .join(", ");

  var myInfo = new discord.MessageEmbed() //RichEmbed
    .setAuthor(userinfo.uname, userinfo.avatar)
    .addField("Bot?", userinfo.bot, true)
    .addField("Criada em", userinfo.createdat, true)
    .addField("Discriminator", userinfo.discrim, true)
    .addField("Id do client", userinfo.id, true)
    .addField("2FA/MFA Habilitada?", userinfo.mfa, true)
    .addField("Conta paga", userinfo.pre, true)
    .addField("Presença", userinfo.presen, true)
    .addField("Tag do usuario", userinfo.tag, true)
    .addField("Nome do usuario", userinfo.uname, true)
    .addField("Verificado?", userinfo.verified, true)
    .setColor(0xf0e5da)
    .setFooter("Informações adquiridas com sucesso")
    .setTitle("Sobre o usuário")
    .setThumbnail(userinfo.avatar);

  message.channel.send(myInfo);
};

/*var commando = require('discord.js-commando');
var discord = require('discord.js');

class aboutuser extends commando.Command 
{
    constructor(client) {
        super(client, {
            name: 'aboutuser',
            group: 'help',
            memberName: 'aboutuser',
            description: 'Lists information about a specific user.',
            aliases: ['au', 'aboutu', 'auser', 'user'],
        })
    }
async run(bot, message, args){
    const userMention = message.mentions.users.first() || message.author;
    const memberMention = message.mentions.members.first() || message.member;

    let userinfo = {};
    userinfo.bot = userMention.bot;
    userinfo.createdat = userMention.createdAt;
    userinfo.discrim = userMention.discriminator;
    userinfo.id = userMention.id;
    userinfo.mfa = userMention.mfaEnabled;
    userinfo.pre = userMention.premium;
    userinfo.presen = userMention.presence;
    userinfo.tag = userMention.tag;
    userinfo.uname = userMention.username;
    userinfo.verified = userMention.verified;

    userinfo.avatar = userMention.avatarURL;

    const rolesOfTheMember = memberMention.roles.filter(r => r.name !== '@everyone').map(role => role.name).join(', ')

    var myInfo = new discord.RichEmbed()
        .setAuthor(userinfo.uname, userinfo.avatar)
        .addField("Bot?",userinfo.bot, true)
        .addField("Created At",userinfo.createdat, true)
        .addField("Discriminator",userinfo.discrim, true)
        .addField("Client ID",userinfo.id, true)
        .addField("2FA/MFA Enabled?",userinfo.mfa, true)
        .addField("Paid Account?",userinfo.pre, true)
        .addField("Presence",userinfo.presen, true)
        .addField("Client Tag",userinfo.tag, true)
        .addField("Username",userinfo.uname, true)
        .addField("Verified?",userinfo.verified, true)
        .setColor(0xf0e5da)
        .setFooter('s!aboutserver')
        .setTitle("About this user...")
        .setThumbnail(userinfo.avatar)


        message.channel.sendEmbed(myInfo);

}

}
module.exports = aboutuser;*/
