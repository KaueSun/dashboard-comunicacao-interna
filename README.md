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

# Documento de Requisitos do Produto (PRD)

## 1. Visão Geral do Produto
O Dashboard de Comunicação Interna é um protótipo de aplicação web desenvolvido para fins acadêmicos na disciplina de Engenharia de Software. O sistema atua como um cliente frontend puro (Single Page Application ou páginas estáticas conectadas) que consome dados da API pública JSONPlaceholder. Ele simula um ambiente corporativo onde os funcionários podem ler postagens recentes, identificar os autores e acompanhar os comentários, garantindo uma interface resiliente e responsiva a falhas de rede.

## 2. Objetivos
* **Principal:** Centralizar a exibição de postagens, perfis de usuários e comentários de uma empresa em uma interface única.
* **Acadêmico:** Demonstrar a aplicação prática do padrão de arquitetura MVC (Model-View-Controller) no frontend, realizando requisições HTTP assíncronas e lidando com cenários de erro e latência.

## 3. Público-alvo
* **Usuários Simulados:** Funcionários da empresa que precisam se manter atualizados sobre os comunicados internos.
* **Público Real:** Professores e avaliadores do curso de Engenharia de Software que analisarão a arquitetura, o código e o cumprimento dos requisitos.

## 4. Histórias de Usuário
Para guiar o desenvolvimento, as seguintes histórias de usuário foram definidas:

1. Como funcionário, desejo ver postagens recentes para me manter informado sobre os comunicados da empresa.
2. Como funcionário, desejo ver o autor da postagem (nome e e-mail) para saber quem a publicou.
3. Como funcionário, desejo visualizar os comentários de uma postagem para acompanhar as discussões da equipe.
4. Como funcionário, desejo receber um aviso claro e amigável em caso de erro no sistema para entender por que a informação não foi carregada.

## 5. Requisitos do Sistema

### 5.1 Requisitos Funcionais (RF)
* **RF01:** O sistema deve consumir a API JSONPlaceholder para buscar dados.
* **RF02:** O sistema deve listar um máximo de 4 usuários na interface.
* **RF03:** O sistema deve exibir os detalhes dos usuários (Nome e E-mail).
* **RF04:** Ao selecionar um usuário, o sistema deve carregar e exibir o título e o conteúdo de suas postagens.
* **RF05:** Para cada postagem, o sistema deve permitir a visualização dos dados dos comentários associados.
* **RF06:** O sistema deve operar de forma "Somente Leitura" (Read-only), utilizando exclusivamente o método HTTP GET.

### 5.2 Requisitos Não Funcionais (RNF)
* **RNF01 (Desempenho):** O sistema deve abortar requisições que ultrapassem o limite de *timeout* de 5 segundos.
* **RNF02 (Resiliência):** A interface do usuário não deve "quebrar" ou congelar em caso de falhas nas requisições.
* **RNF03 (Tratamento de Erros):** O sistema deve interceptar e tratar erros HTTP (ex: 404 Not Found, 500 Internal Server Error) e falhas de rede.
* **RNF04 (Usabilidade):** Mensagens de erro devem ser exibidas de forma amigável ao usuário (ex: "Não foi possível carregar as postagens no momento. Tente novamente mais tarde.").
* **RNF05 (Tecnologia):** A camada de visualização (View) deve ser construída utilizando HTML e CSS.
* **RNF06 (Persistência):** O sistema não deve possuir banco de dados próprio (sem persistência local de estado complexo).

## 6. Arquitetura do Sistema
O projeto adota o padrão arquitetural **MVC (Model-View-Controller)** implementado puramente no lado do cliente (Client-Server, sem backend próprio).

* **Model:** Responsável pela lógica de acesso aos dados. Conterá as funções assíncronas (ex: `fetch` ou `axios`) que realizam as chamadas HTTP GET para os endpoints do JSONPlaceholder (`/users`, `/posts`, `/comments`). Também gerenciará o *timeout* de 5 segundos.
* **View:** Responsável pela interface gráfica do usuário. Construída com HTML e CSS, ela exibirá os dados recebidos e os alertas de erro. Será atualizada dinamicamente pelo Controller.
* **Controller:** Atua como o maestro do sistema. Recebe as interações do usuário na View (como um clique no perfil de um usuário), solicita os dados correspondentes ao Model, processa possíveis erros e atualiza a View com o resultado (os dados ou a mensagem de erro amigável).

## 7. Fluxo do Usuário
1. **Acesso Inicial:** O usuário abre a página do Dashboard.
2. **Carregamento:** O Controller chama o Model para buscar a lista de usuários.
   * **Caminho Feliz:** A API retorna com sucesso. O Controller filtra os 4 primeiros usuários e atualiza a View.
   * **Exceção:** A API demora mais de 5s ou retorna erro. O Controller instrui a View a exibir um alerta amigável de erro no carregamento.
3. **Interação:** O usuário clica em um dos 4 perfis exibidos.
4. **Busca de Postagens:** O Controller solicita ao Model as postagens daquele usuário específico.

# PROMPT:

Estou desenvolvendo um projeto e preciso que você crie um PRD completo com base nas seguintes informações:

O produto é um "Dashboard de Comunicação Interna"
objetivo: centralizar postagens, comentários e perfis de usuários de uma empresa.

O sistema é um protótipo que utiliza arquitetura cliente-servidor e consome dados de uma API REST pública chamada JSONPlaceholder, sem backend próprio.

Funcionalidades principais:
- Listar usuários (limitado a 4)
- Exibir postagens de um usuário
- Exibir comentários de uma postagem
- Mostrar informações como nome e e-mail do usuário, título e conteúdo da postagem, e dados dos comentários

Histórias de usuário:
- Como funcionário, desejo ver postagens recentes
- Como funcionário, desejo ver o autor da postagem
- Como funcionário, desejo visualizar comentários
- Como funcionário, desejo receber aviso em caso de erro

Arquitetura:
- Padrão MVC
- Model: consumo da API
- View: interface gráfica em HTML/CSS
- Controller: controle de fluxo

Restrições não funcionais:
- Timeout de 5 segundos nas requisições
- Tratamento de erros HTTP (404, 500)
- Interface deve continuar funcionando mesmo com falhas
- Mensagens de erro amigáveis ao usuário

Escopo:
- Apenas leitura de dados (GET)
- Sem persistência (API fake)

Com base nisso, gere um PRD estruturado contendo:
- Visão geral do produto
- Objetivos
- Público-alvo
- Funcionalidades
- Requisitos funcionais e não funcionais
- Arquitetura do sistema
- Fluxo do usuário
- Riscos e mitigação
