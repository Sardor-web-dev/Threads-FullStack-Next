import { NextResponse } from "next/server";

export async function GET() {
  // return new Response("Hello World")
  // return NexrResponse.jsoin(users)\;

  return NextResponse.json(threads);
}

// export async function POST(request: Request) {
//   return new Response("Hello Postman");
// }

const threads = [
  {
    id: 1,
    avatar: "/danya.jpg",
    user: "Danya",
    time: "5ч",
    text: "My name is Danya, I am a Frontend Developer",
    likeCount: 200,
    comments: 200,
    resends: 200,
    views: 200,
  },
  {
    id: 2,
    avatar: "/sardor.jpg",
    user: "Sardor",
    time: "2ч",
    text: "My name is Sardor, I am a Frontend Developer",
    likeCount: 500,
    comments: 245,
    resends: 464,
    views: 654,
  },
  {
    id: 3,
    avatar: "/erkin.jpg",
    user: "Erkin",
    time: "1ч",
    text: "Hello world, it's Erkin here! Writing some code 🚀",
    likeCount: 312,
    comments: 98,
    resends: 112,
    views: 430,
  },
  {
    id: 4,
    avatar: "/murod.jpg",
    user: "Murodjon",
    time: "3ч",
    text: "Building something cool with React and Next.js 🔥",
    likeCount: 220,
    comments: 150,
    resends: 133,
    views: 512,
  },
  {
    id: 5,
    avatar: "/ramiz.jpg",
    user: "Ramizjon",
    time: "6ч",
    text: "Just finished my new portfolio website 🎉",
    likeCount: 610,
    comments: 342,
    resends: 278,
    views: 800,
  },
  {
    id: 6,
    avatar: "/daler.jpg",
    user: "Daler",
    time: "8ч",
    text: "Working on some TypeScript magic ✨",
    likeCount: 180,
    comments: 76,
    resends: 90,
    views: 300,
  },
  {
    id: 7,
    avatar: "/ozod.jpg",
    user: "Ozodbek",
    time: "9ч",
    text: "I love using shadcn/ui in my projects!",
    likeCount: 400,
    comments: 210,
    resends: 150,
    views: 550,
  },
  {
    id: 8,
    avatar: "/konstantin.jpg",
    user: "Konstantin",
    time: "10ч",
    text: "Frontend is fun when you understand the logic 🧠",
    likeCount: 275,
    comments: 115,
    resends: 134,
    views: 460,
  },
  {
    id: 9,
    avatar: "/shaxriyor.jpg",
    user: "Shaxriyor",
    time: "11ч",
    text: "CSS can be tricky, but Tailwind makes it easier 🧩",
    likeCount: 490,
    comments: 198,
    resends: 205,
    views: 620,
  },
  {
    id: 10,
    avatar: "/alex.jpg",
    user: "Alex",
    time: "12ч",
    text: "Sharing my open-source project soon, stay tuned 💡",
    likeCount: 305,
    comments: 150,
    resends: 160,
    views: 580,
  },
];
