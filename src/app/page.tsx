
import { DiscoveryTool } from "@/components/ai/DiscoveryTool";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PrivacyShowcase } from "@/components/sections/PrivacyShowcase";
import { DownloadCenter } from "@/components/sections/DownloadCenter";
import { Layout, Shield, Info, ArrowRight, Github, Zap, CheckCircle2, Star, Download, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function Home() {
  const showcaseImage = PlaceHolderImages.find(img => img.id === "app_showcase_dual");
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.unitool.ai";

  const PlayStoreButton = ({ className = "" }: { className?: string }) => (
    <Button size="lg" asChild className={`h-16 px-10 rounded-2xl bg-[#000000] hover:bg-[#111] text-white flex items-center gap-4 text-lg font-bold shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/10 group ${className}`}>
      <Link href={playStoreUrl} target="_blank" className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current text-primary" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a2.26 2.26 0 0 1-.61-1.57V3.384c0-.602.222-1.173.61-1.57zM14.505 12.71l2.54 2.54L5.346 22.316a2.22 2.22 0 0 0 1.25.184 2.13 2.13 0 0 0 1.154-.42l11.026-6.273-4.271-3.1zm4.187-5.597L7.665 1.488a2.13 2.13 0 0 0-1.154-.42 2.22 2.22 0 0 0-1.25.184l11.724 7.081-2.522 2.531 4.229-3.041zM19.167 13.91l3.571-2.031c.642-.366.642-1.393 0-1.758l-3.571-2.031-2.39 2.909 2.39 2.911z"/>
        </svg>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/50">Get it on</span>
          <span className="text-xl font-bold">Google Play</span>
        </div>
      </Link>
    </Button>
  );

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-primary-foreground">
      <header className="fixed top-0 z-[100] w-full glass-nav">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="p-2.5 primary-gradient rounded-xl shadow-lg shadow-primary/20">
              <Layout className="h-6 w-6 text-white" />
            </div>
            <span className="font-headline font-bold text-2xl tracking-tight text-gradient">UniTool</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
            <Link href="#security" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Security</Link>
            <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Button size="sm" asChild className="rounded-full px-6 font-bold bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
              <Link href={playStoreUrl} target="_blank">Download</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-40 px-6 overflow-hidden">
          <div className="hero-glow" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-primary/5 blur-[160px] rounded-full -z-10" />
          
          <div className="container mx-auto text-center space-y-16 relative z-10">
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold border border-primary/20 tracking-wider uppercase">
                <Shield className="h-3 w-3" />
                V1.0.0 Stable Release
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-[1.1] text-gradient">
                One Toolbox. <br />
                <span className="text-primary">Infinite</span> Potential.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                The definitive professional-grade ecosystem. 40+ high-performance utilities for media, security, and document management—all processing strictly on-device.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
                <PlayStoreButton />
                <div className="flex flex-col items-center sm:items-start gap-1">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <span className="text-xs font-bold text-white/60 tracking-widest uppercase">4.9/5 Average Rating</span>
                </div>
              </div>
            </div>

            {showcaseImage && (
              <div className="relative mt-20 group">
                <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10 group-hover:bg-primary/30 transition-all duration-1000" />
                <div className="relative animate-float">
                  <Image 
                    src={showcaseImage.imageUrl} 
                    alt="UniTool App Interface Showcase"
                    width={1200}
                    height={800}
                    className="w-full max-w-5xl mx-auto h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)] rounded-[3rem] border border-white/10 glass-card p-2"
                    priority
                    data-ai-hint={showcaseImage.imageHint}
                  />
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md">
                    <div className="p-6 glass-card rounded-3xl flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                          <Download className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-bold">Official Store</p>
                          <p className="text-xs text-muted-foreground">com.unitool.ai</p>
                        </div>
                      </div>
                      <Button asChild size="sm" className="rounded-xl font-bold px-6">
                        <Link href={playStoreUrl} target="_blank">Download App</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-32">
              <DiscoveryTool />
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-32 relative">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl font-headline font-bold leading-[1.1] text-gradient">
                    Built for the <br /><span className="text-primary">Power User.</span>
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      UniTool represents a paradigm shift in utility software. While others depend on vulnerable cloud servers, we prioritize <strong>local-first architecture</strong>. Every conversion, every encryption, and every AI-powered enhancement happens entirely on your device's hardware.
                    </p>
                    <p>
                      Our 1.0.0 suite is engineered for professionals who demand zero-latency and maximum privacy. From military-grade AES-256 media protection to high-fidelity PDF processing, UniTool is your private digital command center.
                    </p>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    "On-Device AES-256 Encryption",
                    "Zero-Network Cloudless Flow",
                    "AI Smart Discovery System",
                    "100+ Supported File Formats",
                    "Privacy-First Media Handling",
                    "High-Performance PDF Engine"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-bold text-white/80">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
                <div className="grid grid-cols-2 gap-6 relative">
                  <div className="space-y-6 pt-12">
                    <div className="p-10 glass-card rounded-[2.5rem] space-y-4 hover:border-primary/50 transition-colors">
                      <Zap className="h-10 w-10 text-accent" />
                      <h3 className="text-2xl font-headline font-bold">Ultra Fast</h3>
                      <p className="text-sm text-muted-foreground">Leverage local CPU cycles for instant utility results.</p>
                    </div>
                    <div className="p-10 glass-card rounded-[2.5rem] space-y-4 hover:border-primary/50 transition-colors bg-primary/5">
                      <Shield className="h-10 w-10 text-primary" />
                      <h3 className="text-2xl font-headline font-bold">Secure</h3>
                      <p className="text-sm text-muted-foreground">Hardware-level encryption for your sensitive assets.</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-10 glass-card rounded-[2.5rem] space-y-4 hover:border-primary/50 transition-colors">
                      <MousePointer2 className="h-10 w-10 text-accent" />
                      <h3 className="text-2xl font-headline font-bold">Intuitive</h3>
                      <p className="text-sm text-muted-foreground">Smart interface designed for rapid tool discovery.</p>
                    </div>
                    <div className="p-10 glass-card rounded-[2.5rem] space-y-4 hover:border-primary/50 transition-colors">
                      <Download className="h-10 w-10 text-primary" />
                      <h3 className="text-2xl font-headline font-bold">Offline</h3>
                      <p className="text-sm text-muted-foreground">Full functionality even in complete isolation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Ecosystem */}
        <section id="features" className="py-32 container mx-auto px-6">
          <FeatureGrid />
        </section>

        {/* Security Section */}
        <section id="security" className="py-32 container mx-auto px-6">
          <PrivacyShowcase />
        </section>

        {/* Final CTA */}
        <div className="pb-32">
          <DownloadCenter />
        </div>
      </main>

      <footer className="border-t border-white/5 bg-card/20 py-20 px-6 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16">
            <div className="col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2 primary-gradient rounded-xl">
                  <Layout className="h-5 w-5 text-white" />
                </div>
                <span className="font-headline font-bold text-2xl text-gradient">UniTool</span>
              </div>
              <p className="text-muted-foreground max-sm leading-relaxed text-lg font-medium">
                The ultimate professional toolkit. Built for those who prioritize privacy, performance, and power.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="w-12 h-12 rounded-xl hover:bg-white/5 hover:text-primary">
                  <Github className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="w-12 h-12 rounded-xl hover:bg-white/5 hover:text-primary">
                  <Info className="h-6 w-6" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-headline font-bold uppercase text-xs tracking-[0.3em] text-primary">Modules</h4>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                <li><Link href={playStoreUrl} className="hover:text-white transition-colors">Media Vault</Link></li>
                <li><Link href={playStoreUrl} className="hover:text-white transition-colors">Status Saver</Link></li>
                <li><Link href={playStoreUrl} className="hover:text-white transition-colors">PDF Toolkit</Link></li>
                <li><Link href={playStoreUrl} className="hover:text-white transition-colors">AI Writer</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-headline font-bold uppercase text-xs tracking-[0.3em] text-primary">Legal</h4>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/account-deletion" className="hover:text-white transition-colors">Data Deletion</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-headline font-bold uppercase text-xs tracking-[0.3em] text-primary">Status</h4>
              <div className="p-6 glass-card rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-white/70">Systems Optimal</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-mono">v1.0.0-stable</p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold text-muted-foreground uppercase tracking-widest">
            <p>© 2026 UniTool Labs. Engineered for Excellence.</p>
            <div className="flex items-center gap-8">
              <span>Security Audited</span>
              <span>Global Support</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
