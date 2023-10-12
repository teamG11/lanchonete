CREATE TABLE "cliente" (
    "id" integer PRIMARY KEY,
    "nome" varchar NOT NULL,
    "sobrenome" varchar,
    "cpf" varchar NOT NULL,
    "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
    "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);
CREATE TABLE "pedido" (
    "id" integer PRIMARY KEY,
    "client_id" integer NOT NULL,
    "valor_final" integer,
    "tipo_pagamento" varchar NOT NULL,
    "status" varchar NOT NULL,
    "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
    "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);
CREATE TABLE "produto_itens" (
    "pedido_id" integer NOT NULL,
    "produto_id" integer NOT NULL,
    "quantidade" integer NOT NULL,
    "valor_unitario" integer NOT NULL
);
CREATE TABLE "produto" (
    "id" integer PRIMARY KEY,
    "nome" varchar NOT NULL,
    "descricao" text NOT NULL,
    "tipo" varchar NOT NULL,
    "valor" integer NOT NULL,
    "disponivel" boolean DEFAULT false,
    "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
    "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP)
);
ALTER TABLE "pedido"
ADD FOREIGN KEY ("client_id") REFERENCES "cliente" ("id");
ALTER TABLE "produto_itens"
ADD FOREIGN KEY ("pedido_id") REFERENCES "pedido" ("id");
ALTER TABLE "produto_itens"
ADD FOREIGN KEY ("produto_id") REFERENCES "produto" ("id");
