-- AlterTable
ALTER TABLE "Sprint" ADD COLUMN     "EndDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "StartDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
