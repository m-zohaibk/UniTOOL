
"use client";

import { useState } from "react";
import { Search, Sparkles, Loader2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { aiDiscoveryToolRecommendation, type AIDiscoveryToolRecommendationOutput } from "@/ai/flows/ai-discovery-tool-recommendation-flow";

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
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        </div>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What do you need to do? (e.g., 'I want to save a video from WhatsApp')"
          className="pl-12 pr-32 h-14 bg-card border-border rounded-2xl text-lg shadow-xl ring-offset-background transition-all focus:ring-2 focus:ring-primary/50"
        />
        <div className="absolute inset-y-2 right-2">
          <Button 
            disabled={loading}
            className="h-10 px-6 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium flex items-center gap-2"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            Discover
          </Button>
        </div>
      </form>

      {recommendation && (
        <Card className="bg-primary/5 border-primary/20 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-xl">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-headline font-semibold text-primary">
                  We recommend: {recommendation.recommendedTool}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {recommendation.explanation}
                </p>
                <Button variant="link" className="p-0 h-auto text-accent flex items-center gap-1 group">
                  Open {recommendation.recommendedTool}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
