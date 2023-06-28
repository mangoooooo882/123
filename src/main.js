import { Client, Events, GatewayIntentBits } from 'discord.js'
import vuelint from '@/core/vue'
import dotenv from 'dotenv'

import { loadCommands } from '@/core/loder'

loadCommands()

vuelint()
dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(process.env.TOKEN);