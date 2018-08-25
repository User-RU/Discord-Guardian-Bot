const Discord = require("discord.js");
const ms = require('ms')

module.exports.run = async (bot, message, args) => {
    const roleName = 'mute'
    let toMute = message.guild.member(message.mentions.users.first())
    let muteRole = await message.guild.roles.find(r => r.name === roleName)
    if(!message.member.hasPermission("MODERATOR")) {
        message.reply('Du benötigst die Berechtigung "MODERATOR"!');
        return;
    }

    if(!toMute) {
        message.reply('Benutzer wurde nicht angegeben!');
        return;
    }

    if(!toMute.id == message.author.id) { 
        message.reply('Du kannst dich nicht selbst muten!');
        return;
    }

    if(!muteRole) {
        try {
            muteRole = await message.guild.createRole({
                name: roleName,
                color: 'black'
            })
            console.log(`Mute Role wurde auf ${message.guild.name} erstellt!`)
    
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muteRole, {
                    SEND_MESSAGE: false,
                    ADD_REACTIONS: false
                })
            })
        } catch (e) {
            console.log(e)
        }
    }
    const time = args[1] * 1000 || 60 * 1000

    if(toMute.roles.has(muteRole.id)) {
        toMute.removeRole(muteRole)
    } else {
        toMute.addRole(muteRole)
        message.reply(`${toMute} wurde gemutet für ${ms(time, { long: true })}`);
    }
    setTimeout(function() {
        toMute.removeRole(muteRole)
    }, time)
}

module.exports.help = {
    name: "mute"
}