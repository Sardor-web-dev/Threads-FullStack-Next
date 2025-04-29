import LoginRight from "@/components/custom/LoginLeft";
import SessionProvider from "@/components/custom/SessionProvider";
import Sidebar from "@/components/custom/Sidebar";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { ThemeProvider } from "next-themes";
import "./globals.css";

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
              {!session && <LoginRight />}
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
