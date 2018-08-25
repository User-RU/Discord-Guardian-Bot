const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sleep = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .setImage("https://cdn.vocalzero.de/guardian/gif/sleep.gif")
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de");
    message.channel.send(sleep);
}

module.exports.help = {
    name: "sleep"
}