import { Link } from "react-router-dom";
export const Footer = () => {
  return <footer className="bg-secondary border-t border-border">
      <div className="container-wide px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl tracking-widest mb-4">CONTA ACADEMY</h3>
            <p className="text-body max-w-md">
              Evidence-based physique coaching for serious lifters who train hard 
              but aren't seeing elite results.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/coaching" className="text-sm text-body hover:text-foreground transition-colors">
                Coaching
              </Link>
              <Link to="/programs" className="text-sm text-body hover:text-foreground transition-colors">
                Programs
              </Link>
              <Link to="/transformations" className="text-sm text-body hover:text-foreground transition-colors">
                Transformations
              </Link>
              <Link to="/about" className="text-sm text-body hover:text-foreground transition-colors">
                About
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/apply" className="text-sm text-body hover:text-foreground transition-colors">
                Apply for Coaching
              </Link>
              <a href="mailto:contact@physique.com" className="text-sm text-body hover:text-foreground transition-colors">aconta.coaching@gmail.com</a>
            </nav>
          </div>
        </div>

        <div className="divider my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Conta Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};