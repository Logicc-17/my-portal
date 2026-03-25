'use client'
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import themabAvatar from "@/assets/themba.jpg";
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end">
      {/* Background */}
      <div className="absolute inset-0">
      <motion.img
        src={heroBg.src}  
        alt=""
        className="w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
      />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      {/* Decorative kanji */}
      <div className="absolute top-20 right-10 md:right-20 kanji-decoration text-[12rem] md:text-[20rem] leading-none font-light opacity-[0.04]">
        構築
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 pb-16 md:pb-24">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mb-6"
          >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body">
              Themba Longwe— Software Engineer & Systems Builder
            </span>
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-8xl font-display font-200 leading-[0.95] tracking-tight text-foreground"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              I build systems,
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-8xl font-display font-200 leading-[0.95] tracking-tight text-foreground/60"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              not just code.
            </motion.h1>
          </div>

          <div className="flex items-end gap-6">
            <motion.div
              className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/10 flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            >
            <Image 
              src={themabAvatar} 
              alt="Themba" 
              width={112} 
              height={112}
              className="w-full h-full object-cover" 
            />            
            </motion.div>
            <motion.p
              className="text-sm md:text-base text-muted-foreground max-w-md font-body font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Engineering reliable infrastructure, automating complexity,
              and designing software that endures.
            </motion.p>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-6 md:right-16 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground rotate-90 origin-center mb-8">
            Scroll
          </span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
