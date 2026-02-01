import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    name: "Home training",
    goal: "Build a solid training base",
    experience: "Beginner to Intermediate",
    duration: "8 weeks",
    focus: ["Movement fundamentals", "Progressive overload basics"],
    price: "$79"
  },
  {
    name: "Hypertrophy",
    goal: "Maximize muscle growth",
    experience: "Intermediate to Advanced",
    duration: "12 weeks",
    focus: ["Volume optimization", "Muscle-specific training"],
    price: "$119"
  },
  {
    name: "Recomposition",
    goal: "Build muscle while losing fat",
    experience: "Intermediate",
    duration: "16 weeks",
    focus: ["Strategic nutrition timing", "Training intensity protocols"],
    price: "$149"
  }
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Structured Programs
          </p>
          <h1 className="text-display mb-8">
            Programs for Serious Lifters
          </h1>
          <p className="text-body-lg max-w-2xl mx-auto">
            Standalone programs built on the same principles as individualized coaching. 
            For lifters who want structure without guessing.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-heading mb-8 text-center">Program Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-display text-xl tracking-wide mb-3">Simple Execution</h3>
              <p className="text-body">No overcomplicated systems. Clear, actionable training you can follow.</p>
            </div>
            <div>
              <h3 className="font-display text-xl tracking-wide mb-3">Clear Structure</h3>
              <p className="text-body">Every workout builds on the last. Progression is built in, not guessed.</p>
            </div>
            <div>
              <h3 className="font-display text-xl tracking-wide mb-3">Evidence-Based</h3>
              <p className="text-body">Methods grounded in training science, not trends or gimmicks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div 
                key={program.name}
                className="bg-background border border-border p-8 md:p-10 flex flex-col"
              >
                <h3 className="font-display text-3xl tracking-wide mb-2">{program.name}</h3>
                <p className="text-muted-foreground mb-6">{program.goal}</p>
                
                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Experience</span>
                    <span className="text-sm">{program.experience}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="text-sm">{program.duration}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-sm text-muted-foreground block mb-2">Focus Areas</span>
                    <ul className="space-y-1">
                      {program.focus.map((f) => (
                        <li key={f} className="text-sm flex items-center gap-2">
                          <span className="text-muted-foreground">—</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="font-display text-3xl mb-4">{program.price}</p>
                  <Button variant="heroOutline" className="w-full group">
                    Get Program
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Note
          </p>
          <h2 className="text-heading mb-8">Programs Are Not Coaching</h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-8">
            These programs are standalone solutions built on proven principles. 
            For individualized attention, form correction, and ongoing adjustments, 
            consider applying for coaching.
          </p>
          <Link to="/coaching">
            <Button variant="minimal" size="lg">
              Learn About Coaching
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
