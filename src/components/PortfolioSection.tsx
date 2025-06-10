
import React from 'react';

const PortfolioSection = () => {
  // Portfolio items with new image paths
  const portfolioItems = [
    {
      title: "Zomers Personeelsfeest",
      description: "Een ontspannen barbecue met teambuilding activiteiten voor een IT-bedrijf met 30 werknemers",
      image: "/images/party1.svg"
    },
    {
      title: "Kerstdiner & Awards",
      description: "Een feestelijk jaareinde evenement met diner en persoonlijke awards voor een accountantskantoor",
      image: "/images/party2.svg"
    },
    {
      title: "Teambuilding Weekend",
      description: "Een actief weekend met diverse activiteiten voor een klein marketingbureau",
      image: "/images/party3.svg"
    },
    {
      title: "Jubileum Evenement",
      description: "Een 10-jarig jubileumsfeest voor een lokaal productiebedrijf met 50+ gasten",
      image: "/images/party4.svg"
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
          {portfolioItems.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
