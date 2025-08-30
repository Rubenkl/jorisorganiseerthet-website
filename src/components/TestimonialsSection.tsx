
import React from 'react';

const TestimonialsSection = () => {
  // Empty testimonials array - to be filled as reviews come in
  const testimonials: Array<{
    quote: string;
    name: string;
    position: string;
    image: string;
  }> = [];

  return (
    <section id="testimonials" className="section-padding bg-joris-teal text-joris-cream">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Reviews - wat klanten zeggen 🌟</h2>
        
        {testimonials.length > 0 ? (
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
        ) : (
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
              <p className="text-xl text-joris-teal mb-4">Nog geen reviews, maar jij kunt de eerste zijn!</p>
              <p className="text-gray-600 mb-6">
                Heb je een evenement gehad dat Joris heeft georganiseerd? Laat dan een review achter!
              </p>
              <a 
                href="https://wa.me/31637549012?text=Hey%20Joris!%20Ik%20wil%20graag%20een%20review%20achterlaten%20voor%20het%20evenement%20dat%20je%20voor%20ons%20hebt%20georganiseerd!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-joris-teal text-white px-8 py-3 rounded-lg hover:bg-joris-orange transition-colors"
              >
                Review achterlaten via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
