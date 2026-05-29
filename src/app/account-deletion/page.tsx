import { Layout, ArrowLeft, UserX, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-headline font-bold text-lg">UniTool <span className="text-primary">Support</span></span>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 text-destructive">
              <div className="p-3 bg-destructive/10 rounded-2xl">
                <UserX className="h-10 w-10" />
              </div>
              <div className="space-y-1">
                <h1 className="text-4xl font-headline font-bold text-foreground">Account Deletion</h1>
                <p className="text-muted-foreground">Request deletion of your UniTool account and associated data</p>
              </div>
            </div>
          </div>

          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-8 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-headline font-semibold text-foreground flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  How to Request Account Deletion
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Users can request deletion of their UniTool account and associated data by contacting the developer through the email provided below.
                </p>
                <div className="p-4 bg-secondary/50 rounded-xl border border-border inline-block">
                  <span className="font-mono text-primary font-bold">zobifast@gmail.com</span>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-headline font-semibold text-foreground">What Data Is Deleted</h3>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                  <li>User profile information</li>
                  <li>Google Sign-In account association</li>
                  <li>Saved preferences and favorites stored on our servers</li>
                </ul>
              </section>

              <section className="space-y-4 p-6 bg-destructive/5 rounded-2xl border border-destructive/10">
                <h3 className="text-xl font-headline font-semibold text-destructive">Locally Stored Files</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Files stored locally on your device such as hidden vault media, downloaded videos, images, PDFs, or documents are <strong>not automatically removed</strong> from your device when an account deletion request is submitted. You must manually delete these files if you wish for them to be removed.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-headline font-semibold text-foreground">Retention Period</h3>
                <p className="text-muted-foreground">
                  Account deletion requests are generally processed within <strong>7 to 30 days</strong>. You will receive a confirmation email once the process is complete.
                </p>
              </section>
            </CardContent>
          </Card>

          <div className="pt-10 border-t border-border flex flex-col gap-6">
            <p className="text-sm text-muted-foreground">© 2026 UniTool. All Rights Reserved.</p>
            <Button asChild variant="outline" className="w-fit rounded-xl border-border hover:bg-secondary text-foreground">
              <Link href="/">Back to Launchpad</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
