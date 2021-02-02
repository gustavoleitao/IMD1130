# Como usar?

Primeiramente, crie uma imagem Docker através do comando a seguir:

```shell
$ docker build -t aula05-nosql .
```
> aula05-nosql será o nome da imagem a ser gerada

Após a criação da imagem, execute o seguinte comando para iniciar:

```shell
$ docker run -d aula05-nosql
```

Se desejar acessar o servidor do contêiner, é necessário criar um mapeamento de porta:

```shell
$ docker run -p 8080:3000 -d aula05-nosql
```

Após isso, você poderá acessar a aplicação no navegador através do endereço: ```http://localhost:8080```

A aplicação possui duas rotas:

- /escrever - cria uma entrada no arquivo de log /tmp/data.log
- /ler - realiza a leitura do arquivo de log (/tmp/data.log) e retorna ao usuário o seu conteúdo

Como a aplicação é executada em um contêiner, os arquivos serão salvos no próprio contêiner. Dessa forma, caso o contêiner seja removido os dados também serão.

Para dar um tratamento mais dedicado aos dados, é necessário utilizar um volume. Para isso, criar um contêiner realizando um mapeamento de volume, você pode usar o comando abaixo:

```shell
$ docker run -d -p 8080:3000 -v /tmp/data-log/:/tmp/ aula05-nosql
```

Executando com o comando acima, os arquivos da pasta /tmp do contêiner serão mapeados para a pasta /tmp/data-log do host. Dessa forma, mesmo que o contêiner seja removido, os dados permanecerão salvos no host.

Uma outra alternativa é criar previamente um volume:

```shell
$ docker volume create dados-nosql
```

Em seguida execute o comando abaixo, para utilizar o volume recém criado:

```shell
$ docker run -d -p8080:3000 -v dados-nosql:/tmp/ aula05-nosql
```
Desta nova forma, o volume será nomeado e, portanto, mais fácil de ser gerenciado. Para mais informações sobre o volume você pode usar o comando a seguir:

```shell
$ docker volume inspect dados-nosql
```
