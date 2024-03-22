// by https://github.com/elrebelde21
 
let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
if (chat.isBanned) return

if (/^silvinha|silvia|sil|sisil$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`*ta querendo arruma oque com a mulher do meu dono?*`, `*vou ja ja chamar o big quer ver?*`, `*Rapazzzz deixa mulher do meu dono em paz*`, `*cuidado que o big ta so de olho em, pra tu tomar nao custa nada?*`])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}

/*if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`no puedo esta contra las política del grupo.😸`, `_uff miren un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣_`, `_pasa el pack de tu hermana😏_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexo😈_`, '_callate putito_'])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}*/

if (/^spy$/i.test(m.text) ) { //sin prefijo 
conn.reply(m.chat, `\*oque tu quer com meu mano spy ja aproveitando da uma moral la no canal dele na descrição a administração agradece*`, fkontak, m)}
 
if (/^reglas|normas|Reglas$/i.test(m.text) ) { //sin prefijo 
conn.reply(m.chat, `*╭┅〘 ⚠️ 𝐎𝐛𝐞𝐝𝐞𝐜𝐞𝐫 𝐚𝐬 𝐫𝐞𝐠𝐫𝐚𝐬 ⚠️ 〙*
➽❌ 𝐏𝐫𝐨𝐢𝐛𝐢𝐝𝐨 𝐋𝐢𝐠𝐚𝐫 𝐩𝐫𝐨 𝐁𝐨𝐭
➽❌ 𝐏𝐫𝐨𝐢𝐛𝐢𝐝𝐨 𝐒𝐩𝐚𝐦 𝐧𝐨 𝐁𝐨𝐭
➽❌ 𝐍𝐚̃𝐨 𝐚𝐝𝐢𝐜𝐢𝐨𝐧𝐞 𝐨 𝐁𝐨𝐭
➽❌ 𝐑𝐞𝐬𝐩𝐞𝐢𝐭𝐞 𝐨𝐬 𝐭𝐞𝐫𝐦𝐨𝐬
*╰═┅ৡৢ͜͡✦═╡ 𝐁𝐈𝐆 𝐌𝐂 𝐎𝐅𝐂 ╞═┅ৡৢ͜͡✦═╯*`, fkontak, m)}

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
 
if (/^¿Qué es un Bot?|oque e um Bot?|oque e Bot|oque e Bot|que e um BOT|que e um Bot?|oque um bot faz?|qué es un Bot|que es un Bot|Qué es un Bot?|Que es un Bot? $/i.test(m.text) ) {
conn.reply(m.chat, `\` 𝐎𝐪𝐮𝐞 𝐞 𝐮𝐦 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩? 
🤔\`

🍃 _Um Bot é uma inteligência programada que permite realizar atividades dependendo do que você solicitar. Nos temas do WhatsApp é possível criar figurinhas, baixar músicas, vídeos, criar logos, pesquisar imagens, interagir em modo conversa, participe de jogos dentro de chats, etc...._

🍃 *_PARA VER O MENU DE COMANDOS PODE USAR:_*
#menucompleto

𝐃𝐀𝐑𝐓𝐇-𝐌𝐃`, m)}  
return !0 
}
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

