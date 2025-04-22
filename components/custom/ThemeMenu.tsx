"use client";

import { useState } from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { BsSun, BsMoon } from "react-icons/bs";
import { GoArrowLeft } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { signOut, useSession } from "next-auth/react";

export default function AppearanceMenu() {
  const { setTheme, theme } = useTheme();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <DropdownMenu
      open={submenuOpen ? true : undefined}
      onOpenChange={(open) => !submenuOpen && !open && setSubmenuOpen(false)}
    >
      <DropdownMenuTrigger className="hover:text-[#171717] hover:dark:text-[#f1f1f1] cursor-pointer">
        <HiOutlineBars3BottomLeft size={28} />
      </DropdownMenuTrigger>

      {!submenuOpen ? (
        <DropdownMenuContent className="w-70 h-70 flex flex-col justify-around bg-white dark:bg-[#1e1e1e] text-black dark:text-white rounded-xl">
          <DropdownMenuItem
            onClick={() => setSubmenuOpen(true)}
            className="hover:bg-[#2a2a2a] cursor-pointer flex justify-between"
          >
            <h3 className="text-sm text-center font-semibold">Внешний вид</h3>
            <MdKeyboardArrowRight size={24} />
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-[#2a2a2a] cursor-pointer">
            <h3 className="text-sm text-center font-semibold">Статистика</h3>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-[#2a2a2a] cursor-pointer">
            <h3 className="text-sm text-center font-semibold">Настройки</h3>
          </DropdownMenuItem>
          <hr />
          <DropdownMenuItem className="hover:bg-[#2a2a2a] cursor-pointer">
            <h3 className="text-sm text-center font-semibold">
              Сообщить о проблеме
            </h3>
          </DropdownMenuItem>
          {session && (
            <DropdownMenuItem
              onClick={() => signOut()}
              className="hover:bg-[#2a2a2a] cursor-pointer"
            >
              <h3 className="text-sm text-center text-red-400 font-semibold">
                Выйти
              </h3>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent className="w-80 bg-white dark:bg-[#1e1e1e] border border-white/10 text-black dark:text-white rounded-xl">
          <div className="flex flex-col gap-3 px-3 py-2">
            <div className="flex gap-10">
              <button onClick={() => setSubmenuOpen(false)}>
                <GoArrowLeft size={24} className="cursor-pointer" />
              </button>
              <h3 className="text-lg text-center font-semibold">Внешний вид</h3>
            </div>

            <div className="flex bg-[#fafafa] dark:bg-[#101010] rounded-xl justify-around mt-2 cursor-pointer">
              {[
                {
                  value: "light",
                  icon: <BsSun size={20} className="cursor-pointer" />,
                },
                {
                  value: "dark",
                  icon: <BsMoon size={20} className="cursor-pointer" />,
                },
                { value: "system", icon: "Авто" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setTheme(opt.value)}
                  className={`flex items-center justify-center py-2 px-8 rounded-xl transition-all duration-300 text-sm 
                                            ${
                                              theme === opt.value
                                                ? opt.value === "dark"
                                                  ? "bg-[#1e1e1e] text-white border-1 border-[#444444]"
                                                  : "bg-[#f5f5f5] text-black border-2 border-[#e0e0e0]"
                                                : "text-[#999999] dark:text-[#777777]"
                                            } 
                                        cursor-pointer`}
                >
                  {opt.icon}
                </button>
              ))}
            </div>
          </div>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}
