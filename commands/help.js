const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpcommand = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .addField("!help", "Here are all commands for our discord.")
        .addField("!report [Name] [Reason]", "Report a user who is misbehaving.")
        .addField("!server", "Here you will find all server information.")
        .addField("!channel", "Here you can find all channel information.")
        .addField("!8ball [Question]", "Ask our bot a question.")
        .addField("!cat", "MEOOOWW.")
        .addField("!cheer", "#Cheer")
        .addField("!cringe", "WTF ...")
        .addField("!cry", "#Cry")
        .addField("!dance", "We are Dancing now!")
        .addField("!dog", "WUUF")
        .addField("!giverole [Name] [Role]", "Add a role to a user.")
        .addField("!mute [Name] [Reason]", "Mute a user!")
        .addField("!neko", "SWEET")
        .addField("!party", "Feiern #Party")
        .addField("!poke", "Hallo bist du da?")
        .addField("!support", "Fehler? Rechtschreibfehler? Schreib uns eine Nachricht")
        .addField("!takerole [Name] [Rolle]", "Einem Benutzer eine Rolle entfernen")
        .addField("!cold", "It's COLD!")
        .addField("!dab", "-/-")
        .addField("!sleep", "I'm going to sleep now, or a round is still going on.")
        .addField("!cool", "I'm cool. Are you cool?")
        .addField("!kick [Name]", "Kick a user off the server.")
        .addField("!ban [Name]", "Ban a user from the server.")
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de");
    return message.channel.send(helpcommand);
}

module.exports.help = {
    name: "help"
}