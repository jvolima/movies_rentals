-- CreateTable
CREATE TABLE "rentals" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "movie_id" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date" DATETIME NOT NULL,
    "expected_return_date" DATETIME NOT NULL,
    "total" REAL NOT NULL,
    CONSTRAINT "rentals_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "rentals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
