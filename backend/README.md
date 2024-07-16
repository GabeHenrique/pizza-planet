# Pizza Planet (Backend)

## Descrição

Backend do projeto de um sistema de gerenciamento de pedidos de uma pizzaria.

## Tecnologias

- Node.js (Express)
- PostgreSQL (Prisma)
- Docker (Docker Compose)
- Typescript (ESLint, Prettier)

## Como rodar

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Clone o arquivo `.env.example` e renomeie para `.env`
4. Preencha as variáveis de ambiente
5. Rode as migrations com `npx prisma migrate dev`
6. Rode o servidor com `npm run dev`