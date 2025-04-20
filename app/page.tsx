// import Post from "@/components/custom/Post";
// import { Thread } from "@/types/thread";

export default async function Home() {
  // const response: Thread[] = await fetch("https:/threads-uz.netlify.app//api/data").then(
  //   (res) => res.json()
  // );
  return (
    <div className="">
      {/* <div className="flex overflow-y-auto flex-col p-10 gap-10 items-start">
        {response.map((thread: Thread) => (
          <Post key={thread.id} thread={thread} />
        ))}
      </div> */}
    </div>
  );
}
