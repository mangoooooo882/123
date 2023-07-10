import {REST,Routes} from 'discord.js'
import { version, warn } from 'vue'
import fg from 'fast-glob'

const updateSlashComands = async(guildid,commands) => {
   const rest = new REST({version: 10}).setToken(process.env.TOKEN)
   const result = await rest.put(
    Routes.applicationGuildCommands(
        process.env.ApplicationID,
        '1100053764062322818'
    ),
    {
        body:[
         {name:'ping', description:'this is a ping slash command'}, 
         {name:'pong', description:'this is a pong slash command'}
        ]
    }
   )

   console.log(result)
}

export const loadCommands = async() => {

 const commands = []
 const files = await fg('./src/commands/**/index.js')

 for(const file of files) {
    const cmd = await import(file)
    commands.push(cmd.command)
 }

 await updateSlashComands(commands)
}