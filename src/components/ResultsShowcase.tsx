import { TrendingUp, Users, Award } from 'lucide-react';

export const ResultsShowcase = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "87%",
      label: "Report visible improvement",
      subtext: "Within 3 months"
    },
    {
      icon: Users,
      value: "50K+",
      label: "Active users",
      subtext: "Worldwide"
    },
    {
      icon: Award,
      value: "4.8/5",
      label: "Average rating",
      subtext: "From verified users"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-clinical-slate via-gray-900 to-clinical-slate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Real Results, Real People
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Thousands have achieved thicker, fuller hair with our clinically-proven treatment program.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <stat.icon className="h-12 w-12 text-clinical-blue mx-auto mb-4" />
              <div className="text-5xl font-bold text-clinical-blue mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Subtle Display */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Visible Density Improvement
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our treatment program targets hair follicles at the cellular level, promoting natural regrowth and increased density. Results vary by individual, but most users notice improvement within 12 weeks.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-clinical-blue mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Thicker hair strands</span>
                </li>
                <li className="flex items-start">
                  <span className="text-clinical-blue mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Reduced shedding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-clinical-blue mr-3 text-xl">✓</span>
                  <span className="text-gray-300">Improved scalp health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-clinical-blue mr-3 text-xl">✓</span>
                  <span className="text-gray-300">New hair growth in thinning areas</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-clinical-blue/20 to-transparent rounded-xl overflow-hidden border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop" 
                  alt="Hair density results"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clinical-slate/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-gray-300 italic">
                    * Individual results may vary. Photos show typical results after 6 months of consistent use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};