// Função para validar CPF
const validateCPF = (cpf) => {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]+/g, '');

  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11) return false;

  // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  // Calcula e valida o primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let firstDigit = 11 - (sum % 11);
  firstDigit = firstDigit > 9 ? 0 : firstDigit;

  if (firstDigit !== parseInt(cpf.charAt(9))) return false;

  // Calcula e valida o segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let secondDigit = 11 - (sum % 11);
  secondDigit = secondDigit > 9 ? 0 : secondDigit;

  return secondDigit === parseInt(cpf.charAt(10));
};

module.exports = validateCPF;
