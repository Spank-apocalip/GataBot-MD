let handler = async (m, { conn, text }) => {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)

if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return conn.reply(m.chat, `*𝐄𝐒𝐂𝐑𝐄𝐕𝐀 𝐎 𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐎 𝐒𝐄𝐑, 𝐎𝐔 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐀 𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐃𝐄𝐒𝐒𝐄 𝐕𝐄𝐑𝐌𝐄*`, m)
if(isNaN(number)) return conn.reply(m.chat, `*𝐏𝐑𝐄𝐒𝐓𝐄 𝐀𝐓𝐄𝐍𝐂̧𝐀𝐎 𝐍𝐎 𝐍𝐔𝐌𝐄𝐑𝐎 𝐄 𝐓𝐄𝐍𝐓𝐄 𝐍𝐎𝐕𝐀𝐌𝐄𝐍𝐓𝐄 *`, m)
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
  
let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
let participants = m.isGroup ? groupMetadata.participants : []
let users = m.isGroup ? participants.find(u => u.jid == user) : {}
let number = user.split('@')[0]
  
global.global.db.data.users[user].banned = false
conn.reply(m.chat, `*@${number} 𝐅𝐎𝐈 𝐃𝐄𝐒𝐁𝐀𝐍𝐈𝐃𝐎(𝐀) 𝐃𝐀 𝐁𝐀𝐒𝐄 𝐃𝐄 𝐃𝐀𝐃𝐎𝐒*`, null, { mentions: [user] })
}}

handler.tags = ['owner']
handler.command = ['desbanearuser', 'desbanearusuario', 'desbanear'] 
handler.owner = true

export default handler
