const { PrismaClient } = require('@prisma/client')
let prisma = new PrismaClient()

async function seed() {
  let kody = await prisma.user.create({
    data: {
      username: 'kody',
      passwordHash:
        '$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u',
    },
  })

  // console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(`There was an error while seeding: ${e}`)
    process.exit(1)
  })
  .finally(async () => {
    console.log('Successfully seeded database. Closing connection.')
    await prisma.$disconnect()
  })
