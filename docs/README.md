# Quake log parser

## Task 1 - Construa um parser para o arquivo de log games.log.

O arquivo games.log é gerado pelo servidor de quake 3 arena. Ele registra todas as informações dos jogos, quando um jogo começa, quando termina, quem matou quem, quem morreu porque caiu no vazio, quem morreu machucado, entre outros.

O parser deve ser capaz de ler o arquivo, agrupar os dados de cada jogo, e em cada jogo deve coletar as informações de morte.

### Exemplo

      21:42 Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT
  
  O player "Isgalamido" morreu pois estava ferido e caiu de uma altura que o matou.

      2:22 Kill: 3 2 10: Isgalamido killed Dono da Bola by MOD_RAILGUN
  
  O player "Isgalamido" matou o player Dono da Bola usando a arma Railgun.
  
Para cada jogo o parser deve gerar algo como:

    game_1: {
        total_kills: 45,
        players: ["Dono da bola", "Isgalamido", "Zeh"],
        kills: {
          "Dono da bola": 5,
          "Isgalamido": 18,
          "Zeh": 20
        }
    }


### Observações

1. Quando o `<world>` mata o player ele perde -1 kill.
2. `<world>` não é um player e não deve aparecer na lista de players e nem no dicionário de kills.
3. `total_kills` são os kills dos games, isso inclui mortes do `<world>`e suicídios.
4. Caso o player mate a si próprio, não deverá ser contabilizado no dicionários de kills

## Task 2 - Após construir o parser construa uma API que faça a exposição de um método de consulta que retorne a lista de jogos e permita busca por jogo individualmente.


# Requisitos

1. Use a linguagem que você tem mais habilidade (temos preferência por node.js/javascript e python, mas pode ser usado qualquer linguagem desde que explicado a preferência).
2. As APIs deverão seguir o modelo RESTFul com formato JSON  
3. Faça testes unitários, suite de testes bem organizados. (Dica: De uma atenção especial a esse item!)
4. Use git e tente fazer commits pequenos e bem descritos.
5. Faça pelo menos um README explicando como fazer o setup, uma explicação da solução proposta, o mínimo de documentação para outro desenvolvedor entender seu código
6. Siga o que considera boas práticas de programação, coisas que um bom desenvolvedor olhe no seu código e não ache "feio" ou "ruim".
7. Após concluir o teste suba em um repositório privado e nos mande o link.

OBS: Pode usar GitHub, BitBucket, GitLab, entre outros.

# Resposta
A resposta esperada está dentro do arquivo `response.json`, qualquer dúvida entre em contato conosco.

HAVE FUN :)
