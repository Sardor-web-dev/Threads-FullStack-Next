import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // return new Response("Hello World")
  // return NexrResponse.jsoin(users)\;


  const response = {
    body: users,
    status: 200
  }

  return NextResponse.json(response)
}

export async function POST(request: Request) {
  return new Response("Hello Postman");
}

const users = [
  {
    id: 1,
    name: "Sardor",
    surname: "Djamolov",
  },
  {
    id: 2,
    name: "Danya",
    surname: "Meretov",
  },
  {
    id: 3,
    name: "Erkin",
    surname: "Gulyamov",
  },
  {
    id: 4,
    name: "Murodjon",
    surname: "Mustafoev",
  },
  {
    id: 5,
    name: "Ramizjon",
    surname: "Selskiy",
  },
  {
    id: 6,
    name: "Daler",
    surname: "Sharifkulov",
  },
  {
    id: 7,
    name: "Ozodbek",
    surname: "Shukurov",
  },  {
    id: 8,
    name: "Konstantin",
    surname: "Lefstantinov",
  },
  {
    id: 9,
    name: "Shaxriyor",
    surname: "Raxmatilloev",
  },
];
