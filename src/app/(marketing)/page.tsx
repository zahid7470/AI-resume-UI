"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, CheckCircle2, Zap, Target, BarChart3, Layout, 
  Lightbulb, FileText, Upload, Star, Users, Shield, Sparkles, 
  Brain, Wand2, TrendingUp 
} from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

const floatVariants: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
  },
};

const features = [
  {
    title: "ATS Scoring",
    description: "Simulate real applicant tracking systems to score your resume's compatibility and optimize for maximum visibility.",
    icon: BarChart3,
    iconBg: "bg-color-mint",
    iconColor: "text-emerald-600",
    badge: "Core",
    badgeBg: "bg-color-mint/60 text-emerald-700",
    span: "lg:col-span-2",
  },
  {
    title: "Keyword Match",
    description: "AI detects missing critical keywords from job descriptions and suggests where to add them.",
    icon: Target,
    iconBg: "bg-color-lavender",
    iconColor: "text-violet-600",
    badge: "Smart",
    badgeBg: "bg-color-lavender/60 text-violet-700",
    span: "",
  },
  {
    title: "AI Rewriter",
    description: "Transform weak bullet points into impactful, metrics-driven achievements with one click.",
    icon: Wand2,
    iconBg: "bg-color-sky",
    iconColor: "text-blue-600",
    badge: "Popular",
    badgeBg: "bg-color-sky/60 text-blue-700",
    span: "",
  },
  {
    title: "Impact Analysis",
    description: "Ensure every experience entry demonstrates measurable impact with quantifiable results.",
    icon: TrendingUp,
    iconBg: "bg-color-cream",
    iconColor: "text-orange-600",
    badge: "New",
    badgeBg: "bg-color-cream/60 text-orange-700",
    span: "",
  },
  {
    title: "Format Check",
    description: "Verify your layout is ATS-friendly with no tables, graphics, or columns that break parsing systems.",
    icon: Layout,
    iconBg: "bg-color-rose",
    iconColor: "text-pink-600",
    badge: "Essential",
    badgeBg: "bg-color-rose/60 text-pink-700",
    span: "lg:col-span-2",
  },
];

const stats = [
  { value: "50K+", label: "Resumes Analyzed" },
  { value: "92%", label: "Interview Rate" },
  { value: "4.9", label: "User Rating", icon: Star },
  { value: "200+", label: "Companies Hired At" },
];

export default function LandingPage() {
  return (
    <div className="overflow-hidden relative">
      {/* Pastel gradient background covering the whole page */}
      <div className="fixed inset-0 -z-10 pastel-gradient-bg" />

      <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ═══════════════ HERO SECTION ═══════════════ */}
        <motion.div 
          className="pt-36 pb-20 lg:pt-44 lg:pb-28 text-center max-w-4xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Floating decorative elements */}
          <motion.div 
            variants={floatVariants} animate="animate"
            className="absolute -left-10 top-32 w-16 h-16 rounded-2xl bg-color-mint/40 backdrop-blur-sm border border-white/40 shadow-lg hidden lg:flex items-center justify-center"
          >
            <Sparkles className="w-6 h-6 text-emerald-500" />
          </motion.div>
          <motion.div 
            variants={floatVariants} animate="animate"
            style={{ animationDelay: "1s" }}
            className="absolute -right-8 top-48 w-14 h-14 rounded-2xl bg-color-lavender/40 backdrop-blur-sm border border-white/40 shadow-lg hidden lg:flex items-center justify-center"
          >
            <Brain className="w-5 h-5 text-violet-500" />
          </motion.div>
          <motion.div 
            variants={floatVariants} animate="animate"
            style={{ animationDelay: "2s" }}
            className="absolute right-20 bottom-10 w-12 h-12 rounded-xl bg-color-rose/40 backdrop-blur-sm border border-white/40 shadow-lg hidden lg:flex items-center justify-center"
          >
            <Star className="w-4 h-4 text-pink-500" />
          </motion.div>

          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium bg-white/60 backdrop-blur-sm text-primary border border-white/60 shadow-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-success animate-pulse" />
            Introducing ResumeAI 2.0
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
            Transform Your Resume
            <br />
            <span className="text-gradient">Into Your Best Asset</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg sm:text-xl leading-8 text-muted-foreground mb-10 max-w-2xl mx-auto">
            AI-powered resume analysis with ATS scoring, skill gap detection, keyword optimization, and actionable suggestions. Get hired faster.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300" asChild>
              <Link href="/analyzer">
                Analyze My Resume <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base glass hover:bg-white/80 transition-all duration-300">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* ═══════════════ HERO PREVIEW CARD ═══════════════ */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto mb-32 relative"
        >
          <div className="glass rounded-3xl p-8 shadow-2xl shadow-black/5 border border-white/60">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="font-bold text-xl">Analysis Complete</h3>
                <p className="text-sm text-muted-foreground mt-1">Software Engineer — Google</p>
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="h-20 w-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center text-white font-bold text-3xl shadow-lg shadow-emerald-500/30"
              >
                92
              </motion.div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/50 rounded-2xl p-5 border border-white/60">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-color-mint">
                    <Target className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm font-semibold">Keywords</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold">24</span>
                  <span className="text-sm text-muted-foreground">/28 matched</span>
                </div>
                <div className="mt-3 h-2 bg-black/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "86%" }} transition={{ delay: 1.2, duration: 1.5 }} className="h-full bg-emerald-500 rounded-full" />
                </div>
              </div>
              <div className="bg-white/50 rounded-2xl p-5 border border-white/60">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-color-lavender">
                    <Zap className="w-4 h-4 text-violet-600" />
                  </div>
                  <span className="text-sm font-semibold">Impact</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold">Strong</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Action verbs detected in 90% of bullets</p>
              </div>
              <div className="bg-white/50 rounded-2xl p-5 border border-white/60">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-color-sky">
                    <Layout className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold">Format</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold">100%</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">ATS-compatible layout verified</p>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -right-6 -bottom-6 glass px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="bg-color-mint p-2 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-semibold">Ready to apply!</p>
              <p className="text-xs text-muted-foreground">Top 5% of candidates</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ═══════════════ TRUST INDICATORS ═══════════════ */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-28"
        >
          <p className="text-center text-sm font-medium text-muted-foreground mb-10">Trusted by candidates hired at top companies</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  {stat.icon && <stat.icon className="w-4 h-4 text-amber-400 fill-amber-400" />}
                </div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ═══════════════ FEATURES BENTO GRID ═══════════════ */}
        <div className="pb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Everything you need</h2>
            <p className="text-lg text-muted-foreground">Our AI analyzes your resume against millions of data points to give you the ultimate edge.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={feature.span}
              >
                <Card className="glass p-7 rounded-3xl h-full group hover:shadow-xl hover:shadow-black/5 hover:scale-[1.02] transition-all duration-500 border-white/60 overflow-hidden relative">
                  {/* Subtle gradient glow on hover */}
                  <div className={`absolute top-0 right-0 w-40 h-40 ${feature.iconBg}/30 rounded-bl-full opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      <motion.div 
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`p-3 rounded-2xl ${feature.iconBg} shadow-sm`}
                      >
                        <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                      </motion.div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${feature.badgeBg}`}>
                        {feature.badge}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════════ HOW IT WORKS ═══════════════ */}
        <div className="pb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">How it works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to a job-winning resume.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Upload", desc: "Drag & drop your resume in PDF or DOCX format.", icon: Upload, color: "bg-color-mint", textColor: "text-emerald-600" },
              { step: "02", title: "Analyze", desc: "Our AI scores it against real ATS systems instantly.", icon: Brain, color: "bg-color-lavender", textColor: "text-violet-600" },
              { step: "03", title: "Optimize", desc: "Get line-by-line suggestions and rewrite with AI.", icon: Wand2, color: "bg-color-sky", textColor: "text-blue-600" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center group"
              >
                <motion.div 
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`w-20 h-20 ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-black/5 group-hover:shadow-xl transition-all duration-300`}
                >
                  <item.icon className={`w-8 h-8 ${item.textColor}`} />
                </motion.div>
                <div className="text-xs font-bold text-muted-foreground mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════════ CTA SECTION ═══════════════ */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pb-28 relative"
        >
          <div className="glass rounded-[2.5rem] p-12 sm:p-16 text-center relative overflow-hidden shadow-xl shadow-black/5">
            {/* Decorative gradient blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-color-mint/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-color-lavender/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Ready to land your <br className="hidden sm:block" />dream job?
              </h2>
              <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10">
                Join thousands of professionals who optimized their resumes and secured interviews at top tech companies.
              </p>
              <Button size="lg" className="rounded-full h-14 px-10 text-base shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/register">
                  Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
