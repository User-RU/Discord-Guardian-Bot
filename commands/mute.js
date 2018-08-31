const Discord = require("discord.js");
const ms = require('ms')

module.exports.run = async (bot, message, args) => {
    const roleName = 'mute'
    let toMute = message.guild.member(message.mentions.users.first())
    let muteRole = await message.guild.roles.find(r => r.name === roleName)
    if(!message.member.hasPermission("MODERATOR")) {
        message.reply('You need the permission "MODERATOR"!');
        return;
    }

    if(!toMute) {
        message.reply('User was not specified!');
        return;
    }

    if(!toMute.id == message.author.id) { 
        message.reply('You can not mute yourself!');
        return;
    }

    if(!muteRole) {
        try {
            muteRole = await message.guild.createRole({
                name: roleName,
                color: 'black'
            })
            console.log(`Mute Role was created on ${message.guild.name}!`)
    
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
        message.reply(`${toMute} was muted for ${ms (time, {long: true})}`);
    }
    setTimeout(function() {
        toMute.removeRole(muteRole)
    }, time)
}

module.exports.help = {
    name: "mute"
}