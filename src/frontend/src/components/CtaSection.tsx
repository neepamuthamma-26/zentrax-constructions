import { motion } from "motion/react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative py-28 lg:py-40 overflow-hidden"
      data-ocid="cta.section"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.09 0.015 260) 0%, oklch(0.13 0.01 260) 50%, oklch(0.09 0.015 260) 100%)",
      }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, oklch(var(--accent)) 0px, oklch(var(--accent)) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, oklch(var(--accent)) 0px, oklch(var(--accent)) 1px, transparent 1px, transparent 80px)",
        }}
        aria-hidden="true"
      />

      {/* Radial glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(var(--accent) / 0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative large Z */}
      <div
        className="absolute right-[-2rem] top-1/2 -translate-y-1/2 font-display font-bold select-none pointer-events-none"
        style={{
          fontSize: "clamp(12rem, 25vw, 22rem)",
          color: "oklch(var(--accent) / 0.04)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        Z
      </div>

      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(var(--accent) / 0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Decorative gold horizontal line above heading */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-10"
          style={{
            width: "64px",
            height: "2px",
            background: "oklch(var(--accent))",
            transformOrigin: "center",
          }}
          aria-hidden="true"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs uppercase tracking-[0.3em] text-accent-gold font-body font-semibold mb-5"
        >
          Ready to Begin
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-bold text-foreground leading-tight tracking-tight mb-6"
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)" }}
        >
          Let's Create Something{" "}
          <span className="text-accent-gold">Extraordinary</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Your vision deserves the finest execution. Partner with Zentrax
          Constructions and transform your space into a masterpiece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            data-ocid="cta.start_project_button"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-md font-body font-semibold text-sm transition-smooth focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none hover:opacity-90 hover:shadow-gold-glow"
            style={{
              background: "oklch(var(--accent))",
              color: "oklch(0.10 0.01 260)",
            }}
          >
            Start Your Project
          </button>
        </motion.div>
      </div>

      {/* Bottom gold accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(var(--accent) / 0.5), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
