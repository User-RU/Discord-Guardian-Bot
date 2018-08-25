const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let cringe = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .setImage("https://cdn.vocalzero.de/guardian/gif/cringe.gif")
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de");
    message.channel.send(cringe);
}

module.exports.help = {
    name: "cringe"
}