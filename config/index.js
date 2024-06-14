const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    APP_PORT: 4001,
    DB_URL: 'mongodb://localhost:27017/restapi'
  };
  
process.env;