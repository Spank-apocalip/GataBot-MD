// by https://github.com/elrebelde21
 
let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
if (chat.isBanned) return

if (/^big$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`*meu mestre sempre calmo, cauteloso, e posturado observando atentosamente fica esperto(a)*🥷🏻`, `*hum?🤔*`, `*fala🧐?*`, `*meu papai big😤*`, `*ele adora quando eu chamo ele de big papa🤭*`, `*gostou do meu mestre pois tira os olhos que ele e so meu😌*`, `*bang💥*`, `*oque e fala que ele ta te ouvindo🙄?*`, `*o mestre corre aqui tem um(a) nego(a) te chamando*`, `*fala liso oque tu quer?*`, `*calma calabreso que o big ta so de olho em, pra tu tomar nao custa nada?*`])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}

if (/^bot ruim|bot ta off|bot tá off|cade o bot|bot morreu|lixo|bot nao presta|bot lixo|bot gay$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`*sou mais útil que você*🗿🍷`, `*seu rato de laboratório*🧐`, `*e sua irma que vender pack pra comprar droguinhas*🤨`, `*deixa de ser daltônico*`, `*vai continuar se humilhando de graça?*`, `*vsfdr seu merda*`, `*teu pai e mais rodado do que prato no microondas*`, `*pasa el pack de tu hermana*😏`, `*tua mãe sabe que tu e gay?*`, `*depois que perdi o número nao sabe por que*`, '*callate putito*'])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}
 
if (/^spy$/i.test(m.text) ) { //sin prefijo 
conn.reply(m.chat, `\*oque tu quer com meu mano spy ja aproveitando da uma moral la no canal dele na descrição a administração agradece*`, fkontak, m)}

/*if (/^teste|testando$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`*ta querendo arruma oque com a mulher do meu dono?*`, `*vou ja ja chamar o big quer ver?*`, `*Rapazzzz deixa mulher do meu dono em paz*`, `*cuidado que o big ta so de olho em, pra tu tomar nao custa nada?*`])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}*/

if (/^neto|netinho$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*Oque tu quer com meu mano neto fica esperto que ele ta sempre ligado🧐*`, fkontak, m)}

if (/^igor$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*meu mano criador do grupo class, só de ouvir esse nome ja ficou toda molhadinha ne fafada(o)*`, fkontak, m)} 
 
if (/^uiui$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*aiiiaii😁*`, fkontak, m)}

if (/^tj$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*Chupador de pen-drive casado c a lemes pai aos 14😏*`, fkontak, m)}

if (/^g2|gdois|gdoiss$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*G2 COME TU, G2 COME ELA, COME SUAS AMIGAS AINDA COME AS AMIGAS DELA🤫*`, fkontak, m)}
 
if (/^aiai$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*uiiii uiiii😁*`, fkontak, m)}

if (/^vivi$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*a gostosa da bot do big oque tu quer com ela🤨?*`, fkontak, m)}

if (/^alemes|lemes$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*lemes linda maravilhosa casada com o tj mais conhecido como pai solteiro🧑🏻‍🍼?*`, fkontak, m)}
 
if (/^th$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*th da ari futuros marido e mulher mas ele ja pode beijar a noiva rsrs🤧❤️*`, fkontak, m)}

if (/^bibii$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*bibi perigosaaa😤*`, fkontak, m)}

if (/^Ari$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*Meu nome e ari e eu não to nem ai😪*`, fkontak, m)}

if (/^felix$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*O felix cearense o famoso gostosão das quebradas eo namorado da Kim🤞😪*`, fkontak, m)}
 
if (/^luanzin|luan$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*luanzin rsrs ainda não superou o th e vive pensando nele de todas as vezez que botava dizendo dizendo la ele la ele la ele la ele mil vezez🤣🤣😳*`, fkontak, m)}
 
 if (/^kkkkk$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*só sabe rir e desgraça?*`, fkontak, m)}
 
if (/^kkkk$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\*sorria você estar sendo filmado🙂*`, fkontak, m)}
 
if (/^normas$/i.test(m.text) ) { //sin prefijo 
conn.reply(m.chat, `*╭┅〘 ⚠️ 𝐎𝐁𝐄𝐃𝐄𝐂𝐄𝐑 𝐀𝐒 𝐑𝐄𝐆𝐑𝐀𝐒 ⚠️ 〙*
*ℹ️-ʀᴇsᴘᴇɪᴛᴀʀ ᴏs ᴀᴅᴍɪɴs sᴇ, ᴄᴀsᴏ ᴅᴇsʀᴇsᴘᴇɪᴛᴀʀ ᴛᴏᴍᴀ ʙᴀɴ ᴘᴇʀᴍᴀɴᴇɴᴛᴇ ᴅᴏ ɢʀᴜᴘᴏ.*  
*ℹ️-ʀᴇsᴘᴇɪᴛᴀʀ ᴀs ᴍɪɴᴀs.*
*ℹ️-ʀᴇsᴘᴇɪᴛᴀʀ ᴏs ᴍᴇᴍʙʀᴏs.*
*ℹ️-ᴀʙʀɪʀ ᴄᴀʟʟ sᴇᴍ ᴘᴇʀᴍɪssᴀ̃ᴏ ᴇ ʙᴀɴ.*
*ℹ️-ɪᴅᴀᴅᴇ ᴅᴇ 15 ᴀ 29 ᴀɴᴏs*
*ℹ️-ɴᴀᴏ sᴇ ᴏғᴇɴᴅᴀᴍ ᴘᴏʀ ᴘᴏᴜᴄᴀ ᴄᴏɪsᴀ ᴀǫᴜɪ ᴀ ᴢᴏᴇɪʀᴀ ᴇ ʟɪʙᴇʀᴀᴅᴀ sᴇ ɴᴀ̃ᴏ ᴛᴀɴᴋᴀ ᴍᴇᴛᴇ ᴏ ᴘᴇ́.*

*𝙿𝙴𝚁𝙼𝙸𝚃𝙾𝙳𝙾 𝙽𝙾 𝙲𝙷𝙰𝚃✅*

*✓-ᴘᴇʀᴍɪᴛɪᴅᴏ ʙʀɪɴᴄᴀᴅᴇɪʀᴀs*
*✓-ᴘᴇʀᴍɪᴛɪᴅᴏ ᴢᴏᴇɪʀᴀ ᴋᴋᴋ*
*✓-ᴘᴇʀᴍɪᴛɪᴅᴏ ᴄʜᴀᴍᴀ ᴘʀᴏ x1 ᴋᴀᴋᴀ*
*✓-ᴘᴇʀᴍɪᴛɪᴅᴏ ᴠɪᴅᴇᴏs ᴅᴇ ᴍᴇᴍᴇ ᴇ sʜɪᴘᴏsᴛ*
*✓-ᴘᴇʀᴍɪᴛɪᴅᴏ ᴡᴇʙ ɴᴀᴍᴏʀᴏ*
*✓-ᴘᴇʀᴍɪᴛɪᴅᴏ ғᴀᴢᴇʀ ɴᴏᴠᴀs ᴀᴍɪᴢᴀᴅᴇs*

*𝙿𝚁𝙾𝙸𝙱𝙸𝙳𝙾 𝙽𝙾 𝙲𝙷𝙰𝚃❌*

*⌦-ᴘʀᴏɪʙɪᴅᴏ ғᴏᴛᴏ ᴇ ᴠɪᴅᴇᴏs sᴇᴍ ᴠɪᴢᴜ ᴜɴɪᴄᴀ.*
*⌦-ᴘʀᴏɪʙɪᴅᴏ ᴄᴏɴᴛᴇᴜᴅᴏs. +18*
*⌦-ᴘʀᴏɪʙɪᴅᴏ ᴘᴇᴅᴏғɪʟɪᴀ.*
*⌦-ᴘʀᴏɪʙɪᴅᴏ ʟɪɴᴋs.*
*⌦-ᴘʀᴏɪʙɪᴅᴏ ᴘᴇᴅɪʀ ᴀᴅᴍɪɴ.*
*⌦-ᴘʀᴏɪʙɪᴅᴏ ᴠᴇɴᴅᴀs ᴅᴇ ᴄᴏɴᴛᴇᴜᴅᴏs.*
*⌦-ᴘʀᴏɪʙɪᴅᴏ ғʟᴏᴡᴅs, ᴛʀᴀᴠᴀs ᴇ ᴄᴏɪsᴀs ɪʟɪᴄɪᴛᴀs.*
*⌦-ᴘʀᴏɪʙɪᴅᴏ ɪɴᴠᴀᴅɪʀ ᴘᴠ ᴅᴇ ǫᴜᴀʟǫᴜᴇʀ ᴘᴇssᴏᴀ ᴘʀᴏᴠᴀ. ᴄᴏᴍ ᴘʀɪɴᴛ ᴇ ʙᴀɴ ɪᴍᴇᴅɪᴀᴛᴀᴍᴇɴᴛᴇ.*
*╰═┅ৡৢ͜͡✦═╡ 𝐁𝐈𝐆 𝐌𝐂 𝐎𝐅𝐂 ╞═┅ৡৢ͜͡✦═╯*`, fkontak, m)}

if (/^prefixo$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `\`𝐚𝐪𝐮𝐢 𝐞𝐬𝐭𝐚𝐫 𝐦𝐞𝐮 𝐩𝐫𝐞𝐟𝐢𝐱𝐨 ➽ [ . ] \``, fkontak, m)}
 
if (/^quero um bot|quero bot|como crio um bot?|quero um bot?|quiero un bot|preciso de bot|solícito bot|solicito bot|preciso de um bot|necessito de um bot$/i.test(m.text) ) {
conn.reply(m.chat,  `\`*⚡Quer um bot para seu grupo?* \`

*🤖 Pode ser um sub bot mandando o seguinte comando:*
* #serbot (escanear o QR) 
* #jadibot --code (código de 8 dígitos)

*Pode adquirí-lo fazendo uma doação voluntária através de PayPal*

> 🚀 O bot ficara ativo 24/7 para seu grupo.

\`⏩ Siguiente paso ⏩\`

> Uma vez realizado o pagamento, pode enviar um comprovante de envio do dinheiro (captura de tela) para que possa adiciona o bot a seu grupo:

• https://wa.me/559285013050
• ${ig}
• https://youtube.com/@bigmc3430

\`⚡ O bot ficara ativo 24/7?\`
_*Sim, nosso bot está conectado em um servidor pago para mantelo ativo 24/7 (por isso tambem solicitamos doações para mantelo em funcionamento) 👨🏻‍💻*_

> *𝐎𝐛𝐫𝐢𝐠𝐚𝐝𝐨 𝐩𝐞𝐥𝐚 𝐬𝐮𝐚 𝐩𝐫𝐞𝐟𝐞𝐫𝐞̂𝐧𝐜𝐢𝐚 𝐞𝐦 ${gt} 🗿🍷*`, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Hola ${name} 👋`, body: wm, previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})}
 
if (/^¿Qué es un Bot?|oque e um Bot?|oque e Bot|oque e Bot|que e um BOT|oque e um Bot?|oque um bot faz?|qué es un Bot|que es un Bot|Qué es un Bot?|Que es un Bot? $/i.test(m.text) ) {
conn.reply(m.chat, `\` 𝐎𝐪𝐮𝐞 𝐞 𝐮𝐦 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩? 
🤔\`

🍃 _Um Bot é uma inteligência programada que permite realizar atividades dependendo do que você solicitar. Nos temas do WhatsApp é possível criar figurinhas, baixar músicas, vídeos, criar logos, pesquisar imagens, interagir em modo conversa, participe de jogos dentro de chats, etc...._

🍃 *_PARA VER O MENU DE COMANDOS PODE USAR:_*
#menucompleto

*𝙱𝙸𝙶 𝙼𝙲 𝙾𝙵𝙲*`, m)}  
return !0 
}
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
 }


