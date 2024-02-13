# Cartão Digital CLI
> Gera um cartão digital no terminal ou em JSON através de flags.

## **Funcionalidades:**
* Exibe informações de contato, como nome, e-mail, GitHub e LinkedIn.
* Permite personalizar cores e estilo do cartão.
* Suporta diferentes formatos de saída, como texto simples e JSON.

## **Uso**
> _**Implementação do cartão dentro do NPX em breve.**_
### **Flags**

#### _Entrada de valores_
`-t ou --title` | Define a string atrelada ao título do cartão (texto no topo);

`--si` | Define se irá contar o sessionId ou não no cartão; 

`-n ou --nome` | Define a string atrelada ao atributo nome;

`-em --email` | Define a string atrelada ao e-mail;

`-g ou --github` | Define a string atrelada ao atributo GitHub;

`-li ou --linkedin` | Define a string atrelada ao atributo LinkedIn;

`-s ou --stacks` | Define a string atrelada ao atributo das stacks;

`-m --message` | Define a mensagem que será implementada no cartão;

#### _Configurações do card no CLI_

> O cartão utiliza o [BOXEN](https://github.com/sindresorhus/boxen/tree/main) como dependencia e as tags de configuração da box são atreladas diretamente a ele, os parametros estão mais detalhados na documentação da biblioteca.

##### `-tp --title-position` 
Define a posição da string de título;
##### `-ac --accent-color` 
Define a cor que ira ser colocada na borda e nos textos dos parâmetros **(_Valor em HEX "#ffffff")_**;
#####  `-bs --border-style` 
Define o tipo da borda do cartão;
##### `-bc --border-color`
Define a cor da borda do cartão (caso esse parâmetro seja invocado ele ira sobrescrever o -ac na borda) **(_Valor em HEX "#ffffff")_**
##### `-o --output`
Define o tipo de saída do cartão (JSON ou CLI);

## Requisitos

* Node.js v14 ou superior;