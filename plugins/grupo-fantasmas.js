//import { areJidsSameUser } from '@adiwajshing/baileys'
let areJidsSameUser =  (await import(global.baileys)).default
let handler = async (m, { conn, text, participants, args, command }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "fantasmas": 
if(total == 0) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}𝐄𝐒𝐓𝐄 𝐂𝐇𝐀𝐓 𝐄 𝐀𝐓𝐈𝐕𝐎 𝐍𝐀̃𝐎 𝐓𝐄𝐌 𝐆𝐇𝐎𝐒𝐓𝐒 :D`, m) 
m.reply(`⚠️ 𝐑𝐄𝐕𝐈𝐒𝐀𝐎 𝐃𝐄 𝐈𝐍𝐀𝐓𝐈𝐕𝐎𝐒 ⚠️\n\n𝐆𝐑𝐔𝐏𝐎: ${await conn.getName(m.chat)}\n*𝐌𝐄𝐌𝐁𝐑𝐎𝐒 𝐃𝐎 𝐂𝐇𝐀𝐓:* ${sum}\n\n*[ 👻 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐆𝐇𝐎𝐒𝐓𝐒 👻 ]*\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*𝐍𝐎𝐓𝐀: 𝐈𝐒𝐒𝐎 𝐍𝐀̃𝐎 𝐏𝐎𝐃𝐄 𝐄𝐒𝐓𝐀𝐑 ℅100 𝐂𝐎𝐑𝐑𝐄𝐓𝐎 𝐎 𝐄𝐔 𝐂𝐎𝐌𝐄𝐂̧𝐎 𝐀 𝐂𝐎𝐍𝐓𝐀𝐑 𝐀𝐒 𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐍𝐒 𝐀𝐏𝐎𝐒 𝐀𝐓𝐈𝐕𝐀𝐃𝐎 𝐍𝐄𝐒𝐓𝐄 𝐍𝐔𝐌𝐄𝐑𝐎*`, null, { mentions: sider }) 
  break   
case "kickfantasmas":  
        if(total == 0) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}𝐄𝐒𝐓𝐄 𝐂𝐇𝐀𝐓 𝐄 𝐀𝐓𝐈𝐕𝐎 𝐍𝐀̃𝐎 𝐓𝐄𝐌 𝐆𝐇𝐎𝐒𝐓𝐒 :D`, m) 
       await m.reply(`⚠️ 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐂̧𝐀̃𝐎 𝐃𝐄 𝐈𝐍𝐀𝐓𝐈𝐕𝐎𝐒 ⚠️\n\n𝐆𝐑𝐔𝐏𝐎: ${await conn.getName(m.chat)}\n𝐏𝐀𝐑𝐓𝐈𝐂𝐈𝐏𝐀𝐍𝐓𝐄𝐒: ${sum}\n\n[ 👻 𝐆𝐇𝐎𝐒𝐓𝐒 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐃𝐎𝐒 👻 ]\n${sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')}\n\n*𝐄𝐔 𝐕𝐎𝐔 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 𝐀 𝐋𝐈𝐒𝐓𝐀 𝐌𝐀𝐑𝐂𝐀𝐃𝐀, 𝐍𝐎 𝐏𝐑𝐀𝐙𝐎 𝐃𝐄 20 𝐒𝐄𝐆𝐔𝐍𝐃𝐎𝐒, 𝐄 𝐂𝐀𝐃𝐀 10 𝐒𝐄𝐍𝐆𝐔𝐍𝐃𝐎𝐒 𝐕𝐎𝐔 𝐃𝐀𝐄 𝐁𝐀𝐍 𝐄𝐌 𝐔𝐌 𝐍𝐔𝐌𝐄𝐑𝐎*`, null, { mentions: sider }) 
       await delay(1 * 10000)
       let chat = global.db.data.chats[m.chat]
       chat.welcome = false
       try{
       
         let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
       let kickedGhost = sider.map(v => v.id).filter(v => v !== conn.user.jid)
       for (let user of users)
           if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin)
        {
        let res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        kickedGhost.concat(res)
       await delay(1 * 10000)
       }} finally{
        chat.welcome = true
       }
break            
}}
handler.command = /^(fantasmas|kickfantasmas)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


    //desarrollado por https://github.com/ReyEndymion
    //participa en desactivacion de despedida https://github.com/BrunoSobrino/


