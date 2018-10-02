const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let answer = ["Ja", "Nein", "Weiß ich leider nicht", "Frag mich was anderes"];
    let result = Math.floor((Math.random() * answer.length));
    let question = args.slice(0).join(" ");

    if(!args[2]) {
        message.reply("Bitte schreib eine ganze Frage!");
        return;
    }

    let ball = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .addField("Frage", question, true)
        .addField("Antwort", answer[result], true)
        .setTimestamp()
        .setFooter("Guardian | guardian@vocalzero.de");
    message.channel.send(ball);
}

module.exports.help = {
    name: "8ball"
}