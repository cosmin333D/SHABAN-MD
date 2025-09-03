const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUw0RERZcy9xdk1WMWhuNDhtODV4RldBWjgxbmw3YVlUSTVQQkFjc2hWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzBTejYvdmhIK3J3TEorSGF2bFBXWEtKeEFlZzYxeWhSV2pFZnpTZjVocz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRnl1THhheUpncEw5b2lMWlZadTRmSXhlZG5RY1BLWkZRQ3puUk9QcTJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUMTBmdVljNHpOSTEySmVwd1RqNWFtMUEwSENaQzczVFk4THdJTFNkTzBVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlPa3R4MHo4cUNqWFljdmVXaWpqRUFJdkE2aW5tek9nUi9UbndKeTAxbUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFNMjlKOFhYSWMwWStSSVdTamVwNnpvQ3dDNGpQeDNlZ012ZjNHa1NzUjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUxtWHBPblNiM0tiaXFINngwTWJzUy9xbTdYNDNsYmt3UURQMzd1c3ZXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnNXQlhJekNjMGRKVVN6NDZrVEJJb0lUZjFQNFhCdHBnZjdCaENkbWZnMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitrTi9GQ05wYUhlcEFhbW9SYmROK2ZvUzVHa0VaQkhZcGd5RGltU084WGhOWExQQWtzSi8yT3ptY2FtOW9ERXRFNWwyZVhQK3ByMm5GaW9DaGYyYUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6IlM4WHZNS25XUTFrckVIZzNSVEZSTEJXSzRsaUgyczRZRlg2dk5XZ2VXRlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkQzTDMzWlI3IiwibWUiOnsiaWQiOiI0MDc4NDg1ODQzMzo2OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCC4bSPc+G0jcmqybQiLCJsaWQiOiIxMTkwMDk3ODU3MDA0MTE6NjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOeVgwbHNRNHU3aHhRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJUalpYRzhjV3pVSmN2djM2UmlSeWhmcmkxZlpYeERlMHJyb1EyaFViOFNzPSIsImFjY291bnRTaWduYXR1cmUiOiJ4YWx6bEp0ejBRS3Bqd3ZXOHpYczA4NURaSWpFUHpneXRpRUdSRWZnVXRaR0RQN2VlMHNTUVNLalJ1SmZoYkU4cXBPR2MzcDc4anhPemo1VFVXQTNCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVzQ5T0FIN3FiY0E1WWxlVmxGY1JGMEZFNTF1SUgrdmE2NGtvSGt0M0RmQWNJdDhJa3dCcFJyUFZBL2N3Qk1iT0dORkRRRVRjc2lBODkrWjZOd3BuREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0MDc4NDg1ODQzMzo2OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVNDJWeHZIRnMxQ1hMNzkra1lrY29YNjR0WDJWOFEzdEs2NkVOb1ZHL0VyIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY5MTk2NTQsImxhc3RQcm9wSGFzaCI6IjFLNGhINCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "40784858433",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "cosmin",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *SHABAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923043788282",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
