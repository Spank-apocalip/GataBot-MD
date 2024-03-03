import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let user = db.data.users[m.sender]
  let time = user.lastmining + 10000 //tiempo de espera en min
if (new Date - user.lastmiming < 10000) return await conn.reply(m.chat, `*ESPERA UNS MINUTOS PARA USAR OUTRO COMANDO*`,  m)
  try {
  	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('╰⊱⚠️⊱ *𝐀𝐕𝐈𝐒𝐎* ⊱⚠️⊱╮\n\n𝐎 𝐕𝐈́𝐃𝐄𝐎 𝐍𝐀́𝐎 𝐃𝐔𝐑𝐀𝐑 𝐌𝐀𝐈𝐒 𝐃𝐄 *7* 𝐒𝐄𝐆𝐔𝐍𝐃𝐎𝐒')
      let img = await q.download?.()
      if (!img) throw `╰⊱❗️⊱ *𝐔𝐒𝐎𝐔 𝐄𝐑𝐑𝐀𝐃𝐎* ⊱❗️⊱╮\n\n𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐀 𝐀 𝐔𝐌𝐀 𝐈𝐌𝐀𝐆𝐄𝐌, 𝐕𝐈𝐃𝐄𝐎, 𝐆𝐈𝐅 𝐎𝐔 𝐃𝐈𝐆𝐈𝐓𝐄 𝐋𝐈𝐍𝐊, *.jpg* 𝐏𝐀𝐑𝐀 𝐅𝐀𝐙𝐄𝐑 𝐎 𝐀𝐃𝐄𝐒𝐈𝐕𝐎 𝐔𝐒𝐄 *${usedPrefix + command}*\n\n𝙍𝙀𝙎𝙋𝙊𝙉𝘿 𝙏𝙊 𝘼𝙉 𝙄𝙈𝘼𝙂𝙀, 𝙑𝙄𝘿𝙀𝙊, 𝙂𝙄𝙁 𝙊𝙍 𝙇𝙄𝙉𝙆 𝙊𝙁 𝙏𝙔𝙋𝙀 *.jpg* 𝙏𝙊 𝙈𝘼𝙆𝙀 𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙐𝙎𝙀 *${usedPrefix + command}_*`
      let out
      try {
        stiker = await sticker(img, false, global.packname, global.author)
      } catch (e) {
        console.error(e)
      } finally {
      await conn.reply(m.chat, `${eg}⏳ *CRIANDO STICKER, UM MOMENTO...* ⚒️`, m)
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.packname, global.author)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply('URL invalido')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
     if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
    else throw '╰⊱❗️⊱ *𝐔𝐒𝐎𝐔 𝐄𝐑𝐑𝐀𝐃𝐎* ⊱❗️⊱╮\n\n𝐓𝐄𝐍𝐓𝐄 𝐍𝐎𝐕𝐀𝐌𝐄𝐍𝐓𝐄 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄𝐑 𝐀 𝐔𝐌 𝐋𝐈𝐍𝐊 𝐃𝐎 𝐓𝐈𝐏𝐎 𝐈𝐌𝐀𝐆𝐄𝐌, 𝐕𝐈𝐃𝐄𝐎, 𝐆𝐈𝐅, *.jpg* 𝐏𝐀𝐑𝐀 𝐅𝐀𝐙𝐄𝐑 𝐎 𝐀𝐃𝐄𝐒𝐈𝐕𝐎*'
  }
user.lastmiming = new Date * 1
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker'] 

export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
