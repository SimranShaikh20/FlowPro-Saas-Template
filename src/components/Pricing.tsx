import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: "29",
    yearlyPrice: "290",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "Mobile apps",
    ],
  },
  {
    name: "Professional",
    monthlyPrice: "79",
    yearlyPrice: "790",
    description: "Best for growing businesses",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "Mobile apps",
      "Custom integrations",
      "Advanced security",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "199",
    yearlyPrice: "1990",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Custom analytics",
      "24/7 phone support",
      "Mobile apps",
      "Custom integrations",
      "Enterprise security",
      "Dedicated account manager",
    ],
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible pricing that grows with your business
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={!isYearly ? "text-foreground font-semibold" : "text-muted-foreground"}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 bg-secondary rounded-full transition-colors hover:bg-secondary/80"
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-gradient-primary rounded-full transition-transform ${
                  isYearly ? "translate-x-7" : ""
                }`}
              />
            </button>
            <span className={isYearly ? "text-foreground font-semibold" : "text-muted-foreground"}>
              Yearly <span className="text-accent text-sm">(Save 17%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-2xl p-8 animate-fade-in ${
                plan.popular
                  ? "border-primary shadow-glow scale-105"
                  : "border-border hover:border-primary/50"
              } transition-all duration-300 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-5xl font-bold">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>

              <Button
                variant={plan.popular ? "hero" : "glass"}
                className="w-full mb-6 h-11"
              >
                Get Started
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
