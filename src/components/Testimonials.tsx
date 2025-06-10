
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Emma & Stijn',
      event: 'Bruiloft Rotterdam',
      rating: 5,
      text: 'Joris heeft onze droombruiloft werkelijkheid gemaakt! Alles was perfect georganiseerd en onze gasten praten er nog steeds over. Dankjewel voor deze onvergetelijke dag!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Maria van der Berg',
      event: '60e Verjaardag',
      rating: 5,
      text: 'Wat een geweldige verrassing! Joris regelde alles tot in de puntjes. Mijn familie en vrienden waren zo onder de indruk. Het was echt de mooiste verjaardag ooit.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'TechFlow B.V.',
      event: 'Bedrijfsfeest',
      rating: 5,
      text: 'Professioneel, creatief en betrouwbaar. Joris heeft ons bedrijfsfeest naar een hoger niveau getild. Onze medewerkers hadden een fantastische avond!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ontdek waarom onze klanten steeds weer terugkomen voor hun speciale momenten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg relative bg-white">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-party-300 mb-4" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.event}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
