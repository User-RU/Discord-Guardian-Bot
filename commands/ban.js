const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();
    const member = message.guild.member(user);

    if(!message.member.hasPermission("BAN_MEMBERS")) {
        message.reply(`Du brauchst die Permission **"BAN_MEMBERS"** um **"!ban"** benutzen zu können!`);
        return;
    }

    if(!member.id == message.author.id) { 
        message.reply('Du kannst dich nicht selber bannen!');
        return;
    }

    if(user) {
        if(member) {
            member.ban();
            message.reply(`Benutzer **${user}** wurde erfolgreich gebannt!`);
        } else {
            message.reply(`Der Benutzer wurde nicht gefunden! Überprüfe deine Nachricht.`);
        }
    } else {
        message.reply(`Der Benutzer wurde nicht gefunden! Überprüfe deine Nachricht.`);
    }
}

module.exports.help = {
    name: "ban"
}