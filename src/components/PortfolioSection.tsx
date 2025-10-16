
import React from 'react';

const PortfolioSection = () => {
  const basePath = import.meta.env.BASE_URL;
  const activityImages = [
    `${basePath}images/tinified-image00007.png`,
    `${basePath}images/tinified-image00016.png`,
  ];

  // Package options
  const packageItems = [
    {
      title: "🔹 Middag-uitje",
      description: "Lekker simpel maar gezellig: één leuke activiteit, gecombineerd met een goede lunch of een borrel erbij. Geen gedoe, gewoon genieten.",
      isHighlighted: false
    },
    {
      title: "🔹 Middag tot avond",
      description: "Begin de middag met een activiteit, en sluit af met een lekker diner en natuurlijk een borrel. Zo maak je er in no-time een compleet feestje van.",
      isHighlighted: false
    },
    {
      title: "🔹 All-in dagprogramma",
      description: "Van koffie (of wat sterkers 😉) met wat lekkers in de ochtend, naar een toffe activiteit, een stevige lunch, vervoer naar de volgende plek, nog een activiteit en afsluiten met diner & borrel. Alles erop en eraan, je hoeft alleen maar mee te gaan met de flow.",
      isHighlighted: false
    },
    {
      title: "⭐ Dag op maat: Joris' favoriet",
      description: "Zin in iets onverwachts? Perfect. Ik plan een dag voor je waarbij zelfs ik pas op het moment zelf weet wat er gaat gebeuren. Alles afgestemd op jou, zonder dat jij ergens aan hoeft te denken.",
      isHighlighted: true
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold text-joris-teal mb-4 text-center">Arrangementen</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Kies uit deze vier verschillende arrangementen, of laat mij iets helemaal op maat maken voor jullie groep
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {packageItems.map((item, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 ${
              item.isHighlighted ? 'ring-2 ring-joris-orange border-2 border-joris-orange' : ''
            }`}>
              <h3 className={`font-semibold text-xl mb-4 ${
                item.isHighlighted ? 'text-joris-orange' : 'text-joris-teal'
              }`}>{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Images section */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            {activityImages.map((src) => (
              <div key={src} className="rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt="Georganiseerde festiviteit"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-joris-teal">
            ✨ Alles gaat op prijsaanvraag. Zo blijft het eerlijk en precies passend bij jullie wensen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
