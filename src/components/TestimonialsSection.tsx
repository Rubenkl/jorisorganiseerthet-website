
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Joris heeft echt alles uit handen genomen voor ons personeelsuitje. Geen gedoe, alles perfect geregeld en het team was super enthousiast. Volgend jaar weer!",
      name: "Marieke de Vries",
      position: "Directeur, TechSolutions Enschede",
      image: "/placeholder.svg"
    },
    {
      quote: "Het gemak waarmee Joris ons feest heeft georganiseerd is goud waard. Als kleine onderneming hebben we daar zelf simpelweg de tijd niet voor, maar willen we wel iets bijzonders voor ons team.",
      name: "Peter Jansen",
      position: "Eigenaar, Jansen & Co Administratie",
      image: "/placeholder.svg"
    },
    {
      quote: "De persoonlijke aanpak van Joris maakte echt het verschil. Hij luisterde naar onze wensen en kwam met ideeën die naadloos aansloten bij onze bedrijfscultuur.",
      name: "Saskia Bergman",
      position: "HR Manager, Lokale Producten B.V.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-joris-teal text-joris-cream">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Reviews - wat klanten zeggen 🌟</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-joris-teal">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-joris-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              
              <blockquote className="mb-4 italic">"{testimonial.quote}"</blockquote>
              
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
