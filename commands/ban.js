const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();
    const member = message.guild.member(user);

    if(!message.member.hasPermission("BAN_MEMBERS")) {
        message.reply('You need the permission "BAN_MEMBERS"!');
        return;
    }

    if(!member.id == message.author.id) { 
        message.reply('You can not ban yourself!');
        return;
    }

    if(user) {
        if(member) {
            member.ban();
            message.reply(`The user ${user} has been successfully banned!`);
        } else {
            message.reply(`The user ${user} was not found!`);
        }
    } else {
        message.reply(`No user was specified!`);
    }
}

module.exports.help = {
    name: "ban"
}