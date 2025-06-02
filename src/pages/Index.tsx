import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import MusicPlayer from "@/components/MusicPlayer";
import SparkleEffect from "@/components/SparkleEffect";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <SparkleEffect />
      <HeroSection />
      <Portfolio />
      <MusicPlayer />
    </div>
  );
};

export default Index;
