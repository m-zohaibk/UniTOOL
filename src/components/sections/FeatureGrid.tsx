
"use client";

import { 
  ImageIcon, 
  Video, 
  Lock, 
  MessageSquare, 
  Zap,
  GraduationCap,
  Calculator,
  Files,
  FileText,
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
    description: "Securely hide and lock your private photos and videos.",
    category: "Security",
    tag: "popular",
    icon: Lock,
    color: "text-primary",
    large: true
  },
  {
    id: "whatsapp_status_saver",
    title: "Global Status Saver",
    url: "native://status_saver",
    thumbnail: "https://i.postimg.cc/tJSBrTBd/Picsart-26-05-27-13-53-15-241.jpg",
    description: "One-tap saving for all WhatsApp and Business statuses.",
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
    description: "40+ tools for rapid file conversion between any format.",
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
    description: "Complete image editing and professional design tools.",
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
    description: "Calculates exact chronological age with accuracy.",
    category: "Utilities",
    icon: Calculator,
    color: "text-yellow-400"
  },
  {
    id: "all_PDF_Tools",
    title: "Pro PDF Manager",
    url: "https://tinywow.com/tools/pdf",
    thumbnail: "https://i.postimg.cc/jj0pmJwt/file-000000005d987208a105f0dc868c24a9.png",
    description: "Advanced PDF merging and editing for your work.",
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
    description: "High-quality video downloading and editing tools.",
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
    description: "Use AI to generate high-quality text and content.",
    category: "AI",
    tag: "AI Powered",
    icon: Zap,
    color: "text-primary"
  }
];

export function FeatureGrid() {
  return (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-l-4 border-primary pl-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-headline font-bold text-gradient">The Ecosystem</h2>
          <p className="text-lg text-muted-foreground font-medium max-w-xl">
            Explore simple and powerful tools designed to help you every day.
          </p>
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
                {tool.tag && (
                  <div className="absolute top-3 right-3 z-20">
                    <Badge className="bg-primary text-white border-none text-[8px] px-2 py-0.5 uppercase tracking-widest font-black">
                      {tool.tag}
                    </Badge>
                  </div>
                )}

                {/* Taller Aspect Ratio for images */}
                <div className={`relative w-full overflow-hidden ${tool.large ? 'aspect-[3/4]' : 'aspect-[3/4.5]'}`}>
                  <img 
                    src={tool.thumbnail} 
                    alt={tool.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg bg-background/80 backdrop-blur-md border border-white/10 ${tool.color}`}>
                      <tool.icon className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Small height text area */}
                <CardHeader className="p-3 space-y-1">
                  <CardTitle className="text-base font-headline group-hover:text-primary transition-colors flex items-center justify-between">
                    {tool.title}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all" />
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-[10px] leading-tight line-clamp-1 font-medium">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
