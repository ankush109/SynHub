/*
  Warnings:

  - You are about to drop the `_RoomToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RoomToUser" DROP CONSTRAINT "_RoomToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoomToUser" DROP CONSTRAINT "_RoomToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roomID" TEXT;

-- DropTable
DROP TABLE "_RoomToUser";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roomID_fkey" FOREIGN KEY ("roomID") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;
