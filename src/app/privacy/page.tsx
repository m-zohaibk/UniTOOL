
import { ArrowLeft, Shield, Mail, Info, Eye, Lock, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function PrivacyPage() {
  const lastUpdated = "June 12, 2026";
  const contactEmail = "zobifast@gmail.com";
  const logoUrl = "https://i.postimg.cc/wTbXkjTg/unnamed.webp";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 overflow-hidden rounded-lg">
              <Image src={logoUrl} alt="UniTool Logo" fill className="object-cover" />
            </div>
            <span className="font-headline font-bold text-lg">UniTool <span className="text-primary">Legal</span></span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center gap-3 text-primary justify-center md:justify-start">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-4xl font-headline font-bold text-foreground">Privacy Policy</h1>
                <p className="text-muted-foreground mt-1">Last Updated: {lastUpdated}</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              UniTool ("we", "our", or "us") operates the UniTool mobile application ("App"). This Privacy Policy explains how we protect your information.
            </p>
          </div>

          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold flex items-center gap-2">
                <Info className="h-6 w-6 text-primary" />
                1. INFORMATION WE COLLECT
              </h2>
              <Card className="bg-card/50">
                <CardContent className="p-6 space-y-4">
                  <p>UniTool does not collect, store, or sell your personal files, photos, or videos.</p>
                  <p>We may request access to your device storage only to provide the features you choose to use.</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Device Info", "Crash Reports", "Usage Stats", "Performance Data"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-secondary rounded-lg text-xs font-bold">{tag}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold flex items-center gap-2">
                <Eye className="h-6 w-6 text-primary" />
                2. THIRD-PARTY SERVICES
              </h2>
              <p className="text-muted-foreground">We use some trusted services to help our app run better, including Google Play Services, AdMob, and Firebase.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                3. FILES AND MEDIA
              </h2>
              <p className="text-muted-foreground">Your files stay on your phone. We don't claim any ownership of your content. Always keep backups of your important files.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                4. WEB TOOLS
              </h2>
              <p className="text-muted-foreground">Some features open websites inside the app. Those sites have their own privacy rules that we don't control.</p>
            </section>

            <section className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2">
                <h3 className="text-xl font-headline font-bold">Contact Us</h3>
                <p className="text-muted-foreground text-sm">Any questions? Email us at:</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl mt-2 font-mono font-bold text-primary">
                  <Mail className="h-4 w-4" />
                  {contactEmail}
                </div>
              </div>
              <Button asChild variant="outline" className="rounded-xl px-8 h-12">
                <Link href="/">Back to Home</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-10 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">© 2026 UniTool Labs. Privacy First.</p>
      </footer>
    </div>
  );
}
