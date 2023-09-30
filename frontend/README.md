# Projeto CRUD em Node.js com Sequelize (Backend) e React (Frontend)

## Descrição

Este projeto é um aplicativo simples de CRUD (Create, Read, Update, Delete) desenvolvido em Node.js no backend e React no frontend. Ele utiliza o Sequelize como ORM para interagir com o banco de dados MySQL e Express para gerenciar as rotas no backend. No frontend, React Router é usado para a navegação entre telas e o Axios para fazer requisições HTTP.

O projeto permite gerenciar usuários e seus endereços. As principais funcionalidades incluem adicionar, excluir, editar e visualizar usuários. Além disso, é possível adicionar e remover endereços associados a cada usuário.

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

### Frontend (React)

- [React.js](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
- [React Router Dom](https://reactrouter.com/web/guides/quick-start) - Roteamento para aplicativos React.
- [Axios](https://axios-http.com/) - Cliente HTTP para fazer requisições HTTP.


