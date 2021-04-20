const validadores = {
  dataNascimento: function(input) {
    return validaDataNascimento(input);
  }
}


export function valida(input) {
  let tipoInput = input.dataset.tipo;

  if (validadores[tipoInput]) {
    validadores[tipoInput](input);
  }
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
