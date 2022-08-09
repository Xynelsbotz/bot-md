let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Indosat [085854337533]
│ • Gopay  [085854337533]
│ • Dana  [085646458928]
│ • Saweria  [https://saweria.co/SayuOgiwaraa4]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285854337533
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
