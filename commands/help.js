const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let helpcommand = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .addField("!8ball [Frage]", "Stelle unserem Bot eine Frage.")
        .addField("!avatarurl", "Nothing to load looks Like a Error.")
        .addField("!ban [Benutzer]", "Einen Benutzer vom Server gebannen.")
        .addField("!channel", "Hier findest du alle Channelinformationen.")
        .addField("!cheer", "Nothing to load looks Like a Error.")
        .addField("!clear", "Nothing to load looks Like a Error.")
        .addField("!giverole [Benutzer] [Rolle]", "Einem Benutzer eine Rolle hinzufügen.")
        .addField("!help", "Hier findest du alle Befehle für unseren Discord.")
        .addField("!kick [Name] [Grund]", "Einen Benutzer vom Server kicken.")
        .addField("!mute [Name] [Grund]", "Einen Benutzer stumschalten!")
        .addField("!ping", "Finde herraus was dein Ping ist zum Bot.")
        .addField("!say", "Sende eine Allgemeinenachricht rauß.")
        .addField("!serverinfo", "Hier findest du alle Serverinformationen.")
        .addField("!support", "Fehler? Rechtschreibfehler? Schreib uns eine Nachricht.")
        .addField("!takerole [Benutzer] [Rolle]", "Einem Benutzer eine Rolle entfernen.")
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de");
    return message.channel.send(helpcommand);
}

module.exports.help = {
    name: "help"
}