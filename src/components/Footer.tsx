
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold mb-4 text-white">
              Joris Regelt Feestjes
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Specialist in het organiseren van onvergetelijke feesten en evenementen. 
              Van intieme bijeenkomsten tot grootse celebraties - wij maken jouw dromen waar.
            </p>
            <p className="text-gray-400 text-sm">
              Nederland - Landelijk actief
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Verjaardagsfeesten</li>
              <li>Bruiloften</li>
              <li>Bedrijfsfeesten</li>
              <li>Jubilea</li>
              <li>Catering</li>
              <li>Entertainment</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+31 6 1234 5678</li>
              <li>info@jorisregeltfeestjes.nl</li>
              <li>Ma-Vr: 9:00 - 18:00</li>
              <li>Weekend: Op afspraak</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Gemaakt met <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> voor onvergetelijke momenten
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Joris Regelt Feestjes. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
