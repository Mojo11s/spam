const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const prefix = ['-'];
console.log("Scrpit By Dream");


client.on("ready", () => {
client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`test test test test test test test اختبار اختبار اختبار" ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on("message", function(message) {
  let prefix = "-";
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "say1")) {
    if (!args) return;
    message.channel.send(`${args}`);
  }
});

client2.on("ready", () => {
client2.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`test test test test test test test اختبار اختبار اختبار" ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on("message", function(message) {
  let prefix = "-";
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "say2")) {
    if (!args) return;
    message.channel.send(`${args}`);
  }
});


client3.on("ready", () => {
client3.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`test test test test test test test اختبار اختبار اختبار" ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on("message", function(message) {
  let prefix = "-";
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "say3")) {
    if (!args) return;
    message.channel.send(`${args}`);
  }
});


client4.on("ready", () => {
client4.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`test test test test test test test اختبار اختبار اختبار" ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on("message", function(message) {
  let prefix = "-";
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "say4")) {
    if (!args) return;
    message.channel.send(`${args}`);
  }
});


client.login(process.env.BOT_TOKEN1);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);
client4.login(process.env.BOT_TOKEN4);
