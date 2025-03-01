import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // create two dummy users
    const user1 = await prisma.user.upsert({
      where: { email: 'seanj@mail.com' },
      update: {},
      create: {
        email: 'sean@mail.com',
        password: 'password-sean',
      },
    });
  
    const user2 = await prisma.user.upsert({
      where: { email: 'jonjon@mail.com' },
      update: {},
      create: {
        email: 'jonjon@mail.com',
        password: 'password-jonjon',
      },
    });
  
    // create three dummy articles
    const post1 = await prisma.post.upsert({
      where: { title: 'Title for Post 1' },
      update: {
        authorId: user1.id,
      },
      create: {
        title: 'Title for Post 1',
        content: 'Some Post 1 content',
        authorId: user1.id,
      },
    });
  
    const post2 = await prisma.post.upsert({
      where: { title: 'Title for Post 2' },
      update: {
        authorId: user2.id,
      },
      create: {
        title: 'Title for Post 2',
        content: 'Some Post 2 content',
        authorId: user2.id,
      },
    });
  
    const post3 = await prisma.post.upsert({
      where: { title: 'Title for Post 3' },
      update: {},
      create: {
        title: 'Title for Post 3',
        content: 'Some Post 3 content',
        authorId: user1.id,
      },
    });
  
    console.log({ user1, user2, post1, post2, post3 });
  }
  
  main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });