-- CreateEnum
CREATE TYPE "emailCategory" AS ENUM ('VERIFYMAIL', 'RESETPASSWORD');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "emailTokens" (
    "id" TEXT NOT NULL,
    "category" "emailCategory" NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "emailTokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "emailTokens_token_key" ON "emailTokens"("token");
