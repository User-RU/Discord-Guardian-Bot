const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.join(" ").slice(22);

    if(user) {
        let report = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor("#15f153")
            .addField("User", user, true)
            .addField("Reason", reason, true)
            .addField("Reporter", message.author, true)
            .addField("Textchannel", message.channel, true)
            .setTimestamp()
            .setFooter("Discord Guardian | guardian@vocalzero.de"); 
        let channel = message.guild.channels.find(`name`, "reports")
        channel.send(report);
    } else {
        message.channel.send("User was not found!");
    }
}

module.exports.help = {
    name: "report"
}