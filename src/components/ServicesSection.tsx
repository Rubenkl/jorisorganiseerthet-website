
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Basis Feestpakket",
      description: "Voor kleinere bedrijven die een simpel maar effectief personeelsfeest willen",
      features: [
        "Locatie selectie en reservering",
        "Catering regelen (drankjes en hapjes)",
        "Basis decoratie en aankleding",
        "Tijdschema planning"
      ],
      highlight: false
    },
    {
      title: "Compleet Feestpakket",
      description: "Ons meest populaire pakket voor een volledig verzorgd bedrijfsfeest",
      features: [
        "Alles van het basispakket",
        "Entertainment regelen",
        "Vervoer voor personeel",
        "Thema-uitwerking",
        "Fotografie"
      ],
      highlight: true
    },
    {
      title: "Premium Feestpakket",
      description: "Voor een onvergetelijke ervaring met alle toeters en bellen",
      features: [
        "Alles van het complete pakket",
        "VIP-ervaringen",
        "Gepersonaliseerde goodiebags",
        "Op maat gemaakt entertainment",
        "Follow-up en evaluatie"
      ],
      highlight: false
    }
  ];

  return (
    <section id="diensten" className="section-padding bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold text-joris-teal mb-4 text-center">Mijn Diensten</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Ik neem het regelwerk uit handen, jij oogst de complimenten. Kies het pakket dat bij jouw bedrijf past.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105 ${
                service.highlight 
                  ? 'border-2 border-joris-orange relative bg-white' 
                  : 'bg-white'
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 bg-joris-orange text-white text-sm py-1 px-3 rounded-bl-lg">
                  Populair
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-joris-orange mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className={`block w-full py-2 px-4 text-center rounded-lg ${
                    service.highlight 
                      ? 'bg-joris-orange text-joris-cream hover:bg-joris-teal' 
                      : 'bg-joris-teal text-joris-cream hover:bg-joris-orange'
                  } transition-colors`}
                >
                  Informeer naar dit pakket
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
