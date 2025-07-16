const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:* ${pesan}`;
  let teks = `> 𝗥𝗘𝗩𝗜𝗩𝗔𝗡 𝗠𝗥𝗗 𝗟@𝗦 𝗤𝗨𝗜𝗘𝗥𝗢 𝗔𝗖𝗧𝗜𝗩@𝗦 ✨🔥\n\n *${oi}\n\n➥ *@Valu._16:*\n`;
  for (const mem of participants) {
    teks += `*🦜 ⇝* @${mem.id.split('@')[0]}\n`;
  }
  teks += `*Si quieres un bot puedes hablarle a: +5493492419916*`;
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};
handler.help = ['todos *<txt>*'];
handler.tags = ['gc'];
handler.command = /^(tagall|t|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;