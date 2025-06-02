import { useState } from "react";
import Portfolio from "@/components/Portfolio";
import MusicPlayer from "@/components/MusicPlayer";
import SparkleEffect from "@/components/SparkleEffect";

function App() {
  return (
    <div className="min-h-screen bg-gradient-magical relative overflow-hidden">
      <SparkleEffect />

      {/* Header */}
      <header className="relative z-10 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-caveat text-6xl md:text-8xl font-bold text-dori-pink-dark mb-4 animate-float">
            Дори ✨
          </h1>
          <p className="font-open-sans text-xl text-gray-700 max-w-2xl mx-auto">
            Волшебный мир творчества, где каждый штрих оживает музыкой и
            красками
          </p>
        </div>
      </header>

      {/* Music Player */}
      <div className="fixed top-4 right-4 z-50">
        <MusicPlayer />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Portfolio />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="font-caveat text-2xl text-dori-green-dark">
            Создано с любовью и магией 🎨✨
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
