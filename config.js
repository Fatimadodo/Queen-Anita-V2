//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349020674834";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElRcS9SMWljanFaWXM5eFJ3eE9VRVJxTXpqcHMrNi81V0svaGsyOXgyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3QxdDE2bm9mRU9ycmxKZk44am5oQnJod05YeFBBdjl1OHVZVUVyZHcxST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQnhtYnEwakp5c1gxamhpWWRJNVJkaFUydUdOczN1RTRLd1FBUk5aMVcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMczRHMWQwRVhBNWMzd2ZVK1JQa1NNVlJ2VGtKU3BDRHBoRE1Xc1FSZzFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1MT2l3b2VjYmVQcTE3a1MvWCsyZGNHNlN2dENFUjBPQUN0QXYwbnBXR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdYcklkdVp2VGx4Y3dMSE9Kb0ZaMEYzZTBxSWtaQUxGdXl1eS9jZG1URnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZmaDc0RFFpQXhwNVNLcWwreS93RUJ3ZHQ2dVF6TEMwZ1I5cjJ4cyttUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTBoa3grYTdYenV2OXBGVGJCeHR0VnljRm9sZTN2bzZVQWk3aVpXciszQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldwSytMWU9xUWk2c0tqUFJOZnpVYVpWK2xCTHl0VHhaaDdoV2pTTE1RNTJlN1VJbEZQd1NtbFlwWmJFb2dmVHJMSndxR0tIRi9NQmRhVFVPdDFybGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzYsImFkdlNlY3JldEtleSI6ImxYNkdmSnZkN29rWUV5bCtQV2NuNFg1cE9jbUxPdEZucFhJZTJyek5sc2M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IklDcEhsaGVIUXRlc2NaYlNBajdpbFEiLCJwaG9uZUlkIjoiNTAxYmQ2YzYtMjlmNi00NzQ4LWEzNTQtNTg4NjdmMDE2NWEyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJZeWVzR1l4cTdUeGNmZ2NUUENaNUQwSVhJdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGdUgyR3NOTHhpSlJBdDVWK2c1ZEdrakZ3cTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTU00UFIyVjkiLCJtZSI6eyJpZCI6IjIzNDkwMjA2NzQ4MzQ6MjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRG9kb2NvbGxlY3Rpb25zIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQdWo0NmNDRUx2RnByY0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJYXFBaDVOTkZIeUFldlRBcnBtVTF3WHRWYmtSRXFTQnBqNS81ZGUyeW00PSIsImFjY291bnRTaWduYXR1cmUiOiJTcHZDMmxuZ0Z5dFhsQm85SStUZDhHWWNiOE9hN1BPQzVhVE9Fei85SkVXL29IcnZ3eHdNb3czb05MczVhM3ptWUFMK3ROekcwNnIreVZBQ3QxemJCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTW5sdHYrSWsvamVSdmh0SHhTS08vaG9lSHNTMktwM01wMEtVRnlTQ3oycW1aNTExWjZHUGRSdzVKMFVJWnVXVkdLWWF2eXJ5VXg2TWdjQUN2TnhRZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDIwNjc0ODM0OjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNHcWdJZVRUUlI4Z0hyMHdLNlpsTmNGN1ZXNUVSS2tnYVkrZitYWHRzcHUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY1ODc2MTEsIm15QXBwU3RhdGVLZXlJZCI6IkFCVUFBRTZPIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
