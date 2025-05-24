import Link from "next/link"

export default function NavLanding(){
    return (
        <>
        <nav className="flex items-center justify-between p-8 h-[10vh]">
          <div className="flex items-center space-x-4">
            <span className="text-3xl md:text-4xl font-bold text-white whitespace-normal">TimeCapsule</span>
          </div>
          <div className="flex flex-row space-x-4">
            <Link href="/login" className="hidden md:block rounded-full border-2 border-white/20 font-semibold text-white px-6 py-2.5 text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              Login
            </Link>
            <Link href="/register" className="rounded-full bg-white font-semibold text-black px-4 md:px-6 py-2 md:py-2.5 text-base md:text-lg hover:bg-white/90 hover:scale-105 transition-all duration-300">
              Register
            </Link>
          </div>
        </nav>
        </>
    )
}