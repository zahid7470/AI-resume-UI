import Link from "next/link";
import { Sparkles, Globe } from "lucide-react";

const navigation = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Analyzer", href: "/analyzer" },
    { name: "Templates", href: "#" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/40 bg-white/30 backdrop-blur-md">
      <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110 shadow-md">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold tracking-tight">ResumeAI</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Transform your resume into a job-winning asset. AI-powered analysis with ATS scoring, skill gap detection, and actionable recommendations.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="p-2 rounded-xl bg-white/50 border border-white/60 text-muted-foreground hover:text-primary hover:bg-white/80 transition-all shadow-sm">
                <Globe className="h-4 w-4" />
              </Link>
              <Link href="#" className="p-2 rounded-xl bg-white/50 border border-white/60 text-muted-foreground hover:text-primary hover:bg-white/80 transition-all shadow-sm">
                <Globe className="h-4 w-4" />
              </Link>
              <Link href="#" className="p-2 rounded-xl bg-white/50 border border-white/60 text-muted-foreground hover:text-primary hover:bg-white/80 transition-all shadow-sm">
                <Globe className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Product</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Legal</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/40 pt-8">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} ResumeAI. All rights reserved. Built with AI-powered intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
