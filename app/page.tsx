import Post from "@/components/custom/Post";

export default function Home() {
  return (
    <div className="">
      <div className="flex overflow-y-auto flex-col p-10 gap-5 items-start">
        <Post />
      </div>
    </div>
  );
}
