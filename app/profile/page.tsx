"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session } = useSession();

  const user = session?.user;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Image
          src="/avatar.png"
          alt="User avatar"
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold">{user?.name}</h1>
          <p className="text-gray-500">{user?.email}</p>
        </div>
      </div>

      <div className="flex gap-10 text-center mb-4">
        <div>
          <p className="font-bold text-lg">0</p>
          <p className="text-sm text-gray-500">Posts</p>
        </div>
        <div>
          <p className="font-bold text-lg">0</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div>
          <p className="font-bold text-lg">0</p>
          <p className="text-sm text-gray-500">Following</p>
        </div>
      </div>

      <p className="text-gray-700">
        👋 Hello, I’m {user?.name || "Anonymous"} — welcome to my Threads
        profile clone.
      </p>
    </div>
  );
};

export default ProfilePage;
