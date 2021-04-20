# Validações HTML5

## required
    Ao tentar submeter formulários, informa que os campos devem ser preenchidos.

## type=""
    Informa o tipo de valor do campo => email, password, number, date, etc...

## minlength=""
    Quantidade miníma de caracteres necessarios.

## pattern="RegEx"
    Expressão regular para validação de campos.
    Ex RegEx: ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$

### title="mensagem"
    A mensagem que será informada caso o pattern solicitado não seja correspondente.
    OBS: title só funciona como mensagem para o pattern

## elemento.setCustomValidity(mensagem);
    Mostra uma mensagem de erro para o elemento selecionado.
    Use uma string vazia para informar que o elemento não possue nenhum erro.

