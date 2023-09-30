# Projeto CRUD em Node.js com Sequelize (Backend) e React (Frontend)

## Descrição

Este projeto é um aplicativo simples de CRUD (Create, Read, Update, Delete) desenvolvido em Node.js no backend e React no frontend. Ele utiliza o Sequelize como ORM para interagir com o banco de dados MySQL e Express para gerenciar as rotas no backend. No frontend, React Router é usado para a navegação entre telas e o Axios para fazer requisições HTTP.

O projeto permite gerenciar usuários e seus endereços. As principais funcionalidades incluem adicionar, excluir, editar e visualizar usuários. Além disso, é possível adicionar e remover endereços associados a cada usuário.

## Configuração do Backend (Node.js)

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
2. **Navegue até o diretório do backend:**

    ```bash
    cd nome-do-repositorio/backend
3. **Instale as dependências:**

    ```bash
    npm install
4. **Configure o arquivo .env com as informações do seu banco de dados.**
5. **Agora vamos subir o banco de dados no Docker.**

## Configuração do Banco de Dados (MySQL) com Docker

1. **Instale o Docker: https://docs.docker.com/get-docker/**

2. **Crie e Inicie um Contêiner MySQL:**
    ```bash
    docker run -d -p 3000:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -v ./algumapasta/dadosmysql:/var/lib/mysql mysql:5.7
escolha uma pasta no seu computador para guardar as informações do banco de dados localmente.

## Configuração do Frontend (React)
1. **Navegue até o diretório do frontend:**
   ```bash
   cd nome-do-repositorio/frontend
   
2. **Instale as dependências:**
    ```bash
    npm install
    
3. **Inicie o aplicativo React:**
    ```bash
    npm dev
O aplicativo estará disponível em http://localhost:4000.

## Funcionalidades

### Criar Usuário

- Acesse a página de criação de usuário.
- Preencha o formulário e clique em "Salvar".

### Editar Usuário

- Acesse a página de edição de usuário.
- Faça as alterações desejadas e clique em "Atualizar".
- Adicione ou remova endereços associados ao usuário.

### Listar Usuários

- Visualize a lista de usuários cadastrados.
- Clique em um usuário para visualizar detalhes.

### Visualizar Usuário

- Acesse a página de visualização de usuário.
- Veja informações detalhadas e endereços associados.

### Adicionar/Remover Endereço

- Na página de edição do usuário, é possível adicionar novos endereços ou remover os existentes.

## Tecnologias Utilizadas

### Backend (Node.js)

- [Express.js](https://expressjs.com/) - Framework web para Node.js.
- [Sequelize](https://sequelize.org/) - ORM (Object-Relational Mapping) para interação com o banco de dados.
- [MySQL](https://www.mysql.com/) - Banco de dados relacional utilizado para armazenar dados.
- [dotenv](https://www.npmjs.com/package/dotenv) - Pacote para carregar variáveis de ambiente a partir de um arquivo `.env`.

### Banco de Dados (MySQL) com Docker

- [Docker](https://www.docker.com/) - Plataforma para desenvolvimento, envio e execução de aplicativos em contêineres.
- [MySQL Docker Image](https://hub.docker.com/_/mysql) - Imagem oficial do MySQL para uso com Docker.

### Frontend (React)

- [React.js](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
- [React Router Dom](https://reactrouter.com/web/guides/quick-start) - Roteamento para aplicativos React.
- [Axios](https://axios-http.com/) - Cliente HTTP para fazer requisições HTTP.


