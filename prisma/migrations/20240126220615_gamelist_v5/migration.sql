/*
  Warnings:

  - You are about to drop the column `expires` on the `AccessToken` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AccessToken" DROP COLUMN "expires",
ADD COLUMN     "expired" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "expiresOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
