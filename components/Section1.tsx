import { Plus } from "lucide-react";
import Link from "next/link";

export default function Section1() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-[90vh] p-4 md:p-8">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4 space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-black mb-4">Send a Message to Your Future Self</h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 max-w-2xl">
            TimeCapsule lets you create digital notes, media, or memories to unlock on any future date.
          </p>
          <Link href="/ceate" className="flex items-center justify-center rounded-full bg-black border-4 border-black text-white px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl font-semibold hover:scale-105 hover:shadow-orange-300 hover:shadow-lg transition duration-300">
            <Plus size={32} className="mr-2" /> Create Your First Capsule   
          </Link>
        </div>
      </section>
    </>
  );
}
