const Discord = require('discord.js');

const bot = new Discord.Client();
const prefix = ("**");

bot.on('ready', () => {
    bot.user.setPresence({game: { name: 'Sucer issey dans les vestiaire', type: 0} });
    console.log("bot ready ! ");
});

bot.on('message',message =>{
        if(message.content ===prefix+'no'){
            message.reply('https://img.gentside.co.uk/article/funny/the-funniest-video-on-youtube-apparently_3e00dcd79cc6e3f69eda3209a4df470f299a7f68.jpg');
            console.log('no no no');
        }
        if(message.content ===prefix+"kazuto"){
            message.reply('https://www.instagram.com/kazouto_yuki');
            console.log('instagram of kazuto');
        }
        if(message.content ===prefix+'matou'){
            message.reply('https://www.instagram.com/mathias_mtn');
            console.log('instagram of matou');
        }
        if(message.content ===prefix+'kuikuisan'){
            message.reply('https://www.instagram.com/nord024.concours');
            console.log('instagram of kuikuisan');
        }
        if(message.content ===prefix+'charles'){
            message.reply('https://www.youtube.com/watch?v=NvS351QKFV4');
            console.log('youtube of charles');
        }
        if(message.content ===prefix+'soom'){
            message.reply('texture pack de soom : https://urlz.fr/9c30');
            console.log('texture pack of soom');
        }
        if(message.content ===prefix+'put'){
            message.reply('https://i.ebayimg.com/images/g/dfoAAOSwUd9aYcvS/s-l300.jpg');
            console.log('catin ebay ze');
        }
        if(message.content ===prefix+'dragon'){
            message.reply('https://youtu.be/13BqLQWqvzg');
            console.log('link of the song dragon on youtube');
        }
        if(message.content ===prefix+'amw'){
            message.reply('https://www.youtube.com/watch?v=pSqeI4E7Ygk');
            console.log('link of amw on youtube');
        }
        if(message.content ===prefix+'youtube'){
            message.reply('www.youtube.com');
            console.log('link of youtube');
        }
        if(message.content ===prefix+'orikami'){
            message.reply('https://www.etsy.com/fr/shop/OriKamiFR');
            console.log('orikami of kuikuisan on etsy ');
        }
        if(message.content ===prefix+'help'){
            var help_embed = new Discord.RichEmbed()
            .setColor('#01FRDC')
            .addField("**help", "commandes du bot !")
            .addField("**kazuto", "insta kazuto")
            .addField("**kuikuisan","insta kuikuisan")
            .addField("**OriKami", "Soutenir KuiKuisan")
            .addField("**amv", "amv DXD")
            .addField("**akeno?", "parler a akeno" )
            .addField("**charles", "Moskau" )
            .addField("**no", "no no no" )


            message.channel.sendEmbed(help_embed);
         //message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
            console.log('need help');
        }
        if(message.content ===prefix+'akeno?'){
            random();
            if (randnum == 0){
                message.reply("j aime quand tu me prend dans les toilette");
                console.log("akeno 0");
            }
            if (randnum == 1){
                message.reply("rias a voler mai nouveau sous vetement");
                console.log("akeno 1");
            }
             if (randnum == 2){
                message.reply("hella hella hella issey ma fais un bisou");
                console.log("akeno 2");
            }
            if (randnum == 3){
                message.reply("issey me boude -_-");
                console.log("akeno 3");
            }   
            
        }

});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
};

bot.login(process.env.TOKEN);
