//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kushimotunde7@gmail.com";
global.location = "Lagos,Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Ednut001/Ednut-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZAY2P4yltOvNaegY2w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZAY2P4yltOvNaegY2w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d29baa62079de1f3e9ba7.jpg,https://telegra.ph/file/7aa0025c70b7b5040d3d0.jpg,https://telegra.ph/file/06265ce5a7956b4799ba0.jpg,";
global.devs = "2348102487241";
global.sudo = process.env.SUDO || "237680255347";
global.owner = process.env.OWNER_NUMBER || "2348102487241";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/d29baa62079de1f3e9ba7.jpg,https://telegra.ph/file/7aa0025c70b7b5040d3d0.jpg,https://telegra.ph/file/06265ce5a7956b4799ba0.jpg,";
global.waPresence = process.env.WAPRESENCE || "recording";//online,recording,composing,available,unavailable
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://ednut-md-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "EDNUT-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0pWREFmZkIxWlhWSHJhNU42UEVzTGtzeU1NRTVUSjExVFhKeDZNZDMyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRi9wV3d2Lzd6SU9odU1DVUh6bU5wcGlxUWNVMy84d3hnRnNNaVBlU0xqcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRGhtdjV3QXNOTE4wSytlSjYvUDI4WURqZEswOWZZREpPRGxpUTBYazNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6VTZURHZzNEVHUkZLQ2VFS2VhN2RtS0hmTU5saHVqVmtyL01TaXdWN2gwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVDbFlGMVc2V3F3WXc3ZzJmeDJmeldsbkJ5ckNDeGw0bHlSSk9RUEN2bFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFiWitIbkFDUklsMDFyYlhlVWRnU3M3WFhNMG8zcEp5bnVza1d0SVplMVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia01XdXlkU25JT1hFTCtHRi9ORGdacGJiQ2t3QmxsSXlzazh3SlpDRHJucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUVYSzViY3U1UWNqcHd6Vjk1bGo0aTBwbmNQN3diR05OSHFid3lpazVpYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE3UXFzTUdSSW0wejdSc1JWM1VQWjd6SUZNb0tmTnZCeHFYYzE4dmpDeDJpV0lFOTExYWpIcjZ2M0RtcW9IQy9QNVkrRTZLaHNEMGV4cjQ3WHFtdENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODcsImFkdlNlY3JldEtleSI6IjdUUlp4RkVjTnhENjQxVXBDTCtjOWp0WHM0b0NXY0xQM1hSS0ZMQ0dLWHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA4NTM2OTc1OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQUYxRkY0QjA3NkY1RDI4MUI2QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5ODc0ODQ2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDg1MzY5NzU5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBQUFCM0VEMzRFRTRFMkFBQkM5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk4NzQ4NDh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlFHOE1YTW9JUWxlRVZ2cUN3TWNOREEiLCJwaG9uZUlkIjoiNDhhMThlZTYtNjdiYS00NjgyLThjZjgtNTFjNTM0NmE3NjM5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVMZHUzQlVpZmQ4RlZDOXJrT2VlK1dOMisrbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGMTBXTzNtZlNmNEM1OXVhTDlycVJPY3pSaWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWFcyTU45RTIiLCJtZSI6eyJpZCI6IjIzNDcwODUzNjk3NTk6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS2luZyBGYXZvdXIgRnVuZHoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pidDUvd0NFSTdxakxRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZXaHN1Y3NlK1o1NlhIY0hYY3EzY21Cb0JPT01OcG5qTVRSVmJZcy9XUjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImtMNXF3QVRKZTRxTzVJaVkxQnl3akFXZC9UYTBhUDM2czI4WHZlNnZoZmUweGp3TGhGMm9sQStXd2UwNGZXdzU4ekRWWlBEMGhOSFhyTHlscmtuQUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJM1c0RWxHYklJM2JhM1ZybXBQcWZmUlQ5UFlHV20xeFROcVBTOXplMTBlbG92akF3cGN2VW5RSWpZY1N2U2hqb0U3bksrNkVHY1VKb012WTRwTXdBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwODUzNjk3NTk6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDFvYkxuTEh2bWVlbHgzQjEzS3QzSmdhQVRqakRhWjR6RTBWVzJMUDFrZCJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5ODc0ODQzLCJteUFwcFN0YXRlS2V5SWQiOiJBQW9BQUtlMyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || '.',
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©Ednut-Md",
  author: process.env.PACK_AUTHER || "🕊",
  packname: process.env.PACK_NAME || "Ednut-Md",
  botname: process.env.BOT_NAME || "Ednut-Md",
  ownername: process.env.OWNER_NAME || "Ednut",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Ednut-Md").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
