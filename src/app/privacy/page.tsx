import { Layout, ArrowLeft, Shield, Mail, Globe, Lock, Info, AlertTriangle, Eye } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPage() {
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
          {/* Hero Header */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center gap-3 text-primary justify-center md:justify-start">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Privacy Policy</h1>
                <p className="text-muted-foreground mt-1">Last Updated: {lastUpdated}</p>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              UniTool (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the UniTool mobile application (&quot;App&quot;). This Privacy Policy explains how information may be collected, used, and disclosed when you use our App.
            </p>
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-foreground font-headline font-bold text-2xl">
                <Info className="h-6 w-6 text-primary" />
                <h2>1. INFORMATION WE COLLECT</h2>
              </div>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    UniTool does not collect, store, or sell your personal files, photos, videos, or documents.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide app features, UniTool may request access to:
                  </p>
                  <ul className="grid gap-4 md:grid-cols-2">
                    <li className="p-4 bg-secondary/30 rounded-xl border border-border/50">
                      <strong className="text-foreground block mb-1">Storage/Photos/Videos</strong>
                      <span className="text-sm">On devices running Android 9 (API 28) and below, UniTool may request storage permissions to access, save, edit, convert, organize, and manage files and media selected by you. On newer Android versions, file access may be provided through Android&apos;s built-in file and media selection system.</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed pt-2">
                    Some information may be collected automatically by third-party services used within the App, including:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Device information", "Crash reports", "Diagnostic information", "Usage statistics", "Performance stats", "Advertising identifiers"].map((item) => (
                      <span key={item} className="px-3 py-1 bg-primary/5 border border-primary/20 text-primary text-xs font-semibold rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2 text-foreground font-headline font-bold text-2xl">
                <Eye className="h-6 w-6 text-primary" />
                <h2>2. THIRD-PARTY SERVICES</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                UniTool may use third-party services for advertising, analytics, crash reporting, or other functionality. These services may collect information according to their own privacy policies. Examples include:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Google Play Services", "Google AdMob", "Firebase Analytics", "Firebase Crashlytics"].map((service) => (
                  <div key={service} className="p-4 bg-card border border-border/50 rounded-xl text-center text-sm font-medium">
                    {service}
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2 text-foreground font-headline font-bold text-2xl">
                <Lock className="h-6 w-6 text-primary" />
                <h2>3. FILES AND MEDIA</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                UniTool only accesses files, photos, videos, and documents when required for a feature that you choose to use. We do not claim ownership of your content.
              </p>
              <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-2xl flex gap-4 items-start text-muted-foreground">
                <AlertTriangle className="h-6 w-6 text-destructive shrink-0" />
                <p className="text-sm">
                  <strong>Disclaimer:</strong> You are responsible for maintaining backups of important files and media. We are not responsible for data loss resulting from device issues, app removal, device resets, storage failures, or other circumstances beyond our control.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2 text-foreground font-headline font-bold text-2xl">
                <Globe className="h-6 w-6 text-primary" />
                <h2>4. WEB-BASED TOOLS</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Some UniTool features may open third-party websites, online tools, or services within a WebView or your device&apos;s browser. Any information submitted to or collected by these third-party services is governed by their own privacy policies and terms.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-foreground font-headline font-bold text-xl">
                  <Shield className="h-5 w-5 text-primary" />
                  <h2>5. DATA SECURITY</h2>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We take reasonable measures to help protect information and improve app security. However, no method of electronic storage or transmission is completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-foreground font-headline font-bold text-xl">
                  <Eye className="h-5 w-5 text-primary" />
                  <h2>6. CHILDREN&apos;S PRIVACY</h2>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  UniTool is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that such information has been collected, we will take steps to delete it.
                </p>
              </section>
            </div>

            <section className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="font-headline font-bold text-xl">Contact Us</h3>
                <p className="text-muted-foreground text-sm">Have questions about your privacy?</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl border border-border mt-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-mono text-foreground font-bold">{contactEmail}</span>
                </div>
              </div>
              <Button asChild variant="outline" className="rounded-xl px-8 h-12 border-primary/20 text-primary hover:bg-primary/5">
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
