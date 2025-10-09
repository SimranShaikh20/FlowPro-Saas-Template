import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started with FlowPro?",
    answer:
      "Getting started is simple! Click the 'Start Free Trial' button, create your account, and you'll be up and running in less than 2 minutes. No credit card required for the trial period.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and wire transfers for enterprise customers. All payments are processed securely.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes! We use bank-level 256-bit SSL encryption, regular security audits, and comply with GDPR, SOC 2, and other major security standards. Your data is stored in secure, geo-redundant data centers.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all Professional plan features. No credit card required. You can cancel anytime during the trial period.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. Our average response time is under 2 hours.",
  },
  {
    question: "Can I import data from other tools?",
    answer:
      "Yes! We provide easy-to-use import tools for most popular platforms. Our support team can also help with custom migrations for enterprise customers.",
  },
  {
    question: "Do you offer discounts for nonprofits or education?",
    answer:
      "Yes! We offer special pricing for verified nonprofit organizations and educational institutions. Contact our sales team for more information.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about FlowPro
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
