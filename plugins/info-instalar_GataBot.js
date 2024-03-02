let handler  = async (m, { conn, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let picture = './media/menus/Menu1.jpg'
let gata = `𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐂̧𝐀̃𝐎 𝐃𝐄 𝐃𝐀𝐑𝐓𝐇 𝐎𝐅𝐂 🐈

*━━━━━━━━━━━━━⬣*
✦𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐑 𝐄𝐌 𝐀𝐑𝐐𝐔𝐈𝐕𝐎✦
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*𝐂𝐀𝐍𝐀𝐋-𝐁𝐈𝐆*
*_https://youtu.be/@bigmc3430_*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_𝐈𝐍𝐒𝐓𝐀-𝐁𝐈𝐆_ 
*_https://www.instagram.com/1bigmc_*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
termux-setup-storage
apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/1bigmc/GataBot-MD/master/gata.sh | bash
*━━━━━━━━━━━━━⬣*
*https://github.com/1bigmc/GataBot-MD_*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*━━━━━━━━━━━━━⬣*`
await conn.sendFile(m.chat, gataImg.getRandom(), 'lp.jpg', gata, fkontak, false, { contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝐁𝐈𝐆 𝐌𝐂 𝐎𝐅𝐂 ', previewType: 0, thumbnail: imagen4, sourceUrl: accountsgb.getRandom()}}})}
/*conn.sendButton(m.chat, gata, `Comunícate con Mí Creadora si necesitas ayuda con la Instalación.\n\nContact My Creator if you need help with the Installation.\n\n${ig}\n${wm}`, picture, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar']], fkontak, m)}*/
handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler
