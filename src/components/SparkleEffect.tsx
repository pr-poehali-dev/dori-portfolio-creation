import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const SparkleEffect = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < 20; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          delay: Math.random() * 4,
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute text-dori-pink animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            fontSize: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          ✨
        </div>
      ))}

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 text-6xl animate-float opacity-20">
        🎨
      </div>
      <div
        className="absolute top-3/4 right-1/4 text-4xl animate-float opacity-30"
        style={{ animationDelay: "2s" }}
      >
        🌸
      </div>
      <div
        className="absolute top-1/2 left-1/6 text-5xl animate-float opacity-25"
        style={{ animationDelay: "1s" }}
      >
        🍃
      </div>
      <div
        className="absolute bottom-1/4 right-1/3 text-3xl animate-float opacity-35"
        style={{ animationDelay: "3s" }}
      >
        💫
      </div>
    </div>
  );
};

export default SparkleEffect;
