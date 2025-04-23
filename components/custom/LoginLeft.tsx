"use client";

import { signIn } from "next-auth/react";
import { FaInstagram } from "react-icons/fa";

const LoginRight = () => {
  return (
    <>
      <div className="w-[350px] h-[330px] bg-[#f5f5f5] dark:bg-[#1e1e1e] rounded-3xl border border-white/20 flex flex-col items-center justify-center gap-5 text-center text-black dark:text-white">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold">
            Войдите или <br /> зарегистрируйтесь в Threads
          </h2>
          <p className="text-[#777777]">
            Узнавайте, о чем говорят люди, и <br /> вступайте в разговоры.
          </p>
        </div>
        <button
          onClick={() => signIn()}
          className="flex items-center text-start gap-3 font-semibold bg-white dark:bg-[#101010] rounded-3xl p-6 cursor-pointer"
        >
          <FaInstagram size={24} />
          Продолжить с аккаунтом <br /> Instagram
        </button>
        <p
          onClick={() => {
            signIn();
          }}
          className="text-[#777777] cursor-pointer hover:text-white transition"
        >
          Войти по имени пользователя
        </p>
      </div>
    </>
  );
};

export default LoginRight;
