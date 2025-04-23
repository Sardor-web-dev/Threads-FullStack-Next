import type { Metadata } from "next";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/custom/Sidebar";
import SessionProvider from "@/components/custom/SessionProvider";
import { getServerSession } from "next-auth";
import "./globals.css";
import { signIn } from "next-auth/react";

export const metadata: Metadata = {
  title: "Главная • Threads ",
  description:
    "Присоединяйтесь к Threads. Делитесь идеями и мыслями, задавайте вопросы, ищите единомышленников. Войдите в систему с аккаунтом Instagram.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased flex items-center justify-between w-full bg-white dark:bg-[#0a0a0a] text-black dark:text-white">
        <SessionProvider session={session}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Sidebar />
            <div className="flex gap-3 mx-auto">
              <main className="w-[500px] mx-auto bg-white dark:bg-[#181818] text-black dark:text-white h-[95vh] rounded-3xl overflow-y-auto border border-black/10 dark:border-white/20">
                {children}
              </main>
              <div className="w-[350px] h-[330px] bg-[#f5f5f5] dark:bg-[#1e1e1e] rounded-3xl border border-white/20 flex flex-col items-center justify-center gap-5 text-center text-black dark:text-white">
                <div className="flex flex-col items-center gap-2">
                  <h2 className="text-xl font-bold">
                    Войдите или <br /> зарегистрируйтесь в Threads
                  </h2>
                  <p className="text-[#777777]">
                    Узнавайте, о чем говорят люди, и <br /> вступайте в
                    разговоры.
                  </p>
                </div>
                <button onClick={() => signIn()} className="flex items-center text-start gap-3 font-semibold bg-white dark:bg-[#101010] rounded-3xl p-6 cursor-pointer">
                  <FaInstagram size={24} />
                  Продолжить с аккаунтом <br /> Instagram
                </button>
                <Link
                onClick={() => {signIn()}}
                  href=""
                  className="text-[#777777] hover:text-white transition"
                >
                  Войти по имени пользователя
                </Link>
              </div>
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
