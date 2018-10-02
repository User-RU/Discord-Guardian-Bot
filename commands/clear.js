const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MODERATOR")) {
        return message.reply(`Du brauchst die Permission **"MODERATOR"** um **"!clear"** benutzen zu können!`);
    } else {
        message.channel.bulkDelete(100).then(() => {
            message.channel.send(`100 Nachrichten wurden erfolgreich gelöscht!`);
        });
    }
}

module.exports.help = {
    name: "clear"
}