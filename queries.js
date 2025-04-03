const db = require('./db');
async function consultas() {

  const [aniversariantes] = await db.query(`
    SELECT nome_parlamentar, dia_aniversario
    FROM parlamentares
    WHERE mes_aniversario = LPAD(MONTH(CURDATE()), 2, '0')
  `);

  console.log("\n Aniversariantes do mês:");
  console.table(aniversariantes);
}

consultas().catch(console.error);
