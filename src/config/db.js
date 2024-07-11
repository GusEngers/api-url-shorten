const { Pool } = require('pg');
const { DB_URI } = require('../utils/constants.js');

const pool = new Pool({
  connectionString: DB_URI,
});

const query = (query, params = []) => pool.query(query, params);

async function db() {
  try {
    await query('CREATE TABLE IF NOT EXISTS urls(id SERIAL PRIMARY KEY, original TEXT NOT NULL, password TEXT)');
    console.log(`[INFO] Tabla "urls" creada en caso de no existir, base de datos lista para utilizar`);
  } catch (error) {
    console.log(`[ERROR] Error al crear la tabla: ${err.message}`);
  }
}

module.exports = { query, db };
