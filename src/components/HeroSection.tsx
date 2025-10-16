
import React from 'react';

const HeroSection = () => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <section id="hero" className="relative h-screen flex items-center">
      {/* Background Image with improved overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${basePath}images/summer-bbq.png')`,
          }}
        />
        {/* Improved overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-joris-teal/80 via-joris-teal/60 to-joris-teal/40"></div>
      </div>
      
      {/* Colorful floating elements for playfulness */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-8 h-8 bg-joris-yellow rounded-full animate-bounce opacity-80"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-joris-orange rounded-full animate-pulse opacity-70"></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-joris-yellow rounded-full animate-bounce delay-500 opacity-60"></div>
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-joris-orange rounded-full animate-pulse delay-1000 opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-joris-yellow">Joris Organiseert Het!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-medium">
            Vriendenfeesten • Vrijgezellenfeesten • Familie-uitjes
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Geen poespas, gewoon een <span className="text-joris-yellow font-semibold">onmeunig mooie dag</span>. Alles op maat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#wat-ik-doe" 
              className="bg-joris-orange text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-joris-yellow hover:text-joris-teal transition-all transform hover:scale-105 shadow-lg inline-block text-center"
            >
              Wat doe ik?
            </a>
            <a 
              href="https://wa.me/31637549012" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg inline-block text-center flex items-center justify-center gap-2"
            >
              <span>App mij direct!</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
