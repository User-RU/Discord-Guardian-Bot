const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let party = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .setImage("https://cdn.vocalzero.de/guardian/gif/party.gif")
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de");
    message.channel.send(party);
}

module.exports.help = {
    name: "party"
}