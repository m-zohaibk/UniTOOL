
import { Shield, Lock, Cpu, EyeOff, ServerOff, Fingerprint } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PrivacyShowcase() {
  const pillars = [
    {
      icon: Lock,
      title: "AES-256 Local Encryption",
      desc: "All files in the Private Media Vault are encrypted at rest using industry-standard AES-256. Your keys never leave your chip."
    },
    {
      icon: ServerOff,
      title: "Zero-Cloud Architecture",
      desc: "UniTool is strictly offline-first. We do not maintain servers to store your media. Your data belongs only to your hardware."
    },
    {
      icon: EyeOff,
      title: "Blind Processing",
      desc: "Metadata is scrubbed locally. Our Status Saver operates in a sandboxed environment to prevent tracking."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 rounded-[3rem] px-8 border border-border/50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30 mb-2 border-primary/20">Security Protocol</Badge>
          <h2 className="text-4xl font-headline font-bold">Privacy-First Architecture</h2>
          <p className="text-muted-foreground text-lg">
            We built UniTool with the belief that utility shouldn't come at the cost of your digital sovereignty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <Card key={i} className="bg-background/50 border-border/50 backdrop-blur-sm group hover:border-primary/30 transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="p-4 bg-secondary rounded-2xl w-fit text-primary group-hover:scale-110 transition-transform">
                  <pillar.icon className="h-8 w-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-headline font-semibold">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/50 border border-border p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-headline font-bold flex items-center gap-2">
              <Cpu className="h-6 w-6 text-accent" />
              On-Device Intelligence
            </h4>
            <p className="text-muted-foreground">
              Our AI Smart Discovery and all media processing happen directly on your CPU. We use quantized local models to ensure your search queries and content never cross the network.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            <div className="bg-secondary/50 p-6 rounded-2xl flex flex-col items-center text-center gap-2">
              <Fingerprint className="h-8 w-8 text-primary" />
              <span className="text-xs font-medium uppercase tracking-tighter">Biometric Lock</span>
            </div>
            <div className="bg-secondary/50 p-6 rounded-2xl flex flex-col items-center text-center gap-2">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xs font-medium uppercase tracking-tighter">Kernel Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Badge } from "@/components/ui/badge";
