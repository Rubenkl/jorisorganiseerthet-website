
import React from 'react';

const PortfolioSection = () => {
  // Package options
  const packageItems = [
    {
      title: "🔹 Middag-uitje",
      description: "Lekker simpel maar gezellig: één leuke activiteit, gecombineerd met een goede lunch of een borrel erbij. Geen gedoe, gewoon genieten."
    },
    {
      title: "🔹 Middag tot avond",
      description: "Begin de middag met een activiteit, en sluit af met een lekker diner en natuurlijk een borrel. Zo maak je er in no-time een compleet feestje van."
    },
    {
      title: "🔹 All-in dagprogramma",
      description: "Van koffie (of wat sterkers 😉) met wat lekkers in de ochtend, naar een toffe activiteit, een stevige lunch, vervoer naar de volgende plek, nog een activiteit en afsluiten met diner & borrel. Alles erop en eraan, je hoeft alleen maar mee te gaan met de flow."
    },
    {
      title: "🔹 Dag op maat",
      description: "Hou je van verrassingen? Mooi! Dan regel ik een dag waarvan zelfs ik pas op het moment zelf weet wat het wordt. Helemaal op maat gemaakt, zonder dat je er zelf druk om hoeft te maken."
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold text-joris-teal mb-4 text-center">Impressie</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Bekijk enkele van de succesvolle evenementen die ik heb georganiseerd voor tevreden klanten
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {packageItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <h3 className="font-semibold text-xl mb-4 text-joris-teal">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
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
