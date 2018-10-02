const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let mrole = args.join(" ").slice(22);
    let role = message.guild.roles.find(`name`, mrole);

    if(!message.member.hasPermission("MANAGE_ROLES")) {
        message.channel.send(`Du brauchst die Permission **"MANAGE_ROLES"** um **"!takerole"** benutzen zu können!`);
        return;
    }

    if(!user) {
        message.channel.send('Der Benutzer wurde nicht gefunden! Überprüfe deine Nachricht.');
        return;
    }

    if(!mrole) {
        message.channel.send('Du hast die Rolle nicht angegeben! Überprüfe deine Nachricht.');
        return;
    }

    if(!role) {
        message.channel.send('Rolle wurde nicht gefunden!');
        return;
    }

    if(user.roles.has(role.id)) {
        user.removeRole(role.id);
    }

    message.channel.send(`**${user}** wurde von der Rolle **${role}** entfernt!`);
}

module.exports.help = {
    name: "takerole"
}