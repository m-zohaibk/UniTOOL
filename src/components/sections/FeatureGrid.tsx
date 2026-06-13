"use client";

import { 
  Smartphone, 
  Gamepad2, 
  ShieldCheck, 
  Download, 
  FileText, 
  MessageSquare, 
  Image as ImageIcon, 
  Video, 
  Lock, 
  Settings, 
  Zap,
  Music,
  GraduationCap,
  Calculator,
  Files,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

const toolsData = [
  {
    id: "private_media_vault",
    title: "Private Media Vault",
    url: "native://vault",
    thumbnail: "https://i.postimg.cc/6Q6JkFBZ/Picsart-26-05-28-01-24-06-478.jpg",
    description: "Military-grade AES-256 encryption to securely hide and lock your private photos and videos.",
    category: "Security",
    tag: "featured",
    icon: Lock,
    color: "text-primary",
    large: true
  },
  {
    id: "whatsapp_status_saver",
    title: "Global Status Saver",
    url: "native://status_saver",
    thumbnail: "https://i.postimg.cc/tJSBrTBd/Picsart-26-05-27-13-53-15-241.jpg",
    description: "One-tap saving for all WhatsApp and Business statuses. Zero tracking, zero cloud storage.",
    category: "Media",
    icon: MessageSquare,
    color: "text-green-400",
    large: true
  },
  {
    id: "all_file_conversion_tools",
    title: "Universal Converter",
    url: "https://tinywow.com/tools/file_conversion",
    thumbnail: "https://i.postimg.cc/PJnYzCGN/file-000000009c88720684ba1cc94cee3d0a.png",
    description: "40+ professional tools for rapid file conversion between any format.",
    category: "Utilities",
    tag: "40+ Tools",
    icon: Files,
    color: "text-orange-400"
  },
  {
    id: "all_image_tools",
    title: "Studio Image Suite",
    url: "https://tinywow.com/tools/image",
    thumbnail: "https://i.postimg.cc/65YzwhJ0/file-000000003904720999df914a30fd482e.png",
    description: "Complete image editing, resizing, and professional design ecosystem.",
    category: "Design",
    tag: "30+ Tools",
    icon: ImageIcon,
    color: "text-blue-400"
  },
  {
    id: "age_calculation",
    title: "Precise Age Engine",
    url: "https://www.calculator.net/age-calculator.html",
    thumbnail: "https://i.postimg.cc/8cg3m6RV/IMG-20250618-WA0072.jpg",
    description: "Calculates exact chronological age with down-to-the-second accuracy.",
    category: "Utilities",
    icon: Calculator,
    color: "text-yellow-400"
  },
  {
    id: "all_PDF_Tools",
    title: "Pro PDF Manager",
    url: "https://tinywow.com/tools/pdf",
    thumbnail: "https://i.postimg.cc/jj0pmJwt/file-000000005d987208a105f0dc868c24a9.png",
    description: "Advanced PDF merging, compression, and editing for professional workflows.",
    category: "Documents",
    tag: "Pro",
    icon: FileText,
    color: "text-red-400"
  },
  {
    id: "all_video_tools",
    title: "Video Power Tools",
    url: "https://tinywow.com/tools/video",
    thumbnail: "https://i.postimg.cc/Zq1V2KkM/file-000000008db07206a43a7d513faee56c.png",
    description: "High-fidelity video downloading and frame-accurate editing tools.",
    category: "Media",
    tag: "New",
    icon: Video,
    color: "text-indigo-400"
  },
  {
    id: "all_ai_writer_tools",
    title: "AI Writing Hub",
    url: "https://tinywow.com/tools/write",
    thumbnail: "https://i.postimg.cc/Wp0HRr4T/file-00000000d3e47206adde16937bd9c0f6.png",
    description: "Leverage advanced AI models to generate high-quality copy and creative content.",
    category: "AI Tools",
    tag: "AI Powered",
    icon: Zap,
    color: "text-primary"
  },
  {
    id: "maths_solver",
    title: "AI Maths Solver",
    url: "https://notegpt.io/ai-math-solver",
    thumbnail: "https://i.postimg.cc/5twhggTN/256x256bb.jpg",
    description: "Step-by-step visual solutions for complex mathematical problems using AI.",
    category: "Education",
    tag: "Smart",
    icon: GraduationCap,
    color: "text-cyan-400"
  },
  {
    id: "img_bg_remover",
    title: "Smart BG Remover",
    url: "https://tinywow.com/image/remove-bg",
    thumbnail: "https://i.postimg.cc/1RLRbCH9/images-11.jpg",
    description: "Neural network-based background removal with pixel-perfect edge detection.",
    category: "AI Design",
    tag: "Instant",
    icon: Sparkles,
    color: "text-emerald-400"
  }
];

export function FeatureGrid() {
  return (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-l-4 border-primary pl-8">
        <div className="space-y-4">
          <h2 className="text-5xl font-headline font-bold text-gradient">The Ecosystem.</h2>
          <p className="text-xl text-muted-foreground font-medium max-w-xl">
            Explore 16 modular high-performance utilities curated for elite digital workflows.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Badge className="px-6 py-2 rounded-2xl bg-white/5 text-white/80 border-white/10 text-xs font-bold uppercase tracking-widest">
            16 Modules Active
          </Badge>
          <Badge className="px-6 py-2 rounded-2xl bg-primary/20 text-primary border-primary/20 text-xs font-bold uppercase tracking-widest">
            v1.0.0 Stable
          </Badge>
        </div>
      </div>

      <div className="bento-grid">
        {toolsData.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={tool.large ? 'bento-item-large' : ''}
          >
            <Link 
              href={tool.url.startsWith('native') ? '#' : tool.url}
              target={tool.url.startsWith('native') ? undefined : "_blank"}
              className="group block h-full"
            >
              <Card className="h-full glass-card hover:bg-white/[0.08] transition-all duration-500 overflow-hidden relative flex flex-col group-hover:border-primary/40 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                {/* Floating Badge */}
                {tool.tag && (
                  <div className="absolute top-3 right-3 z-20">
                    <Badge className="bg-primary text-white border-none text-[9px] px-2 py-0.5 uppercase tracking-[0.2em] font-black">
                      {tool.tag}
                    </Badge>
                  </div>
                )}

                {/* Thumbnail - Adjusted Aspect Ratio for more length */}
                <div className={`relative w-full overflow-hidden ${tool.large ? 'aspect-[16/11]' : 'aspect-[16/13]'}`}>
                  <img 
                    src={tool.thumbnail} 
                    alt={tool.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  
                  {/* Category Label */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg bg-background/80 backdrop-blur-md border border-white/10 shadow-lg ${tool.color}`}>
                      <tool.icon className="h-4 w-4" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60">
                      {tool.category}
                    </span>
                  </div>
                </div>

                {/* Card Content - Made smaller in height */}
                <CardHeader className="flex-1 p-5 space-y-2">
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-headline group-hover:text-primary transition-colors flex items-center justify-between">
                      {tool.title}
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-xs leading-relaxed line-clamp-2 font-medium">
                      {tool.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
