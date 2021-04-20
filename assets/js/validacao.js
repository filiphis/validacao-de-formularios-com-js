const validadores = {
  dataNascimento: input => validaDataNascimento(input)
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
    customError: 'Você deve ser maior que 18 anos para se cadastrar.',
    valueMissing: 'O campo data de nascimento não pode estar vazio.',
  },
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


// export {
//   valida,
// }
