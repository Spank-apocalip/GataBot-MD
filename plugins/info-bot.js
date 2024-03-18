import fs from "fs"
let handler = m => m

handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
if (chat.isBanned) return
let vn = 'https://qu.ax/MvNY.mp3`, `https://qu.ax/FGRX.m4a'])}  
let bot = `${pickRandom([`*𝙾𝙻𝙰 𝙴𝚂𝚃𝙾𝚄 𝙰𝚀𝚄𝙸 𝙲𝙾𝙼𝙾 𝙿𝙾𝚂𝚂𝙾 𝙰𝙹𝚄𝙳𝙰𝚁 🤔?*`, `𝙴𝚄 𝚂𝙴𝙸 𝙰𝙾𝙽𝙳𝙴 𝚅𝙾𝙲𝙴̂ 𝙼𝙾𝚁𝙰 👨🏻‍💻`, `*𝙵𝙰𝙻𝙰 𝙻𝙸𝚂𝙾 𝙾𝚀𝚄𝙴 𝚅𝙾𝙲𝙴̂ 𝚀𝚄𝙴𝚁 𝙲𝙾𝙼𝙸𝙶𝙾 ?*`])}
`.trim()
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: fs.readFileSync('./media/menus/Menu3.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}}  

if (/^bot$/i.test(m.text)) {
    
conn.sendPresenceUpdate('recording', m.chat)    
await conn.sendMessage(m.chat, {text: bot, mentions: [m.sender]}, {quoted: fkontak})
//conn.sendButton(m.chat, `¡𝑬𝒚! 𝑨𝒒𝒖í 𝒆𝒔𝒕𝒐𝒚. 𝒀𝒐 𝒑𝒖𝒆𝒅𝒐 𝒂𝒚𝒖𝒅𝒂𝒓 👉👈 𝑯𝒆𝒚! 𝑰'𝒎 𝒉𝒆𝒓𝒆. 𝑰 𝒄𝒂𝒏 𝒉𝒆𝒍𝒑 🙌`, wm, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `#menu`]], 'conversation', { sendEphemeral: true, quoted: estilo })
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: estiloaudio })   
}
return !0
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
