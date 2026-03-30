
import React from 'react';

const VoorBedrijvenSection = () => {
  const basePath = import.meta.env.BASE_URL;

  const services = [
    {
      title: "🏢 Jaarlijks personeelsuitje",
      description: "Elk jaar weer een geslaagd uitje, zonder dat jij er tijd aan kwijt bent. Ik regel het van begin tot eind — jullie hoeven alleen maar te komen."
    },
    {
      title: "🤝 Teambuilding op maat",
      description: "Een activiteit die écht bij jullie team past. Geen standaard gedoe, maar iets wat mensen verbindt en waar je nog lang over praat."
    },
    {
      title: "🎉 Bedrijfsfeest of borrel",
      description: "Van een informele vrijdagmiddagborrel tot een compleet verzorgd feest. Ik zorg dat het klopt, zodat jij gewoon kunt meegenieten."
    }
  ];

  return (
    <section id="bedrijven" className="section-padding bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold text-joris-teal mb-4 text-center">
          Voor Bedrijven
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Geen tijd om het personeelsuitje te regelen? Snap ik. Jullie runnen een bedrijf — ik regel de rest. 
          Van een middag teambuilding tot een compleet dagprogramma. Alles op maat, niks geen standaard pakketten.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-joris-cream rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
              <h3 className="font-semibold text-xl mb-4 text-joris-teal">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Foto's */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={`${basePath}images/bedrijfsuitje-1.jpg`}
              alt="Bedrijfsuitje georganiseerd door Joris"
              className="w-full h-72 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={`${basePath}images/bedrijfsuitje-2.jpg`}
              alt="Bedrijfsfeest georganiseerd door Joris"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="bg-joris-orange text-white py-4 px-10 rounded-xl text-lg font-semibold hover:bg-joris-yellow hover:text-joris-teal transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Neem contact op
          </a>
        </div>
      </div>
    </section>
  );
};

export default VoorBedrijvenSection;
