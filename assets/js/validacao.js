let dataInput = document.querySelector('#nascimento');


dataInput.addEventListener('blur', (event) => {

  let dataRecebida = new Date(event.target.value);
  let mensagem = '';


  if (!ehMaiorDeIdade(dataRecebida)) {
    mensagem = 'Você deve ser maior que 18 anos para se cadastrar.';
  }

  event.target.setCustomValidity(mensagem);
})


function ehMaiorDeIdade(dataNascimento) {
  const dataAtual = new Date();

  let ehMaiorDeIdade = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate());

  return dataAtual >= ehMaiorDeIdade;
}
