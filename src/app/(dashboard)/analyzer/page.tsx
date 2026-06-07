"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, File, X, CheckCircle2, AlertTriangle, Zap, Target, ArrowRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function AnalyzerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const simulateAnalysis = () => {
    if (!file) return;
    setIsAnalyzing(true);
    // Simulate API call and analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  return (
    <div className="h-full flex flex-col lg:flex-row gap-6">
      
      {/* Left Column - Upload Area */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <div className="flex-shrink-0">
          <h2 className="text-2xl font-bold tracking-tight">Analyzer</h2>
          <p className="text-muted-foreground mt-1 text-sm">Upload your resume to get instant AI feedback.</p>
        </div>

        <Card 
          className={`glass flex-1 flex flex-col items-center justify-center p-8 border-2 border-dashed transition-all duration-300 ${
            isDragging 
              ? "border-primary bg-primary/5 scale-[1.02]" 
              : file ? "border-success/50 bg-success/5" : "border-border/50 hover:border-primary/50 hover:bg-black/5 dark:hover:bg-white/5"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <AnimatePresence mode="wait">
            {!file ? (
              <motion.div
                key="upload"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Drag & Drop Resume</h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
                  Supports PDF or DOCX up to 5MB.
                </p>
                <Button className="rounded-full shadow-lg">Browse Files</Button>
              </motion.div>
            ) : (
              <motion.div
                key="file"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center w-full"
              >
                <div className="w-20 h-20 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-6 relative">
                  <File className="w-10 h-10 text-success" />
                  <button 
                    onClick={() => { setFile(null); setAnalysisComplete(false); }}
                    className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 hover:scale-110 transition-transform"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-lg font-semibold truncate px-4">{file.name}</h3>
                <p className="text-sm text-muted-foreground mb-8">
                  {(file.size / 1024 / 1024).toFixed(2)} MB &bull; Ready to analyze
                </p>
                
                {!analysisComplete && (
                  <Button 
                    size="lg" 
                    className="w-full rounded-xl shadow-lg relative overflow-hidden group"
                    onClick={simulateAnalysis}
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Analyzing...
                      </span>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-white/20 group-hover:w-full w-0 transition-all duration-500 ease-out"></div>
                        <span className="relative flex items-center">Analyze Resume <Sparkles className="ml-2 w-4 h-4" /></span>
                      </>
                    )}
                  </Button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </div>

      {/* Right Column - Analysis Results */}
      <div className="w-full lg:w-2/3 flex flex-col h-full min-h-[600px]">
        <AnimatePresence mode="wait">
          {!analysisComplete ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-border/50 rounded-3xl bg-black/5 dark:bg-white/5 p-8 text-center"
            >
              <div className="w-24 h-24 rounded-3xl bg-card border border-border shadow-xl flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-muted-foreground opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">No Analysis Yet</h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                Upload a resume and click analyze to see your ATS score, skill gaps, and AI-powered recommendations here.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col gap-6"
            >
              {/* Score Header Card */}
              <Card className="glass p-6 sm:p-8 rounded-3xl border-border/50 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-success/20 to-transparent rounded-bl-full opacity-50 pointer-events-none"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
                  <div>
                    <h3 className="text-lg font-medium text-muted-foreground">Overall ATS Score</h3>
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-5xl font-bold text-foreground">82</span>
                      <span className="text-lg text-success font-medium">/ 100</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-success mr-2" />
                      Top 25% of candidates
                    </p>
                  </div>
                  
                  <div className="flex-1 max-w-sm space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Format Match</span>
                        <span className="font-semibold text-success">95%</span>
                      </div>
                      <Progress value={95} className="h-2 [&>div]:bg-success" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Keyword Match</span>
                        <span className="font-semibold text-amber-500">70%</span>
                      </div>
                      <Progress value={70} className="h-2 [&>div]:bg-amber-500" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Impact Score</span>
                        <span className="font-semibold text-success">85%</span>
                      </div>
                      <Progress value={85} className="h-2 [&>div]:bg-success" />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Detailed Analysis Tabs */}
              <Card className="glass flex-1 border-border/50 rounded-3xl overflow-hidden shadow-lg flex flex-col">
                <Tabs defaultValue="suggestions" className="flex-1 flex flex-col">
                  <div className="px-6 pt-6 border-b border-border/50">
                    <TabsList className="bg-transparent space-x-2">
                      <TabsTrigger value="suggestions" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-full px-6">Suggestions</TabsTrigger>
                      <TabsTrigger value="skills" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-full px-6">Skills & Keywords</TabsTrigger>
                      <TabsTrigger value="formatting" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-full px-6">Formatting</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <div className="p-6 flex-1 overflow-y-auto">
                    <TabsContent value="suggestions" className="mt-0 space-y-4">
                      {/* Suggestion Item */}
                      <div className="bg-background/40 border border-border/50 rounded-2xl p-5 flex gap-4 items-start group hover:border-amber-500/50 transition-colors">
                        <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg shrink-0 mt-0.5">
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-base">Weak Action Verbs Detected</h4>
                          <p className="text-sm text-muted-foreground mt-1 mb-3">You used the word "Responsible for" 3 times. Replace it with stronger action verbs to increase impact.</p>
                          <div className="bg-black/5 dark:bg-white/5 rounded-xl p-3 border border-border">
                            <p className="text-xs text-muted-foreground mb-1">Before</p>
                            <p className="text-sm line-through opacity-70">Responsible for leading a team of 5 developers...</p>
                            <div className="w-full h-px bg-border my-2"></div>
                            <p className="text-xs text-success font-medium mb-1 flex items-center"><Zap className="w-3 h-3 mr-1" /> AI Suggestion</p>
                            <p className="text-sm font-medium">Spearheaded a team of 5 developers, increasing delivery speed by 20%...</p>
                          </div>
                        </div>
                      </div>

                      {/* Suggestion Item */}
                      <div className="bg-background/40 border border-border/50 rounded-2xl p-5 flex gap-4 items-start group hover:border-primary/50 transition-colors">
                        <div className="p-2 bg-primary/10 text-primary rounded-lg shrink-0 mt-0.5">
                          <Target className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-base">Missing Quantifiable Metrics</h4>
                          <p className="text-sm text-muted-foreground mt-1 mb-3">Your experience section lacks numbers. Add percentages, dollar amounts, or timeframes to validate your achievements.</p>
                          <Button variant="outline" size="sm" className="rounded-full text-xs h-8">Review bullet points <ArrowRight className="w-3 h-3 ml-2" /></Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="skills" className="mt-0">
                      <h4 className="font-semibold mb-4">Hard Skills Match</h4>
                      <div className="flex flex-wrap gap-2 mb-8">
                        <Badge variant="secondary" className="bg-success/10 text-success hover:bg-success/20 px-3 py-1 text-sm border-success/20"><CheckCircle2 className="w-3 h-3 mr-1" /> React</Badge>
                        <Badge variant="secondary" className="bg-success/10 text-success hover:bg-success/20 px-3 py-1 text-sm border-success/20"><CheckCircle2 className="w-3 h-3 mr-1" /> TypeScript</Badge>
                        <Badge variant="secondary" className="bg-success/10 text-success hover:bg-success/20 px-3 py-1 text-sm border-success/20"><CheckCircle2 className="w-3 h-3 mr-1" /> Node.js</Badge>
                        <Badge variant="secondary" className="bg-destructive/10 text-destructive hover:bg-destructive/20 px-3 py-1 text-sm border-destructive/20"><X className="w-3 h-3 mr-1" /> GraphQL</Badge>
                        <Badge variant="secondary" className="bg-destructive/10 text-destructive hover:bg-destructive/20 px-3 py-1 text-sm border-destructive/20"><X className="w-3 h-3 mr-1" /> AWS</Badge>
                      </div>

                      <h4 className="font-semibold mb-4">Soft Skills Detected</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="px-3 py-1 text-sm">Leadership</Badge>
                        <Badge variant="outline" className="px-3 py-1 text-sm">Communication</Badge>
                        <Badge variant="outline" className="px-3 py-1 text-sm">Problem Solving</Badge>
                      </div>
                    </TabsContent>

                    <TabsContent value="formatting" className="mt-0">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-success/5 border border-success/20 text-success">
                          <CheckCircle2 className="w-5 h-5 shrink-0" />
                          <p className="text-sm font-medium">Standard fonts used (Arial, Calibri, etc.)</p>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-success/5 border border-success/20 text-success">
                          <CheckCircle2 className="w-5 h-5 shrink-0" />
                          <p className="text-sm font-medium">Appropriate margins detected (1 inch)</p>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-success/5 border border-success/20 text-success">
                          <CheckCircle2 className="w-5 h-5 shrink-0" />
                          <p className="text-sm font-medium">No complex tables or columns</p>
                        </div>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
