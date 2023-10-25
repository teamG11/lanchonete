# Database

## Relacionamento entre as entidades
![Diagrama](resources/lanchonete.svg)

## Como gerar um novo diagrama?
1. Acessar [dbdiagram.io](https://dbdiagram.io/)
2. Importar o conteúdo do arquivo em `prisma/migrations/XXXXXXX_create_database_and_schema/migration.sql` utilizando a opção Import > Import from Postgres
3. Realizar o export para obter novo arquivo SVG em Export > Export to SVG
4. Adicionar SVG na pasta `docs/resources/lanchonete.svg`