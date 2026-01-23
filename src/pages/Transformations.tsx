import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import transformation1 from "@/assets/transformation-1.jpg";
import transformation2 from "@/assets/transformation-2.jpg";
import transformation3 from "@/assets/transformation-3.jpg";
import alexTransformation from "@/assets/alex-transformation.png";

const transformations = [
  {
    image: alexTransformation,
    name: "Alex C.",
    duration: "24 weeks",
    quote: "The structure changed everything. I was training hard but going nowhere. Now every session has purpose.",
    age: "34",
    alt: "Male bodybuilder transformation showing dramatic muscle development"
  },
  {
    image: transformation1,
    name: "Marcus T.",
    duration: "16 weeks",
    quote: "Finally understand what it means to train with intent. The attention to execution made all the difference.",
    age: "28",
    alt: "Male physique transformation with improved muscle definition"
  },
  {
    image: transformation2,
    name: "Sarah K.",
    duration: "12 weeks",
    quote: "No hype, no shortcuts. Just clear guidance and consistent progress. Exactly what I needed.",
    age: "31",
    alt: "Female fitness transformation with improved muscle tone"
  },
  {
    image: transformation3,
    name: "David R.",
    duration: "20 weeks",
    quote: "My back development was always a weakness. The targeted approach finally fixed years of imbalance.",
    age: "42",
    alt: "Male back transformation showing improved width and definition"
  }
];

const Transformations = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Real Results
          </p>
          <h1 className="text-display mb-8">
            Transformations
          </h1>
          <p className="text-body-lg max-w-2xl mx-auto">
            These aren't exceptional outliers. They're the result of structured coaching, 
            precise execution, and unwavering commitment to the process.
          </p>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {transformations.map((item) => (
              <div 
                key={item.name}
                className="group bg-secondary border border-border overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <h3 className="font-display text-2xl tracking-wide">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Age {item.age}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                  </div>
                  <p className="text-body italic">"{item.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="text-heading mb-6">Your Transformation Awaits</h2>
          <p className="text-body-lg max-w-xl mx-auto mb-12">
            If you're ready for structured progress and results that match your effort, 
            start with an application.
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

export default Transformations;
