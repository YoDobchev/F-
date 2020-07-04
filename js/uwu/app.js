const Discord = require('discord.js');
const client = new Discord.Client();
arrai2 = []
uwufiers = ["(◕‿-)", "(✿ ♥‿♥)", "♥‿♥", "(●´ω｀●)", "★~(◡﹏◕✿)", "(づ｡◕‿‿◕｡)づ", "(✿◠‿◠)", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "≧◡≦", "(▰˘◡˘▰)", ">_<", "UwU", "OwO", "🥺👉👈"]
function checkLetter(element){
    if(element == "r" || element == "l"){
        element = 'w'
        console.log(element)
    }
    arrai2 += element
}

client.on('ready', () => {
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "Doin' ya mom",  //The message shown
            type: "STREAMING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
});

client.on('message', msg => {
    if(msg.author.bot) return;
    arrai2 = []
    messageuwu = msg.content
    arrai = messageuwu.split('')
    console.log(arrai)
    arrai.forEach(element => checkLetter(element));
    console.log(arrai, arrai2, )
    rand = Math.floor(Math.random() * (uwufiers.length))
    msg.channel.send(arrai2 + ", " + msg.author.username + " " + uwufiers[rand])
    console.log(rand)
});

const chuek = require('discord-rich-presence')('346635795618332672');
 
chuek.updatePresence({
  state: 'Doin\' your mom',
  details: '',
  startTimestamp: 0,
  endTimestamp: 0,
  largeImageKey: 'snek_large',
  smallImageKey: 'snek_small',
  instance: true,
})


client.login('NzI4ODY0NjQzMjQxNDc2MTI4.XwAmNw.t6BWeo4uVhJNgRsMwE0vKSaiGw0');