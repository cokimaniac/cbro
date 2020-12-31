require("dotenv").config();
const mongoose = require("mongoose");

const connect = async () => {
    const dbConfig = {
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        name: process.env.DB_NAME,
        host: process.env.DB_HOST
    }
  await mongoose.connect(
    `mongodb+srv://${dbConfig.user}:${dbConfig.pass}@${dbConfig.host}/${dbConfig.name}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log(`[db] Database Connected!`);
};

module.exports = connect
