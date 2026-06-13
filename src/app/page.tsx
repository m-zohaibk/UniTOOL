
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PrivacyShowcase } from "@/components/sections/PrivacyShowcase";
import { DownloadCenter } from "@/components/sections/DownloadCenter";
import { Info, Github, CheckCircle2, Star, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function Home() {
  const showcaseImage = PlaceHolderImages.find(img => img.id === "app_showcase_dual");
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.unitool.ai";
  const logoUrl = "https://i.postimg.cc/wTbXkjTg/unnamed.webp";

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
            <div className="relative w-10 h-10 overflow-hidden rounded-xl">
              <Image src={logoUrl} alt="UniTool Logo" fill className="object-cover" />
            </div>
            <span className="font-headline font-bold text-2xl tracking-tight text-gradient">UniTool</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
            <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Button size="sm" asChild className="rounded-full px-6 font-bold bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
              <Link href={playStoreUrl} target="_blank">Download</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <section className="relative pt-24 pb-40 px-6 overflow-hidden">
          <div className="hero-glow" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-primary/5 blur-[160px] rounded-full -z-10" />
          
          <div className="container mx-auto text-center space-y-16 relative z-10">
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold border border-primary/20 tracking-wider uppercase">
                V1.0 Stable Release
              </div>
              <h1 className="text-3xl md:text-5xl font-headline font-bold tracking-tighter leading-tight text-gradient">
                One Toolbox. <br />
                <span className="text-primary">Infinite Potential.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                The ultimate set of tools for your phone. Fast, secure, and easy for everyone.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
                <PlayStoreButton />
                <div className="flex flex-col items-center sm:items-start gap-1">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <span className="text-xs font-bold text-white/60 tracking-widest uppercase">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {showcaseImage && (
              <div className="relative mt-20 group">
                <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10 group-hover:bg-primary/30 transition-all duration-1000" />
                <div className="relative animate-float">
                  <Image 
                    src={showcaseImage.imageUrl} 
                    alt="UniTool App Showcase"
                    width={1200}
                    height={800}
                    className="w-full max-w-4xl mx-auto h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)] rounded-[2.5rem] border border-white/10 glass-card p-2"
                    priority
                    data-ai-hint={showcaseImage.imageHint}
                  />
                  <div className="mt-12 flex justify-center">
                    <PlayStoreButton />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="features" className="py-32 container mx-auto px-6">
          <FeatureGrid />
        </section>

        <section className="py-32 relative">
          <div className="container mx-auto px-6 text-center space-y-12">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-gradient">Built for Everyone</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>UniTool is a complete toolkit for your digital life. We designed it to be as simple as possible so anyone can use it without confusion.</p>
              <p>From saving status updates to editing files, everything happens instantly on your device. You don't even need the internet for most features.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              {["Secure Vault", "No Cloud Needed", "Easy Search", "Fast Editing"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-6 py-3 glass-card rounded-2xl">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="pb-32">
          <DownloadCenter />
        </div>
      </main>

      <footer className="border-t border-white/5 bg-card/20 py-20 px-6 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16">
            <div className="col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                  <Image src={logoUrl} alt="UniTool Logo" fill className="object-cover" />
                </div>
                <span className="font-headline font-bold text-2xl text-gradient">UniTool</span>
              </div>
              <p className="text-muted-foreground max-w-sm leading-relaxed text-lg font-medium">
                The ultimate toolkit for your mobile life. Easy, fast, and secure.
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
                  <span className="text-xs font-bold text-white/70">Online</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-mono">v1.0.0</p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold text-muted-foreground uppercase tracking-widest">
            <p>© 2026 UniTool Labs. Simple tools for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
