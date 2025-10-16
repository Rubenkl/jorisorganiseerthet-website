
import React from 'react';

const WatIkDoeSection = () => {
  const basePath = import.meta.env.BASE_URL;
  const portraitSrc = `${basePath}images/tinified-foto-joris-2.png`;

  return (
    <section id="wat-ik-doe" className="section-padding bg-joris-cream">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Header with circular photo and intro */}
            <div className="text-center mb-8">
              <div className="mx-auto mb-6">
                <img
                  src={portraitSrc}
                  alt="Foto van Joris Lansink"
                  className="w-48 h-48 mx-auto"
                />
              </div>
              
              <h2 className="text-3xl font-semibold text-joris-teal mb-2">
                Hoi! Ik ben Joris Lansink
              </h2>
              <p className="text-joris-orange font-medium text-lg">
                Regelt Het van A tot Z
              </p>
            </div>
            
            {/* Personal story */}
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Ik regel graag dingen. Plannen, organiseren, zorgen dat alles soepel loopt, daar word ik blij van. 
                Voor families, vriendengroepen, sportteams, collega's en alle andere gezellige clubjes die samen iets leuks willen beleven.
                Of het nu gaat om een dagje uit, een feestavond of een vrijgezellenfeest dat nog lang wordt besproken aan een dag of avond om nooit te vergeten. 
                Geen stress en geen geregel.
              </p>
              
              <p>
                Want eerlijk is eerlijk: mensen vinden het heerlijk als alles geregeld is. Geen gezeur over "Wat gaan we nu doen?" of "Waar kunnen we eigenlijk heen?" want ik regel het. Van A tot Z. Geen poespas, gewoon een onmeunig mooie dag. Alles op maat.
              </p>
              
              <p>
                Jullie hoeven alleen maar te komen en te genieten. Ik zorg dat het soepel verloopt, dat iedereen lacht, en dat je achteraf denkt: "Dit moeten we vaker doen." Dat is wat ik doe.
              </p>
            </div>
            
            {/* Bottom highlight */}
            <div className="mt-8 text-center">
              <p className="text-xl font-semibold text-joris-teal">
                Gewoon goed georganiseerd!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatIkDoeSection;
