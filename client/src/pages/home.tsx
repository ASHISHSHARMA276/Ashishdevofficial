import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Zap, BookOpen, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Assets
import galaxyBg from '@assets/generated_images/deep_space_galaxy_background_with_purple_and_blue_nebula.png';
import flowerImg from '@assets/generated_images/single_pink_cherry_blossom_flower_on_black_background.png';
import logoImg from '@assets/generated_images/cosmic_flower_logo_icon.png';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100 selection:bg-purple-500/30 selection:text-purple-200 font-sans">
      
      {/* Background Layer */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${galaxyBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Falling Flowers Animation Layer */}
      <FallingFlowers />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation */}
        <nav className="border-b border-white/10 backdrop-blur-md fixed top-0 w-full z-50 bg-black/20">
          <div className="container mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 font-bold text-xl tracking-tight">
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.5)] bg-black">
                <img src={logoImg} alt="Cosmic Logo" className="w-full h-full object-cover" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-blue-200 drop-shadow-sm">
                Floovi
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Features</a>
              <a href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Documentation</a>
              <a href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">Blog</a>
              <Button size="sm" className="font-semibold bg-purple-600 hover:bg-purple-500 text-white border-none shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all duration-300">
                Get Started
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-40 pb-20 px-6 flex-grow flex items-center">
          <div className="container mx-auto max-w-5xl text-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="space-y-10"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-200 text-xs font-medium font-mono backdrop-blur-md shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                v2.0.0 Cosmic Release
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Documentation <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x">
                  Beyond Limits
                </span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                Explore the universe of knowledge with our next-generation documentation platform. Beautiful, fast, and infinitely scalable.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <Button size="lg" className="h-14 px-10 text-lg bg-white text-black hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300">
                  Start Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300">
                  View Starmap
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 px-6 bg-black/20 backdrop-blur-sm border-t border-white/5">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Zap className="w-6 h-6 text-amber-300" />}
                title="Warp Speed"
                description="Built on Vite for instant server start and lightning fast HMR updates."
              />
              <FeatureCard 
                icon={<Code2 className="w-6 h-6 text-blue-300" />}
                title="Universal Types"
                description="Full TypeScript support out of the box with auto-generated types."
              />
              <FeatureCard 
                icon={<BookOpen className="w-6 h-6 text-pink-300" />}
                title="Stellar MDX"
                description="Write content in Markdown, use React components inside. The best of both worlds."
              />
              <FeatureCard 
                icon={<Cpu className="w-6 h-6 text-purple-300" />}
                title="Edge Ready"
                description="Deploy anywhere in the galaxy. Optimized for edge runtime environments."
              />
              <FeatureCard 
                icon={<Terminal className="w-6 h-6 text-emerald-300" />}
                title="Command Center"
                description="Powerful CLI tools to scaffold, build, and deploy your documentation sites."
              />
              <FeatureCard 
                icon={<ArrowRight className="w-6 h-6 text-cyan-300" />}
                title="Infinite Scale"
                description="Plugin system allows you to extend functionality with ease."
              />
            </div>
          </div>
        </section>
        
        <footer className="py-12 px-6 border-t border-white/10 bg-black/40 backdrop-blur-md">
          <div className="container mx-auto text-center text-slate-400 text-sm">
            <p>© 2024 Floovi Inc. | Developed by ASHISH SHARMA</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-transform duration-500 shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white tracking-wide">{title}</h3>
        <p className="text-slate-300 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

// Falling Flowers Component
function FallingFlowers() {
  const [flowers, setFlowers] = useState<Array<{ id: number; left: number; duration: number; delay: number; scale: number }>>([]);

  useEffect(() => {
    // Generate random flowers
    const flowerCount = 20;
    const newFlowers = Array.from({ length: flowerCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position %
      duration: 10 + Math.random() * 20, // Random duration between 10-30s
      delay: Math.random() * 20, // Random delay
      scale: 0.5 + Math.random() * 0.5, // Random size
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          initial={{ y: -100, opacity: 0, rotate: 0 }}
          animate={{ 
            y: '120vh', 
            opacity: [0, 1, 1, 0],
            rotate: 360 
          }}
          transition={{
            duration: flower.duration,
            repeat: Infinity,
            delay: flower.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: `${flower.left}%`,
            width: '30px',
            height: '30px',
          }}
        >
          <img 
            src={flowerImg} 
            alt="" 
            className="w-full h-full object-contain"
            style={{ 
              transform: `scale(${flower.scale})`,
              // Blend mode helps integrate the black background of the flower image if needed
              // But 'screen' is best for black backgrounds
              mixBlendMode: 'screen',
              filter: 'brightness(1.2) contrast(1.1)' 
            }} 
          />
        </motion.div>
      ))}
    </div>
  );
}
