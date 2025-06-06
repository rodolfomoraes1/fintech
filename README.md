# Tech challenge 1

## Objetivo

Criar uma interface que permita aos usuários gerenciar suas transações financeiras.
Além disso, aplique os conceitos de Programação Orientada a Objetos (POO).

## Ferramentas

- nextjs
- pnpm
- tailwind css
- mui material
- typescript
- storybook
- postgreSQL

## Repositório

`https://github.com/rodolfomoraes1/fintech/`

## Criação do banco de dados

Para criar o seu banco de dados e conectar a aplicação siga o tutorial abaixo:

`https://nextjs.org/learn/dashboard-app/setting-up-your-database`

## Executar o projeto localmente

1 - Instalar dependências
`pnpm i`

2 - Executar o projeto
`pnpm run dev`

3 - Acessar a url
`localhost:3000`

4 - Para povoar o banco de dados acessar a url `/seed`
`localhost:3000/seed`

5 - Faça login com o usuário
email: `user@email.com`
password: `123456`

## Design System

1 - Executar o comando
`pnpm run storybook`

## Requisitos

### Home Page

- [x] Uma página inicial simples que dá boas-vindas aos usuários (landing page).
- [x] Exibir informações sobre o saldo da conta corrente e um extrato das últimas transações.
- [x] Incluir uma seção para iniciar uma nova transação, com opções para selecionar o tipo de transação e inserir o valor

### Listagem de Transações

- [x] Uma página que exibe a lista de transações realizadas, com opções para visualizar detalhes, editar e deletar cada transação.

### Adicionar Nova Transação

- [x] Uma página ou modal para adicionar uma nova transação ao banco de dados.
- [x] Formulário que deve incluir campos como tipo de transação (depósito,
      transferência, etc.), valor e data.

### Editar Transação

- [x] Uma página ou modal para editar as informações de uma transação existente

### Design system

- [x] Criar design system
- [x] Cores basicas
- [x] Componentes basicos de UI

### Adicionais

- [x] Login
- [x] Registrar (sem integração com BD)
- [x] Página "Em construção"
- [x] Página "Not found"
- [x] Breadcrumbs
- [x] Filtragem das transações
- [x] Páginação das transações
- [x] Páginas de erro
