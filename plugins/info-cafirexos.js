let handler = async (m, { conn, command, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let cafirexos = `
_Optimice la implementación de *GataBot* mediante la integración en un servicio de alojamiento de alto rendimiento._

*𝐆𝐀𝐓𝐀 𝐁𝐎𝐓 𝐌𝐃*

🔵 \`\`\`𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐀𝐎 𝐃𝐒 𝐇𝐎𝐒𝐏𝐄𝐃𝐀𝐑\`\`\`

💻 *𝐏𝐀𝐆𝐈𝐍𝐀*
https://www.cafirexos.com

✨ *𝐃𝐀𝐒𝐇𝐁𝐎𝐀𝐑𝐃*
https://dash.cafirexos.com

🎥 *𝐘𝐎𝐓𝐔𝐁𝐄*
https://panel.cafirexos.com

📢 *𝐂𝐎𝐌𝐌𝐔𝐍𝐘𝐓 𝐁𝐈𝐆 𝐒𝐏𝐘*
https://chat.whatsapp.com/CqPaNu7j9tv8kIVYJ23TgI

💥 *𝐆𝐑𝐔𝐏𝐎 𝐃𝐎 𝐖𝐇𝐀𝐓𝐒𝐒𝐀𝐏𝐏*
https://chat.whatsapp.com/JaUNnmo748G1Se2NaJ0A7f

📧 *𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌*
https://www.instagram.com/1bigmc

🧑‍💻 *𝐂𝐎𝐍𝐓𝐀𝐓𝐎 (𝐁𝐈𝐆 𝐌𝐂)*
https://wa.me/559285013050
`
await conn.sendFile(m.chat, 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo.png', 'fantasy.jpg', cafirexos.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🔵 CAFIREXOS 🔵`,
body: `✅ HOSTING DE CALIDAD`,
mediaType: 1,
sourceUrl: accountsgb.getRandom(),
thumbnailUrl: 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo_2.png'
}}
}, { mentions: m.sender })

}
handler.command = /^(cafirexos|prueba38)$/i
export default handler
