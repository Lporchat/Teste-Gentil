-- Criação da tabela de pessoas
CREATE TABLE Pessoas (
    idPessoa INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    dataNascimento DATE NOT NULL,
    salario DECIMAL(10, 2),
    observacoes TEXT
);

-- ADD nome do Pai/Mãe e CPF na tabela de pessoas
ALTER TABLE Pessoas
ADD COLUMN nomeMae VARCHAR(255),
ADD COLUMN nomePai VARCHAR(255),
ADD COLUMN cpf VARCHAR(11);

-- Criando index para data de nasciment e nome na tabela de pessoas
CREATE INDEX idx_nome ON Pessoas (nome);
CREATE INDEX idx_dataNascimento ON Pessoas (dataNascimento);

-- Add a clausura de CPF único na tabela de pessoas
ALTER TABLE Pessoas
ADD CONSTRAINT uq_cpf UNIQUE (cpf);