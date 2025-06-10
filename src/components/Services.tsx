
import { Card, CardContent } from '@/components/ui/card';
import { Gift, Users, Music, Camera, Utensils, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Gift,
      title: 'Verjaardagsfeesten',
      description: 'Van kinderfeestjes tot milestone celebrations - wij maken jouw verjaardag onvergetelijk.',
      features: ['Themadecoratie', 'Entertainment', 'Catering opties']
    },
    {
      icon: Users,
      title: 'Bruiloften',
      description: 'Jouw droombruiloft tot in de perfectie georganiseerd, van ceremonie tot receptie.',
      features: ['Complete planning', 'Leveranciers netwerk', 'Dag coördinatie']
    },
    {
      icon: Music,
      title: 'Bedrijfsfeesten',
      description: 'Professionele evenementen die je team samenbrengen en je bedrijf laten stralen.',
      features: ['Team building', 'Networking events', 'Product launches']
    },
    {
      icon: Camera,
      title: 'Jubilea & Mijlpalen',
      description: 'Speciale momenten verdienen een bijzondere viering. Wij zorgen voor de perfecte setting.',
      features: ['Gepersonaliseerde aanpak', 'Fotografie regeling', 'Herinneringen maken']
    },
    {
      icon: Utensils,
      title: 'Catering & Dining',
      description: 'Van fingerfood tot fine dining - culinaire ervaringen die je gasten verrassen.',
      features: ['Diverse keukens', 'Dieet opties', 'Live cooking']
    },
    {
      icon: Sparkles,
      title: 'Entertainment',
      description: 'DJ\'s, bands, artiesten en meer - wij zorgen voor de perfecte sfeer op jouw feest.',
      features: ['Live muziek', 'Shows & acts', 'Interactive entertainment']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Onze Diensten
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Van concept tot uitvoering - wij regelen elk detail van jouw perfecte feest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-party-gradient rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-party-gradient rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
