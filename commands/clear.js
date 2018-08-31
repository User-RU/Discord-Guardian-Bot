const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MODERATOR")) {
        return message.reply("Unfortunately, you have no rights to do this!");
    } else {
        message.channel.bulkDelete(15).then(() => {
            message.channel.send(`15 messages have been deleted!`);
        });
    }
}

module.exports.help = {
    name: "clear"
}