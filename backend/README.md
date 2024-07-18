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
2. Entre na pasta `backend`
3. Instale as dependências com `npm install`
4. Clone o arquivo `.env.example` e renomeie para `.env`
5. Preencha as variáveis de ambiente
6. Rode o banco de dados com `docker-compose up -d`
7. Rode as migrations com `npx prisma migrate dev`
8. Rode o servidor com `npm run dev`