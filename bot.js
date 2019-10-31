const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("562584649163997190")
setInterval(function() {
channel.send(`كسم اي حد يعترض طريقي``);
}, 30)
})

client.login(process.env.BOT_TOKEN);