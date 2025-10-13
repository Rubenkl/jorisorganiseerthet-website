
import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-joris-midnight text-joris-cream py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src="/images/joris-logo.png" alt="Joris Organiseert Het" className="h-12 mb-4" />
            <p className="text-sm opacity-80">
              Geen poespas, gewoon een onmeunig mooie dag. Alles op maat voor vriendenfeesten, vrijgezellenfeesten, familie-uitjes, bedrijfsuitjes en alle andere groepen die samen iets leuks willen beleven.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Snelle links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-joris-orange transition-colors">Home</a></li>
              <li><a href="#wat-ik-doe" className="hover:text-joris-orange transition-colors">Wat ik doe!</a></li>
              <li><a href="#portfolio" className="hover:text-joris-orange transition-colors">Arrangementen</a></li>
              <li><a href="#testimonials" className="hover:text-joris-orange transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-joris-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>📱 +31 6 37549012</p>
              <p>📧 info@jorisorganiseerthet.nl</p>
              <p>🌐 jorisorganiseerthet.nl</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-joris-teal/30 mt-8 pt-8 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Joris Organiseert Het. Alle rechten voorbehouden. Website door <a href="https://ruub.eu" target="_blank" rel="noopener noreferrer" className="hover:text-joris-orange transition-colors">RUUB</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
