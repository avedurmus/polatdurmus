import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Contact from "@/components/Contact";

import { getAllPracticeAreas } from "@/sanity/queries";

export default async function Home() {
  const practiceAreasData = await getAllPracticeAreas().catch(() => []);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <PracticeAreas sanityData={practiceAreasData} />
      <Contact />
    </div>
  );
}
