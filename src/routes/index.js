const express = require('express');
const router = express.Router();
const PessoaController = require('../controller/pessoa');
const validateCPF = require('../utils/valideteCPF');

router.get('/pessoas', async (req, res) => {
  try {
    const pessoa = new PessoaController()

    const result = await pessoa.getPessoas();

    res.json(result)
  } catch (e) {
    res.status(400).json({ "error": e.message })
  }
});

router.get('/pessoa/:idPessoa', async (req, res) => {
  try {
    const { idPessoa } = req.params
    if (!idPessoa) {
      throw new Error('Favor informar o ID da Pessoa.');
    }

    const pessoa = new PessoaController()

    const result = await pessoa.getPessoa(idPessoa);

    res.json(result)
  } catch (e) {
    res.status(400).json({ "error": e.message })
  }
});

router.post('/pessoa', async (req, res) => {
  try {
    const { nome, cpf, dataNascimento, salario, observacoes, nomeMae, nomePai } = req.body
    if (!nome || !cpf || !dataNascimento || !salario || !nomeMae || !nomePai) {
      throw new Error('Favor informar todos os campos.');
    }
    const validate = validateCPF(cpf)
    if (!validate) {
      throw new Error('CPF informado é invalido.');
    }

    const pessoa = new PessoaController()

    await pessoa.createPessoa(nome, dataNascimento, salario, observacoes, nomeMae, nomePai, cpf.replace(/[^\d]+/g, ''));

    res.sendStatus(200)
  } catch (e) {
    res.status(400).json({ "error": e.message })
  }
});

router.put('/pessoa/:idPessoa', async (req, res) => {
  try {
    const { idPessoa } = req.params
    if (!idPessoa) {
      throw new Error('Favor informar o ID da Pessoa.');
    }

    const { nome, cpf, dataNascimento, salario, observacoes, nomeMae, nomePai } = req.body

    const validate = validateCPF(cpf)
    if (!validate) {
      throw new Error('CPF informado é invalido.');
    }

    const pessoa = new PessoaController()

    await pessoa.putPessoa(idPessoa, nome, dataNascimento, salario, observacoes, nomeMae, nomePai, cpf.replace(/[^\d]+/g, ''));

    res.sendStatus(200)
  } catch (e) {
    res.status(400).json({ "error": e.message })
  }
});

router.delete('/pessoa/:idPessoa', async (req, res) => {
  try {
    const { idPessoa } = req.params
    if (!idPessoa) {
      throw new Error('Favor informar o ID da Pessoa.');
    }
    const pessoa = new PessoaController()

    await pessoa.DelPessoa(idPessoa);

    res.sendStatus(200)
  } catch (e) {
    res.status(400).json({ "error": e.message })
  }
});

module.exports = router;