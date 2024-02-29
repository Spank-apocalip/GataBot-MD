const handler = async (m) => {
m.reply(`${eg}𝐄𝐒𝐓𝐄 𝐂𝐇𝐀𝐓 𝐅𝐎𝐈 𝐃𝐄𝐒𝐁𝐀𝐍𝐈𝐃𝐎 🥳\n𝐀𝐆𝐎𝐑𝐀 𝐏𝐎𝐃𝐄𝐌 𝐌𝐄 𝐔𝐒𝐀𝐑𝐊𝐊𝐉😏.\n\n𝙏𝙃𝙄𝙎 𝘾𝙃𝘼𝙏 𝙒𝘼𝙎 𝙐𝙉𝘽𝘼𝙉 😌\n𝙉𝙊𝙒 𝙄 𝘼𝙈 𝘼𝙑𝘼𝙄𝙇𝘼𝘽𝙇𝙀.`)
global.db.data.chats[m.chat].isBanned = false 
}
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.botAdmin = true
handler.admin = true
export default handler;
