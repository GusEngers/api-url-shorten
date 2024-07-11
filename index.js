const app = require('./src/app.js');
const { db } = require('./src/config/db.js');
const { PORT } = require('./src/utils/constants.js');

async function main() {
  try {
    await db();
    app.listen(PORT, () => {
      console.log(`[INFO] Servidor iniciado correctamente en el puerto ${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR] Error al iniciar el servidor: ${error.message}`);
  }
}
main();
