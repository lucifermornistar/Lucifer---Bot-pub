const{MessageEmbed,Message} = require("discord.js")

module.exports ={
    name:"ban",
    category:"moderation",

    run:async(client,msg,args) =>{
        if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply({embed:{color:"RED",description:'Você Não tem permissão para usar esse comando'}}); // this line is used so that people without ban members perms cannot use this command

        var user = msg.mentions.users.first();
        if(!user) return msg.reply({embed:{color:"RED",description:"Mencione um usuário para banir."}}); // if user is not mentioned then this message will pop
        
        var member;
        try {
            member = await msg.guild.members.fetch(user);
        } catch(err) {
            member = null;
        }
        if(!member) return msg.reply({embed:{color:"RED",description:"O usuário mencionado não está no Servidor."}}) // if the user is not in server this message will appear
        if(member){
            if(member.hasPermission('BAN_MEMBERS')) return msg.reply({embed:{color:"RED",description:"Não posso banir esse usuário , ele tem a permissão de `Banir membros`"}}); // if the specified user has ban members perms then the bot cannot kick

            var reason = args.slice(1).join(' ');
            if(!reason) return msg.reply({embed:{color:"RED",description:"coloque um motivo válido para banir esse usuário."}}) // if reason is not specified this will pop up

              var channel = message.guild.channels.cache.find(ch => ch.id === "750772458373513235");

            var embed = new MessageEmbed()
            .setTitle('Sistemas de  Punições | Odyseia™')
            .addField('👤 Usuário banido:'+'\n`',user.tag, true+'`')
            .addField('👮️ Moderador:',msg.author.tag,true)
            .addField('📝 Motivo:', reason)
            msg.channel.send(embed)

            var embed = new MessageEmbed()
            .setTitle("Você foi banido!")
            .setDescription(reason);

            try{
                await user.send(embed)
            }catch(err) {
                console.warn(err)
            }
                msg.guild.members.ban(user);
                msg.channel.send({embed:{color:"GREEN",description:`${user} has been banned by ${msg.author}`}});
            
        }
    }
}