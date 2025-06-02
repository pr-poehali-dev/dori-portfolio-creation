const Portfolio = () => {
  const artworks = [
    {
      id: 1,
      title: "Весенний сад",
      description: "Акварель на бумаге",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      colors: "from-dori-green-light to-dori-green",
    },
    {
      id: 2,
      title: "Розовые мечты",
      description: "Масло на холсте",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      colors: "from-dori-pink-light to-dori-pink",
    },
    {
      id: 3,
      title: "Магический лес",
      description: "Смешанная техника",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      colors: "from-dori-green to-dori-pink",
    },
    {
      id: 4,
      title: "Танец красок",
      description: "Акрил на картоне",
      image:
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
      colors: "from-dori-pink to-dori-green-light",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-caveat text-6xl font-bold text-center text-transparent bg-gradient-to-r from-dori-pink to-dori-green bg-clip-text mb-16">
          Моя галерея 🎨
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group paper-texture rounded-2xl overflow-hidden shadow-paper hover:shadow-paper-hover transition-all duration-300 hover:scale-105 border border-white/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${artwork.colors} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />
              </div>

              <div className="p-6">
                <h3 className="font-caveat text-3xl font-bold text-gray-800 mb-2">
                  {artwork.title}
                </h3>
                <p className="text-gray-600 italic">{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
