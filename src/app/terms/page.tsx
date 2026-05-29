
import { Layout, ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-headline font-bold text-lg">UniTool <span className="text-primary">Legal</span></span>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-accent">
              <FileText className="h-8 w-8" />
              <h1 className="text-4xl font-headline font-bold">Terms of Service</h1>
            </div>
            <p className="text-muted-foreground italic">Effective Date: May 28, 2026</p>
          </div>

          <article className="prose prose-invert max-w-none text-muted-foreground space-y-6 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-semibold text-foreground">1. Usage Agreement</h2>
              <p>
                By downloading UniTool Launchpad, you agree to use the provided utilities in compliance with local laws. The WhatsApp Status Saver is intended for personal archival use of content you have a legal right to access.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-semibold text-foreground">2. Limitation of Liability</h2>
              <p>
                UniTool provides technical utilities "as-is". We are not responsible for data loss resulting from device hardware failure, forgotten vault passwords, or unauthorized device access. Because encryption keys are stored locally, we cannot recover data if you forget your vault credentials.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-semibold text-foreground">3. Intellectual Property</h2>
              <p>
                All "UniTool" brand assets, UI designs, and bento-box layouts are the property of UniTool Labs. Third-party content accessed via Poki Games or external tool links is subject to the respective developers' terms.
              </p>
            </section>
          </article>

          <div className="pt-10 border-t border-border flex flex-col gap-6">
            <p className="text-sm text-muted-foreground">© 2026 UniTool. All Rights Reserved.</p>
            <Button asChild variant="outline" className="w-fit rounded-xl border-accent/20 hover:bg-accent/10 text-accent">
              <Link href="/">Back to Launchpad</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
