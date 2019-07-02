const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By zYx");


client.on("ready", () => {
let channel =     client.channels.get("")
setInterval(function() {
channel.send(`BOTSPAM - BY: ZYX ,, MR_ABOOODY ... SPAM,SPAM,SPAM,SPAM,SPAM`);
}, 30)
})

client.login(process.env.BOT_TOKEN);