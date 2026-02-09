import ScrollReveal from "./ScrollReveal";

const principles = [
  {
    kanji: "信",
    title: "Reliability Over Hype",
    description: "The best systems are invisible. They don't demand attention — they earn trust through consistency.",
  },
  {
    kanji: "系",
    title: "Systems Over Trends",
    description: "UI trends fade. Well-architected systems compound. I invest in foundations that outlast frameworks.",
  },
  {
    kanji: "永",
    title: "Longevity & Maintainability",
    description: "Code should be written for the engineer who inherits it in three years. Clarity is the ultimate feature.",
  },
];

const PhilosophySection = () => {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-4 block">
            Philosophy
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-200 leading-tight mb-20 max-w-3xl text-foreground">
            Principles that
            <span className="text-muted-foreground"> guide the craft.</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {principles.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.15 * i}>
              <div className="group border-t border-border py-12 md:py-16 flex flex-col md:flex-row gap-6 md:gap-16 items-start">
                <div className="text-5xl md:text-7xl text-primary/10 font-light select-none shrink-0 group-hover:text-primary/25 transition-colors duration-700" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  {item.kanji}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-300 mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground font-body font-light leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
