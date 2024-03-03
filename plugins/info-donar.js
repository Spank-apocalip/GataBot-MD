let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let user = db.data.users[m.sender]
let str = `👋 𝐎𝐥𝐚́!! 𝐀𝐠𝐫𝐚𝐝𝐞𝐜̧𝐨 𝐬𝐞 𝐯𝐨𝐜𝐞 𝐦𝐞 𝐚𝐩𝐨𝐢𝐚 𝐜𝐨𝐦 𝐝𝐨𝐚𝐜̧𝐨̃𝐞𝐬. 🎁 𝐆𝐨𝐬𝐭𝐨 𝐝𝐨 𝐭𝐫𝐚𝐛𝐚𝐥𝐡𝐨 𝐪𝐮𝐞 𝐫𝐞𝐚𝐥𝐢𝐳𝐞𝐢 𝐞 𝐜𝐨𝐦𝐩𝐚𝐫𝐭𝐢𝐥𝐡𝐚𝐧𝐝𝐨 𝐜𝐨𝐦 𝐯𝐨𝐜𝐞̂𝐬.𝐎𝐛𝐫𝐢𝐠𝐚𝐝𝐨!!
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐏𝐈𝐂 𝐏𝐈𝐗 - 𝐁𝐈𝐆 𝐌𝐂
*5592985013050*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen1, 
"title": `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼`, 
body: ig, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": paypal, 
"sourceUrl": paypal, 
}
}
}, { quoted: fkontak })}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://paypal.me/OficialGD', '🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
