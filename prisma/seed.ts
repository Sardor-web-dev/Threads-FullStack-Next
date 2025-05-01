import { PrismaClient, Prisma } from "../src/app/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Sardor",
    email: "sardor@gmail.com",
    avatar: "/sardor.jpg",
    threads: {
      create: [
        {
          name: "Sardor",
          time: "1ч",
          avatar: "/sardor.jpg",
          text: "Join the Prisma Discord",
          published: true,
          likeCount: 1000501,
          views: 1004104,
          resends: 40504,
        },
      ],
    },
  },
  {
    name: "Danya",
    email: "danyawebdev@gmail.com",
    avatar: "/danya.jpg",
    threads: {
      create: [
        {
          name: "Danya",
          time: "5ч",
          avatar: "/danya.jpg",
          text: "Follow Prisma on Twitter",
          published: true,
          likeCount: 100,
          views: 100,
          resends: 100,
        },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
