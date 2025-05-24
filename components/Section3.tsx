import { GraduationCap, Dumbbell, Brain, Mail } from "lucide-react"
export default function Section3() {
    return (
        <>
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
        </>
    )
}