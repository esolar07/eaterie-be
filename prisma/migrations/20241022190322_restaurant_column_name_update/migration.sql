/*
  Warnings:

  - You are about to drop the column `address` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `r_address` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `r_name` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "address",
DROP COLUMN "name",
ADD COLUMN     "r_address" VARCHAR(255) NOT NULL,
ADD COLUMN     "r_name" VARCHAR(255) NOT NULL;
