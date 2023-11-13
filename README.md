# Mantis Material React Next

Este é um projeto Next.js que utiliza várias bibliotecas populares, incluindo Material-UI, Redux, etc.

## Executando com Docker

Certifique-se de ter o Docker instalado em sua máquina.

### 1. Construa a Imagem Docker

Abra um terminal na pasta do projeto onde está localizado o arquivo Dockerfile e execute o seguinte comando para construir a imagem Docker:

```bash
docker build -t Projeto-Azul .

```

#### Depois de construir a imagem, execute o seguinte comando para iniciar o contêiner:

``` bash 

  docker run -p 8080:8080 -d Projeto-Azul

```

####  Abra um navegador e acesse http://localhost:8080 para visualizar o aplicativo.\

##### Se você precisar parar o contêiner em algum momento, use o seguinte comando:

``` bash

  docker stop Projeto-Azul

```