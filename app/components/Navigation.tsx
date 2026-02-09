'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-6 flex justify-between items-center"
      style={{ opacity }}
      initial={{ opacity: 0 }}
    >
      <div className="bg-background/60 backdrop-blur-xl border border-border/50 rounded-full px-6 py-3 flex items-center gap-8">
        <span className="text-xs font-display font-400 tracking-wider text-foreground">
          Themba
        </span>
        <div className="hidden md:flex gap-6">
          {[
            { label: "Approach", id: "approach" },
            { label: "Work", id: "work" },
            { label: "Philosophy", id: "philosophy" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500 font-body"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
