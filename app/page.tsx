import { Plus, FileText, CalendarDays, Send, GraduationCap, Dumbbell, Mail, Brain, MoveRight} from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="min-h-screen h-[100vh]" 
            style={{ background: `
                radial-gradient(circle at 30% 40%, #ff8c32 0%, transparent 40%),
                radial-gradient(circle at 50% 70%, #007bff 0%, transparent 40%),
                radial-gradient(circle at 80% 30%, #5a7fff 0%, transparent 40%),
                linear-gradient(to bottom right, #1c1c1c, #0f0f1a)
              `,
            backgroundBlendMode: "screen, screen, screen, normal",}}>
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

        <section className="flex flex-col items-center justify-center h-[90vh] p-4 md:p-8">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-black mb-4"> Send a Message to Your Future Self</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 max-w-2xl">
              TimeCapsule lets you create digital notes, media, or memories to unlock on any future date.
            </p>
            <Link href="/ceate" className="flex items-center justify-center rounded-full bg-black border-4 border-black text-white px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl font-semibold hover:scale-105 hover:shadow-orange-300 hover:shadow-lg transition duration-300">
              <Plus size={32} className="mr-2" />Create Your First Capsule
            </Link>
          </div>
        </section>

        <section className="bg-stone-900 py-12 md:py-20 px-4 md:px-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm text-white h-auto min-h-[280px] flex flex-col justify-center rounded-2xl p-6 md:p-8 hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/10">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <FileText className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center">Write a Message</h3>
              <p className="text-gray-300 text-center text-sm md:text-base">
                Capture a note or upload a memory you'd like to revisit in the future.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm text-white h-auto min-h-[280px] flex flex-col justify-center rounded-2xl p-6 md:p-8 hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/10">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <CalendarDays className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center"> Pick a Date </h3>
              <p className="text-gray-300 text-center text-sm md:text-base">
                Choose when your capsule will unlock in the future.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm text-white h-auto min-h-[280px] flex flex-col justify-center rounded-2xl p-6 md:p-8 hover:scale-105 hover:bg-white/20 transition-all duration-300 border border-white/10">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Send className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center"> Send or Save </h3>
              <p className="text-gray-300 text-center text-sm md:text-base">
                Share it with yourself or a loved one to unlock later.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 md:px-6 bg-stone-100">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-stone-900">Ideas for Your Capsule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-stone-100 p-3 rounded-xl">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-stone-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-stone-900">Graduation Day</h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base">
                Remind yourself what you dreamed of becoming and reflect on your journey.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-stone-100 p-3 rounded-xl">
                  <Dumbbell className="w-6 h-6 md:w-8 md:h-8 text-stone-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-stone-900">Fitness Goal</h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base">
                Send encouragement from your past self when you finish the race.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-stone-100 p-3 rounded-xl">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-stone-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-stone-900">Birthday Message</h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base">
                Surprise someone with words from a year ago.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-stone-100 p-3 rounded-xl">
                  <Brain className="w-6 h-6 md:w-8 md:h-8 text-stone-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-stone-900">Decision Reflection</h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base">
                Ask yourself: Was it worth it?
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 md:px-6 bg-stone-900 flex flex-col md:flex-row gap-6 justify-center items-center ">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">What would you say to your future self?</h2>
          <Link href="/create" className="flex items-center justify-center rounded-full bg-white border-4 border-white text-black px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl font-semibold hover:scale-105 hover:shadow-black/80 hover:shadow-lg transition duration-300">
            Make Your Capsule <MoveRight className="ml-2"/>
          </Link>
        </section>

        <footer className="bg-stone-100 text-gray-500 text-center p-2">
          <p>Made by Team RuntimeTerrors</p>
        </footer>
      </main>
    </>
  );
}
