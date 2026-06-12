import { Layout, ArrowLeft, FileText, Mail, ShieldCheck, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  const lastUpdated = "June 12, 2026";
  const contactEmail = "zobifast@gmail.com";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-headline font-bold text-lg">UniTool <span className="text-primary">Legal</span></span>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center gap-3 text-accent justify-center md:justify-start">
              <div className="p-3 bg-accent/10 rounded-2xl">
                <FileText className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Terms of Service</h1>
                <p className="text-muted-foreground mt-1">Last Updated: {lastUpdated}</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Please read these Terms of Service ("Terms") carefully before using the UniTool mobile application ("App"). By using UniTool, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-primary" />
                1. USE OF THE APP
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>UniTool provides access to various utilities, tools, and services for personal use. You agree not to:</p>
                <ul className="grid gap-2 pl-5 list-disc">
                  <li>Use the App for any unlawful purpose or violate applicable laws.</li>
                  <li>Attempt to modify, reverse engineer, decompile, or extract the source code.</li>
                  <li>Misuse or interfere with the operation of the App or its services.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-foreground">2. USER CONTENT</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some features allow you to access, edit, convert, and manage files. You retain ownership of your content. UniTool does not claim ownership of any files or media processed through the App. You are solely responsible for maintaining backups of your important data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-foreground">3. WEB-BASED TOOLS AND THIRD-PARTY SERVICES</h2>
              <p className="text-muted-foreground leading-relaxed">
                Certain features provide access to third-party websites or online tools through a WebView. Your use of those services is subject to their own terms and policies. UniTool does not control and is not responsible for third-party content.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Google Play Services", "Google AdMob", "Firebase Analytics", "Firebase Crashlytics"].map((s) => (
                  <span key={s} className="px-3 py-1 bg-secondary rounded-lg border border-border text-xs font-medium">{s}</span>
                ))}
              </div>
            </section>

            <section className="space-y-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
              <h2 className="text-2xl font-headline font-bold text-primary">4. STATUS SAVER</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Status Saver feature is intended for personal use only. Users are responsible for respecting copyright and privacy rights when saving content belonging to others. <strong>UniTool is not affiliated with, endorsed by, or sponsored by WhatsApp Inc. or Meta Platforms Inc.</strong>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-foreground">5. INTELLECTUAL PROPERTY</h2>
              <p className="text-muted-foreground leading-relaxed">
                The App, including its design, branding, and features, is owned by UniTool. You may not copy, distribute, or create derivative works from the App except as permitted by law.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section className="space-y-4">
                <h2 className="text-xl font-headline font-bold text-foreground">6. DISCLAIMER OF WARRANTIES</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The App is provided "AS IS" and "AS AVAILABLE". We make no warranties regarding the availability, reliability, or security of the App or third-party services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-headline font-bold text-foreground">7. LIMITATION OF LIABILITY</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, UniTool and its developers shall not be liable for any damages arising from data loss, device issues, software failures, or service unavailability.
                </p>
              </section>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-foreground">8. CHANGES TO THESE TERMS</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms from time to time. Your continued use of the App after changes become effective constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="pt-10 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="font-headline font-bold text-xl">Legal Questions?</h3>
                <p className="text-muted-foreground text-sm">Contact our support team for clarification.</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl border border-border mt-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-mono text-foreground font-bold">{contactEmail}</span>
                </div>
              </div>
              <Button asChild variant="outline" className="rounded-xl px-8 h-12 border-accent/20 text-accent hover:bg-accent/5">
                <Link href="/">Back to Launchpad</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-10 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground">© 2026 UniTool Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}
