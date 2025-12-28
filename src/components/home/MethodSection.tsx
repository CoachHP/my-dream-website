import { Layers, Target, RefreshCw } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Structure",
    description: "Clear training architecture. No randomness. Every session builds on the last with calculated progression."
  },
  {
    icon: Target,
    title: "Execution",
    description: "Form, biomechanics, and intent matter more than load alone. Precision in every rep creates results."
  },
  {
    icon: RefreshCw,
    title: "Recovery",
    description: "Progress only happens when adaptation is respected. Strategic rest is as important as the work."
  }
];

export const MethodSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            The Method
          </p>
          <h2 className="text-heading">
            Three Pillars of Physique Development
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className="group p-8 md:p-10 bg-secondary border border-border hover:border-foreground/20 transition-all duration-500"
            >
              <pillar.icon 
                className="w-8 h-8 mb-6 text-muted-foreground group-hover:text-foreground transition-colors" 
                strokeWidth={1.5}
              />
              <h3 className="font-display text-2xl tracking-wide mb-4">
                {pillar.title}
              </h3>
              <p className="text-body">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
