import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import coachImage from "@/assets/coach-correcting-form.jpg";

const principles = [
  {
    title: "Structure Over Motivation",
    description: "Motivation fluctuates. Structure doesn't. A well-designed system produces results regardless of how you feel on any given day."
  },
  {
    title: "Precision Creates Progress",
    description: "It's not about training harder — it's about training smarter. Biomechanics, execution, and intent matter more than weight on the bar."
  },
  {
    title: "Respect the Process",
    description: "Sustainable physique development happens over years, not weeks. Patience and consistency compound into remarkable results."
  },
  {
    title: "Individualization is Non-Negotiable",
    description: "Your body is unique. Your training should be too. Generic programs produce generic results."
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                About
              </p>
              <h1 className="text-display mb-8">
                The Approach
              </h1>
              <p className="text-body-lg mb-6">
                This isn't about hype. It's not about motivation speeches or 
                complicated systems designed to confuse. It's about results 
                through structure, precision, and execution.
              </p>
              <p className="text-body-lg">
                After years of training and coaching, one truth became clear: 
                the lifters who succeed aren't necessarily the ones who train 
                the hardest. They're the ones who train the smartest.
              </p>
            </div>
            <div>
              <img
                src={coachImage}
                alt="Coach correcting client form during training"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-heading">Coaching Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {principles.map((principle) => (
              <div 
                key={principle.title}
                className="p-8 md:p-10 bg-secondary border border-border"
              >
                <h3 className="font-display text-2xl tracking-wide mb-4">
                  {principle.title}
                </h3>
                <p className="text-body">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <h2 className="text-heading mb-8 text-center">Why This Exists</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-body-lg">
              The fitness industry is saturated with noise. Influencers selling 
              motivation. Coaches pushing one-size-fits-all templates. Programs 
              designed to impress rather than produce.
            </p>
            <p className="text-body-lg">
              This coaching exists for serious lifters who want something different. 
              Who want a mentor, not a cheerleader. A strategist, not a salesperson.
            </p>
            <p className="text-lg text-foreground font-medium">
              If you're looking for shortcuts or hype, this isn't for you. 
              But if you're ready to commit to structured, intelligent training — 
              this is exactly what you need.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="text-heading mb-6">Ready to Work Together?</h2>
          <p className="text-body-lg max-w-xl mx-auto mb-12">
            If this resonates with how you want to approach your training, 
            the next step is simple.
          </p>
          <Link to="/apply">
            <Button variant="hero" size="xl">
              Apply for Coaching
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
