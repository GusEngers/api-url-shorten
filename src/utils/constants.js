require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || '3000',
  DB_URI: process.env.DB_URI || 'postgres://postgres:12345@localhost:5432/urlshortendb',
};
