const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center sparkle-overlay">
      <div className="text-center z-10">
        <h1 className="font-caveat text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-dori-pink via-dori-green to-dori-pink bg-clip-text animate-float mb-4">
          Дори ✨
        </h1>
        <p className="font-caveat text-3xl md:text-4xl text-dori-pink-dark mb-8 animate-bounce-slow">
          Художник мечты и волшебства
        </p>
        <div className="paper-texture rounded-3xl p-8 mx-4 md:mx-0 max-w-2xl shadow-paper-hover border border-dori-green-light/30 animate-pulse">
          <p className="text-lg text-gray-700 leading-relaxed">
            Добро пожаловать в мой мир красок и воображения! Здесь каждый штрих
            — это история, а каждый цвет — эмоция. Погрузитесь в атмосферу
            творчества под звуки вдохновляющей музыки. ✨🎨🌟
          </p>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div
        className="absolute top-20 left-10 w-16 h-16 bg-dori-pink rounded-full opacity-30 animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-40 right-20 w-12 h-12 bg-dori-green rounded-full opacity-40 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-20 w-20 h-20 bg-dori-pink-light rounded-full opacity-25 animate-float"
        style={{ animationDelay: "1.5s" }}
      />
    </section>
  );
};

export default HeroSection;
