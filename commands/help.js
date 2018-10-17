exports.run = async (Discord, client, message, args) => {
  message.channel.send(`<@${message.author.id}>
  \n**${client.config.prefix}report** - Create a Report.
  \n**${client.config.prefix}edit** - Edit Reason / Proof of a Report.
  \n**${client.config.prefix}lookup** - Lookup a User's Basic Information, and any infractions.
  \n**${client.config.prefix}confirm** - Confirm an Existing Report.
  \n**${client.config.prefix}help** - This message, that you're reading, right now.`)
};
