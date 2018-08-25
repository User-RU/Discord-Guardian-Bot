const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let mrole = args.join(" ").slice(22);
    let role = message.guild.roles.find(`name`, mrole);

    if(!message.member.hasPermission("MANAGE_ROLES")) {
        message.reply('Du benötigst die Berechtigung "MANAGE_ROLES"!');
        return;
    }

    if(!user) {
        message.reply('Benutzer wurde nicht gefunden!');
        return;
    }

    if(!mrole) {
        message.reply('Role wurde nicht angegeben!');
        return;
    }

    if(!role) {
        message.reply('Role wurde nicht gefunden!');
        return;
    }

    if(!user.roles.has(role.id)) {
        user.addRole(role.id);
    }

    message.channel.send(`${user} hat die ${role} Role bekommen!`);
}

module.exports.help = {
    name: "giverole"
}