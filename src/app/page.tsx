
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function Home() {
  const showcaseImage = PlaceHolderImages.find(img => img.id === "app_showcase_dual");
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.unitool.ai";
  const logoUrl = "https://i.postimg.cc/wTbXkjTg/unnamed.webp";

  const PlayStoreButton = ({ className = "" }: { className?: string }) => (
    <Button size="lg" asChild className={`h-14 px-8 rounded-2xl bg-[#000000] hover:bg-[#111] text-white flex items-center gap-3 text-lg font-bold shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/10 group ${className}`}>
      <Link href={playStoreUrl} target="_blank" className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-primary" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a2.26 2.26 0 0 1-.61-1.57V3.384c0-.602.222-1.173.61-1.57zM14.505 12.71l2.54 2.54L5.346 22.316a2.22 2.22 0 0 0 1.25.184 2.13 2.13 0 0 0 1.154-.42l11.026-6.273-4.271-3.1zm4.187-5.597L7.665 1.488a2.13 2.13 0 0 0-1.154-.42 2.22 2.22 0 0 0-1.25.184l11.724 7.081-2.522 2.531 4.229-3.041zM19.167 13.91l3.571-2.031c.642-.366.642-1.393 0-1.758l-3.571-2.031-2.39 2.909 2.39 2.911z"/>
        </svg>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[8px] uppercase tracking-[0.2em] font-medium text-white/50">Get it on</span>
          <span className="text-base font-bold">Google Play</span>
        </div>
      </Link>
    </Button>
  );

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-primary-foreground">
      <header className="fixed top-0 z-[100] w-full glass-nav">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 overflow-hidden rounded-lg">
              <Image src={logoUrl} alt="UniTool Logo" fill className="object-cover" />
            </div>
            <span className="font-headline font-bold text-xl tracking-tight text-gradient">UniTool</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Features</Link>
            <Link href="/privacy" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Button size="sm" asChild className="rounded-full px-5 h-8 text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
              <Link href={playStoreUrl} target="_blank">Download</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <section className="relative pt-12 pb-20 px-6 overflow-hidden">
          <div className="hero-glow" />
          <div className="container mx-auto text-center space-y-12 relative z-10">
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black border border-primary/20 tracking-[0.2em] uppercase">
                V1.0.0 Stable Release
              </div>
              <h1 className="text-3xl md:text-4xl font-headline font-bold tracking-tighter leading-tight text-gradient">
                One Toolbox. <br />
                <span className="text-primary">Infinite Potential.</span>
              </h1>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                The ultimate set of tools for your phone. Fast, safe, and easy for everyone.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
                <PlayStoreButton />
                <div className="flex flex-col items-center sm:items-start gap-1">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                  </div>
                  <span className="text-[10px] font-black text-white/40 tracking-widest uppercase">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {showcaseImage && (
              <div className="relative mt-12">
                <div className="relative">
                  <Image 
                    src={showcaseImage.imageUrl} 
                    alt="UniTool App Showcase"
                    width={1000}
                    height={600}
                    className="w-full max-w-4xl mx-auto h-auto drop-shadow-2xl rounded-[2rem] border border-white/10 glass-card p-1.5"
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

        <section id="features" className="py-20 container mx-auto px-6">
          <FeatureGrid />
        </section>
      </main>

      <footer className="border-t border-white/5 bg-card/20 py-16 px-6 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                  <Image src={logoUrl} alt="UniTool Logo" fill className="object-cover" />
                </div>
                <span className="font-headline font-bold text-xl text-gradient">UniTool</span>
              </div>
              <p className="text-muted-foreground max-w-xs leading-relaxed text-sm font-medium">
                The easiest toolbox for your phone. Fast and safe for everyone.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-headline font-bold uppercase text-[10px] tracking-[0.3em] text-primary">Legal</h4>
              <ul className="space-y-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="/account-deletion" className="hover:text-white transition-colors">Deletion</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-headline font-bold uppercase text-[10px] tracking-[0.3em] text-primary">Store</h4>
              <div className="space-y-3">
                <Link href={playStoreUrl} target="_blank" className="block text-xs font-bold text-muted-foreground hover:text-white transition-colors uppercase tracking-widest">Google Play</Link>
                <p className="text-[10px] text-muted-foreground font-mono">v1.0.0 Stable</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">© 2026 UniTool Labs. Version 1.0.0</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
