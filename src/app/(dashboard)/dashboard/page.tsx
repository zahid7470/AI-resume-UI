"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { FileText, TrendingUp, Target, Briefcase, Plus, MoreHorizontal } from "lucide-react";
import Link from "next/link";

const stats = [
  { name: "Average ATS Score", value: "78%", change: "+12%", icon: Target, iconBg: "bg-color-mint", iconColor: "text-emerald-600" },
  { name: "Resumes Analyzed", value: "14", change: "+3", icon: FileText, iconBg: "bg-color-lavender", iconColor: "text-violet-600" },
  { name: "Interviews Landed", value: "3", change: "+1", icon: Briefcase, iconBg: "bg-color-cream", iconColor: "text-orange-600" },
];

const recentReports = [
  { role: "Senior Frontend Engineer", company: "TechCorp", score: 92, date: "2 days ago", match: "High" },
  { role: "Product Designer", company: "Studio AI", score: 85, date: "5 days ago", match: "Medium" },
  { role: "Full Stack Developer", company: "StartupX", score: 68, date: "1 week ago", match: "Low" },
];

export default function DashboardPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground mt-1">Here&apos;s how your job search is performing.</p>
        </div>
        <Button asChild className="rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105 transition-all">
          <Link href="/analyzer">
            <Plus className="mr-2 h-4 w-4" /> New Analysis
          </Link>
        </Button>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Card className="glass p-6 border-white/60 rounded-2xl hover:shadow-lg hover:shadow-black/5 hover:scale-[1.02] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`p-3 rounded-2xl ${stat.iconBg} shadow-sm`}
                >
                  <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                </motion.div>
                <div className="flex items-center text-emerald-600 text-sm font-medium bg-color-mint/50 px-2.5 py-1 rounded-full">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Recent Reports List */}
        <Card className="glass p-6 lg:col-span-2 border-white/60 rounded-2xl flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Recent Analyses</h3>
            <Button variant="ghost" size="sm" className="text-muted-foreground rounded-full">View all</Button>
          </div>
          <div className="space-y-3 flex-1">
            {recentReports.map((report, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/60 hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm ${
                    report.score >= 90 ? "bg-color-mint text-emerald-600" : 
                    report.score >= 80 ? "bg-color-cream text-orange-600" : 
                    "bg-color-rose text-pink-600"
                  }`}>
                    {report.score}
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">{report.role}</h4>
                    <p className="text-sm text-muted-foreground">{report.company} &bull; {report.date}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground rounded-full">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Profile Strength */}
        <Card className="glass p-6 border-white/60 rounded-2xl flex flex-col h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-color-lavender/40 to-transparent rounded-bl-full" />
          
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-lg font-bold mb-6">Profile Strength</h3>
            
            <div className="flex-1 flex flex-col justify-center items-center py-6">
              <div className="relative h-32 w-32 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 128 128">
                  <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="none" className="text-white/40" />
                  <circle
                    cx="64" cy="64" r="56"
                    stroke="currentColor" strokeWidth="8" fill="none"
                    className="text-primary"
                    strokeDasharray="351"
                    strokeDashoffset={351 - (351 * 85) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-3xl font-bold">85%</span>
              </div>
              <p className="text-center mt-6 text-sm text-muted-foreground">
                You are in the top 15% of candidates for your target roles.
              </p>
            </div>

            <div className="mt-auto pt-4 border-t border-white/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Keywords Added</span>
                <span className="text-sm font-medium text-primary">24/30</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
