const pool = require('../config/index');

class PessoaController {
  constructor() {
  }

  async getPessoa(idPessoa) {
    const connection = await pool.getConnection();

    const [results] = await connection.query('CALL GetPessoa(?)', [idPessoa])

    connection.release();

    return results[0][0]
  }

  async getPessoas() {
    const connection = await pool.getConnection();

    const [results] = await connection.query('CALL GetAllPessoas()')

    connection.release();
    return results[0]
  }

  async createPessoa(nome, dataNascimento, salario, observacoes, nomeMae, nomePai, cpf) {
    const connection = await pool.getConnection();

    const [results] = await connection.query('CALL CreatePessoa(?, ?, ?, ?, ?, ?, ?)',
      [nome, dataNascimento, salario, observacoes, nomeMae, nomePai, cpf])
    connection.release();

    console.log('IDPessoa: ' + results[0][0].idPessoa)
  }

  async putPessoa(idPessoa, nome, dataNascimento, salario, observacoes, nomeMae, nomePai, cpf) {
    const connection = await pool.getConnection();

    const [results] = await connection.query('CALL PutPessoa(?, ?, ?, ?, ?, ?, ?, ?)',
      [idPessoa, nome, dataNascimento, salario, observacoes, nomeMae, nomePai, cpf])

    connection.release();

    console.log('Status: ' + results[0][0].status)
  }

  async DelPessoa(idPessoa) {
    const connection = await pool.getConnection();

    const [results] = await connection.query('CALL DelPessoa(?)',
      [idPessoa])

    connection.release();

    console.log('Status: ' + results[0][0].status)

  }
}

module.exports = PessoaController;