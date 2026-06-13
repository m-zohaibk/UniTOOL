
"use client";

import { 
  ImageIcon, 
  Video, 
  Lock, 
  MessageSquare, 
  Zap,
  Calculator,
  Files,
  FileText
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const toolsData = [
  {
    id: "private_media_vault",
    title: "Media Vault",
    thumbnail: "https://i.postimg.cc/6Q6JkFBZ/Picsart-26-05-28-01-24-06-478.jpg",
    description: "Secure lock for private files.",
    category: "Security",
    tag: "popular",
    icon: Lock,
    color: "text-primary"
  },
  {
    id: "whatsapp_status_saver",
    title: "Status Saver",
    thumbnail: "https://i.postimg.cc/tJSBrTBd/Picsart-26-05-27-13-53-15-241.jpg",
    description: "Save status updates instantly.",
    category: "Media",
    icon: MessageSquare,
    color: "text-green-400"
  },
  {
    id: "all_file_conversion_tools",
    title: "File Converter",
    thumbnail: "https://i.postimg.cc/PJnYzCGN/file-000000009c88720684ba1cc94cee3d0a.png",
    description: "Convert any file format.",
    category: "Utilities",
    tag: "40+ Tools",
    icon: Files,
    color: "text-orange-400"
  },
  {
    id: "all_image_tools",
    title: "Image Suite",
    thumbnail: "https://i.postimg.cc/65YzwhJ0/file-000000003904720999df914a30fd482e.png",
    description: "Complete editing tools.",
    category: "Design",
    tag: "30+ Tools",
    icon: ImageIcon,
    color: "text-blue-400"
  },
  {
    id: "age_calculation",
    title: "Age Calc",
    thumbnail: "https://i.postimg.cc/8cg3m6RV/IMG-20250618-WA0072.jpg",
    description: "Quickly find your exact age.",
    category: "Utilities",
    icon: Calculator,
    color: "text-yellow-400"
  },
  {
    id: "all_PDF_Tools",
    title: "PDF Manager",
    thumbnail: "https://i.postimg.cc/jj0pmJwt/file-000000005d987208a105f0dc868c24a9.png",
    description: "Merge and edit PDF files.",
    category: "Documents",
    tag: "Pro",
    icon: FileText,
    color: "text-red-400"
  },
  {
    id: "all_video_tools",
    title: "Video Tools",
    thumbnail: "https://i.postimg.cc/Zq1V2KkM/file-000000008db07206a43a7d513faee56c.png",
    description: "Download and edit videos.",
    category: "Media",
    tag: "New",
    icon: Video,
    color: "text-indigo-400"
  },
  {
    id: "all_ai_writer_tools",
    title: "AI Writer",
    thumbnail: "https://i.postimg.cc/Wp0HRr4T/file-00000000d3e47206adde16937bd9c0f6.png",
    description: "Generate content with AI.",
    category: "AI",
    tag: "Smart",
    icon: Zap,
    color: "text-primary"
  }
];

export function FeatureGrid() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-l-4 border-primary pl-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-headline font-bold text-gradient">Utility Tools</h2>
          <p className="text-sm text-muted-foreground font-medium max-w-xl">
            Everything you need for your phone, all in one place.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {toolsData.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="h-full glass-card border-white/5 overflow-hidden relative flex flex-col group select-none">
              {tool.tag && (
                <div className="absolute top-2 right-2 z-20">
                  <Badge className="bg-primary/90 text-white border-none text-[7px] px-1.5 py-0.5 uppercase tracking-widest font-black">
                    {tool.tag}
                  </Badge>
                </div>
              )}

              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img 
                  src={tool.thumbnail} 
                  alt={tool.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-2 left-3 flex items-center gap-2">
                  <div className={`p-1 rounded-lg bg-background/80 backdrop-blur-md border border-white/10 ${tool.color}`}>
                    <tool.icon className="h-3 w-3" />
                  </div>
                </div>
              </div>

              <CardHeader className="p-2 space-y-0.5 min-h-[60px]">
                <CardTitle className="text-xs font-headline font-bold">
                  {tool.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-[9px] leading-tight line-clamp-2">
                  {tool.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
