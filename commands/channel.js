const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .addField("Name", message.channel, true)
        .addField("Position", message.channel.position, true)
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de");
    return message.channel.send(serverembed);
}

module.exports.help = {
    name: "channel"
}