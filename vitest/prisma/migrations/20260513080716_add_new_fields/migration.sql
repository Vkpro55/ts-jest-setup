/*
  Warnings:

  - Added the required column `js` to the `Sum` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sum" ADD COLUMN     "js" TEXT NOT NULL;
