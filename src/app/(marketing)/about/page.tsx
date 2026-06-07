import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Sparkles, Users, Target, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-color-mint to-color-sky opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">About ResumeAI</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're on a mission to democratize the job search process by giving every candidate access to the same technology used by top recruiters.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <Card className="glass p-8 rounded-3xl border-border/50 hover:shadow-xl transition-all">
              <Users className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Empowering Candidates</h3>
              <p className="text-muted-foreground">The recruitment system is broken. We build tools that level the playing field, helping talented individuals bypass automated filters and get their resumes seen by human eyes.</p>
            </Card>

            <Card className="glass p-8 rounded-3xl border-border/50 hover:shadow-xl transition-all">
              <Target className="w-10 h-10 text-success mb-6" />
              <h3 className="text-xl font-bold mb-4">Data-Driven Approach</h3>
              <p className="text-muted-foreground">Our algorithms are trained on millions of successful hires. We don't guess what works; we use data to optimize your resume for exact industry standards and ATS requirements.</p>
            </Card>

            <Card className="glass p-8 rounded-3xl border-border/50 hover:shadow-xl transition-all">
              <ShieldCheck className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Privacy First</h3>
              <p className="text-muted-foreground">Your career history is personal. We employ enterprise-grade encryption and strict data policies to ensure your resume and contact information remain completely secure and private.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
