const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} 𝐍𝐀̃𝐎 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐄𝐈 𝐍𝐄𝐇𝐔𝐌 𝐏𝐑𝐄𝐅𝐈𝐗𝐎, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐄 𝐃𝐈𝐆𝐈𝐓𝐄 𝐎 𝐏𝐑𝐄𝐅𝐈𝐗𝐎 𝐐𝐔𝐄 𝐐𝐔𝐄𝐈𝐑𝐀 𝐄𝐒𝐓𝐀𝐁𝐄𝐋𝐄𝐂𝐄𝐑, 𝙀𝙅: ${usedPrefix + command} #`;
global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
await m.reply(`${lenguajeGB['smsAvisoEG']()} *𝐎 𝐏𝐑𝐄𝐅𝐈𝐗𝐎 𝐀𝐓𝐔𝐀𝐋 𝐃𝐄 ${gt} 𝐒𝐄 𝐄𝐒𝐓𝐀𝐁𝐄𝐋𝐄𝐂𝐄𝐔 𝐏𝐀𝐑𝐀 :* [ ${text} ]`);
};
handler.help = ['setprefix'].map((v) => v + ' [prefix]');
handler.tags = ['owner'];
handler.command = /^(setprefix)$/i;
handler.rowner = true;
export default handler;
