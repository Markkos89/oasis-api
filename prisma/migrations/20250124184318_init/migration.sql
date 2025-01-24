/*
  Warnings:

  - You are about to drop the `_posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_posts" DROP CONSTRAINT "_posts_authorId_fkey";

-- DropTable
DROP TABLE "_posts";

-- DropTable
DROP TABLE "_users";

-- CreateTable
CREATE TABLE "Vault" (
    "id" SERIAL NOT NULL,
    "safeAddress" VARCHAR(60) NOT NULL,
    "threshold" INTEGER NOT NULL,
    "owners" TEXT[],
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "Vault_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vault_safeAddress_key" ON "Vault"("safeAddress");
