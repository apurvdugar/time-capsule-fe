import { CalendarDays, FileText, Send,  } from "lucide-react"
import { WavyBackground } from "./ui/wave-background";

export default function Section2(){
    return(
        <div className="w-full h-auto">
            <WavyBackground 
                className="w-full h-full"
                containerClassName="h-full"
                backgroundFill="#17171b" // stone-900 color
                waveOpacity={0.5}
                blur={10}
                speed="fast"
                colors={["#cc7a3f", "#1f75d6", "#5875d6", "#17161d", "#3f3884"]}
            >
                <section className="text-white py-12 md:py-20 px-4 md:px-6 h-full">
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
            </WavyBackground>
        </div>
    );
}