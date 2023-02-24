-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "title" VARCHAR(40) NOT NULL,
    "synopsis" VARCHAR(200) NOT NULL,
    "language" VARCHAR(30) NOT NULL,
    "year" VARCHAR(4) NOT NULL,
    "genres" VARCHAR(15)[],

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_title_key" ON "Movie"("title");
