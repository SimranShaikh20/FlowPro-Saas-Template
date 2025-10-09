import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content:
      "FlowPro has completely transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity by 40%.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Product Manager at InnovateCo",
    content:
      "The best investment we've made this year. The analytics features alone have helped us make better data-driven decisions.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "CTO at DataFlow",
    content:
      "Security was our top concern, and FlowPro exceeded all expectations. The enterprise-grade security gives us complete peace of mind.",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "David Park",
    role: "Founder at StartupHub",
    content:
      "We switched from three different tools to just FlowPro. It's incredibly cost-effective and the support team is outstanding.",
    rating: 5,
    avatar: "DP",
  },
  {
    name: "Lisa Anderson",
    role: "Operations Director at ScaleUp",
    content:
      "The mobile app is a game-changer. I can manage my team and projects from anywhere, which has been crucial for our remote team.",
    rating: 5,
    avatar: "LA",
  },
  {
    name: "James Wilson",
    role: "Marketing Lead at GrowthCo",
    content:
      "The automation features have saved us countless hours. We're now able to focus on strategy instead of repetitive tasks.",
    rating: 5,
    avatar: "JW",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
