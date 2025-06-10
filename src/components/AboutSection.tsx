
import React from 'react';

const AboutSection = () => {
  return (
    <section id="over" className="section-padding bg-joris-cream">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold text-joris-teal mb-12 text-center">Over Joris</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
            {/* Placeholder for Joris's photo */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-500 text-lg">Foto van Joris</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-joris-orange">Hoi, ik ben Joris!</h3>
            <p className="text-lg mb-4">
              Als evenementorganisator met jarenlange ervaring begrijp ik hoe belangrijk maar ook tijdrovend het is om een geslaagd bedrijfsfeest te organiseren. Daarom doe ik het voor je - zonder poespas, maar met aandacht voor detail.
            </p>
            <p className="text-lg mb-6">
              Ik werk specifiek voor kleinere bedrijven in Overijssel die een persoonlijke aanpak waarderen. Jouw wensen staan centraal, maar ik neem alle regelwerk uit handen. Zo hou jij tijd over voor wat écht belangrijk is.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-joris-yellow flex items-center justify-center mr-3">
                  <span className="text-lg font-medium text-joris-teal">50+</span>
                </div>
                <p>Georganiseerde evenementen</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-joris-yellow flex items-center justify-center mr-3">
                  <span className="text-lg font-medium text-joris-teal">5+</span>
                </div>
                <p>Jaren ervaring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
