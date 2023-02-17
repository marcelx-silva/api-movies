-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "fullName" VARCHAR(50) NOT NULL,
    "username" VARCHAR(25) NOT NULL,
    "email" VARCHAR(60) NOT NULL,
    "password" VARCHAR(30) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");
