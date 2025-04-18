import Post from "@/components/custom/Post";

export default function Home() {
  return (
    <div className="text">
      <form action="" className="hidden">
        <img src="lcd,lc,dl" alt="" />
        <input type="text" />
        <button>post</button>
        <hr />
      </form>
      <div className="flex gap-10 flex-col items-start py-3 px-5">
        <Post />
      </div>
    </div>
  );
}
