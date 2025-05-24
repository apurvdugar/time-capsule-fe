import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Section4(){
    return (
        <section className="py-12 md:py-20 px-4 md:px-6 bg-stone-900 flex flex-col md:flex-row gap-6 justify-center items-center ">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">What would you say to your future self?</h2>
          <Link href="/create" className="flex items-center justify-center rounded-full bg-white border-4 border-white text-black px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl font-semibold hover:scale-105 hover:shadow-black/80 hover:shadow-lg transition duration-300">
            Make Your Capsule <MoveRight className="ml-2"/>
          </Link>
        </section>
    )
}