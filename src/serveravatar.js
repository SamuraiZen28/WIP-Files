const {MessageEmbed} = require('discord.js');
const i = require('./../../colors');
let { MessageButton , MessageActionRow } = require(`discord-buttons`)

module.exports = {
  name: "serveravatar",
  description: "gets the server avatar",
  aliases: ["serverav", "servericon", "guildav", "guildicon"],
  category: "Information",
  run: async(client, message, args) => {
    let guild = message.guild;
    let em = new MessageEmbed()
    .setAuthor(guild.name, guild.iconURL())
    .setTitle(`Avatar for ${guild.name}`)
    .setDescription(`**Download The Avatar With Your Desired Format**\nㅤㅤㅤㅤㅤ__**[GIF](${guild.iconURL({dynamic:true, size:1024})}) | [WEBP](${guild.iconURL({size:1024, format:"webp"})}) | [PNG](${guild.iconURL({size:1024, format:"png"})}) | [JPG](${guild.iconURL({size:1024, format:"jpg"})})**__`)
    .setImage(guild.iconURL({dynamic: true, size : 1024}))
    .setColor(i.nocolor)
    .setTimestamp()
    

message.channel.send(em)

  }
}
