
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
import Image from "next/image";

const toolsData = [
  {
    id: "private_media_vault",
    title: "Private Media Vault",
    url: "native://vault",
    thumbnail: "https://i.postimg.cc/6Q6JkFBZ/Picsart-26-05-28-01-24-06-478.jpg",
    description: "Securely hide and encrypt photos/videos.",
    category: "Utility Tools",
    tag: "new",
    icon: Lock,
    color: "text-primary",
    large: true
  },
  {
    id: "whatsapp_status_saver",
    title: "Status Saver",
    url: "native://status_saver",
    thumbnail: "https://i.postimg.cc/tJSBrTBd/Picsart-26-05-27-13-53-15-241.jpg",
    description: "Save and share photos & videos from WhatsApp statuses.",
    category: "Media Tools",
    icon: MessageSquare,
    color: "text-green-400",
    large: true
  },
  {
    id: "all_file_conversion_tools",
    title: "All Conversion Tools",
    url: "https://tinywow.com/tools/file_conversion",
    thumbnail: "https://i.postimg.cc/PJnYzCGN/file-000000009c88720684ba1cc94cee3d0a.png",
    description: "Convert files between multiple formats easily.",
    category: "File Tools",
    tag: "40+",
    icon: Files,
    color: "text-orange-400"
  },
  {
    id: "all_image_tools",
    title: "All Image Tools",
    url: "https://tinywow.com/tools/image",
    thumbnail: "https://i.postimg.cc/65YzwhJ0/file-000000003904720999df914a30fd482e.png",
    description: "Access all image editing and design tools.",
    category: "Image & Design",
    tag: "30+",
    icon: ImageIcon,
    color: "text-blue-400"
  },
  {
    id: "age_calculation",
    title: "Age Calculation",
    url: "https://www.calculator.net/age-calculator.html",
    thumbnail: "https://i.postimg.cc/8cg3m6RV/IMG-20250618-WA0072.jpg",
    description: "Calculate exact age from date of birth.",
    category: "Utility Tools",
    icon: Calculator,
    color: "text-yellow-400"
  },
  {
    id: "all_PDF_Tools",
    title: "All PDF Tools",
    url: "https://tinywow.com/tools/pdf",
    thumbnail: "https://i.postimg.cc/jj0pmJwt/file-000000005d987208a105f0dc868c24a9.png",
    description: "ALL PDF edit, compress, merge, and conversion tools.",
    category: "File Tools",
    tag: "40+",
    icon: FileText,
    color: "text-red-400"
  },
  {
    id: "all_video_tools",
    title: "All Video Tools",
    url: "https://tinywow.com/tools/video",
    thumbnail: "https://i.postimg.cc/Zq1V2KkM/file-000000008db07206a43a7d513faee56c.png",
    description: "Explore all video download and editing tools.",
    category: "Media Tools",
    tag: "10+",
    icon: Video,
    color: "text-indigo-400"
  },
  {
    id: "all_ai_writer_tools",
    title: "All AI Writer Tools",
    url: "https://tinywow.com/tools/write",
    thumbnail: "https://i.postimg.cc/Wp0HRr4T/file-00000000d3e47206adde16937bd9c0f6.png",
    description: "Generate content using powerful AI writing tools.",
    category: "AI Tools",
    tag: "20+",
    icon: Zap,
    color: "text-accent"
  },
  {
    id: "ringtone_maker",
    title: "Ringtone Maker",
    url: "https://fdmr.party/name-ringtone-maker.php",
    thumbnail: "https://i.postimg.cc/YSzSLcVF/IMG-20250617-WA0088.jpg",
    description: "Create Custom Name Caller Ringtones.",
    category: "Media Tools",
    icon: Music,
    color: "text-pink-400"
  },
  {
    id: "play_games",
    title: "Play Games",
    url: "https://poki.com",
    thumbnail: "https://i.postimg.cc/yNM0Jb3w/10-Best-Poki-Games-2023.jpg",
    description: "Play free online games in browser.",
    category: "Entertainment",
    icon: Gamepad2,
    color: "text-purple-400"
  },
  {
    id: "maths_solver",
    title: "Maths Solver",
    url: "https://notegpt.io/ai-math-solver",
    thumbnail: "https://i.postimg.cc/5twhggTN/256x256bb.jpg",
    description: "Solve math problems step by step using AI.",
    category: "Education",
    tag: "popular",
    icon: GraduationCap,
    color: "text-cyan-400"
  },
  {
    id: "img_bg_remover",
    title: "Background Remover",
    url: "https://tinywow.com/image/remove-bg",
    thumbnail: "https://i.postimg.cc/1RLRbCH9/images-11.jpg",
    description: "Remove image background automatically.",
    category: "Image & Design",
    tag: "popular",
    icon: Sparkles,
    color: "text-emerald-400"
  },
  {
    id: "student_image",
    title: "Student ID Card",
    url: "https://gamitisa.com/tools/student-idcard",
    thumbnail: "https://i.postimg.cc/DydrDq85/demo2.jpg",
    description: "Generate demo student ID card images.",
    category: "Image & Design",
    icon: Smartphone,
    color: "text-slate-400"
  },
  {
    id: "mobile_comparison",
    title: "Mobile Comparison",
    url: "https://m.whatmobile.com.pk/Infinix_Hot-60-Pro-vs-",
    thumbnail: "https://i.postimg.cc/ncFvRQFv/IMG-20250624-WA0012.jpg",
    description: "Compare mobile specifications and prices.",
    category: "Utility Tools",
    icon: Smartphone,
    color: "text-rose-400"
  },
  {
    id: "github_maker",
    title: "Visiting Card Maker",
    url: "https://gamitisa.com/tools/visiting-card",
    thumbnail: "https://i.postimg.cc/D0cCQYfq/IMG-20250618-WA0095.jpg",
    description: "Create Visiting Card designs.",
    category: "Image & Design",
    tag: "new",
    icon: Settings,
    color: "text-violet-400"
  },
  {
    id: "enhance_image",
    title: "Enhance Images",
    url: "https://www.aiupscaler.ai/",
    thumbnail: "https://i.postimg.cc/rmnCJT57/images-10.jpg",
    description: "Enhance low quality photos into HD images.",
    category: "Image & Design",
    tag: "popular",
    icon: ImageIcon,
    color: "text-amber-400"
  }
];

export function FeatureGrid() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-4xl font-headline font-bold">Utility Ecosystem</h2>
          <p className="text-muted-foreground">Our curated suite of high-performance tools and services.</p>
        </div>
        <Badge variant="secondary" className="px-6 py-2 rounded-full bg-primary/10 text-primary border-primary/20 text-sm font-semibold">
          16 Active Modules
        </Badge>
      </div>

      <div className="bento-grid">
        {toolsData.map((tool) => (
          <Link 
            key={tool.id} 
            href={tool.url.startsWith('native') ? '#' : tool.url}
            target={tool.url.startsWith('native') ? undefined : "_blank"}
            className={`group block h-full ${tool.large ? 'bento-item-large' : ''}`}
          >
            <Card className="h-full bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden relative flex flex-col">
              <div className="absolute top-3 right-3 z-20 flex gap-2">
                {tool.tag && (
                  <Badge className="bg-accent text-accent-foreground border-none text-[10px] px-2 py-0.5 uppercase tracking-wider font-bold">
                    {tool.tag}
                  </Badge>
                )}
                <div className="p-1.5 bg-background/50 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                </div>
              </div>

              {/* Thumbnail Container */}
              <div className="relative w-full aspect-video overflow-hidden">
                <img 
                  src={tool.thumbnail} 
                  alt={tool.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                
                {/* Icon Overlay */}
                <div className={`absolute bottom-4 left-4 p-2.5 rounded-xl bg-background/90 backdrop-blur-sm border border-border/50 shadow-xl ${tool.color}`}>
                  <tool.icon className="h-5 w-5" />
                </div>
              </div>

              <CardHeader className="flex-1 p-6 space-y-3">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary/80">
                    {tool.category}
                  </div>
                  <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors">
                    {tool.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-snug line-clamp-2">
                    {tool.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
