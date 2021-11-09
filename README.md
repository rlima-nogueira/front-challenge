# FrontChallenge #

<span> Para inicializar este projeto é necessário ter o pacote node instalado na máquina. </span>


<span>1. Instale a node_modules</span>

``` npm i ```

<span>2. Rode o comando para startar o projeto</span>

``` npm run start ```

<span>O projeto deve startar no endereço: http://localhost:4200 </span>

<p>Você pode subir essa aplicação através de um container. Para isso, você precisa estar rodando o docker na sua máquina e então executar os seguintes comandos: </p>

``` docker build -t rlimanogueira/front-challenge . ```

```docker run -d -p 80:80/tcp --name todo-app rlimanogueira/front-challenge ```

<p>A aplicação irá abrir no seguinte endereço: http://localhost/index.html</p>

