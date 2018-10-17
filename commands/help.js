exports.run = async (Discord, client, message, args) => {
  message.channel.send(`<@${message.author.id}>
  \n**report** - Create a Report.
  \n**edit** - Edit Reason / Proof of a Report.
  \n**lookup** - Lookup a User's Basic Information, and any infractions.
  \n**confirm** - Confirm an Existing Report.
  \n**help** - This message, that you're reading, right now.`)
};
