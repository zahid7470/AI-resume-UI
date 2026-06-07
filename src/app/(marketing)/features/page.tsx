"use client";

import { motion, Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  BarChart3, Target, Layout, Lightbulb, FileText, 
  Zap, Shield, Brain, Wand2, Upload, CheckCircle2, 
  TrendingUp, Search, Eye, RefreshCw, Lock
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const features = [
  {
    title: "ATS Score Simulator",
    description: "Simulate how Applicant Tracking Systems read and score your resume. Get a compatibility rating instantly.",
    icon: BarChart3,
    iconBg: "bg-color-mint",
    iconColor: "text-emerald-600",
  },
  {
    title: "Keyword Matching",
    description: "Compare your resume against any job description. We highlight missing keywords and suggest optimal placement.",
    icon: Target,
    iconBg: "bg-color-lavender",
    iconColor: "text-violet-600",
  },
  {
    title: "AI Bullet Rewriter",
    description: "Transform vague responsibilities into powerful, quantified achievements with one click using AI.",
    icon: Wand2,
    iconBg: "bg-color-sky",
    iconColor: "text-blue-600",
  },
  {
    title: "Impact Detection",
    description: "Our AI scans every bullet for measurable results. Missing metrics? We'll suggest where to add them.",
    icon: TrendingUp,
    iconBg: "bg-color-cream",
    iconColor: "text-orange-600",
  },
  {
    title: "Format Verification",
    description: "Ensure your layout works with every ATS parser. No broken tables, hidden text, or problematic columns.",
    icon: Layout,
    iconBg: "bg-color-rose",
    iconColor: "text-pink-600",
  },
  {
    title: "Smart Suggestions",
    description: "Line-by-line improvement suggestions for every section of your resume, powered by advanced AI models.",
    icon: Lightbulb,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Section Analysis",
    description: "Each section (Experience, Education, Skills) is individually scored with specific recommendations.",
    icon: Search,
    iconBg: "bg-color-mint",
    iconColor: "text-emerald-600",
  },
  {
    title: "Real-Time Preview",
    description: "See how your changes affect your score in real-time. Every edit updates your analysis instantly.",
    icon: Eye,
    iconBg: "bg-color-lavender",
    iconColor: "text-violet-600",
  },
  {
    title: "Version History",
    description: "Track every improvement. Compare versions side-by-side and always revert to the best performing one.",
    icon: RefreshCw,
    iconBg: "bg-color-sky",
    iconColor: "text-blue-600",
  },
];

export default function FeaturesPage() {
  return (
    <div className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium bg-white/60 backdrop-blur-sm text-primary border border-white/60 shadow-sm mb-6">
            <Zap className="w-3.5 h-3.5" />
            All Features
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Powerful tools to perfect your resume
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Every feature is designed to maximize your chances of landing interviews at top companies.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {features.map((feature, i) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="glass p-7 rounded-3xl h-full group hover:shadow-xl hover:shadow-black/5 hover:scale-[1.02] transition-all duration-500 border-white/60 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 ${feature.iconBg}/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`p-3 rounded-2xl ${feature.iconBg} shadow-sm inline-flex mb-5`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
