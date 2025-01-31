const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VUWZOqOBj9L3nFvsomYlVXDe0Goqgt4jJ1H0IIGFkNYbPL/z6F3V23H+be6eEpBeTk5CzfG0hSkmMTN2D4BjJKSshwu2RNhsEQvBS+jynoAA8yCIYgnytBsiiCFQozZ4f00F7BpX5ivIpW4WF2HulxfbP6VeYYz+DeAVnhRgT9AbB2cDaRyaapX6Rzdy9fBDLIY4UV/dpjFbIN6qzmUY2rQ/AM7i0iJJQkwSQ74xhTGJm4WUNCv0cfzpA0FTZ6TVEAG7Ebh+FlRI2oxIZNpuPu4jCQ0EiIFef4Pfrb6NVRSKNX8dGqTUXd+nUpHiSz9G18YsjjrfVlkupltKve6eckSLBneDhhhDXf1j20/LOlTp2bN2UDPGaiH10X/ZdFv7SXlStwyFPn3b5xvYnoe8Sl1VmTJ6YgnDcLbq5nMIvkNS3mqi7vbitdL1EtTEv+tK7Tr8TX9DMr4f/Rfbl08sV8lPs9olKHH58K2qw9oUeUVZVd+iUf2qlxHi8lffdN+hdf2KeJqkvQRDe7vBku702jxOlGjU8szmzsrlTousN/oQ9ZQf/E8uU1LQk3HtgJEzcHXVZ7bHZTRM19OcAqxpacbnrVHC19SRH3XZceouMLrmZORNV8gPHAeH0NesZBm4YIcY6dwbxyxsHz40YhbgwPDPl7B1AckJxRyEiaPN7xfAdAr9xiRDF7yAu2WXLinFwfubt56GQ7t/8qrJztduNvJMaTmbQ1XWcR7gzaewYdkNEU4TzHnk5yltJmifMcBjgHw79/dkCCa/ZuXHucyHeAT2jOdkmRRSn0Pl39/AgRSouEbZsEjdoFpmDY+/UaM0aSIG91LBJI0ZmUeHSGLAdDH0Y5vneAh0uCcIsHfHJcGmHp2UfzutvPF8dTFapVS/mcJu+/QMFDEnbdJ+RK/SdJRf6Ti3v8E1JFT+gNVCghFXQA+ehMu+e3Fo438iVrHLOoXydFL4O2Gt6kfj7Qp/nDhnftMcUeGDJa4A5wIQqLzE5DnPwBd+A0R75udAsbN5wrcbPlVzZ3CBVL+4L77ikYvv2aU6PUa/GmqtbXleMEdED8iCBpby6IoiyJMs8P5P5Q+Sv/UbU6wiz7kWDWwn5o3m7wMIMkysEQjFYczzOkTxYXeaBUs5k2CbRRoIFfHn2G/T1MtuUM4sNBXiqzZbG5JtLF4hJ0oKrWxLsrv9BPpDYWfC3sNs//AgKGIFp4V3epM3d5ETWJM/dG7dXmvsZWuR8XuyBfdzUyCU9Mwusw2fP9itMHjeMsxkuTVvbcO/QVeWYVpeQEqBn04ylfPZrxmZWvhx2sqVDhMba350Wix1tuH0nplfNQnGhZD5Xdy6Y3PtNkjgMtWKsGpN7V4qLeebWr6WTsTdeT0dwcy/OFP4dXunfp5jLavNfwMQaij/FLHgV5+0iWT/BjmiWwdeg/vPma8d698wXiYzz+bsTsbo4/j3jOXtWXRWhmnHHzM3Ha726WWWSybS0c8+1IRV40Aff7zw7IIsj8lMZtURKPpsQDHRDBnGm/amqTGOcMxhkY8oo4ECVeVsQOiBsty7YMss92A619rI0C7v8A8lJ7pfkHAAA=",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
