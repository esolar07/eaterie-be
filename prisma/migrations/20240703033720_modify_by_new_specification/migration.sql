/*
  Warnings:

  - You are about to drop the column `address` on the `RestaurantUser` table. All the data in the column will be lost.
  - You are about to drop the column `contactName` on the `RestaurantUser` table. All the data in the column will be lost.
  - You are about to drop the column `contactPhone` on the `RestaurantUser` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `RestaurantUser` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantAddress` on the `RestaurantUser` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantName` on the `RestaurantUser` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantPhone` on the `RestaurantUser` table. All the data in the column will be lost.
  - Added the required column `restaurantId` to the `RestaurantUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "RestaurantUser_contactPhone_key";

-- DropIndex
DROP INDEX "RestaurantUser_restaurantPhone_key";

-- AlterTable
ALTER TABLE "RestaurantUser" DROP COLUMN "address",
DROP COLUMN "contactName",
DROP COLUMN "contactPhone",
DROP COLUMN "image",
DROP COLUMN "restaurantAddress",
DROP COLUMN "restaurantName",
DROP COLUMN "restaurantPhone",
ADD COLUMN     "restaurantId" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "RestaurantUser_id_seq";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isBusiness" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "image" TEXT,
    "phone" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "company_address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_phone_key" ON "Restaurant"("phone");

-- AddForeignKey
ALTER TABLE "RestaurantUser" ADD CONSTRAINT "RestaurantUser_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
