const { MessageEmbed } = require('discord.js');
const i = require('./../../colors');

module.exports = {
  name: 'guessthenumber',
  aliases: ['guess', 'guessthenum', 'numguess'],
  description: 'guess a random number 1-100',
  category: 'Fun',
  run: async(client, message, args) => {
    function range(start, end) {
            return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    
    
    let nonum = new MessageEmbed().setDescription(`Please specify a number 1-100`).setColor(i.nocolor).setTimestamp()
    let notanum = new MessageEmbed().setDescription(`That's not a number, please specify a number`).setColor(i.nocolor).setTimestamp()
  
    let score = await client.score(message.author.id)
    let points = range(1, 10);
    let randomPoints = points[Math.floor(Math.random() * points.length)];
    
    let result = range(1, 100);
    const ran = result[Math.floor(Math.random() * result.length)];
    let num = args[0]
    
    if(!num) return message.reply(nonum)
    if(isNaN(num)) return message.reply(notanum)
    if(num > 100) {
      let emp = new MessageEmbed().setDescription(`Please keep the number between 1-100`).setColor(i.nocolor).setTimestamp()
      message.reply(emp)
    } else if(num < 1) {
      let empp = new MessageEmbed().setDescription(`Please keep the number between 1-100`).setColor(i.nocolor).setTimestamp()
      message.reply(empp)
    } else if(num == ran) {
      correct = true;
      let corans = new MessageEmbed().setAuthor(`Score: ${score + randomPoints}`, message.author.displayAvatarURL()).setDescription(`**Correct!**\n**Answer:** \`${ran}\`\n**Your Answer:** \`${num}\`\n**You Gained:** \`${randomPoints}\` **Points**\n**Your Score Is Now** \`${score + randomPoints}\`**!**`).setColor(i.nocolor).setTimestamp()
      message.reply(corans)
      client.addscore(message.author.id, parseInt(randomPoints))
    } else if(num != ran) {
      incorrect = true;
      let incans = new MessageEmbed().setAuthor(`Score: ${score}`, message.author.displayAvatarURL()).setDescription(`**Incorrect!**\n**Correct Answer: ** \`${ran}\`\n**Your Answer:** \`${num}\`\n**Try again!**\n**Do !!guess <number>.**`).setColor(i.nocolor).setTimestamp()
      message.reply(incans)
    }
  
    
  }
};
