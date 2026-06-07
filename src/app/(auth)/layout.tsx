import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 relative">
      {/* Global pastel gradient */}
      <div className="fixed inset-0 -z-10 pastel-gradient-bg" />
      
      {/* Left - Visual Side */}
      <div className="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden">
        {/* Decorative glass orbs */}
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-color-mint/30 blur-2xl animate-float" />
        <div className="absolute bottom-40 right-20 w-56 h-56 rounded-full bg-color-lavender/30 blur-2xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-color-sky/30 blur-2xl animate-pulse-soft" />
        
        <Link href="/" className="flex items-center gap-2.5 group relative z-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">ResumeAI</span>
        </Link>
        
        <div className="relative z-10 max-w-md">
          <div className="glass rounded-3xl p-8 shadow-xl">
            <blockquote className="text-lg font-medium leading-relaxed mb-6">
              &ldquo;ResumeAI helped me optimize my resume in 10 minutes. I got 3 interview calls within a week. The AI suggestions were incredibly precise.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-color-mint to-color-lavender flex items-center justify-center text-sm font-bold text-white shadow-md">
                SK
              </div>
              <div>
                <p className="text-sm font-semibold">Sarah K.</p>
                <p className="text-xs text-muted-foreground">Software Engineer at Google</p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground relative z-10">© {new Date().getFullYear()} ResumeAI</p>
      </div>

      {/* Right - Form Side */}
      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-10">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold tracking-tight">ResumeAI</span>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
