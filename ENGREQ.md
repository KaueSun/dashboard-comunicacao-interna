# Análise dos recursos disponíveis no JSONPlaceholder
## Para o desenvolvimento do protótipo do Dashboard de Comunicação Interna, foram analisados os recursos disponibilizados pela API JSONPlaceholder. Entre eles, os mais adequados para o projeto são:

   - /posts: fornece a lista de publicações que representarão os comunicados e postagens do feed principal;

   - /users: fornece os dados dos autores das publicações, como nome e e-mail;

   - /comments: fornece os comentários relacionados às postagens, permitindo simular interações entre os funcionários.

## A documentação oficial também disponibiliza rotas relacionadas, como /posts/1/comments, que permite obter os comentários de uma postagem específica, e filtros por parâmetros, como /comments?postId=1, o que facilita a integração entre os dados do protótipo. Além disso, a API suporta métodos HTTP como GET, POST, PUT, PATCH e DELETE, embora as alterações sejam apenas simuladas, sem persistência real no servidor. 

# Histórias de usuário
   - US01: Como funcionário, desejo ver uma lista com as postagens recentes no feed principal para me manter atualizado sobre os comunicados da empresa.

   - US02: Como funcionário, desejo visualizar o nome e o e-mail do autor da postagem para saber quem redigiu o comunicado.

   - US03: Como funcionário, desejo poder expandir e ler os comentários de uma postagem específica para acompanhar o engajamento e as dúvidas da equipe.

   - US04: Como funcionário, desejo receber um aviso amigável na tela caso o sistema esteja temporariamente indisponível, para que eu não fique esperando a página carregar infinitamente.

# Restrições não funcionais
   - Tolerância a falhas: O sistema deve implementar timeout máximo de 5 segundos para requisições à API. Caso esse tempo seja excedido, a operação deverá ser cancelada e o usuário deverá receber uma mensagem informando que houve falha de comunicação com o servidor.

   - Tratamento de erros: Respostas HTTP fora da faixa de sucesso, como 404 ou 500, devem ser interceptadas pela aplicação, impedindo que a interface quebre. Nesses casos, o sistema deve exibir um alerta visual com mensagem como “Falha na sincronização” ou “Não foi possível carregar os dados no momento”.

   - Disponibilidade da interface: Mesmo em caso de erro na API, a aplicação deve continuar responsiva, preservando cabeçalho, estrutura da página e área de mensagens, evitando tela em branco.

   - Usabilidade: As mensagens de erro devem ser simples, visíveis e compreensíveis, para que o usuário entenda rapidamente que o problema está na comunicação com a API e não em uma ação incorreta dele.

   - Desempenho percebido: Enquanto os dados estiverem sendo carregados, o sistema deve apresentar um indicador visual de carregamento, deixando claro que a requisição está em andamento.

# Observação sobre o escopo do protótipo
### Como o JSONPlaceholder é uma API pública voltada para testes, o escopo do protótipo ficará concentrado em consulta e exibição de dados, e não em persistência real. Assim, o objetivo principal será validar a interface, a navegação e a integração Cliente-Servidor, simulando o comportamento esperado de um dashboard corporativo. A própria documentação informa que as operações de criação, edição e exclusão são apenas simuladas.