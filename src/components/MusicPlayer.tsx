import { useState } from "react";
import Icon from "@/components/ui/icon";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const tracks = [
    { title: "Розовые сны", artist: "Dori Vibes" },
    { title: "Зелёная магия", artist: "Dori Vibes" },
    { title: "Краски души", artist: "Dori Vibes" },
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <div className="paper-texture rounded-2xl p-4 shadow-paper backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="music-visualizer">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`music-bar ${isPlaying ? "" : "opacity-30"}`}
              style={{
                height: isPlaying ? `${Math.random() * 20 + 8}px` : "8px",
                animationPlayState: isPlaying ? "running" : "paused",
              }}
            />
          ))}
        </div>
        <span className="text-2xl animate-pulse">🎵</span>
      </div>

      <div className="text-center mb-3">
        <h4 className="font-caveat text-lg font-bold text-gray-800">
          {tracks[currentTrack].title}
        </h4>
        <p className="font-open-sans text-sm text-gray-600">
          {tracks[currentTrack].artist}
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <button
          onClick={prevTrack}
          className="p-2 rounded-full bg-gradient-to-r from-dori-pink-light to-dori-pink text-white hover:shadow-glow transition-all duration-300"
        >
          <Icon name="SkipBack" size={16} />
        </button>

        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-gradient-to-r from-dori-pink to-dori-green text-white hover:shadow-glow transition-all duration-300 transform hover:scale-110"
        >
          <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
        </button>

        <button
          onClick={nextTrack}
          className="p-2 rounded-full bg-gradient-to-r from-dori-green to-dori-green-light text-white hover:shadow-glow transition-all duration-300"
        >
          <Icon name="SkipForward" size={16} />
        </button>
      </div>

      <div className="mt-3">
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-gradient-to-r from-dori-pink to-dori-green h-1 rounded-full transition-all duration-300"
            style={{ width: isPlaying ? "60%" : "30%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
