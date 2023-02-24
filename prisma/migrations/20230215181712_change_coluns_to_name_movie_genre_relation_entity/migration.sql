/*
  Warnings:

  - You are about to drop the `movies_genres` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "movies_genres" DROP CONSTRAINT "movies_genres_genreId_fkey";

-- DropForeignKey
ALTER TABLE "movies_genres" DROP CONSTRAINT "movies_genres_movieId_fkey";

-- DropTable
DROP TABLE "movies_genres";

-- CreateTable
CREATE TABLE "MovieGenre" (
    "movieName" TEXT NOT NULL,
    "genreName" TEXT NOT NULL,

    CONSTRAINT "MovieGenre_pkey" PRIMARY KEY ("movieName","genreName")
);

-- AddForeignKey
ALTER TABLE "MovieGenre" ADD CONSTRAINT "MovieGenre_movieName_fkey" FOREIGN KEY ("movieName") REFERENCES "Movie"("title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieGenre" ADD CONSTRAINT "MovieGenre_genreName_fkey" FOREIGN KEY ("genreName") REFERENCES "Genre"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
