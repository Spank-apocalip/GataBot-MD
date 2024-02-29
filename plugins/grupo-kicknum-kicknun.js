/*              Codigo Creado Por Bruno Sobrino 
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`${lenguajeGB['smsAvisoMG']()}${mid.smsMalused7} ${usedPrefix + command} 593*`) 
if (isNaN(args[0])) return m.reply(`${lenguajeGB['smsAvisoMG']()}${mid.smsMalused7} ${usedPrefix + command} 593*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`${lenguajeGB['smsAvisoAG']()}𝐍𝐄𝐒𝐓𝐄 𝐂𝐇𝐀𝐓 𝐍𝐀𝐎 𝐀 𝐍𝐄𝐍𝐇𝐔𝐌 𝐍𝐔𝐌𝐄𝐑𝐎 𝐂𝐎𝐌 𝐃𝐃𝐃 /𝐀𝐒𝐒𝐈𝐌 +${lol}*`)
let numeros = ps.map(v=> '➥ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listanum": 
conn.reply(m.chat, `⚠️ 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐍𝐔𝐌𝐄𝐑𝐎𝐒 𝐂𝐎𝐌 𝐎 𝐃𝐃𝐃 +${lol} 𝐐𝐔𝐄 𝐄𝐒𝐓𝐀 𝐍𝐄𝐒𝐓𝐄 𝐂𝐇𝐀𝐓 ⚠️\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum":  
if (!bot.restrict) return m.reply(`${lenguajeGB['smsAvisoAG']()} ${lenguajeGB['smsSoloOwner']()}`) 
if (!isBotAdmin) return m.reply(`${lenguajeGB['smsAvisoAG']()} ${lenguajeGB['smsAllAdmin']()}`)          
conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()}𝐈𝐍𝐈𝐂𝐈𝐀𝐍𝐃𝐎 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐂̧𝐀𝐎 𝐃𝐎𝐒 𝐍𝐔𝐌𝐄𝐑𝐎𝐒 𝐂𝐎𝐌 𝐃𝐃𝐃 +${lol}, 𝐂𝐀𝐃𝐀 10 𝐒𝐄𝐆𝐔𝐍𝐃𝐎𝐒 𝐔𝐌 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐒𝐄𝐑𝐀 𝐁𝐀𝐍𝐈𝐃𝐎`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} 𝐉𝐀 𝐅𝐎𝐈 𝐃𝐄 𝐁𝐀𝐍 𝐎𝐔 𝐒𝐀𝐈𝐔 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎 :v`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply(`${lenguajeGB['smsAvisoFG']()}`)}
break            
}}
handler.command = /^(listanum|kicknum)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
