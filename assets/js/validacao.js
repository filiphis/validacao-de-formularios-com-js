const validadores = {
  dataNascimento: input => validaDataNascimento(input),
  cpf: input => validaCPF(input),
}

const verificaErros = [
  'valueMissing',
  'patternMismatch',
  'typeMismatch',
  'customError',
];

const mensagensDeErro = {
  // Informar todos os inputs e suas possiveis mensagens

  nome: {
    valueMissing: 'O campo nome não pode estar vazio.'
  },
  email: {
    valueMissing: 'O campo email não pode estar vazio.',
    typeMismatch: 'O email digita não é valido.'
  },
  senha: {
    valueMissing: 'O campo senha não pode estar vazio.',
    patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, pelo menos uma letra maiúscula e uma minúscula e não deve conter símbolos.'
  },
  dataNascimento: {
    valueMissing: 'O campo data de nascimento não pode estar vazio.',
    customError: 'Você deve ser maior que 18 anos para se cadastrar.',
  },
  cpf: {
    valueMissing: 'O campo CPF não pode estar vazio.',
    customError: 'O CPF informado é inválido.',
  }
}


export function valida(input) {
  let tipoInput = input.dataset.tipo;


  if (validadores[tipoInput]) {
    validadores[tipoInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalido');
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
  } else {
    input.parentElement.classList.add('input-container--invalido');
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mensagemDeErro(tipoInput, input);
  }
}

// tipoInput = input's que foram criados no obj -> mensagensDeErro
// Input -> iremos utilizar o input para consultar a propriedade validity e verificar quais erros deveremos mostrar, ou seja, quais erros estão como true.
function mensagemDeErro(tipoInput, input) {
  let mensagem = '';

  verificaErros.forEach(erro => {
    if (input.validity[erro]) {
      mensagem = mensagensDeErro[tipoInput][erro];
    }
  });

  return mensagem;
}



function validaDataNascimento(input) {
  let dataRecebida = new Date(input.value);
  let mensagem = '';


  if (!ehMaiorDeIdade(dataRecebida)) {
    mensagem = 'Você deve ser maior que 18 anos para se cadastrar.';
  }

  input.setCustomValidity(mensagem);
}


function ehMaiorDeIdade(dataNascimento) {
  const dataAtual = new Date();

  let dataNascimentoMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate());

  return dataAtual >= dataNascimentoMais18;
}


// Validações referentes ao CPF
function validaCPF(input) {
  const cpfFormatado = input.value.replace(/\D/g, '');
  let mensagem = '';

  if (digitosSaoRepetidos(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)) {
    mensagem = 'O CPF informado é inválido.'
  }

  input.setCustomValidity(mensagem);
}


function digitosSaoRepetidos(cpf) {
  const cpfDigitosRepetidos = [
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
  ];

  let ehRepetido = false;

  cpfDigitosRepetidos.forEach((cpfRepetido) => {
    if (cpf == cpfRepetido) {
      ehRepetido = true;
      return;
    }
  });

  return ehRepetido;
}


function checaEstruturaCPF(cpf) {
  const multiplicador = 10;

  return checaDigitoVerificador(cpf, multiplicador);
}

function checaDigitoVerificador(cpf, multiplicador) {
  if (multiplicador >= 12) {
    return true;
  }

  let multiplicadorInicial = multiplicador;
  let soma = 0;
  const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('');
  const digitoVerificador = cpf.charAt(multiplicador - 1);
  for (let contador = 0; multiplicadorInicial > 1; multiplicadorInicial--) {
    soma = soma + cpfSemDigitos[contador] * multiplicadorInicial;
    contador++;
  }

  if (digitoVerificador == confirmaDigito(soma)) {
    return checaDigitoVerificador(cpf, multiplicador + 1);
  }

  return false;

}

function confirmaDigito(soma) {
  let resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) resto = 0;
  return resto;
}
