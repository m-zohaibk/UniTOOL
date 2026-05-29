
import { DiscoveryTool } from "@/components/ai/DiscoveryTool";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PrivacyShowcase } from "@/components/sections/PrivacyShowcase";
import { DownloadCenter } from "@/components/sections/DownloadCenter";
import { Layout, Shield, Info, Download, ArrowRight, Github, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function Home() {
  const showcaseImage = PlaceHolderImages.find(img => img.id === "app_showcase_dual");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-xl">
              <Layout className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-headline font-bold text-xl tracking-tight">UniTool <span className="text-primary">All-in-One</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
            <Link href="#security" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Security</Link>
            <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Privacy Hub</Link>
            <Button variant="outline" size="sm" asChild className="rounded-full border-primary/20 text-primary hover:bg-primary/10">
              <Link href="#download">Get the App</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto text-center space-y-12 relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-accent text-sm font-semibold border border-accent/20 animate-in fade-in slide-in-from-bottom-2">
                <Shield className="h-4 w-4" />
                Version 2.4 Now Live with AES Encryption
              </div>
              <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9] max-w-4xl mx-auto">
                One Toolbox. <br />
                <span className="text-primary italic">Infinite</span> Utilities.
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                UniTool is the world&apos;s most comprehensive utility ecosystem. We bring 40+ professional-grade tools for media management, military-grade security, and document processing into one seamless interface.
              </p>
            </div>

            {showcaseImage && (
              <div className="relative max-w-5xl mx-auto group animate-in fade-in zoom-in duration-1000">
                <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -z-10 group-hover:bg-primary/20 transition-colors" />
                <Image 
                  src={showcaseImage.imageUrl} 
                  alt="UniTool App Interface Showcase - Multi-device view"
                  width={1200}
                  height={800}
                  className="w-full h-auto drop-shadow-2xl rounded-[2.5rem] border border-border/50 bg-card/30 backdrop-blur-sm p-2 transition-transform duration-700 hover:scale-[1.01]"
                  priority
                  data-ai-hint={showcaseImage.imageHint}
                />
              </div>
            )}

            <DiscoveryTool />
          </div>
        </section>

        {/* Value Proposition / Deep Content Section */}
        <section className="py-24 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold leading-tight">
                Why Professional Users <br /> Choose <span className="text-primary">UniTool Utilities</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike generic tool apps that sacrifice quality for quantity, UniTool focuses on high-performance, offline-first processing. Our suite is designed for users who demand privacy without compromising on capability.
              </p>
              <ul className="space-y-4">
                {[
                  "Military-grade AES-256 encryption for all vault media",
                  "Privacy-first WhatsApp status saving without cloud uploads",
                  "Advanced AI-powered image enhancement and background removal",
                  "Complete PDF editing suite including compression and merging",
                  "Universal file conversion supporting 100+ different formats"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="p-8 bg-secondary rounded-[2rem] border border-border/50 space-y-4">
                  <Zap className="h-8 w-8 text-accent" />
                  <h3 className="text-xl font-headline font-bold">Fast Processing</h3>
                  <p className="text-sm text-muted-foreground">Local CPU-based processing for near-instant results.</p>
                </div>
                <div className="p-8 bg-primary/10 rounded-[2rem] border border-primary/20 space-y-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-headline font-bold">Secure Vault</h3>
                  <p className="text-sm text-muted-foreground">Encrypted storage that never touches the cloud.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-8 bg-accent/10 rounded-[2rem] border border-accent/20 space-y-4">
                  <Download className="h-8 w-8 text-accent" />
                  <h3 className="text-xl font-headline font-bold">Universal</h3>
                  <p className="text-sm text-muted-foreground">Support for all major file types and media formats.</p>
                </div>
                <div className="p-8 bg-secondary rounded-[2rem] border border-border/50 space-y-4">
                  <Layout className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-headline font-bold">Smart Discovery</h3>
                  <p className="text-sm text-muted-foreground">AI-driven search to find the right tool in seconds.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="features" className="py-24 container mx-auto px-4">
          <FeatureGrid />
        </section>

        {/* Privacy Section */}
        <section id="security" className="py-24 container mx-auto px-4">
          <PrivacyShowcase />
        </section>

        {/* Download Section */}
        <DownloadCenter />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 pt-20 pb-10 px-4">
        <div className="container mx-auto space-y-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-primary rounded-lg">
                  <Layout className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-headline font-bold text-lg">UniTool</span>
              </div>
              <p className="text-muted-foreground max-w-xs leading-relaxed">
                Built for power users who value privacy. 40+ local utilities for your digital daily driver. Optimized for efficiency and security.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Info className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-primary">Ecosystem</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Status Saver</Link></li>
                <li><Link href="#" className="hover:text-foreground">Play Games</Link></li>
                <li><Link href="#" className="hover:text-foreground">Media Vault</Link></li>
                <li><Link href="#" className="hover:text-foreground">PDF Toolkit</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-primary">Compliance</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="/account-deletion" className="hover:text-foreground">Account Deletion</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-primary">Updates</h4>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Join our devlog"
                  className="w-full bg-secondary border-border rounded-xl px-4 py-2 text-xs focus:ring-1 focus:ring-primary outline-none"
                />
                <Button size="icon" className="absolute right-1 top-1 h-6 w-6 rounded-lg bg-primary hover:bg-primary/90">
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© 2026 UniTool Labs. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>Made with Precision</span>
              <div className="h-4 w-px bg-border" />
              <span>v2.4.0-stable</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
