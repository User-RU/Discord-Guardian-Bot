const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let mrole = args.join(" ").slice(22);
    let role = message.guild.roles.find(`name`, mrole);

    if(!message.member.hasPermission("MANAGE_ROLES")) {
        message.reply(`Du brauchst die Permission **"MANAGE_ROLES"** um **"!giverole"** benutzen zu können!`);
        return;
    }

    if(!user) {
        message.reply('Der Benutzer wurde nicht gefunden! Überprüfe deine Nachricht.');
        return;
    }

    if(!mrole) {
        message.reply('Du hast die Rolle nicht angegeben! Überprüfe deine Nachricht.');
        return;
    }

    if(!role) {
        message.reply('Rolle wurde nicht gefunden!');
        return;
    }

    if(!user.roles.has(role.id)) {
        user.addRole(role.id);
    }

    message.channel.send(`**${user}** wurde der Rolle **${role}** hinzugefügt!`);
}

module.exports.help = {
    name: "giverole"
}