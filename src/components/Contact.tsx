
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Plan Je Feest
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Klaar om jouw droomfeest werkelijkheid te maken? Neem contact op voor een vrijblijvend gesprek
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-party-500 mr-3" />
                  <h3 className="font-playfair text-xl font-semibold">Telefoon</h3>
                </div>
                <p className="text-muted-foreground">+31 6 1234 5678</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-party-500 mr-3" />
                  <h3 className="font-playfair text-xl font-semibold">Email</h3>
                </div>
                <p className="text-muted-foreground">info@jorisregeltfeestjes.nl</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-party-500 mr-3" />
                  <h3 className="font-playfair text-xl font-semibold">Locatie</h3>
                </div>
                <p className="text-muted-foreground">Nederland - Landelijk actief</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-party-500 mr-3" />
                  <h3 className="font-playfair text-xl font-semibold">Tijden</h3>
                </div>
                <p className="text-muted-foreground">Ma-Vr: 9:00 - 18:00<br />Weekend: Op afspraak</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold mb-6 text-foreground">
                  Stuur Je Aanvraag
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Naam *</label>
                      <Input placeholder="Je volledige naam" className="border-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Email *</label>
                      <Input type="email" placeholder="je@email.nl" className="border-2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Telefoon</label>
                      <Input placeholder="+31 6 1234 5678" className="border-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Type Feest</label>
                      <Input placeholder="Verjaardag, Bruiloft, etc." className="border-2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Datum</label>
                      <Input type="date" className="border-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Aantal Gasten</label>
                      <Input placeholder="Geschat aantal" className="border-2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Vertel over je feest</label>
                    <Textarea 
                      placeholder="Beschrijf je droomfeest, budget, speciale wensen..."
                      className="min-h-32 border-2"
                    />
                  </div>

                  <Button className="w-full bg-party-gradient text-white hover:opacity-90 py-6 text-lg font-semibold">
                    Verstuur Aanvraag
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
