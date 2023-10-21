-- AlterTable
ALTER TABLE "cliente" RENAME COLUMN "update_at" TO "updated_at";

-- AlterTable
ALTER TABLE "pedido" RENAME COLUMN "update_at" TO "updated_at";

-- AlterTable
ALTER TABLE "pedido_itens" RENAME COLUMN "create_at" TO "created_at",
RENAME COLUMN "update_at" TO "updated_at";

-- AlterTable
ALTER TABLE "produto" RENAME COLUMN "update_at" TO "updated_at";
