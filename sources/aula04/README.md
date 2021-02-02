# Como usar?

Primeiramente, crie uma imagem Docker através do comando a seguir:

```shell
$ docker build -t aula03-nosql .
```
> aula03-nosql será o nome da imagem a ser gerada

Após a criação da imagem, execute o seguinte comando para iniciar:

```shell
$ docker run -d aula03-nosql
```

Se desejar acessar o servidor do contêiner, é necessário criar um mapeamento de porta:

```shell
$ docker run -p 8080:3000 -d aula03-nosql
```

Após isso, você poderá acessar a aplicação no navegador através do endereço: ```http://localhost:8080```
