const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let mrole = args.join(" ").slice(22);
    let role = message.guild.roles.find(`name`, mrole);

    if(!message.member.hasPermission("MANAGE_ROLES")) {
        message.reply('You need the permission "MANAGE_ROLES"!');
        return;
    }

    if(!user) {
        message.reply('User was not found!');
        return;
    }

    if(!mrole) {
        message.reply('Role was not specified!');
        return;
    }

    if(!role) {
        message.reply('Role was not found!');
        return;
    }

    if(!user.roles.has(role.id)) {
        user.addRole(role.id);
    }

    message.channel.send(`${user} got the ${role} Role!`);
}

module.exports.help = {
    name: "giverole"
}