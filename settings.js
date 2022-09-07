//════════════════════════════//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['94714831387'] //ur owner number
global.ownername = "ᶜʸᴮᴱᴿ ᴺᴱᵀᵂᴼᴿᴷ ᴮᴼᵀᶻ" //ur owner name
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//bot bomdy 
global.owner = ['94714831387']
global.ownertag = '94714831387' //ur tag number
global.botname = 'ᶜʸᴮᴱᴿ ᴺᴱᵀᵂᴼᴿᴷ ᴮᴼᵀᶻ' //ur bot name
global.linkz = "https://youtube.com/channel/UCPVxr1KqHXWom1WMUujGLxA" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/channel/UCPVxr1KqHXWom1WMUujGLxA" //ur website to be displayed
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD4' //script link
global.reactmoji = "📜" //ur menu react emoji
global.themeemoji = "🫅" //ur theme emoji
global.packname = "Cheems Bot Stickers\n\n\n\n\n\n\n\n\n\n\n🦄🦄🦄 " //ur sticker watermark packname
global.author = "🫅Qᴜᴇᴇɴ ᴀʟᴇxʏ-ᴍᴅ ʙᴏᴛ" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['94714831387'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🧰','📜','💳']
global.sp = '⭔'
global.mess = {
    success: 'ᴅᴏɴᴇ ✅',
    admin: '*ᴛʜɪꜱ ꜰᴇᴀᴛᴜʀᴇ ɪꜱ ᴏɴʟʏ ꜰᴏʀ ᴀᴅᴍɪɴ❗*',
    botAdmin: '*ʙᴏᴛ ᴍᴜꜱᴛ ʙᴇ ᴀᴅᴍᴀɪɴ ꜰɪʀꜱᴛ❗*',
    owner: '*ᴛʜɪꜱ ꜰᴇᴀᴛᴜʀᴇ ɪꜱ ᴏɴʟʏ ꜰᴏʀ ᴏᴡɴᴇʀ❗*',
    group: '*ꜰᴇᴀᴛᴜʀᴇ ᴜꜱᴇᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ❗*',
    private: '*ꜰᴇᴀᴛᴜʀᴇꜱ ᴜꜱᴇᴅ ᴏɴʟʏ ꜰᴏʀ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ❗*',
    bot: '*ᴛʜɪꜱ ꜰᴇᴀᴛᴜʀᴇ ɪꜱ ᴏɴʟʏ ꜰᴏʀ ʙᴏᴛ*',
    wait: 'ɪɴ ᴘʀᴏᴄᴇꜱꜱ...',
    linkm: 'ᴡʜᴇʀᴇ ɪꜱ ᴛʜᴇ ʟɪɴᴋ?',
    error: 'ᴇʀʀᴏʀ❗💻',
    endLimit: 'ʏᴏᴜʀ ᴅᴀɪʟʏ ʟɪᴍɪᴛ ʜᴀꜱ ᴇxpɪʀᴇᴅ, ᴛʜᴇ ʟɪᴍɪᴛ ᴡɪʟʟ ʙᴇ ʀᴇꜱᴇᴛ ᴇᴠᴇʀʏ 12 ʜᴏᴜʀꜱ',
    ban: 'ʏᴏᴜ ʜᴀᴠᴇ ʙᴇᴇɴ ʙᴀɴɴᴇᴅ ʙʏ ᴛʜᴇ ᴏᴡɴᴇʀ, ɪꜰ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ʙᴇ ᴜɴʙᴀɴɴᴇᴅ, ᴄʜᴀᴛ ᴏᴡɴᴇʀ.',
    nsfw: 'ᴛʜᴇ ɴꜱꜰᴡ ꜰᴇᴀᴛᴜʀᴇ ʜᴀꜱ ɴᴏᴛ ʙᴇᴇɴ ᴀᴄᴛɪᴠᴀᴛᴇᴅ, pʟᴘʟᴇᴀꜱᴇ ᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴀᴅᴍɪɴ ᴛᴏ ᴀᴄᴛɪᴠᴀᴛᴇ',
    banChat: 'ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ʙᴀɴɴᴇᴅ ɪɴ ᴛʜɪꜱ ɢʀᴏᴜᴘ, ᴘʟᴇᴀꜱᴇ ᴄᴏɴᴛᴀɴᴛ ᴛʜᴇ ᴏᴡɴᴇʀ ᴛᴏ ᴜɴʙᴀɴ'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
