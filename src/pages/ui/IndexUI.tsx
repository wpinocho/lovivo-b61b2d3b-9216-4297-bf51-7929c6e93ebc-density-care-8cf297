import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { HowToGuide } from '@/components/HowToGuide';
import { ResultsShowcase } from '@/components/ResultsShowcase';
import { SafetyFAQ } from '@/components/SafetyFAQ';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative clinical-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop')] opacity-5 bg-cover bg-center" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-clinical-blue/20 backdrop-blur-sm border border-clinical-blue/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-clinical-blue mr-2" />
                <span className="text-sm font-medium text-clinical-blue">Clinically Proven Formula</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                More Density.<br />
                <span className="text-clinical-blue">More Confidence.</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Advanced hair growth treatment backed by science. See visible results in 3 months with our clinically-proven formula.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-clinical-blue hover:bg-clinical-blue/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => {
                    const kitsSection = document.getElementById('treatment-kits');
                    kitsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
                  onClick={() => {
                    const guideSection = document.getElementById('how-to-guide');
                    guideSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  How It Works
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-clinical-blue mr-2" />
                  <span className="text-gray-300">FDA-Approved</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-clinical-blue mr-2" />
                  <span className="text-gray-300">Dermatologist Tested</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-clinical-blue mr-2" />
                  <span className="text-gray-300">Money-Back Guarantee</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=800&fit=crop" 
                  alt="Hair growth treatment kit"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white text-clinical-slate rounded-xl p-6 shadow-2xl max-w-xs">
                  <div className="text-4xl font-bold text-clinical-blue mb-1">87%</div>
                  <div className="text-sm font-semibold">See visible improvement</div>
                  <div className="text-xs text-gray-500 mt-1">Within 3 months of use</div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-clinical-blue/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Kits Section */}
      <section id="treatment-kits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clinical-slate mb-4">
              Choose Your Treatment Program
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete kits with everything you need for visible results. All programs include our clinically-proven formula, supplements, and expert guidance.
            </p>
          </div>

          {!loadingCollections && collections.length > 0 && (
            <div className="mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {collections
                  .filter(c => c.handle === 'treatment-kits')
                  .map((collection) => (
                    <CollectionCard 
                      key={collection.id} 
                      collection={collection} 
                      onViewProducts={handleViewCollectionProducts} 
                    />
                  ))}
              </div>
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-clinical-gray/30 rounded-2xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No products available at the moment.
              </p>
            </div>
          )}

          {selectedCollectionId && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-2 border-clinical-slate text-clinical-slate hover:bg-clinical-slate hover:text-white"
              >
                View All Products
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* How-To Guide Section */}
      <div id="how-to-guide">
        <HowToGuide />
      </div>

      {/* Results Showcase */}
      <ResultsShowcase />

      {/* Safety FAQ */}
      <SafetyFAQ />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-clinical-blue to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Hair?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands who have achieved thicker, fuller hair with our clinically-proven treatment program. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-clinical-blue hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-xl shadow-xl"
              onClick={() => {
                const kitsSection = document.getElementById('treatment-kits');
                kitsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl"
              onClick={() => {
                const faqSection = document.querySelector('.max-w-4xl');
                faqSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
          <p className="text-sm text-blue-100 mt-8">
            ✓ 60-Day Money-Back Guarantee  •  ✓ Free Shipping  •  ✓ Expert Support
          </p>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};