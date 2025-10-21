import { CheckCircle2 } from 'lucide-react';

export const HowToGuide = () => {
  const steps = [
    {
      number: "01",
      title: "Cleanse Your Scalp",
      description: "Use our gentle cleanser to remove buildup and prepare your scalp for treatment. Pat dry thoroughly.",
      duration: "2 minutes"
    },
    {
      number: "02",
      title: "Apply Treatment",
      description: "Dispense 1ml of solution directly onto affected areas. Massage gently into scalp with fingertips.",
      duration: "3 minutes"
    },
    {
      number: "03",
      title: "Use Derma Roller",
      description: "Roll in 4 directions (vertical, horizontal, diagonal) 5-10 times each. Enhances absorption by 4x.",
      duration: "5 minutes"
    },
    {
      number: "04",
      title: "Take Supplements",
      description: "Take 1 biotin capsule daily with food. Supports hair health from within for optimal results.",
      duration: "Daily"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-clinical-slate mb-4">
            How to Use Your Kit
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow this simple 4-step routine daily for best results. Most users see visible improvement within 3 months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bg-clinical-gray/30 rounded-2xl p-6 h-full border-2 border-transparent hover:border-clinical-blue transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl font-bold text-clinical-blue/20">
                    {step.number}
                  </span>
                  <span className="text-xs font-semibold text-clinical-blue bg-clinical-blue/10 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-clinical-slate mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-4 flex items-center text-clinical-blue text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  <span>Clinically proven</span>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-clinical-blue/30 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            💡 Pro tip: Consistency is key. Set a daily reminder to maintain your routine.
          </p>
        </div>
      </div>
    </section>
  );
};