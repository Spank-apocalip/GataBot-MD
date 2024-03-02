import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import os from 'os'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command, isRowner}) => {
try {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000 }
  
let muptime = clockString(_muptime)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
const used = process.memoryUsage()
const cpus = _cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})

const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
  
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})

let old = performance.now()
await conn.reply(m.chat, `${eg}🚀𝐓𝐄𝐒𝐓𝐄 𝐃𝐄 𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃𝐄🚀`, fkontak, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝐁𝐈𝐆 𝐌𝐂 𝐎𝐅𝐂 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
//await conn.sendButton(m.chat, wm, `${eg}🚀 𝙋𝙍𝙐𝙀𝘽𝘼 𝘿𝙀 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿...\n🚀 𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏...`, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)  

let neww = performance.now()
let speed = neww - old
let caption = `*${htki} 𝐏𝐈𝐍𝐆 : 𝐒𝐏𝐄𝐄𝐃 ${htka}*

🚄 *${Math.round(neww - old)}* ms
🚄 *${speed}* ms

*${htjava}* 𝐓𝐄𝐌𝐏𝐎 𝐃𝐄 𝐄𝐗𝐄𝐂𝐔𝐂𝐀𝐎 : 💻 
${muptime}
${readMore}
*${htjava} 𝐂 𝐇 𝐀 𝐓 𝐒*
• *${groupsIn.length}* \`\`\`𝐂𝐇𝐀𝐓𝐒 𝐃𝐄 𝐆𝐑𝐏 :  🇱🇷\`\`\`
• *${groupsIn.length}* \`\`\`𝐂𝐇𝐀𝐓𝐒 𝐔𝐍𝐈𝐃𝐎𝐒 : 🇧🇷 \`\`\`
• *${groupsIn.length - groupsIn.length}* \`\`\`𝐂𝐇𝐀𝐓𝐒 𝐑𝐄𝐒𝐓𝐀𝐍𝐓 : 🇯🇲 \`\`\`
• *${chats.length - groupsIn.length}* \`\`\`𝐂𝐇𝐀𝐓𝐒 𝐏𝐑𝐈𝐕𝐀𝐃𝐎𝐒 : 🏴‍☠️ \`\`\`
• *${chats.length}* \`\`\`𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐂𝐇𝐀𝐓𝐒\`\`\`

*${htjava} 𝐒𝐄𝐑𝐕𝐈𝐑𝐃𝐎𝐑 : 𝐒𝐄𝐑𝐕𝐄𝐑*
*👨‍💻 𝐑𝐀𝐌 𝐃𝐈𝐒𝐏𝐎:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*👨‍💻 𝐑𝐀𝐌 𝐋𝐈𝐕𝐑𝐄:* ${format(freemem())}

*💻 𝐏𝐋𝐀𝐓𝐀𝐅𝐎𝐑𝐌𝐀 :* \`\`\`${os.platform()}\`\`\`
*📡 𝐒𝐄𝐑𝐕𝐈𝐑𝐃𝐎 :* _${os.hostname()}_
${readMore}
*𝐍𝐎𝐃𝐄𝐉𝐒 𝐔𝐒𝐎 𝐃𝐄 𝐌𝐄𝐌𝐎𝐑𝐈𝐀: 🖥️*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `*𝐔𝐒𝐎 𝐃𝐀 𝐂𝐏𝐔*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

*CPU Core(s) Uso (${cpus.length} Core CPU)*
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`
await conn.sendFile(m.chat, gataImg.getRandom(), 'pp.jpg', caption, fkontak, false, { contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: '  𝐁𝐈𝐆 𝐌𝐂 𝐎𝐅𝐂 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
//conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', caption, fkontak)
//await conn.sendButton(m.chat, wm, caption, gata.getRandom(), [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, dos.getRandom())
} catch (e) {
await conn.reply(m.chat, `${fg}*ALGO SALIÓ MAL. ERRORS FOUND.*\n\n\`\`\`REPORTE ESTE COMANDO ${usedPrefix + command} CON EL COMANDO ${usedPrefix}reporte\`\`\``, m)
}}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [' ' + d, ' *𝐃𝐈𝐀𝐒 :  ☀️*\n ', h, ' *𝐇𝐎𝐑𝐀𝐒 :  🕐*\n ', m, ' *𝐌𝐈𝐍𝐔𝐓𝐎𝐒 :  ⏰*\n ', s, ' *𝐒𝐄𝐆𝐔𝐍𝐃𝐎𝐒 :  ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
