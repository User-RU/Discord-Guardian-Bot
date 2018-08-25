const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let cheer = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .setImage("https://cdn.vocalzero.de/guardian/gif/cheer.gif")
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de");
    message.channel.send(cheer);
}

module.exports.help = {
    name: "cheer"
}