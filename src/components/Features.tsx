import { Rocket, Zap, Lock, BarChart3, Users2, Settings, Smartphone, Target } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure.",
  },
  {
    icon: Zap,
    title: "Real-time Collaboration",
    description: "Work together seamlessly with your team in real-time.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols to protect your data.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights with powerful analytics and reporting tools.",
  },
  {
    icon: Users2,
    title: "Team Management",
    description: "Manage permissions, roles, and workflows effortlessly.",
  },
  {
    icon: Settings,
    title: "Customizable",
    description: "Tailor the platform to fit your unique business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access your workspace anywhere with our mobile apps.",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set, track, and achieve your objectives with precision.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to streamline your workflow and boost productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
