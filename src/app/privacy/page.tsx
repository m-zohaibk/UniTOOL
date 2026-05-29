import { Layout, ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
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
            <div className="flex items-center gap-3 text-primary">
              <Shield className="h-8 w-8" />
              <h1 className="text-4xl font-headline font-bold">Privacy Policy</h1>
            </div>
            <p className="text-muted-foreground italic">Last Updated: May 28, 2026</p>
          </div>

          <article className="prose prose-invert max-w-none text-muted-foreground space-y-8 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-semibold text-foreground">Introduction</h2>
              <p>
                At UniTool, accessible through the Google Play Store, protecting user privacy is one of our top priorities. This Privacy Policy explains what information may be collected, how it is used, and how your data remains protected.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-semibold text-foreground">Information We Collect</h2>
              <ul className="space-y-4 list-disc pl-5">
                <li>
                  <strong>WhatsApp Status Saver:</strong> For Android versions below 10, the app requires storage permission for compatibility only. For Android 10 and above, no permission is required. UniTool accesses only the folders you manually select using Android&apos;s Storage Access Framework (SAF) to display and save WhatsApp statuses locally on your device. No status files are uploaded to our servers.
                </li>
                <li>
                  <strong>Private Media Vault:</strong> Photos, videos, and files hidden inside the vault are encrypted and stored locally on your device. UniTool does not access or upload vault content to external servers.
                </li>
                <li>
                  <strong>PDF & Image Tools:</strong> File conversion, image editing, and PDF processing tools operate securely inside embedded WebViews. We do not permanently store uploaded files.
                </li>
                <li>
                  <strong>Google Sign-In:</strong> If you choose to sign in with Google, your name, email address, and favorite tools may be stored to synchronize preferences across devices.
                </li>
                <li>
                  <strong>Advertising:</strong> UniTool uses Google AdMob for advertisements. AdMob may collect advertising identifiers, device information, and usage data for ad personalization and analytics.
                </li>
                <li>
                  <strong>Push Notifications:</strong> Firebase Cloud Messaging (FCM) may generate a unique token to deliver notifications and updates.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-semibold text-foreground">Data Security</h2>
              <p>
                We value your trust and work to protect your information. However, no method of transmission over the internet or electronic storage is completely secure, and absolute security cannot be guaranteed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-semibold text-foreground">Third-Party Services</h2>
              <p>
                UniTool may contain links or integrations with third-party services, websites, or tools. We are not responsible for the privacy practices or content of those external services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-semibold text-foreground">Children's Privacy</h2>
              <p>
                UniTool does not knowingly collect personally identifiable information from children under the age of 13.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-semibold text-foreground">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised update date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-semibold text-foreground">Contact Us</h2>
              <p>
                If you have questions or suggestions regarding this Privacy Policy, please contact us through the developer email provided on the Google Play Store listing.
              </p>
            </section>
          </article>

          <div className="pt-10 border-t border-border flex flex-col gap-6">
            <p className="text-sm text-muted-foreground">© 2026 UniTool. All Rights Reserved.</p>
            <Button asChild variant="outline" className="w-fit rounded-xl border-primary/20 hover:bg-primary/10 text-primary">
              <Link href="/">Back to Launchpad</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
