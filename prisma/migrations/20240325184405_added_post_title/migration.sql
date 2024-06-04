/*
  Warnings:

  - Added the required column `postTitle` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "postTitle" VARCHAR(3000) NOT NULL;
