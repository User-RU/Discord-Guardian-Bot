const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let antworten = ["Ja", "Nein", "Ich weiß es nicht", "Frag bitte Später"];
    let result = Math.floor((Math.random() * antworten.length));
    let frage = args.slice(0).join(" ");

    if(!args[2]) {
        message.reply("Bitte stelle eine volle Frage!");
        return;
    }

    let ball = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .addField("Frage", frage, true)
        .addField("Antwort", antworten[result], true)
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de");
    message.channel.send(ball);
}

module.exports.help = {
    name: "8ball"
}