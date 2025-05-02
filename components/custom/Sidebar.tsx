"use client";

import Link from "next/link";
import { useState } from "react";
import { TbBrandThreads } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { IoMdAdd, IoMdHeartEmpty } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { SlPin } from "react-icons/sl";
import ModalComponent from "./Modal";
import AppearanceMenu from "./ThemeMenu";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const [modalType, setModalType] = useState<
    null | "default" | "Authentificated"
  >(null);
  const { data: session } = useSession();

  return (
    <>
      <aside className="flex flex-col items-center justify-between h-screen w-fit px-2 py-6">
        <Link href="/">
          <TbBrandThreads size={40} className="text-black dark:text-white" />
        </Link>
        <nav>
          <ul className="flex flex-col items-center gap-4 text-[#6B6B6B] dark:text-[#BBBBBB]">
            <li className="rounded-lg px-4 py-2.5 hover:bg-[#f1f1f1] hover:dark:bg-[#171717]">
              <Link href="/">
                <GoHomeFill size={25} />
              </Link>
            </li>
            <li className="rounded-lg px-4 py-2.5 hover:bg-[#f1f1f1] hover:dark:bg-[#171717]">
              <Link href="/search">
                <IoSearch size={25} />
              </Link>
            </li>
            {!session ? (
              <li
                onClick={() => setModalType("Authentificated")}
                className="bg-[#f1f1f1] dark:bg-[#171717] rounded-lg px-4 py-2.5 hover:text-[#171717] hover:dark:text-[#f1f1f1] cursor-pointer"
              >
                <Link href="">
                  <IoMdAdd size={25} />
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/add-post">
                  <IoMdAdd size={25} />
                </Link>
              </li>
            )}
            <li
              onClick={() => setModalType("default")}
              className="rounded-lg px-4 py-2.5 hover:bg-[#f1f1f1] hover:dark:bg-[#171717] cursor-pointer"
            >
              <IoMdHeartEmpty size={25} />
            </li>
            {!session ? (
              <li
                onClick={() => setModalType("default")}
                className="rounded-lg px-4 py-2.5 hover:bg-[#f1f1f1] hover:dark:bg-[#171717] cursor-pointer"
              >
                <FaRegUser size={25} />
              </li>
            ) : (
              <li>
                <Link href="/profile">
                  <FaRegUser size={25} />
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="flex flex-col items-center gap-5 text-[#6B6B6B] dark:text-[#BBBBBB]">
          <button
            onClick={() => setModalType("default")}
            className="rounded-lg px-4 py-2.5 hover:bg-[#f1f1f1] hover:dark:bg-[#171717] cursor-pointer"
          >
            <SlPin size={25} className="rotate-[-45deg]" />
          </button>
          <AppearanceMenu />
        </div>
      </aside>

      {modalType && (
        <ModalComponent
          type={modalType}
          onClose={() => setModalType(null)}
          imageSrc={
            modalType === "Authentificated" ? "/InstagramLogo.png" : undefined
          }
        />
      )}
    </>
  );
};

export default Sidebar;
