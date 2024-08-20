
const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.igname = "ig: no.pm6" //ur yt chanel name
global.socialm = "GitHub: Arslan-Nasi" //ur github or insta name
global.location = "Asia, Karachi" //ur location

//new
global.botname = '✪⏤͟͞★⃝ꪶ𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑➺' //ur bot name
global.ownernumber = ['923277217945'] //ur owner number, dont add more than one
global.ownername = '🌟STAR KING' //ur owner name
global.websitex = "https://www.instagram.com/no.pm6?igsh=eWVyZjR5N2RlZWM2"
global.wagc = "https://chat.whatsapp.com/I4eXS6M0ArnCGPPsgYwBOc"
global.themeemoji = '🌸'
global.wm = "✪⏤͟͞★⃝ꪶ𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑➺"
global.botscript = 'https://github.com/STAR-KING0/Alya-v2' //script link
global.packname = "Sticker By"
global.author = "🌟✪⏤͟͞★⃝ꪶ𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑➺\n\n+923277217945"
global.creator = "923277217945@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["923277217945"] // Premium User

//channel id
global.xchannel = {
	jid: 'https://chat.whatsapp.com/I4eXS6M0ArnCGPPsgYwBOc'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
