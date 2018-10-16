exports.run = async (Discord, client, message, args) => {
  message.channel.send(`<@${message.author.id}>
  \nreport - create a report
  \nedit - edit the proof/reason of a report
  \nlookup - lookup a user's profile data and infractions
  \nconfirm - confirm an existing report
  \nhelp - this message`)
};
