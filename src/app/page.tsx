import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <PracticeAreas />
    </div>
  );
}
