const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();
    const member = message.guild.member(user);

    if(!message.member.hasPermission("KICK_MEMBERS")) {
        message.reply('Du benötigst die Berechtigung "KICK_MEMBERS"!');
        return;
    }

    if(!member.id == message.author.id) { 
        message.reply('Du kannst dich nicht selbst muten!');
        return;
    }

    if(user) {
        if(member) {
            member.kick();
            message.reply(`Der Benutzer ${user} wurde erfolgreich gebannt!`);
        } else {
            message.reply(`Der Benutzer ${user} wurde nicht gefunden!`);
        }
    } else {
        message.reply(`Es wurde kein Benutzer angegeben!`);
    }
}

module.exports.help = {
    name: "kick"
}