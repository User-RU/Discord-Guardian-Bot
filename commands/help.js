const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpcommand = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .addField("!help", "Hier findest du alle Befehle für unseren Discord.")
        .addField("!report [Name] [Grund]", "Melde einen Benutzer der sich daneben benimmt.")
        .addField("!server", "Hier findest du alle Serverinformationen.")
        .addField("!channel", "Hier findest du alle Channelinformationen.")
        .addField("!8ball [Frage]", "Stelle unserem Bot eine Frage.")
        .addField("!cat", "MEOOOWW.")
        .addField("!cheer", "#Cheer")
        .addField("!cringe", "WTF ...")
        .addField("!cry", "#Cry")
        .addField("!dance", "We are Dancing now!")
        .addField("!dog", "WUUF")
        .addField("!giverole [Name] [Rolle]", "Einem Benutzer eine Rolle hinzufügen.")
        .addField("!mute [Name] [Grund]", "Einen Benutzer stumschalten!")
        .addField("!neko", "SWEET")
        .addField("!party", "Feiern #Party")
        .addField("!poke", "Hallo bist du da?")
        .addField("!support", "Fehler? Rechtschreibfehler? Schreib uns eine Nachricht")
        .addField("!takerole [Name] [Rolle]", "Einem Benutzer eine Rolle entfernen")
        .addField("!cold", "It's COLD!")
        .addField("!dab", "Heute schon gedabt?")
        .addField("!sleep", "Ich geh jetzt Schlafen, oder eine Runde geht noch.")
        .addField("!cool", "Ich bin Cool. Bist du Cool?")
        .addField("!kick [Name]", "Einen Benutzer vom Server gekicken.")
        .addField("!ban [Name]", "Einen Benutzer vom Server gebannen.")
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de");
    return message.channel.send(helpcommand);
}

module.exports.help = {
    name: "help"
}