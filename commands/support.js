const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let support = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .addField("Twitter", "@VocalZeroME", true)
        .addField("E-Mail", "guardian@vocalzero.de", true)
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de");
    message.channel.send(support);
}

module.exports.help = {
    name: "support"
}