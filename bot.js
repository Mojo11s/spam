const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const prefix = ['-'];
console.log("Scrpit By Dream");

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});

client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});

client3.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});

client4.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});



client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let z = 0; z < 90000; z++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${z} " ]`)
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

client2.on('message', message => {
if (message.content === prefix+'spam2') {
      let2 count2 = 0;
      let2 ecount2 = 0;
      for(let2 x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count2++;
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


client3.on('message', message => {
if (message.content === prefix+'spam3') {
      let3 count3 = 0;
      let3 ecount3 = 0;
      for(let3 c = 0; c < 90000; c++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${c} " ]`)
          .then(m => {
            count3++;
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


client4.on('message', message => {
if (message.content === prefix+'spam4') {
      let4 count4 = 0;
      let4 ecount4 = 0;
      for(let4 v = 0; v < 90000; v++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${v} " ]`)
          .then(m => {
            count4++;
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
