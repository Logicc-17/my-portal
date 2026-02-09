"use client"
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Prisma"] },
  { category: "Automation", items: ["Schedulers", "Web Scraping", "CI/CD Pipelines", "Scripting"] },
  { category: "Security", items: ["Network Security", "Vulnerability Assessment", "Secure Architecture", "Cyber Defense"] },
  { category: "Infrastructure", items: ["Cloud Deployment", "Docker", "Linux Systems", "Monitoring"] },
];

const CapabilityBar = ({ category, items, index }: { category: string; items: string[]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="group border-b border-border py-6 md:py-8">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
        <div className="md:w-48 shrink-0">
          <motion.span
            className="text-xs tracking-[0.2em] uppercase text-primary font-body"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            {category}
          </motion.span>
        </div>
        <div className="flex flex-wrap gap-3">
          {items.map((item, i) => (
            <motion.span
              key={item}
              className="text-sm md:text-base text-foreground/70 font-body font-light group-hover:text-foreground transition-colors duration-500"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + i * 0.05 }}
            >
              {item}
              {i < items.length - 1 && <span className="text-muted-foreground/30 ml-3">·</span>}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CapabilitiesSection = () => {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-4 block">
            Capabilities
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-200 leading-tight mb-16 max-w-4xl text-foreground">
            Technical depth,
            <span className="text-muted-foreground"> applied with precision.</span>
          </h2>
        </ScrollReveal>

        <div className="border-t border-border">
          {capabilities.map((cap, i) => (
            <CapabilityBar key={cap.category} category={cap.category} items={cap.items} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
