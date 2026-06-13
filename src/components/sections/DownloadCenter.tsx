"use client";

import { Download, Smartphone, Layout, Star } from "lucide-react";
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
            Experience the full suite of UniTool utilities without limits. Download the official APK or find us on the Google Play Store for the ultimate local toolbox experience.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-16 px-10 rounded-2xl flex items-center gap-3 text-lg font-semibold shadow-lg shadow-primary/20 group">
            <Download className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
            Download APK v2.4
          </Button>
          <Button size="lg" variant="outline" asChild className="border-border hover:bg-secondary h-16 px-10 rounded-2xl flex items-center gap-3 text-lg font-semibold group">
            <Link href={playStoreUrl} target="_blank">
              <Layout className="h-6 w-6 text-accent" />
              Google Play Store
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
