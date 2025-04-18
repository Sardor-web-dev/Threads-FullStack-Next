"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FiHeart, FiPlus } from "react-icons/fi";
import { GoHomeFill, GoPerson } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { LuPin } from "react-icons/lu";
import { TbBrandThreads } from "react-icons/tb";

const iconLinks = [
  { href: "/", icon: <GoHomeFill /> },
  { href: "/search", icon: <IoSearch /> },
  { href: null, icon: <FiPlus /> }, 
  { href: "/activity", icon: <FiHeart /> },
  { href: "/profile", icon: <GoPerson /> },
];

const IconWrapper = ({
  children,
  isActive,
  onClick,
  href,
}: {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  href?: string | null;
}) => {
  const content = (
    <div
      onClick={onClick}
      className={`hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-2.5 px-4 animate rounded-lg text-[25px] ${
        isActive ? "text-white" : "text-gray-500"
      }`}
    >
      {children}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};

const Aside: React.FC = () => {
  const [actText, setActText] = useState<number | null>(0);

  return (
    <aside className="hidden md:flex flex-col justify-between h-screen w-fit px-0 pt-6 py-9">
      <Link href="/">
        <div className="w-full flex justify-center animate rounded-lg">
          <TbBrandThreads className="text-gray-500 opacity-70 hover:text-white hover:opacity-100" size={34} />
        </div>
      </Link>

      <nav>
        <ul className="flex flex-col gap-4 text-[#6B6B6B]">
          {iconLinks.map((item, index) => (
            <li key={index}>
              <IconWrapper
                href={item.href}
                isActive={actText === index}
                onClick={() => setActText(index)}
              >
                {item.icon}
              </IconWrapper>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-4">
        <button>
          <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-2.5 px-4 animate rounded-lg text-[25px] text-gray-500">
            <LuPin />
          </div>
        </button>
        <button>
          <div className="hover:bg-[rgba(71,71,71,0.49)] w-full flex justify-center py-2.5 px-4 animate rounded-lg text-[25px] text-gray-500 rotate-180">
            <CgMenuRightAlt />
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Aside;
