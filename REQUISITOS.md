Requisitos Relacionados com Interfaces Externas
    Interfaces com o Usuário: A aplicação deve ter uma interface web gráfica que exiba um feed de postagens, os detalhes dos autores, os comentários e alertas visuais de erro de conexão.

Interfaces com Outros Sistemas de Software: O sistema deve se integrar e consumir dados da API externa pública JSONPlaceholder.

Interfaces de Comunicação: A comunicação deve ser feita utilizando o protocolo HTTP/HTTPS através de requisições RESTful (verbos GET).

Requisitos Funcionais
    RF01: O sistema deve listar as postagens recentes no feed principal da aplicação.
    RF02: O sistema deve exibir o nome e o e-mail do autor correspondente a cada postagem carregada.
    RF03: O sistema deve permitir a visualização dos comentários associados a uma postagem.
    RF04: O sistema deve interceptar falhas na requisição de dados e exibir uma mensagem amigável de erro na tela para o usuário.

Requisitos de Desempenho
    Requisito de Desempenho 01: O sistema deve implementar um tempo limite (timeout) de 5 segundos para todas as requisições feitas à API externa, cancelando a operação se o tempo for excedido.