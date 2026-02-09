import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24 min-h-[80vh] flex items-center">
      {/* Decorative kanji */}
      <div className="absolute right-10 bottom-20 kanji-decoration text-[14rem] md:text-[20rem] leading-none font-light opacity-[0.03]">
        未来
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-4 block">
            Contact
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-200 leading-tight mb-8 text-foreground">
            Let's build something
            <br />
            <span className="text-muted-foreground">that lasts.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mt-16">
            <a
              href="mailto:heisthemba@gmail.com"
              className="group text-lg md:text-xl font-body font-light text-foreground/70 hover:text-primary transition-colors duration-500"
            >
              heisthemba@gmail.com
              <span className="block h-px bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 mt-1" />
            </a>

            <div className="flex gap-8">
              {["GitHub", "LinkedIn"].map((link) => (
                <a
                  key={link}
                  href="https://github.com/Logicc-17"
                  className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-500"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* End credits feel */}
        <ScrollReveal delay={0.5}>
          <div className="mt-32 md:mt-48">
            <div className="h-px bg-border mb-8" />
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 font-body">
                B.Sc. Computer Science & Cybersecurity
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 font-body">
                © {new Date().getFullYear()} — All Rights Reserved
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
