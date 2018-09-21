const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .addField("Owner", message.guild.owner.user.tag, true)
        .addField("User", message.guild.memberCount, true)
        .addField("Region", message.guild.region, true)
        .addField("Groups", message.guild.roles.size, true)
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de"); 
    message.channel.send(serverembed);
}

module.exports.help = {
    name: "server"
}