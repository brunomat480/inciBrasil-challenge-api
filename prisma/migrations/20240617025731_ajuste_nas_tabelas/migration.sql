/*
  Warnings:

  - You are about to drop the `tools` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id,name]` on the table `platforms` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "platforms_url_key";

-- DropIndex
DROP INDEX "platforms_imageUrl_key";

-- DropIndex
DROP INDEX "platforms_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "tools";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "=tools" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "=tools_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "=tools_user_id_name_key" ON "=tools"("user_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "platforms_user_id_name_key" ON "platforms"("user_id", "name");
