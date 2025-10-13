
import React from 'react';

const PortfolioSection = () => {
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
      description: "Hou je van verrassingen? Mooi! Dan regel ik een dag waarvan zelfs ik pas op het moment zelf weet wat het wordt. Helemaal op maat gemaakt, zonder dat je er zelf druk om hoeft te maken.",
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
          <h3 className="text-2xl md:text-3xl font-semibold text-joris-teal mb-8 text-center">
            Impressies van Georganiseerde Festiviteiten
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-lg">📸 Foto placeholder 1</p>
                <p className="text-sm mt-2">Afbeelding van georganiseerde festiviteit</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-lg">📸 Foto placeholder 2</p>
                <p className="text-sm mt-2">Afbeelding van georganiseerde festiviteit</p>
              </div>
            </div>
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
