const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MODERATOR")) {
        return message.reply("Leider hast du keine Rechte dies zu tun!");
    } else {
        message.channel.bulkDelete(15).then(() => {
            message.channel.send(`15 Nachrichten wurden gelöscht!`);
        });
    }
}

module.exports.help = {
    name: "clear"
}