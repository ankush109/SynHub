/*
  Warnings:

  - You are about to drop the column `topicId` on the `DownVoteOnTopic` table. All the data in the column will be lost.
  - You are about to drop the column `topicId` on the `UpVoteOnTopic` table. All the data in the column will be lost.
  - Added the required column `PostId` to the `DownVoteOnTopic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PostId` to the `UpVoteOnTopic` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DownVoteOnTopic" DROP CONSTRAINT "DownVoteOnTopic_topicId_fkey";

-- DropForeignKey
ALTER TABLE "UpVoteOnTopic" DROP CONSTRAINT "UpVoteOnTopic_topicId_fkey";

-- DropIndex
DROP INDEX "Comment_PostId_key";

-- AlterTable
ALTER TABLE "DownVoteOnTopic" DROP COLUMN "topicId",
ADD COLUMN     "PostId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UpVoteOnTopic" DROP COLUMN "topicId",
ADD COLUMN     "PostId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "DownVoteOnTopic" ADD CONSTRAINT "DownVoteOnTopic_PostId_fkey" FOREIGN KEY ("PostId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UpVoteOnTopic" ADD CONSTRAINT "UpVoteOnTopic_PostId_fkey" FOREIGN KEY ("PostId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
