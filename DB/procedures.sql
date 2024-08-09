-- Criação procedure de criação de pessoa
CREATE PROCEDURE CreatePessoa(
    IN p_nome VARCHAR(100),
    IN p_dataNascimento DATE,
    IN p_salario DECIMAL(10, 2),
    IN p_observacoes TEXT,
    IN p_nomeMae VARCHAR(100),
    IN p_nomePai VARCHAR(100),
    IN p_cpf VARCHAR(11)
)
BEGIN
    INSERT INTO Pessoas (nome, dataNascimento, salario, observacoes, nomeMae, nomePai, cpf)
    VALUES (p_nome, p_dataNascimento, p_salario, p_observacoes, p_nomeMae, p_nomePai, p_cpf);
        
    SELECT LAST_INSERT_ID() AS idPessoa;
END;

-- Execução da procedure de criação de pessoa
CALL CreatePessoa('João da Silva', '1985-06-15', 3000.00, 'Observações', 'Maria da Silva', 'José da Silva', '12345678900');

-- Criação procedure de busca de todas as pessoas
CREATE PROCEDURE GetAllPessoas()
BEGIN
    SELECT * FROM Pessoas;
END;

-- Execução da procedure de busca todas as pessoas
CALL GetAllPessoas();

-- Criação procedure de Atualização de pessoa
CREATE PROCEDURE PutPessoa(
    IN p_idPessoa INT,
    IN p_nome VARCHAR(100),
    IN p_dataNascimento DATE,
    IN p_salario DECIMAL(10, 2),
    IN p_observacoes TEXT,
    IN p_nomeMae VARCHAR(100),
    IN p_nomePai VARCHAR(100),
    IN p_cpf CHAR(11)
)
BEGIN
    UPDATE Pessoas
    SET
        nome = p_nome,
        dataNascimento = p_dataNascimento,
        salario = p_salario,
        observacoes = p_observacoes,
        nomeMae = p_nomeMae,
        nomePai = p_nomePai,
        cpf = p_cpf
    WHERE idPessoa = p_idPessoa;

    SELECT 'OK' AS status;
END;

-- Execução da procedure de atualização de pessoa
CALL PutPessoa(
    4,               
    'leonardo',    
    '1985-06-15',    
    3200.00,         
    'Atualizado',    
    'Maria da Silva',
    'José da Silva', 
    '12345678910'    
);

-- Criação procedure de Deleção de uma pessoa pelo ID
CREATE PROCEDURE DelPessoa(
    IN p_idPessoa INT
)
BEGIN
    DELETE FROM Pessoas
    WHERE idPessoa = p_idPessoa;

    SELECT 'OK' AS status;
END;

-- Execução da procedure de deleção de uma pessoa pelo ID
CALL DelPessoa(1);


-- Criação procedure de buscar uma pessoa pelo ID
CREATE PROCEDURE GetPessoa(IN p_id_pessoa INT)
BEGIN
    SELECT * FROM Pessoas WHERE idPessoa = p_id_pessoa LIMIT 1;
END

-- Execução da procedure de buscar uma pessoa pelo ID
CALL GetPessoa(2);
