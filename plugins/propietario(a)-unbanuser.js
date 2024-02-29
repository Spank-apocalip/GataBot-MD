let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}𝐌𝐀𝐑𝐐𝐔𝐄 𝐀𝐋𝐆𝐔𝐄𝐌 𝐏𝐀𝐑𝐀 𝐃𝐄𝐒𝐁𝐀𝐍𝐈𝐑\n𝐄𝐗𝐄𝐌𝐏𝐋𝐎\n*${usedPrefix + command} @tag*\n\n𝙏𝘼𝙂 𝙎𝙊𝙈𝙀𝙊𝙉𝙀 𝙏𝙊 𝙐𝙉𝘽𝘼𝙉\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg}𝐌𝐀𝐑𝐐𝐔𝐄 𝐀𝐋𝐆𝐔𝐄𝐌 𝐏𝐀𝐑𝐀 𝐃𝐄𝐒𝐁𝐀𝐍𝐈𝐑\n𝐄𝐗𝐄𝐌𝐏𝐋𝐎\n*${usedPrefix + command} @tag*\n\n𝙏𝘼𝙂 𝙎𝙊𝙈𝙀𝙊𝙉𝙀 𝙏𝙊 𝙐𝙉𝘽𝘼𝙉\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `${eg}𝐎 𝐔𝐒𝐔𝐀𝐑𝐈𝐎(𝐀) 𝐅𝐎𝐈 𝐃𝐄𝐒𝐁𝐀𝐍𝐈𝐃𝐎(𝐀) 🤡\n𝐀𝐆𝐎𝐑𝐀 𝐏𝐎𝐃𝐄 𝐔𝐒𝐀𝐑 ${gt}\n\n𝙏𝙃𝙀 𝙐𝙎𝙀𝙍 𝙒𝘼𝙎 𝙐𝙉𝘽𝘼𝙉 🤠\n𝙐𝙎𝙀 𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.group = true
handler.admin = true 
export default handler
