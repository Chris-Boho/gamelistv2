/*
  Warnings:

  - A unique constraint covering the columns `[name,listId]` on the table `Game` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gameId` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "gameId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Game_name_listId_key" ON "Game"("name", "listId");
