exports.getUserFromMention = (mention, client) => { //desnecessário //psé n tamo usando ;-;;;;
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }
        return client.users.cache.get(mention);
    }
}//se quiser deleta ae