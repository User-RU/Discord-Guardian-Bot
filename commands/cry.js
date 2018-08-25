const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let cry = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .setImage("https://cdn.vocalzero.de/guardian/gif/cry.gif")
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de");
    message.channel.send(cry);
}

module.exports.help = {
    name: "cry"
}