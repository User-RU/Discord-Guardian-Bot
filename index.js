const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

// START COMMANDLOAD
fs.readdir("./commands", (err, files) => {
    let jsfile = files.filter(commandfile => commandfile.split(".").pop() == "js")
    if(err){
        console.log(err);
    }


    if(jsfile.length  <= 0) {
        console.log("[ERROR] Es wurden keine Befehle gefunden!")
        return;
    }

    jsfile.forEach((commandfile, i) => {
        let props = require(`./commands/${commandfile}`);
        console.log(`[INFO] Befehl ${commandfile} wurde erfolgreich geladen!`);
        bot.commands.set(props.help.name, props);
    });
});
// END COMMANDLOAD

// START DISCORDBOT
bot.on("ready", async () => {
    console.log(`[INFO] Guardian unterstützt ${bot.guilds.size} Server!`);
    bot.user.setActivity(`${bot.guilds.size} Server | ${bot.users.size} Benutzer | !help`);
});
// END DISCORDBOT

// START EVENT MESSAGE
bot.on("message", async message => {
    var msg = message.content;
    let prefix = "!";
    if(message.author.bot){
        return;
    }

    if(message.channel.type === "dm"){
        return;
    }

    if(message.author.id === bot.user.id) {
        return;
    }

    let word_list = ['ddos', 'hrnshn', 'arschloch', 'hurensohn', 'nazi', 'hitler', 'heil hitler', 'wixxer', 'huso', 'e2', 'ez', 'leck mich', 'fotze', 'fggt', 'faggot', 'geh sterben', 'get ddos', 'fick', 'lppn', 'lauch', 'fuck', 'hure', 'easy', 'missgeburt', 'hoden', 'anal', 'sex', 'krampe', 'penis', 'vagina', 'dildo', 'nzi', 'hh']
    
    for(var i in word_list) {
        if(message.content.toLowerCase().includes(word_list[i].toLowerCase())) {
            message.delete();
            message.author.send('Deine Nachricht wurde entfernt da du ein Verbotenes World verwendet hast!');
        }
    }

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandsfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandsfile){
        commandsfile.run(bot, message, args);
    }
});
// END EVENT MESSAGE

bot.login("NDgyMzAxODkxODEzMDQ4MzQx.DmC7qw.fOwjgCFbYXElbb0cKFUpNXd_kcI");