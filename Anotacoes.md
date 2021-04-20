# Validações HTML5

## required
  `Ao tentar submeter formulários, informa que os campos devem ser preenchidos.`

## type=""
  `Informa o tipo de valor do campo => email, password, number, date, etc...`

## minlength=""
  `Quantidade miníma de caracteres necessarios.`"

## pattern="RegEx"
  `Expressão regular para validação de campos.`""
  `Ex RegEx: ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$`

### title="mensagem"
  `A mensagem que será informada caso o pattern solicitado não seja correspondente.`
  `OBS: title só funciona como mensagem para o pattern`
## elemento.setCustomValidity(mensagem);
  `Mostra uma mensagem de erro para o elemento selecionado.`
  `Use uma string vazia para informar que o elemento não possue nenhum erro.`
## Mensagens de erro customizadas

### input.validity
  `Todos os inputs possuem a propriedade validity`
  `A partir dessa propriedade podemos checar e customizar os erros do input`

#### input.validity.valid
  `Verifica todas as propriedades de validação e informa se o input está valido`

#### input.validity.valueMissing
  `Verifica se o campo está vazio`

#### input.validity.typeMismatch
  `Verifica se os dados digitados são do tipo correto ->> type='text, email, number'`

#### input.validity.patternMismatch
  `Verifica se os dados digitados são válidos conforme o pattern / RegEx informados`

#### input.validity.customError
  `Verifica se os dados digitados são válidos conforme o erro customizado criado com elemento.setCustomValidity()`

  

