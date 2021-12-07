-- CreateTable
CREATE TABLE "movies_images" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image_name" TEXT NOT NULL,
    "movie_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "movies_images_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
