const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://telegra.ph/file/7a89888972934afb097f3.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Evania bot created by Akhil Mahesh*
*Creator number : wa.me/919778062036?text=Hi%20Itzme%20Lucifer.%20*

*Githublink :    https://github.com/Itzme-lucifer/Evania-1.2*

*Audio commads :   https://github.com/Itzme-lucifer/Evania-1.2/tree/master/uploads*

*Sticker commads : coming soon*

*For More Updates Contact me☝*
`}) 

}));
