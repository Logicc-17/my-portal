'use client'
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Infrastructure Automation Platform",
    subtitle: "Automated deployment pipeline",
    description: "End-to-end CI/CD system that reduced manual deployment time by 90%. Built with Python schedulers, Docker, and cloud-native tooling.",
    tech: ["Python", "Docker", "PostgreSQL", "CI/CD"],
    image: project1,
    year: "2025",
  },
  {
    title: "Real-Time Data Pipeline",
    subtitle: "Distributed data processing",
    description: "Scalable data ingestion system processing thousands of events per second. Automated scraping, transformation, and storage pipeline.",
    tech: ["Node.js", "PostgreSQL", "Redis", "Python"],
    image: project2,
    year: "2024",
  },
  {
    title: "Secure Network Architecture",
    subtitle: "Enterprise security infrastructure",
    description: "Designed and implemented zero-trust network architecture with automated threat detection and response protocols.",
    tech: ["Network Security", "Linux", "Monitoring", "Automation"],
    image: project3,
    year: "2024",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
<div className="relative overflow-hidden rounded-sm mb-6">
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  >
    <Image
      src={project.image}
      alt={project.title}
      className="w-full aspect-[3/4] md:aspect-[4/5] object-cover"
      width={600}
      height={800}
    />
  </motion.div>
  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-700" />
  <div className="absolute bottom-4 left-4 right-4">
    <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/60 font-body">
      {project.year}
    </span>
  </div>
</div>
      <div className="space-y-2">
        <h3 className="text-lg md:text-xl font-display font-300 text-foreground group-hover:text-primary transition-colors duration-500">
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground font-body tracking-wide">
          {project.subtitle}
        </p>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="pt-4 space-y-4">
          <p className="text-sm text-muted-foreground font-body font-light leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-[10px] tracking-[0.15em] uppercase text-primary/70 border border-primary/20 px-3 py-1 rounded-full font-body">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const WorkSection = () => {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24">
      {/* Decorative kanji */}
      <div className="absolute right-0 top-20 kanji-decoration text-[14rem] md:text-[20rem] leading-none font-light opacity-[0.03]">
        技術
      </div>

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-4 block">
            Selected Work
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-200 leading-tight mb-20 max-w-3xl text-foreground">
            Case studies in
            <span className="text-muted-foreground"> systems thinking.</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
