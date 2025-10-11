"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#524224]">
      <header className="flex bg-[#fff3ee]  h-16 w-7xl">
        <Image
          src={"/GK.png"}
          alt="gk-thread-stitch"
          width={120}
          height={120}
        />
      </header>
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="text-[#fff3ee]">
          Welcome to GK Thread & Stitch

        </div>

            <Link href="/dashboard" prefetch={false}>
      Dashboard
    </Link>
        <Link
      href="/dashboard"
      onNavigate={(e) => {
        // Only executes during SPA navigation
        console.log('Navigating...')
 
        // Optionally prevent navigation
        e.preventDefault()
      }}
    >
      Dashboard
    </Link>
      </main>

    </div>
  );
}
