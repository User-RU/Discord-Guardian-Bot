const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let answer = ["Yes", "No", "I dont know", "Ask me later"];
    let result = Math.floor((Math.random() * answer.length));
    let question = args.slice(0).join(" ");

    if(!args[2]) {
        message.reply("Please ask a full question!");
        return;
    }

    let ball = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#15f153")
        .addField("Question", question, true)
        .addField("Answer", answer[result], true)
        .setTimestamp()
        .setFooter("Discord Guardian | guardian@vocalzero.de");
    message.channel.send(ball);
}

module.exports.help = {
    name: "8ball"
}