
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const portfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=400&fit=crop',
      title: 'Romantische Tuinbruiloft',
      description: 'Een dromerige bruiloft onder de sterren met 150 gasten',
      category: 'Bruiloft'
    },
    {
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=400&fit=crop',
      title: 'Bedrijfsfeest Tech Startup',
      description: 'Innovatief networking event met interactieve elementen',
      category: 'Bedrijfsfeest'
    },
    {
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=400&fit=crop',
      title: '50 Jaar Jubileum',
      description: 'Elegante viering van een gouden mijlpaal',
      category: 'Jubileum'
    },
    {
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=400&fit=crop',
      title: 'Kinderfeest Superhelden',
      description: 'Avontuurlijk themafeest voor kleine helden',
      category: 'Kinderfeest'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Ons Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Een selectie van onze meest memorabele feesten en evenementen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden card-hover group border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-party-gradient opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-sm font-semibold mb-1">{item.category}</div>
                    <div className="text-xs opacity-90">Bekijk Project</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
