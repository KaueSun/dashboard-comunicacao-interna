# dashboard-comunicacao-interna
Protótipo de dashboard de comunicação interna utilizando API REST JSONPlaceholder e arquitetura MVC.

# Análise dos recursos disponíveis no JSONPlaceholder
Para o desenvolvimento do protótipo do Dashboard de Comunicação Interna, foram analisados os recursos disponibilizados pela API JSONPlaceholder.
Entre eles, os mais adequados para o projeto são:

- /posts — fornece a lista de publicações que representarão os comunicados e postagens do feed principal
- /users — fornece os dados dos autores das publicações, como nome e e‑mail
- /comments — fornece os comentários relacionados às postagens, permitindo simular interações entre os funcionários

A documentação oficial também disponibiliza rotas relacionadas como:
- /posts/1/comments — retorna os comentários de uma postagem específica
- /comments?postId=1 — permite filtrar comentários por postagem
Esses recursos facilitam a integração entre os dados utilizados no protótipo.

A API também suporta métodos HTTP:
GET
POST
PUT
PATCH
DELETE
Porém, as operações de escrita são apenas simuladas, não persistindo dados no servidor.

# Histórias de Usuário
- US01 — Como funcionário, desejo ver uma lista com as postagens recentes no feed principal para me manter atualizado sobre os comunicados da empresa.
- US02 — Como funcionário, desejo visualizar o nome e o e‑mail do autor da postagem para saber quem redigiu o comunicado.
- US03 — Como funcionário, desejo poder expandir e ler os comentários de uma postagem específica para acompanhar o engajamento e as dúvidas da equipe.
- US04 — Como funcionário, desejo receber um aviso amigável na tela caso o sistema esteja temporariamente indisponível, para que eu não fique esperando a página carregar infinitamente.

# Restrições Não Funcionais
## Tolerância a falhas
O sistema deve implementar timeout máximo de 5 segundos para requisições à API.
Caso esse tempo seja excedido:
- a operação será cancelada
- o usuário receberá uma mensagem informando falha na comunicação com o servidor

## Tratamento de erros
Respostas HTTP fora da faixa de sucesso, como:
- 404 Not Found
- 500 Server Error
devem ser interceptadas pela aplicação, impedindo que a interface quebre.
Nesses casos, o sistema deve exibir mensagens como:
"Falha na sincronização"
"Não foi possível carregar os dados no momento"

## Disponibilidade da interface
Mesmo em caso de erro na API, a aplicação deve continuar responsiva, preservando:
- cabeçalho
- estrutura da página
- área de mensagens
evitando telas em branco.

## Usabilidade
As mensagens de erro devem ser:
- simples
- visíveis
- compreensíveis
permitindo que o usuário entenda rapidamente que houve um problema de comunicação com a API.

# Arquitetura do Sistema
## Padrão Arquitetural MVC
O protótipo foi organizado utilizando o padrão Model‑View‑Controller (MVC) para separar responsabilidades no código.

Model
Responsável por:
- realizar requisições HTTP para a API JSONPlaceholder
- manipular os dados recebidos em formato JSON

View
Responsável por:
- renderizar a interface do usuário
- exibir usuários, postagens e comentários na tela

Controller
Responsável por:
- controlar o fluxo da aplicação
- solicitar dados ao Model
- enviar os dados para serem exibidos na View

# Tratamento de Falhas e Resiliência
Como os dados são obtidos de uma API externa, o sistema implementa estratégias de resiliência.

Timeout
- As requisições possuem timeout de 5 segundos.
- Caso a API demore mais que esse tempo para responder, a requisição é cancelada.

# Tratamento de exceções
O sistema utiliza try/catch para capturar erros de rede ou respostas HTTP inválidas.
Exemplos de erros tratados:
- 404 (Not Found)
- 500 (Server Error)
Nesses casos, o sistema exibe um aviso ao usuário sem quebrar a interface.

# Como executar o projeto
Clonar o repositório
git clone https://github.com/KaueSun/dashboard-comunicacao-interna.git

Entrar na pasta
cd dashboard-comunicacao-interna

Executar servidor local
Como o projeto utiliza módulos JavaScript, é necessário rodar um servidor local.

python -m http.server
ou

python3 -m http.server

# Endpoints Utilizados
Listar usuários:
https://jsonplaceholder.typicode.com/users

Listar postagens de um usuário:
https://jsonplaceholder.typicode.com/posts?userId=1

Listar comentários de uma postagem:
https://jsonplaceholder.typicode.com/posts/1/comments

# Testando a API pelo terminal

Listar usuários
curl https://jsonplaceholder.typicode.com/users

Ver postagens de um usuário
curl https://jsonplaceholder.typicode.com/posts?userId=1

Ver comentários de uma postagem
curl https://jsonplaceholder.typicode.com/posts/1/comments
Visualizar JSON formatado

Se tiver jq instalado:
curl https://jsonplaceholder.typicode.com/users | jq
