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

Projeto composto por duas tasks. Na primeira é necessário construir uma parser para o arquivo de log [games.log](https://github.com/CarlosEduAC/QuakeLogParser-ApiRest/blob/main/src/data/games.log) gerando o arquivo [response.json](https://github.com/CarlosEduAC/QuakeLogParser-ApiRest/blob/main/src/data/response.json) como resposta.

O parser é capaz de ler o arquivo, agrupar os dados de cada jogo, e em cada jogo coleta as informações de morte.

Para cada jogo o parser deve gerar algo como:

```bash
game_1: {
  total_kills: 45,
  players: ["Dono da bola", "Isgalamido", "Zeh"],
  kills: {
    "Dono da bola": 5,
    "Isgalamido": 18,
    "Zeh": 20
  }
}
```

Na segunda task é necessário construir uma API Rest com métodos de consulta que retorna uma lista de jogos e permita busca por jogo individualmente. Um adicional foi a cruação de um método para startar o parser.

A estrutura do projeto é simples e seguindo boas práticas, porém preparada para adição de conceitos como DDD e CQRS que permitem uma maior qualidade, escalabilidade, disponibilidade e entendimento do contexto do projeto (clean architecture).

Um detalhe importante foi a escolha do Typescript, NodeJS e Express para a construção da REST API. O Typescript se trata de um superset da conhecida linguagem de programação Javascript que adiciona algumas features interessantes que facilitam n aplicação de conceitos de DDD e CQRS para uma melhor estruturação da arquitetura do projeto , melhora o uso de orientação a objetos, adiciona tipagem que facilita na percepção dos objetos que estão sendo usados durante o desenvolvimento.

Obs.: Na branch [using-mongodb](https://github.com/CarlosEduAC/QuakeLogParser-ApiRest/tree/feature/using-mongodb) foi configurado o [mongodb](https://www.mongodb.com/cloud/atlas?utm_content=rlsapostreg&utm_source=google&utm_campaign=gs_americas_rlsamultirest_search_brand_dsa_atlas_desktop_rlsa_postreg&utm_term=&utm_medium=cpc_paid_search&utm_ad=b&utm_ad_campaign_id=14412646452&gclid=CjwKCAjw4qCKBhAVEiwAkTYsPLtYS8Wc_iyOGqEahpdA3OvLPc-b_3EnewduAGKGeoyTV_Z7lMcBfhoCSvQQAvD_BwE) que armazena as informações do log no [MongoDB Atlas](https://www.mongodb.com/pt-br/cloud/atlas/efficiency). A ideia era a de armazenar as informações dos jogos e continuar tendo acesso mesmo após desconectar a Api, já que as informações estão em uma instância de banco remota.

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
* Fazer Parser do QuakeLog (Método Post realiza o processo de Parser e gera o arquivo response.json)

Para facilitar na visualização, desemvolvimento e documentação da API, foi utilizado
o [Swagger](https://swagger.io/).

### :camera: Swagger Screenshot
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
  <img src="./.github/Swagger.png" width="800px">
  <img src="./.github/Swagger-Get.png" width="800px">
  <img src="./.github/Swagger-Post.png" width="800px">
  <img src="./.github/Swagger-FindById.png" width="800px">
</div>

Uma outra opção é o [Insominia](https://insomnia.rest/), que diferente do [Swagger](https://swagger.io/) não necessita de nenhuma configuração no projeto para funcionar.

### :camera: Insominia Screenshot
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
  <img src="./.github/Get.png" width="800px">
  <img src="./.github/Post.png" width="800px">
  <img src="./.github/FindById.png" width="800px">
</div>

## :four: Como rodar

### 📦 Rode a API

```bash
# Clone o Repositório
$ git clone https://github.com/CarlosEduAC/QuakeLogParser-ApiRest
```

```bash
# Vá para a pasta do servidor
$ cd QuakeLogParser-ApiRest

# Instale as dependências
$ yarn install

# Rode a aplicação
$ yarn start:dev
```
Acesse a API: http://localhost:3333/

### Testes

O Projeto conta com testes unitários.

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
