const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();
    const member = message.guild.member(user);

    if(!message.member.hasPermission("KICK_MEMBERS")) {
        message.reply('You need the permission "KICK_MEMBERS"!');
        return;
    }

    if(!member.id == message.author.id) { 
        message.reply('You can not kick yourself!');
        return;
    }

    if(user) {
        if(member) {
            member.kick();
            message.reply(`The user ${user} has been successfully kicked!`);
        } else {
            message.reply(`The user ${user} was not found!`);
        }
    } else {
        message.reply(`No user was specified!`);
    }
}

module.exports.help = {
    name: "kick"
}