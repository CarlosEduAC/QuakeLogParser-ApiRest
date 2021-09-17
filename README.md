<div class="bg-gray-dark">
  <h1 align="center">
    Desafio Quake Log Parser
  </h1>
</div>

<p align="center">
  <a href="https://www.linkedin.com/in/carloseac/">
    <img alt="Carlos Cardoso" src="https://img.shields.io/badge/-CarlosEAC-009db9?style=flat&logo=Linkedin&logoColor=white" />
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/CarlosEduAC/QuakeLogParser-ApiRest?color=009bd9">

  <a href="https://github.com/CarlosEduAC/QuakeLogParser-ApiRest/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/CarlosEduAC/QuakeLogParser-ApiRest?color=009bd9">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-009db9">

  <a href="https://github.com/CarlosEduAC/QuakeLogParser-ApiRest/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/CarlosEduAC/QuakeLogParser-ApiRest?color=009db9&logo=github">
  </a>
</p>

<div align="center">
  <sub>Desafio Backend Luiza Labs. Construído por
    <a href="https://github.com/CarlosEduAC">Carlos Eduardo Cardoso</a>
  </sub>
</div>

## :pushpin: Tabela de Conteúdo

<!-- * [Site de Demostração](#eyes-site-de-demostração)  -->
* [Sobre](#one-sobre-o-projeto)
* [Tecnologias](#two-tecnologias)
* [Funcionalidades](#three-funcionalidades)
* [Como rodar](#construction_worker-como-rodar)
* [Licencia](#closed_book-licencia)

## :one: Sobre o Projeto


## :two: Tecnologias
Esse projeto foi feito utilizando as seguintes tecnologias:

* [Typescript](https://www.typescriptlang.org/)
* [NodeJS](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Swagger](https://swagger.io/)
* [Jest](https://jestjs.io/)

## :three: Funcionalidades

API REST para manter uma coleção de planetas do universo Star Wars. Dando a possibilidade de:

* Listar jogos
* Buscar por jogo

Para facilitar na visualização, desemvolvimento e documentação da API, foi utilizado
o [Swagger](https://swagger.io/).

### :camera: Swagger Screenshot
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
  <!-- <img src="./.github/Swagger.png" width="800px">
  <img src="./.github/Swagger-Get.png" width="800px">
  <img src="./.github/Swagger-FindById.png" width="800px"> -->
</div>

Uma outra opção é o [Insominia](https://insomnia.rest/), que diferente do [Swagger](https://swagger.io/) não necessita de nenhuma configuração no projeto para funcionar.

### :camera: Insominia Screenshot
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
  <!-- <img src="./.github/Get.png" width="800px">
  <img src="./.github/FindById.png" width="800px"> -->
</div>

## :four: Como rodar

### 📦 Rode a API

```bash
# Clone o Repositoria
$ git clone https://github.com/CarlosEduAC/QuakeLogParser-ApiRest
```

```bash
# Vá para a pasta do servidor
$ cd QuakeLogParser-ApiRest

# Instale as depedencias
$ yarn install

# Rode a aplicação
$ yarn dev:server
```
Acesse a API: http://localhost:3333/

### Testes

O Projeto conta com testes de integração e unitário.

Lembre de adicionar a variável de ambiente MONGO_URL_TEST.

```bash
# Rode os testes
$ yarn test
```

### :camera: Testes Screenshot
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
  <img src="./.github/Testes.png" width="800px">
</div>

## :closed_book: Licencia

Lançado em 2021 :closed_book: Licencia

Construído por [Carlos Cardoso](https://github.com/CarlosEduAC) 🚀.
Esse projeto esta sobre [MIT license](./LICENSE).
