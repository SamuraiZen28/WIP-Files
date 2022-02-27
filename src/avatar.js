const Discord = require('discord.js')
const e = require('./../../colors.json')


module.exports = {
  name : "avatar",
  description : "shows the avatar of a user",
  category : "General",
  aliases: ["av", "ava", "av"],
run: async(client, message, args) => {

 
  let user = message.mentions.users.first()|| message.guild.members.cache.get(args[0]) || message.author;

let embed = new Discord.MessageEmbed()
.setTitle("Avatar:comet:. . ⋆")
    .setAuthor(user.username , user.avatarURL())
    .setDescription(`**Download The Avatar In Your Desired Format**\nㅤㅤㅤㅤㅤ__**[PNG](${user.displayAvatarURL({format:'png', size:1024})}) | [JPG](${user.displayAvatarURL({format:'jpg', size:1024})}) | [WEBP](${user.displayAvatarURL({format:'webp', size:1024})}) | [GIF](${user.displayAvatarURL({dynamic:true, size:1024})})**__`)
    .setImage(user.displayAvatarURL({dynamic : true, size : 1024}))
    .setTitle(message.guild.name, message.guild.iconURL)
    .setColor(e.wip)
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
  message.channel.send(embed)

   }
}
