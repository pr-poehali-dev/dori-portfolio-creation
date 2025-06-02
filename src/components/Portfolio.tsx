import { useState } from "react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const artworks = [
    {
      id: 1,
      title: "Розовые мечты",
      description: "Акварельная фантазия в нежных тонах",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=400&fit=crop",
      category: "watercolor",
      colors: "from-dori-pink-light to-dori-pink",
    },
    {
      id: 2,
      title: "Зелёный сад",
      description: "Природа в её первозданной красоте",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      category: "digital",
      colors: "from-dori-green-light to-dori-green",
    },
    {
      id: 3,
      title: "Магические портреты",
      description: "Когда душа отражается в красках",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
      category: "portrait",
      colors: "from-dori-pink to-dori-green",
    },
    {
      id: 4,
      title: "Весенние грёзы",
      description: "Пробуждение природы в пастели",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=400&fit=crop",
      category: "watercolor",
      colors: "from-dori-green to-dori-pink-light",
    },
    {
      id: 5,
      title: "Цифровая сказка",
      description: "Современное искусство с душой",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=400&fit=crop",
      category: "digital",
      colors: "from-dori-pink-dark to-dori-green-dark",
    },
    {
      id: 6,
      title: "Детские улыбки",
      description: "Радость в каждом мазке кисти",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
      category: "portrait",
      colors: "from-dori-cream to-dori-pink",
    },
  ];

  const categories = [
    { id: "all", name: "Все работы", emoji: "🎨" },
    { id: "watercolor", name: "Акварель", emoji: "🌊" },
    { id: "digital", name: "Digital Art", emoji: "💻" },
    { id: "portrait", name: "Портреты", emoji: "👤" },
  ];

  const filteredArtworks =
    selectedCategory === "all"
      ? artworks
      : artworks.filter((artwork) => artwork.category === selectedCategory);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="paper-texture rounded-full p-2 shadow-paper">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-caveat text-lg font-bold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-dori-pink to-dori-green text-white shadow-glow"
                      : "text-gray-700 hover:bg-white/50"
                  }`}
                >
                  {category.emoji} {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="paper-texture rounded-3xl overflow-hidden shadow-paper hover:shadow-paper-hover transition-all duration-500 transform hover:-translate-y-2 group sparkle-overlay"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${artwork.colors} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                />
                <div className="absolute top-4 right-4 text-3xl animate-twinkle">
                  ✨
                </div>
              </div>

              <div className="p-6 relative">
                <h3 className="font-caveat text-3xl font-bold text-gray-800 mb-2">
                  {artwork.title}
                </h3>
                <p className="text-gray-600 italic font-open-sans">
                  {artwork.description}
                </p>
                <div className="absolute bottom-4 right-4 text-2xl animate-pulse">
                  🎨
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="paper-texture rounded-3xl p-8 max-w-2xl mx-auto shadow-paper sparkle-overlay">
            <h3 className="font-caveat text-4xl font-bold text-dori-pink-dark mb-4">
              Хотите заказать работу? ✨
            </h3>
            <p className="font-open-sans text-gray-700 mb-6">
              Каждое произведение создается с душой и индивидуальным подходом
            </p>
            <button className="bg-gradient-to-r from-dori-pink to-dori-green text-white px-8 py-4 rounded-full font-caveat text-xl font-bold shadow-glow hover:shadow-paper-hover transition-all duration-300 transform hover:scale-105">
              Связаться со мной 💌
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
