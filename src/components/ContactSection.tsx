
import React, { useState } from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = {
    phone: "+31637549012",
    email: "info@jorisorganiseerthet.nl"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Velden ontbreken",
        description: "Vul alsjeblieft alle verplichte velden in.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('access_key', 'e960862d-e3ed-43e6-8a30-0844b15d4000');
      formDataToSubmit.append('subject', `Nieuw bericht van ${formData.name} via jorisorganiseerthet.nl`);
      formDataToSubmit.append('from_name', 'jorisorganiseerthet.nl');
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('company', formData.company);
      formDataToSubmit.append('message', formData.message);
      formDataToSubmit.append('botcheck', '');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSubmit
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Bericht verzonden! 🎉",
          description: "Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op."
        });
        
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Oeps! Er ging iets mis 😅",
        description: "Het bericht kon niet worden verzonden. Probeer het nog eens of bel/app me direct!",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-joris-cream via-joris-yellow/10 to-joris-orange/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-joris-teal mb-4">
            Heb je een vraag, een gek idee of wil je gewoon even sparren?
          </h2>
          <p className="text-xl text-joris-teal font-medium">
            Bel mij gerust of stuur een appje of mailtje! 📞💬✉️
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Quick Contact Buttons */}
          <div className="bg-joris-teal text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-joris-yellow text-center">Snelste contact! ⚡</h3>
            <p className="mb-6 text-center text-lg">Voor de snelste reactie stuur je gewoon een WhatsApp bericht!</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href={`https://wa.me/31637549012`}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-3 bg-green-500 text-white py-4 px-6 rounded-xl hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg font-bold"
              >
                <MessageSquare size={24} />
                WhatsApp mij
              </a>
              
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center justify-center gap-3 bg-joris-orange text-white py-4 px-6 rounded-xl hover:bg-joris-yellow hover:text-joris-teal transition-all transform hover:scale-105 shadow-lg font-bold"
              >
                <Phone size={24} />
                Bel mij
              </a>
              
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center justify-center gap-3 bg-joris-yellow text-joris-teal py-4 px-6 rounded-xl hover:bg-white transition-all transform hover:scale-105 shadow-lg font-bold"
              >
                <Mail size={24} />
                Mail mij
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-joris-orange">
            <h3 className="text-2xl font-bold mb-6 text-joris-teal text-center">Stuur een bericht</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-semibold text-joris-teal">Naam *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-joris-yellow/30 rounded-xl focus:border-joris-orange outline-none transition-colors"
                    placeholder="Je naam"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2 font-semibold text-joris-teal">Groep/Team</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-joris-yellow/30 rounded-xl focus:border-joris-orange outline-none transition-colors"
                    placeholder="Je vriendengroep of team"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold text-joris-teal">E-mailadres *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-joris-yellow/30 rounded-xl focus:border-joris-orange outline-none transition-colors"
                  placeholder="Je e-mailadres"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold text-joris-teal">Bericht *</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-joris-yellow/30 rounded-xl focus:border-joris-orange outline-none transition-colors"
                  placeholder="Vertel me meer over je plannen! Vriendendag? Vrijgezellenfeest? Familie-uitje? Ik hoor het graag! 🎉"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-joris-orange text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-joris-yellow hover:text-joris-teal transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Bezig met verzenden... ⏳' : 'Verstuur bericht!'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-joris-yellow/30">
            <h4 className="font-bold mb-6 text-joris-teal text-xl text-center">Contactinformatie 📞</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center">
                <div className="bg-joris-yellow p-4 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-joris-teal" />
                </div>
                <div>
                  <p className="font-semibold text-joris-teal">Telefoonnummer</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-joris-orange hover:text-joris-teal transition-colors text-lg font-medium">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="bg-joris-yellow p-4 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-joris-teal" />
                </div>
                <div>
                  <p className="font-semibold text-joris-teal">E-mailadres</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-joris-orange hover:text-joris-teal transition-colors font-medium">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
