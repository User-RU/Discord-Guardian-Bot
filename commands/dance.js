const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let dance = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .setImage("https://cdn.vocalzero.de/guardian/gif/dance.gif")
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de");
    message.channel.send(dance);
}

module.exports.help = {
    name: "dance"
}