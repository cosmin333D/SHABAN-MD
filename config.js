const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUlzYnhDbEhzbXBxQnp6bGhOZHQ0dmJpSjRadm5HTSt5cENtaEVBRTkzbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmdyRGlCSXhjcWlNaDRzaW1KMUkya0Q2TjMzYUN5ckZON2taTytMbjR4cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSURCL0dPL2FZL2J3Y1dydW8rWXhFK0lnQTByTWRCbGFzNlpwOWF1WEdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTZTJvcnVTQk1SeThFY0U3T2VBb0JLbkFKOU1SNmdDUlozaWJVUWFPU0RjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPV1gzYVNmWXJNbkRrSGN5ejI3TjZWbk1KcnhYeUh6eGpGU1lpN3kzbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRtMEZabTlORU80Q2JKVTd4NlRFZzJlVkNLYndqcDlaekZ5MFlpR0Y0UVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ011MXEzOWs0UDZ6bGhlaEJaV2hmSFd4ZlgxaHRvSVJPMHF1S05jNHgwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzh6OXVxUmhxN3FjU3drY2NLLzlic250VUtQODhZbVVZd1IzK2QwYnZIQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlROGFvNEJCNmdiTWhoYjJkVnRDWGNjRHZ5eVJQZjNCbiswQ0FibmRQcUVZLzc0QVNhUEZ0dURNNUM2RHRBbTlSdGIrUjU2ajF6MllOSCtvMkJra2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiJ1bHRNOGVyeFh2dHNMMjdtL0d2Z1JDaXMyVHlBVmlKV1doVEZpcmJYV1lNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjQwNzg0ODU4NDMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVGQjZBOEE0RkU5RDU4NUNFOEE4N0E1MTYwRERDRTQ3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY5MDQxMTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQwNzg0ODU4NDMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM1MkVBRkYxRDM5MUZEMTBEQUE3OUE2QzczMkIzQUUwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY5MDQxMTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjNLTUY4REZFIiwibWUiOnsiaWQiOiI0MDc4NDg1ODQzMzo2N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCC4bSPc+G0jcmqybQiLCJsaWQiOiIxMTkwMDk3ODU3MDA0MTE6NjdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOdVgwbHNRclBYZ3hRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJUalpYRzhjV3pVSmN2djM2UmlSeWhmcmkxZlpYeERlMHJyb1EyaFViOFNzPSIsImFjY291bnRTaWduYXR1cmUiOiJoaW5KT0VaRUZOSU5XY2JVSW54V3F6OE4yRjVUSmtjeHBzdkEyUUgzWGlPdkYwQ3N2Yy9SaVYxSnpGZllIdEkrOGJKc0hsSWxrRklFUWdlSFlVcjlEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoia1pPVzhvUUdOQlJ2aTgxY2l3NnpHaEw0aTBZMitmT3JOVUtHRUJhZytGa3JqRUcwTGVUN0taMmJveU1ybXBTaVZMcEovNnUxSGxOdXErOFVyV3VBaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0MDc4NDg1ODQzMzo2N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVNDJWeHZIRnMxQ1hMNzkra1lrY29YNjR0WDJWOFEzdEs2NkVOb1ZHL0VyIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY5MDQxMTMsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ28wIn0=",
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
