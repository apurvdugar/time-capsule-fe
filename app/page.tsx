import { Plus, FileText, CalendarDays, Send} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="min-h-screen text-gray-900 h-[100vh]"  
            style={{
              background: `
                radial-gradient(circle at 30% 40%, #ff8c32 0%, transparent 40%),
                radial-gradient(circle at 50% 70%, #007bff 0%, transparent 40%),
                radial-gradient(circle at 80% 30%, #5a7fff 0%, transparent 40%),
                linear-gradient(to bottom right, #1c1c1c, #0f0f1a)
              `,
            backgroundBlendMode: "screen, screen, screen, normal" }}>
        <nav className="flex items-center justify-between p-8 h-[10vh]">
          <div className="flex items-center space-x-4">
            <span className="text-3xl md:text-4xl font-bold text-white whitespace-normal">TimeCapsule</span>
          </div>
          <div className="flex flex-row space-x-4">
            <Link href="/login" className="hidden md:block rounded-full border-2 border-white/20 font-semibold text-white px-6 py-2.5 text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300">Login</Link>
            <Link href="/register" className="rounded-full bg-white font-semibold text-black px-4 md:px-6 py-2 md:py-2.5 text-base md:text-lg hover:bg-white/90 hover:scale-105 transition-all duration-300">Register</Link>
          </div>
        </nav>
        
        <section className="flex flex-col items-center justify-center h-[90vh] p-4 md:p-8">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-4">Send a Message to Your Future Self</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 max-w-2xl">
              TimeCapsule lets you create digital notes, media, or memories to unlock on any future date.
            </p>  
            <Link href="/ceate" className="flex items-center justify-center rounded-full bg-black border-4 border-black text-white px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl font-semibold hover:bg-gray-900 hover:scale-105 hover:shadow-orange-300 hover:shadow-lg transition duration-300">
              <Plus size={24} className="mr-2"/>
              Create Your First Capsule
            </Link>
          </div>
        </section>

        <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
          <div className="border border-black rounded-2xl p-4">
            <div className="flex justify-center mb-4"><FileText className="w-10 h-10 text-blue-600" /></div>
            <h3 className="text-xl font-semibold mb-2">Write a Message</h3>
            <p>Capture a note or upload a memory you'd like to revisit.</p>
          </div>
          <div className="border border-black rounded-2xl p-4">
            <div className="flex justify-center mb-4"><CalendarDays className="w-10 h-10 text-blue-600" /></div>
            <h3 className="text-xl font-semibold mb-2">Pick a Date</h3>
            <p>Choose when your capsule will unlock in the future.</p>
          </div>
          <div className="border border-black rounded-2xl p-4">
            <div className="flex justify-center mb-4"><Send className="w-10 h-10 text-blue-600" /></div>
            <h3 className="text-xl font-semibold mb-2">Send or Save</h3>
            <p>Share it with yourself or a loved one to unlock later.</p>
          </div>
        </div>
      </section>

      </main>
    </>
  );
}