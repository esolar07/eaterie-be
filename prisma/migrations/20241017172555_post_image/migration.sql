/*
  Warnings:

  - Added the required column `postImage` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "postImage" VARCHAR(255) NOT NULL;
