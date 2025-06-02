import { useState } from "react";
import Icon from "@/components/ui/icon";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack] = useState("Magical Art Vibes");

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-20">
      <div className="paper-texture rounded-2xl p-4 shadow-paper-hover border border-dori-pink-light/20 sparkle-overlay">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-dori-pink to-dori-green text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
          </button>

          <div className="flex flex-col">
            <span className="text-sm font-caveat font-bold text-gray-800">
              {currentTrack}
            </span>
            {isPlaying && (
              <div className="music-visualizer">
                <div className="music-bar" style={{ height: "60%" }} />
                <div className="music-bar" style={{ height: "80%" }} />
                <div className="music-bar" style={{ height: "40%" }} />
                <div className="music-bar" style={{ height: "70%" }} />
                <div className="music-bar" style={{ height: "50%" }} />
                <div className="music-bar" style={{ height: "90%" }} />
              </div>
            )}
            {!isPlaying && (
              <div className="flex items-center gap-1">
                <span className="text-xl animate-pulse">🎵</span>
                <span
                  className="text-lg animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  🎶
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
