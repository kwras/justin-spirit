const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "#"// البرفكس هنا

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('By Wenteed')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')

  
  


});
 
 client.on('ready',async () => {
console.log("Starting..");
let g = client.guilds.get("507500031994101763");
let c = g.channels.get("507858813844717579");
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(!g.me.voiceChannel) c.join();
}, 1);
} else {
console.log("Failed To Join:\n The Channel Type isn't \"text\"");
}
});
 
 



client.on('message', function(message) {
    const myID = "323160008411971585";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send('**SetName,Done!**').then(msg => {
           msg.delete(500);
          message.delete(500);
        });
    } else if(message.content.startsWith(prefix + "st")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send('**Streaming,Done!🎶**').then(msg => {
           msg.delete(500);
          message.delete(500);
        });
    } else if(message.content.startsWith(prefix + "ply")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send('**Playing,Done!🎶**').then(msg => {
           msg.delete(500);
          message.delete(500);
        });
} else if(message.content.startsWith(prefix + "ls")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send('**Listening,Done!:notes:**').then(msg => {
           msg.delete(500);
          message.delete(500);
        });
    } else if(message.content.startsWith(prefix + "wt")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send('**Watching,Done!:notes:**').then(msg => {
           msg.delete(500);
          message.delete(500);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
                        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(500);
          message.delete(500);
        });
    }
});
 
 
client.login(process.env.BOT_TOKEN);
