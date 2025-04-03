const xlsx = require('xlsx');
const db = require('./db');

const workbook = xlsx.readFile('./deputado.xls');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet);

async function inserirDados() {
  for (const row of data) {
    const sql = `
      INSERT INTO parlamentares (
        nome_parlamentar, partido, uf, situacao_mandato, endereco, anexo,
        complemento_endereco, gabinete, cidade_estado_cep, telefone, fax,
        mes_aniversario, dia_aniversario, email, nome_sem_acentos, tratamento, nome_civil
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      row['Nome Parlamentar'],
      row['Partido'],
      row['UF'],
      row['Titular/Suplente/Efetivado'],
      row['Endereço'],
      String(row['Anexo']),
      row['Endereço (continuação)'],
      String(row['Gabinete']),
      row['Endereço (complemento)'],
      String(row['Telefone']),bd
      String(row['Fax']),
      row['Mês Aniversário'],
      row['Dia Aniversário'],
      row['Correio Eletrônico'],
      row['Nome sem Acento'],
      row['Tratamento'],
      row['Nome Civil']
    ];

    await db.query(sql, values);
  }

  console.log(" Dados inseridos com sucesso.");
}

inserirDados().catch(console.error);