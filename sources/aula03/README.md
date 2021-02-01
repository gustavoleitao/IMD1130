## Para criar a imagem docker, execute

```shell
$ docker build -t nosql-aula03 .
```
> nosql-aula03 será o nome da imagem a ser gerada

Após a criação da imagem, execute o seguinte comando para iniciar:

```shell
$ docker run -d nosql-aula03
```

Se desejar acessar o servidor do contêiner, é necessário criar um mapeamento de porta:

```shell
$ docker run -p 8080:3000 -d nosql-aula03
```

Após isso, você poderá acessar a aplicação no navegador através do endereço: ```http://localhost:8080```






