
"use client";

import { Shield, Lock, Cpu, EyeOff, ServerOff, Fingerprint } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function PrivacyShowcase() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
      
      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <Badge className="bg-primary/20 text-primary px-6 py-2 rounded-full border-primary/20 text-xs font-black uppercase tracking-[0.3em] mb-4">Privacy First</Badge>
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-gradient">Your Privacy.</h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            UniTool is built to keep your personal files safe. We don't need your data to work.
          </p>
        </div>

        <div className="glass-card rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-16 mt-16 bg-gradient-to-br from-white/[0.03] to-transparent">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h4 className="text-3xl font-headline font-bold flex items-center gap-3">
                <Cpu className="h-8 w-8 text-accent" />
                Fast & Local
              </h4>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                Everything in the app, from searching to editing images, happens right on your phone. You don't even need an internet connection to use our powerful tools.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">Safe Core</span>
              </div>
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-2">
                <Fingerprint className="h-4 w-4 text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest">Private Access</span>
              </div>
            </div>
          </div>
          
          <div className="relative w-full lg:w-96 aspect-square">
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full animate-pulse" />
            <div className="relative h-full glass-card rounded-[3rem] flex items-center justify-center p-12">
              <Shield className="w-full h-full text-primary opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <p className="text-4xl font-headline font-black text-white">100%</p>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Private</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
