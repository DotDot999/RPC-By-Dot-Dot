const express = require('express')

const app = express();

const port = 3000

app.get('/', (req, res) => res.send('Zangana Coding rpc sucessfully enabled ✓'))

app.listen(port, () =>
console.log(`Discord rpc is listening a http://localhost:${port}`)
);

const discord = require("discord.js-selfbot-v11")
const stevedore = require("fs")

const client = new discord.Client()

const config = require("./config.json")

const traits = stevedore.readdirSync("./traits/")
traits.forEach(file => {
  const traitname = file.split(".")[0]
  const event = require(`./traits/${file}`);
  client.on(traitname, event.bind(null,  client));
})

client.login("MTAwMjM2MTg4MjY5NjQ5MTA4OQ.GqE7Dw.bFv_fFu-20WSNlxbIrhdiAEw25pg9Sbuz6LX2E") //// by zangana put token in .env 