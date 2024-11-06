const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configuração do banco de dados
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Conecta ao banco de dados
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1);
  }
  console.log('Conectado ao banco de dados MySQL');
  db.query(`CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`);
});

// Rota para adicionar um nome e listar os registros
app.get('/', (req, res) => {
  const name = `Nome ${Math.floor(Math.random() * 100)}`;
  db.query(`INSERT INTO people(name) VALUES(?)`, [name], (err) => {
    if (err) {
      res.status(500).send('Erro ao inserir no banco de dados');
      return;
    }

    db.query(`SELECT name FROM people`, (err, results) => {
      if (err) {
        res.status(500).send('Erro ao buscar registros no banco de dados');
        return;
      }

      const namesList = results.map(row => `<li>${row.name}</li>`).join('');
      res.send(`<h1>Full Cycle Rocks!</h1><ul>${namesList}</ul>`);
    });
  });
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
