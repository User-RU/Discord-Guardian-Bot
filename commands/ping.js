const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {
        message.reply(`Dein Ping ist **${message.createdTimestamp - message.createdTimestamp}ms**.`); 
    } catch (e) {
        console.log(e);
    }
}

module.exports.help = {
    name: "ping"
}