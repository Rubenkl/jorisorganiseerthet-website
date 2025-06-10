
import { Button } from '@/components/ui/button';
import { Star, Calendar, Users, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-white/25 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-white/20 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Jouw Perfecte
            <span className="block text-yellow-200">Feest Begint Hier</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Van intieme verjaardagen tot spectaculaire bruiloften - 
            Joris zorgt voor onvergetelijke momenten die je een leven lang bijblijven.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-party-600 hover:bg-white/90 font-semibold px-8 py-6 text-lg hover-scale">
              Plan Mijn Feest
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-party-600 font-semibold px-8 py-6 text-lg hover-scale">
              Bekijk Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="w-8 h-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Calendar className="w-8 h-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold">8</div>
              <div className="text-white/80">Jaar Ervaring</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-white/80">Gasten Vermaakt</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Heart className="w-8 h-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-white/80">Tevredenheid</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
