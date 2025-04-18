import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineLink } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { LuSend } from "react-icons/lu";

const Post: React.FC = () => {
  return (
    <>
      <div className="flex w-full gap-4">
        <Avatar className="w-[36px] h-[36px] rounded-2xl">
          <AvatarImage className="rounded-3xl" src="/danya.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="w-full ">
          <div className="flex items-center justify-between w-full gap-4">
            <p className="text-[16px] font-semibold">
              Danya<span className="font-normal text-[#a6a6a6] ml-1"> 5ч.</span>
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer pt-1">
                <BsThreeDots size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#181818] w-[200px] p-2 text-white  border-0 rounded-2xl">
                <DropdownMenuLabel className="flex cursor-pointer justify-between items-center">
                  Поделится <AiOutlineLink size={25} />
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <p className=" font-normal text-white text-[16px] w-[97%]">
            My name is Danya i am Frontend Developer
          </p>
          <div className="flex gap-5 mt-2">
            <div className="flex items-center  animate gap-1 hover:scale-[1.1] cursor-pointer ">
              <IoIosHeartEmpty size={20} color="#a6a6a6" />
              <span className="text-sm">0</span>
            </div>

            <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
              <FaRegComment size={20} color="#a6a6a6" />
              <span className="text-sm">0</span>
            </div>
            <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
              <BiRepost size={20} color="#a6a6a6" />
              <span className="text-sm">0</span>
            </div>
            <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
              <LuSend size={20} color="#a6a6a6" />
              <span className="text-sm">0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-4">
        <Avatar className="w-[36px] h-[36px] rounded-2xl">
          <AvatarImage className="rounded-3xl" src="/sardor.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="w-full ">
          <div className="flex items-center justify-between w-full gap-4">
            <p className="text-[16px] font-semibold">
              Sardor
              <span className="font-normal text-[#a6a6a6] ml-1"> 1ч.</span>
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer pt-1">
                <BsThreeDots size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#181818] w-[200px] p-2 text-white  border-0 rounded-2xl">
                <DropdownMenuLabel className="flex cursor-pointer justify-between items-center">
                  Поделится <AiOutlineLink size={25} />
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <p className=" font-normal text-white text-[16px] w-[97%]">
            My name is Sardor i am Frontend Developer
          </p>
          <div className="flex gap-5 mt-2">
            <div className="flex items-center  animate gap-1 hover:scale-[1.1] cursor-pointer ">
              <IoIosHeartEmpty size={20} color="#a6a6a6" />
              <span className="text-sm">0</span>
            </div>

            <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
              <FaRegComment size={20} color="#a6a6a6" />
              <span className="text-sm">0</span>
            </div>
            <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
              <BiRepost size={20} color="#a6a6a6" />
              <span className="text-sm">0</span>
            </div>
            <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
              <LuSend size={20} color="#a6a6a6" />
              <span className="text-sm">0</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
