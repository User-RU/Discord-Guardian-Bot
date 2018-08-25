const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.member.hasPermission("MANAGE_MESSAGE")) {
        let saymessage2 = args.join(" ");
        let saymessage = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor("#15f153")
            .addField("Benutzer", message.author, true)
            .addField("Nachricht", saymessage2, true)
            .setTimestamp()
            .setFooter("Discord Guardian | guardian@vocalzero.de");
        message.delete().catch();
        message.channel.send(saymessage);
    } else {
        message.reply("Leider hast du keine Rechte dies zu tun!");
    }
}

module.exports.help = {
    name: "say"
}