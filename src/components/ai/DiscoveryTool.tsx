
"use client";

import { useState } from "react";
import { Search, Sparkles, Loader2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { aiDiscoveryToolRecommendation, type AIDiscoveryToolRecommendationOutput } from "@/ai/flows/ai-discovery-tool-recommendation-flow";
import { motion, AnimatePresence } from "framer-motion";

export function DiscoveryTool() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<AIDiscoveryToolRecommendationOutput | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const result = await aiDiscoveryToolRecommendation(query);
      setRecommendation(result);
    } catch (error) {
      console.error("Discovery error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-2 mb-4">
        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Intelligent Discovery</h3>
        <p className="text-muted-foreground font-medium">Can't find what you need? Ask our AI assistant.</p>
      </div>

      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute inset-0 bg-primary/10 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity rounded-3xl" />
        <div className="relative">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-white/30 group-focus-within:text-primary transition-colors" />
          </div>
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your task (e.g. 'I need to compress a 50MB PDF')"
            className="pl-16 pr-40 h-20 glass-card rounded-[1.5rem] text-xl font-medium shadow-2xl focus:ring-4 focus:ring-primary/20 placeholder:text-white/20 transition-all border-white/10"
          />
          <div className="absolute inset-y-3 right-3">
            <Button 
              disabled={loading}
              className="h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-widest flex items-center gap-3 shadow-lg shadow-primary/20"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Sparkles className="h-5 w-5" />
              )}
              {loading ? "Analyzing..." : "Find Tool"}
            </Button>
          </div>
        </div>
      </form>

      <AnimatePresence>
        {recommendation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="pt-4"
          >
            <Card className="glass-card border-primary/30 overflow-hidden bg-primary/5">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="p-5 primary-gradient rounded-[2rem] shadow-xl shadow-primary/20 shrink-0">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="space-y-1">
                      <p className="text-xs font-black text-primary uppercase tracking-[0.3em]">Recommendation Engine</p>
                      <h3 className="text-3xl font-headline font-bold text-white">
                        {recommendation.recommendedTool}
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                      {recommendation.explanation}
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <Button variant="link" className="p-0 h-auto text-primary font-bold text-lg flex items-center gap-2 group">
                        Launch {recommendation.recommendedTool}
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
