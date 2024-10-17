/*
  Warnings:

  - You are about to drop the column `petcentersId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the `Petcenters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PetcentersService` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `personalId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "PetcentersService" DROP CONSTRAINT "PetcentersService_petcentersId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "petcentersId",
ADD COLUMN     "personalId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Petcenters";

-- DropTable
DROP TABLE "PetcentersService";

-- CreateTable
CREATE TABLE "Personal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phones" TEXT[],
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Personal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalService" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "personalId" TEXT NOT NULL,

    CONSTRAINT "PersonalService_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PersonalService" ADD CONSTRAINT "PersonalService_personalId_fkey" FOREIGN KEY ("personalId") REFERENCES "Personal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "PersonalService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
