const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();
    const member = message.guild.member(user);

    if(!message.member.hasPermission("KICK_MEMBERS")) {
        message.reply(`Du brauchst die Permission **"KICK_MEMBERS"** um **"!kick"** benutzen zu können!`);
        return;
    }

    if(!member.id == message.author.id) { 
        message.reply('Du kannst dich nicht selbst kicken!');
        return;
    }

    if(user) {
        if(member) {
            member.kick();
            message.reply(`Benutzer **${user}** wurde erfolgreich gekickt!`);
        } else {
            message.reply(`Der Benutzer wurde nicht gefunden! Überprüfe deine Nachricht.`);
        }
    } else {
        message.reply(`Der Benutzer wurde nicht gefunden! Überprüfe deine Nachricht.`);
    }
}

module.exports.help = {
    name: "kick"
}