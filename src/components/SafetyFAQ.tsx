import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, CheckCircle2 } from 'lucide-react';

export const SafetyFAQ = () => {
  const faqs = [
    {
      question: "Is this treatment safe for daily use?",
      answer: "Yes, our formula is dermatologist-tested and designed for daily application. All ingredients are FDA-approved and have been clinically studied for safety and efficacy. We recommend following the usage instructions provided with your kit."
    },
    {
      question: "Are there any side effects?",
      answer: "Most users experience no side effects. In rare cases, some may experience mild scalp irritation or dryness during the first week as your scalp adjusts. This typically resolves on its own. If irritation persists, reduce application frequency or consult a healthcare provider."
    },
    {
      question: "Can I use this with other hair products?",
      answer: "Yes, our treatment is compatible with most hair care products. We recommend applying the treatment to a clean, dry scalp before using other styling products. Avoid applying other topical treatments to the same area within 4 hours."
    },
    {
      question: "How long until I see results?",
      answer: "Most users notice reduced shedding within 4-6 weeks. Visible density improvement typically appears around 12 weeks, with optimal results at 6 months. Hair growth is a gradual process, and consistency is essential for best results."
    },
    {
      question: "Is this suitable for all hair types?",
      answer: "Our treatment is formulated to work with all hair types and textures. It's effective for both men and women experiencing thinning hair, pattern baldness, or reduced density. If you have a specific scalp condition, consult your dermatologist before starting."
    },
    {
      question: "What if I'm pregnant or nursing?",
      answer: "We recommend consulting your healthcare provider before starting any new treatment during pregnancy or while nursing. While our ingredients are generally safe, it's important to get personalized medical advice for your situation."
    }
  ];

  return (
    <section className="py-20 bg-clinical-gray/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-clinical-blue/10 rounded-full mb-4">
            <Shield className="h-8 w-8 text-clinical-blue" />
          </div>
          <h2 className="text-4xl font-bold text-clinical-slate mb-4">
            Safety & Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Your safety is our priority. Here are answers to common questions about our treatment.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-clinical-slate font-semibold hover:text-clinical-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-clinical-blue/5 border-2 border-clinical-blue/20 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <CheckCircle2 className="h-6 w-6 text-clinical-blue flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-clinical-slate mb-2">
                Clinically Tested & Dermatologist Approved
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All our products undergo rigorous clinical testing and are formulated by board-certified dermatologists. We use only FDA-approved ingredients with proven safety profiles. If you have specific concerns, we recommend consulting with your healthcare provider before starting treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};