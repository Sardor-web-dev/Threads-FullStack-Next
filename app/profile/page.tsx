import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";
import { getServerSession } from "next-auth";
import { Button } from "@/components/ui/button";

const page = async () => {
  const session = await getServerSession();
  console.log(session);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[400px] pt-10">
          <div className="flex justify-between">
            <div>
              <p className="text-xl text-[#F3F5F7] font-bold">
                {session?.user?.name}
              </p>
              <p className="text-sm text-[#F3F5F7] mt-[-1px]">
                {session?.user?.email}
              </p>
            </div>
            <Avatar className="w-[75px] h-[75px] rounded-2xl">
              <AvatarImage
                className="rounded-full w-full"
                src={session?.user?.image || ""}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center">
              {/* <div className="flex items-center">
                <Avatar className="w-[20px] h-[20px] rounded-2xl">
                  <AvatarImage
                    className="rounded-full w-full"
                    src={session?.user?.image || ""}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="w-[20px] h-[20px] rounded-2xl ml-[-5px]">
                  <AvatarImage
                    className="rounded-full w-full"
                    src={session?.user?.image || ""}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="w-[20px] h-[20px] rounded-2xl ml-[-5px]">
                  <AvatarImage
                    className="rounded-full w-full"
                    src={session?.user?.image || ""}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div> */}

              <p className="ml-[5px] text-[13px] text-[#777777]  cursor-pointer border-b border-transparent hover:border-[#777777]">
                0 подписчиков
              </p>
            </div>

            <div className="flex gap-1 cursor-pointer">
              <MdOutlineAnalytics
                size={23}
                className="animate hover:scale-[0.9]"
              />
              <IoLogoInstagram
                size={23}
                className="animate hover:scale-[0.9]"
              />
            </div>
          </div>
          <Button className="w-full mt-7 bg-gray-700 text-white hover:bg-gray-600 cursor-pointer opacity-55 hover:opacity-100 transition-all">
            Редактировать профиль
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
