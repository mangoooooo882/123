import { Client, Events, GatewayIntentBits } from 'discord.js'
import vuelint from 'file:///D:/123/src/core/vue.js';
import dotenv from 'dotenv'

import { loadCommands } from '@/core/loder'

loadCommands()

vuelint()
dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

client.login(process.env.TOKEN);