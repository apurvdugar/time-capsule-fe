import NavLanding from "@/components/NavLanding";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Footer from "@/components/Footer";

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
      
        <NavLanding />

        <Section1 />
        
        <Section2 />

        <Section3 />

        <Section4 />

        <Footer />
      </main>
    </>
  );
}
