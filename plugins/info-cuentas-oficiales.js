let media = 'https://tinyurl.com/2bfq9pd5'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `🇧🇷 𝑩𝑬𝑴𝑽𝑰𝑵𝑫𝑶(𝑨) 𝑨𝑺 𝑪𝑶𝑵𝑻𝑨𝑺 𝑶𝑭𝑰𝑪𝑰𝑨𝑰𝑺
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🥷🏻 𝐁𝐈𝐆 𝐌𝐂 🥷🏻
${bot}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🎱 *𝐆𝐈𝐑𝐇𝐔𝐁𝐄*
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
📧 *𝐈𝐍𝐒𝐓𝐀-𝐀𝐒𝐈𝐒𝐓𝐄𝐍𝐂𝐈𝐀*
*${ig}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▶️ *𝐘𝐎𝐔𝐓𝐔𝐁𝐄*
*${yt}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🧿 *𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊*
*${fb}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*𝐒𝐄 𝐓𝐈𝐕𝐄𝐑, 𝐒𝐔𝐆𝐄𝐒𝐓𝐎̃𝐄𝐒 𝐎𝐔 𝐃𝐔𝐕𝐈𝐃𝐀𝐒 𝐂𝐎𝐍𝐓𝐀𝐓 𝐌𝐄𝐔 𝐃𝐎𝐍𝐎.*\n
* 𝐁𝐈𝐆 𝐌𝐂 𝐎𝐅𝐂.*`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^big|darth|beguebegue|infobig$/i
handler.exp = 35
export default handler
