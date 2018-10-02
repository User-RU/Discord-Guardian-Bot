const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    try {
        message.channel.send(`${user}'s Avatar: ${user.displayAvatarURL}`);
    } catch(error) {
        console.log(error);
    }
}

module.exports.help = {
    name: "avatarurl"
}