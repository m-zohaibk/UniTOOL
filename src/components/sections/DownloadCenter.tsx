"use client";

import { Smartphone, Layout, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DownloadCenter() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.unitool.ai";

  return (
    <section id="download" className="py-24 px-8 relative overflow-hidden bg-secondary/20 rounded-[3rem] mx-4 mb-24 border border-border/50">
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <h2 className="text-5xl font-headline font-bold leading-tight">
            Power in the Palm <br />
            <span className="text-primary">of Your Hand.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Experience the full suite of UniTool utilities without limits. Download UniTool today from the Google Play Store for the ultimate local toolbox experience.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button size="lg" asChild className="h-16 px-10 rounded-2xl bg-[#000000] hover:bg-[#1a1a1a] text-white flex items-center gap-4 text-lg font-semibold shadow-2xl transition-all hover:scale-105 border border-white/10 group">
            <Link href={playStoreUrl} target="_blank" className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.26 2.26 0 0 1-.61-1.57V3.384c0-.602.222-1.173.61-1.57zM14.505 12.71l2.54 2.54L5.346 22.316a2.22 2.22 0 0 0 1.25.184 2.13 2.13 0 0 0 1.154-.42l11.026-6.273-4.271-3.1zm4.187-5.597L7.665 1.488a2.13 2.13 0 0 0-1.154-.42 2.22 2.22 0 0 0-1.25.184l11.724 7.081-2.522 2.531 4.229-3.041zM19.167 13.91l3.571-2.031c.642-.366.642-1.393 0-1.758l-3.571-2.031-2.39 2.909 2.39 2.911z"/>
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase tracking-wider font-medium text-white/70">Get it on</span>
                <span className="text-xl font-bold">Google Play</span>
              </div>
            </Link>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-6 border-t border-border/50">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user profile" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground"><strong className="text-foreground">10k+</strong> active users</span>
          </div>
          <div className="hidden md:block h-8 w-px bg-border" />
          <div className="flex items-center gap-2 text-yellow-500">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <span className="text-foreground text-sm font-bold ml-1">4.9/5 Rating</span>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
    </section>
  );
}
