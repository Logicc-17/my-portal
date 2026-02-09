import ScrollReveal from "./ScrollReveal";

const approaches = [
  {
    number: "01",
    title: "Automation Mindset",
    description: "Every repetitive process is an engineering failure waiting to be solved. I build systems that eliminate manual labor at scale.",
  },
  {
    number: "02",
    title: "Infrastructure First",
    description: "Software should be built for the constraints of real infrastructure — not idealized environments. Resilience is designed in, not patched on.",
  },
  {
    number: "03",
    title: "Systems Over Features",
    description: "I think in architectures, not components. Every line of code serves the larger system's integrity and longevity.",
  },
];

const ApproachSection = () => {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24">
      {/* Decorative kanji */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 kanji-decoration text-[16rem] md:text-[24rem] leading-none font-light opacity-[0.03] select-none">
        継続
      </div>

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-4 block">
            Approach
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-200 leading-tight mb-20 max-w-3xl text-foreground">
            Building software that
            <span className="text-muted-foreground"> removes itself from the equation.</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {approaches.map((item, i) => (
            <ScrollReveal key={item.number} delay={0.2 + i * 0.15}>
              <div className="group">
                <span className="text-xs text-primary/60 font-body tracking-wider mb-4 block">
                  {item.number}
                </span>
                <div className="h-px bg-border mb-6 group-hover:bg-primary/40 transition-colors duration-700" />
                <h3 className="text-lg md:text-xl font-display font-300 mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
