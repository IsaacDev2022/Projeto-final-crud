# Projeto final da matéria: Desenvolvimento de Backend

Trata-se de uma API simples feita em Node JS e Express para cadastro de tarefas. O banco usado para o registro dos dados foi o PostgreSQL. A API possui ao todo 7 rotas, que estão listadas logo abaixo:

    POST - Criar uma tarefa.
    GET - Buscar todas a tarefas e retornar em forma de lista.
    GET - Buscar uma tarefa específica passando o ID.
    PUT - Atualizar uma tarefa usando o argumento PUT.
    PATCH - Atualizar uma tarefa usando o argumento PATCH.
    DELETE - Deletar uma tarefa passando o ID como parametro da rota.
    DELETE - Deletar todas as tarefas.

Para realizar todas as funções do CRUD, é recomendado usar Postman ou semelhante para testes de API.

## Dependências principais do projeto:

     "dependencies": {
        "cors": "^2.8.5",
        "dotenv": "^16.0.3",
        "express": "^4.18.2",
        "express-promise-router": "^4.1.1",
        "pg": "^8.10.0"
      }
    
## Tutorial para baixar o projeto:
### 1. Primeiro, faça um clone do projeto na máquina local:
     git clone https://github.com/IsaacDev2022/Projeto-final-crud.git
     
### 2. Após isso, instale as dependências necessárias:
     npm install
     
### 3. Abra o arquivo create.sql dentro da pasta database e depois execute os comandos SQL de criação do banco de dados e da tabela.
### 4. Vá para o arquivo .env e edite a senha dentro da URL para a senha local.
    DATABASE_URL=postgres://postgres:{senha_local}@localhost:5432/projeto-final-crud
    
### 5. Após isso, para rodar o projeto, basta usar o comando:
    node server
