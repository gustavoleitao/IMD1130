# O que esse programa faz?

Este programa realiza a comunicação com o banco de dados Redis e exporta através de requisições HTTP.

# Como executar?

Primeiramente, após o download, é necessário executar o seguinte comando para instalar as dependências:

```shell
$ npm install
```
Após instalar as dependências, execute o seguinte comando para iniciar a aplicação:

```shell
$ npm start 
```

# Como utilizar?

O programa exporta as seguintes rotas http na porta 3000:

- /ler/:key - Realiza a leitura da chave indicada pelo parâmetro :key
- /escrever/:key/:valor - Realiza a escrita na chave :key o valor do parâmetro da URL :valor
