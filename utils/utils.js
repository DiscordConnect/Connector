module.exports = (client) => {

    //This snippet comes from https://anidiots.guide/examples/making-an-eval-command
    //No shame in this template, if it's good code it's good code.
    client.clean = (text) => {
        if (typeof(text) === "string")
          return text
            .replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203))
            .replace(client.token , "-TOKEN-")
        else
            return text;
      }

}