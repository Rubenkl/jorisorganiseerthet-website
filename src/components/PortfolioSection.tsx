
import React from 'react';

const PortfolioSection = () => {
  const basePath = import.meta.env.BASE_URL;
  const activityImages = [
    `${basePath}images/tinified-image00007.png`,
    `${basePath}images/tinified-image00016.png`,
  ];

  const packageItems = [
    {
      title: "🌿 Dagje weg",
      description: "Een compleet georganiseerd dagje uit voor je vriendengroep, familie of club. Activiteiten, lunch, vervoer — alles geregeld. Jullie hoeven alleen maar mee te gaan.",
      isHighlighted: false
    },
    {
      title: "🍽️ Privé diner",
      description: "Een compleet verzorgd diner voor een speciale gelegenheid. Van locatie tot menu, van sfeer tot de laatste details. Jullie schuiven alleen maar aan.",
      isHighlighted: false
    },
    {
      title: "⭐ Dag op maat — Joris' favoriet",
      description: "Zin in iets onverwachts? Perfect. Ik plan een dag voor je waarbij zelfs ik pas op het moment zelf weet wat er gaat gebeuren. Alles afgestemd op jou, zonder dat jij ergens aan hoeft te denken.",
      isHighlighted: true
    }
  ];

  return (
    <section id="particulieren" className="section-padding bg-joris-cream">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold text-joris-teal mb-4 text-center">Voor Particulieren</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Ook voor vriendengroepen, families en andere gezellige clubs regel ik graag iets moois
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packageItems.map((item, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 ${
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
              <div key={src} className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={src}
                  alt="Georganiseerde festiviteit"
                  className="w-full h-72 object-cover"
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
