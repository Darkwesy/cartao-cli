# Cartão Digital CLI
> Gera um cartão digital no terminal ou em JSON através de flags.

## **Funcionalidades:**
* Exibe informações de contato, como nome, email, GitHub e LinkedIn.
* Permite personalizar cores e estilo do cartão.
* Suporta diferentes formatos de saída, como texto simples e JSON.

## **Uso**
> _**Implementação do cartão dentro do NPX em breve.**_
### **Flags**

#### _Entrada de valores_
`-t ou --title` | Define a string atrelada ao titulo do cartão (texto no topo);

`--si` | Define se irá contar o sessionId ou não no cartão; 

`-n ou --nome` | Define a string atrelada ao atributo nome;

`-em --email` | Define a string atrelada ao email;

`-g ou --github` | Define a string atrelada ao atributo github;

`-li ou --linkedin` | Define a string atrelada ao atributo linkedin;

`-s ou --stacks` | Define a string atrelada ao atributo das stacks;

`-m --message` | Define a mensagem que será implementada no cartão;

#### _Configurações do card no CLI_

`-tp --title-position` | Define a posição da string de titulo;

`-ac --accent-color` | Define a cor que ira ser colocada na borda e nos textos dos parametros;

`-bs --border-style` | Define o tipo da borda do cartão;

`-bc --border-color`| Define a cor da borda do cartão (caso esse parametro seja invocado ele ira sobescrever o -ac na borda);

`-o --output` | Define o tipo de saida do cartão (JSON ou CLI);

## Requisitos

* Node.js v14 ou superior;