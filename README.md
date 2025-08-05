# Tech Challenge

## Milestone 2

### Instruções

Acesse o projeto: 
   - URL: https://fintech-rmodhhoik-rodolfomoraes1s-projects.vercel.app/
   - Email: `user@email.com`  
   - Senha: `123456`

Operações no banco de dados:
   - acesse o endpoint `/seed` para povoar o banco de dados (utilizar com cuidado)
   - acesse o endpoint `/clean-seed` para limpar o banco de dados

### Objetivo

Aprimorar e escalar a aplicação de gerenciamento financeiro existente, utilizando uma arquitetura de microfrontends e garantindo integração e deploy eficientes em ambientes cloud.

---

## TODO

### Docker
- Containerização da aplicação e seus componentes, incluindo frontend e backend.
- Uso de Docker Compose ou Kubernetes para orquestração de múltiplos contêineres.

### React/Angular Avançado
- **Microfrontends:** Divisão da aplicação em microfrontends independentes, permitindo atualização e desenvolvimento isolado de cada módulo.

### Microfrontend
- Arquitetura utilizando Single SPA ou Module Federation para integrar diferentes frameworks (React e Angular).
- Estratégias de roteamento e comunicação entre microfrontends.

---

## DONE

### Listagem de Transações
- [x] Filtro e Pesquisa: implementar filtros avançados e funcionalidade de busca para facilitar a navegação nas transações.
- [x] Paginação e Scroll Infinito: adicionar paginação ou scroll infinito para otimizar o carregamento de grandes volumes de dados.

### Home Page
- [x] Atualização: incluir gráficos e análises financeiras para oferecer uma visão detalhada do desempenho financeiro.

### Adicionar/Editar Transação
- [x] Validação Avançada: implementar validação de entrada avançada e sugestões automáticas para categorias de despesas e receitas.
- [x] Anexos: permitir o upload de recibos ou documentos relacionados a transações.

### Desenvolvimento Frontend em Ambientes Cloud
- [x] Deploy em plataformas cloud como AWS, Azure ou Vercel (recomendado para projetos Next.js).
- [x] Implementação de práticas de segurança, como autenticação e autorização.

### React/Angular Avançado
- [x] Gestão de Estado: Uso de Redux, Recoil ou NgRx para gestão de estado complexa. (Uso de context api para informações do usuário e redux para informação da conta e banco. Feito dessa forma para mostrar o uso.)
- [x] TypeScript: Tipagem estática para robustez e manutenção.
- [x] SSR e SSG: Server-Side Rendering ou Static Site Generation para otimização de performance e SEO.

---

# Milestone 1

## Objetivo

Criar uma interface para gerenciamento de transações financeiras, aplicando conceitos de Programação Orientada a Objetos (POO).

---

## Ferramentas

- Next.js
- pnpm
- Tailwind CSS
- MUI Material
- TypeScript
- Storybook
- PostgreSQL

---

## Repositório

[https://github.com/rodolfomoraes1/fintech/](https://github.com/rodolfomoraes1/fintech/)

---

## Criação do Banco de Dados

Para criar o banco de dados e conectar a aplicação, siga o tutorial:

[https://nextjs.org/learn/dashboard-app/setting-up-your-database](https://nextjs.org/learn/dashboard-app/setting-up-your-database)

---

## Executar o Projeto Localmente

1. Instalar dependências  
   `pnpm i`

2. Executar o projeto  
   `pnpm run dev`

3. Acessar a URL  
   `localhost:3000`

4. Para povoar o banco de dados, acessar  
   `localhost:3000/seed`

5. Faça login com o usuário  
   - Email: `user@email.com`  
   - Senha: `123456`

---

## Design System

1. Executar o comando  
   `pnpm run storybook`

---

## Requisitos

### Home Page

- [x] Página inicial simples de boas-vindas (landing page).
- [x] Exibir saldo da conta corrente e extrato das últimas transações.
- [x] Seção para iniciar nova transação, com seleção de tipo e valor.

### Listagem de Transações

- [x] Página para exibir lista de transações, com opções de visualizar, editar e deletar.

### Adicionar Nova Transação

- [x] Página/modal para adicionar nova transação ao banco de dados.
- [x] Formulário com tipo de transação, valor e data.

### Editar Transação

- [x] Página/modal para editar informações de uma transação existente.

### Design System

- [x] Criar design system
- [x] Cores básicas
- [x] Componentes básicos de UI

### Adicionais

- [x] Login
- [x] Registrar (sem integração com BD)
- [x] Página "Em construção"
- [x] Página "Not found"
- [x] Breadcrumbs
- [x] Filtragem das transações
- [x] Paginação das transações
- [x] Páginas de erro
