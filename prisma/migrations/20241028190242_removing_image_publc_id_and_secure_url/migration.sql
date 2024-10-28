/*
  Warnings:

  - You are about to drop the column `image_public_id` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `image_secure_url` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "image_public_id",
DROP COLUMN "image_secure_url";
