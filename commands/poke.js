const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let poke = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .setImage("https://cdn.vocalzero.de/guardian/gif/poke.gif")
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de");
    message.channel.send(poke);
}

module.exports.help = {
    name: "poke"
}