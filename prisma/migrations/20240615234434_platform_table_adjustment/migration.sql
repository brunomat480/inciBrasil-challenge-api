/*
  Warnings:

  - Added the required column `user_id` to the `platforms` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_platforms" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "platforms_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_platforms" ("created_at", "id", "imageUrl", "name", "url") SELECT "created_at", "id", "imageUrl", "name", "url" FROM "platforms";
DROP TABLE "platforms";
ALTER TABLE "new_platforms" RENAME TO "platforms";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
