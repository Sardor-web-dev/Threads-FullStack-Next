import Post from "@/components/custom/Post";
import prisma from "@/lib/prisma";
import { Thread } from "@/types/thread";

export default async function Home() {
  // const response: Thread[] = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/data`
  // ).then((res) => res.json());

  const threads = await prisma.thread.findMany({
    where: { published: true },
    include: {
      user: true,
    },
  });

  console.log(threads);
  return (
    // Here is error fix later
    <div className="">
      <div className="flex overflow-y-auto flex-col p-10 gap-10 items-start">
        {threads.map((thread: Thread) => (
          <Post key={thread.id} thread={thread} />
        ))}
      </div>
    </div>
  );
}
